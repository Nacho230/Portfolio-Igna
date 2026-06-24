import { useState, useEffect, useRef } from "react";
import { fileTree, files, defaultOpenFile } from "./portfolioData.js";

// ─── Resaltado de sintaxis ────────────────────────────────────────────────────
// CRÍTICO: escapeHtml se aplica PRIMERO, luego se insertan los spans.
// Los spans usan comillas simples para no confundirse con el escape de HTML.
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function highlight(code, language) {
  const esc = escapeHtml(code);

  if (language === "text") return esc;

  if (language === "json") {
    return esc
      .replace(/(&quot;[\w\sÁÉÍÓÚáéíóúñÑ\-\/+().]+&quot;)\s*:/g, "<span class='syn-key'>$1</span>:")
      .replace(/:\s*(&quot;[^&]*&quot;)/g, ": <span class='syn-str'>$1</span>")
      .replace(/:\s*(true|false|null)/g, ": <span class='syn-kw'>$1</span>")
      .replace(/:\s*(\d+\.?\d*)/g, ": <span class='syn-num'>$1</span>");
  }

  if (language === "python") {
    // Docstrings primero (multiline), luego comentarios, luego keywords, luego strings
    return esc
      .replace(/("""[\s\S]*?""")/g, "<span class='syn-comment'>$1</span>")
      .replace(/(#[^\n]*)/g, "<span class='syn-comment'>$1</span>")
      .replace(/\b(def|class|return|import|from|self|if|else|elif|for|in|True|False|None|with|as|raise|pass|and|or|not)\b/g,
        "<span class='syn-kw'>$1</span>")
      .replace(/(&quot;[^&\n]*&quot;|'[^'\n]*')/g, "<span class='syn-str'>$1</span>")
      .replace(/\b(\d+\.?\d*)\b/g, "<span class='syn-num'>$1</span>");
  }

  if (language === "csharp") {
    return esc
      .replace(/(\/\/[^\n]*)/g, "<span class='syn-comment'>$1</span>")
      .replace(/\b(public|private|protected|class|interface|override|return|new|void|int|double|bool|string|List|var|using|namespace|static|readonly|try|catch|throw|base|this|null|true|false|decimal|switch|case|break|default)\b/g,
        "<span class='syn-kw'>$1</span>")
      .replace(/(&quot;[^&\n]*&quot;)/g, "<span class='syn-str'>$1</span>")
      .replace(/\b(\d+\.?\d*)\b/g, "<span class='syn-num'>$1</span>");
  }

  // Java (default)
  return esc
    .replace(/(\/\*[\s\S]*?\*\/)/g, "<span class='syn-comment'>$1</span>")
    .replace(/(\/\/[^\n]*)/g, "<span class='syn-comment'>$1</span>")
    .replace(/\b(public|private|protected|class|interface|extends|implements|return|new|void|int|double|boolean|String|List|final|static|import|package|this|null|true|false|throws|try|catch|throw)\b/g,
      "<span class='syn-kw'>$1</span>")
    .replace(/(@\w+)/g, "<span class='syn-annotation'>$1</span>")
    .replace(/(&quot;[^&\n]*&quot;)/g, "<span class='syn-str'>$1</span>")
    .replace(/\b(\d+[\._]?\d*)\b/g, "<span class='syn-num'>$1</span>");
}

// ─── Ícono de archivo según extensión ────────────────────────────────────────
function FileIcon({ name }) {
  if (name.endsWith(".java")) return <span className="file-icon java">J</span>;
  if (name.endsWith(".py"))   return <span className="file-icon python">P</span>;
  if (name.endsWith(".json")) return <span className="file-icon json">{ }</span>;
  if (name.endsWith(".txt"))  return <span className="file-icon txt">T</span>;
  if (name.endsWith(".cs"))   return <span className="file-icon csharp">C#</span>;
  return <span className="file-icon">F</span>;
}

// ─── Nodo del árbol de proyectos ─────────────────────────────────────────────
function TreeNode({ node, depth = 0, onFileClick, activeFileId }) {
  const [open, setOpen] = useState(true);

  if (node.type === "file") {
    const isActive = node.fileId === activeFileId;
    return (
      <div
        className={`tree-item tree-file ${isActive ? "active" : ""}`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={() => onFileClick(node.fileId)}
      >
        <FileIcon name={node.name} />
        <span>{node.name}</span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="tree-item tree-folder"
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={() => setOpen(!open)}
      >
        <span className="folder-arrow">{open ? "▾" : "▸"}</span>
        <span className="folder-icon">📁</span>
        <span>{node.name}</span>
      </div>
      {open && node.children?.map((child) => (
        <TreeNode
          key={child.name}
          node={child}
          depth={depth + 1}
          onFileClick={onFileClick}
          activeFileId={activeFileId}
        />
      ))}
    </div>
  );
}

// ─── Consola de Build ─────────────────────────────────────────────────────────
function BuildConsole({ log, logKey }) {
  const bottomRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    // Limpia líneas anteriores y arranca la animación desde cero
    setVisibleLines([]);
    const timers = [];
    log.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, i * 110);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [logKey]); // logKey cambia con cada archivo para forzar reset

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLines]);

  return (
    <div className="console-panel">
      <div className="console-header">
        <span className="console-tab active">Output</span>
        <span className="console-tab">Terminal</span>
      </div>
      <div className="console-body">
        {visibleLines.map((line, i) => {
          const isSuccess = line.includes("BUILD SUCCESSFUL") || line.includes("BUILD SUCCESS") || line.includes("exit code 0") || line.includes("✓");
          const isError   = line.includes("ERROR") || line.includes("FAILED");
          return (
            <div key={i} className={`console-line ${isSuccess ? "success" : ""} ${isError ? "error" : ""}`}>
              {line}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

// ─── Barra de GitHub (solo aparece cuando hay URL) ────────────────────────────
function GitHubBar({ url }) {
  if (!url) return null;
  return (
    <div className="github-bar">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <span className="github-icon">⌥</span>
        Ver en GitHub → {url.replace("https://github.com/", "")}
      </a>
    </div>
  );
}

// ─── Editor de código con número de línea ─────────────────────────────────────
function CodeEditor({ fileData }) {
  const lines = fileData.code.split("\n");
  const highlighted = highlight(fileData.code, fileData.language);
  const highlightedLines = highlighted.split("\n");

  return (
    <div className="editor-body">
      <div className="line-numbers">
        {lines.map((_, i) => (
          <div key={i} className="line-number">{i + 1}</div>
        ))}
      </div>
      <pre className="code-content">
        {highlightedLines.map((line, i) => (
          <div
            key={i}
            className="code-line"
            dangerouslySetInnerHTML={{ __html: line || " " }}
          />
        ))}
      </pre>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function PortfolioIDE() {
  const [openTabs, setOpenTabs]   = useState([defaultOpenFile]);
  const [activeTab, setActiveTab] = useState(defaultOpenFile);
  const [logKey, setLogKey]       = useState(0);
  const wrapperRef = useRef(null);   // mide el ancho real del wrapper

  const handleFileClick = (fileId) => {
    if (!openTabs.includes(fileId)) {
      setOpenTabs((prev) => [...prev, fileId]);
    }
    setActiveTab(fileId);
    setLogKey((k) => k + 1);
  };

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    setLogKey((k) => k + 1);
  };

  const closeTab = (fileId, e) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((t) => t !== fileId);
    setOpenTabs(newTabs);
    if (activeTab === fileId && newTabs.length > 0) {
      const lastTab = newTabs[newTabs.length - 1];
      setActiveTab(lastTab);
      setLogKey((k) => k + 1);
    }
  };

  const activeFile = files[activeTab];

  return (
    <div className="ide-wrapper">
      {/* ── Barra de título ── */}
      <div className="title-bar">
        <div className="title-buttons">
          <span className="btn-close" />
          <span className="btn-min" />
          <span className="btn-max" />
        </div>
        <span className="title-text">IgnacioQuiroga — Portfolio IDE</span>
        <span />
      </div>

      {/* ── Menú superior ── */}
      <div className="menu-bar">
        {["Archivo","Editar","Ver","Navegar","Fuente","Ejecutar","Depurar","Herramientas","Ayuda"].map((m) => (
          <span key={m} className="menu-item">{m}</span>
        ))}
      </div>

      {/* ── Cuerpo principal ── */}
      <div className="ide-body">
        {/* Panel izquierdo */}
        <div className="sidebar">
          <div className="sidebar-header">Proyectos</div>
          <div className="tree-root">
            <TreeNode
              node={fileTree}
              onFileClick={handleFileClick}
              activeFileId={activeTab}
            />
          </div>
        </div>

        {/* Editor + consola */}
        <div className="editor-area">
          {/* Pestañas — ancho fijo por JS, scroll con rueda */}
          <div
            ref={wrapperRef}
            className="tabs-bar-wrapper"
            onWheel={(e) => {
              const bar = wrapperRef.current?.querySelector('.tabs-bar');
              if (!bar) return;
              const wrapperW = wrapperRef.current.getBoundingClientRect().width;
              const totalW   = openTabs.length * 148;
              const maxLeft  = 0;
              const minLeft  = Math.min(0, wrapperW - totalW);
              const current  = parseInt(bar.style.left || '0');
              bar.style.left = Math.min(maxLeft, Math.max(minLeft, current - e.deltaY * 0.5)) + 'px';
            }}
          >
            <div
              className="tabs-bar"
              style={{ width: `${openTabs.length * 148}px` }}
            >
              {openTabs.map((tabId) => (
                <div
                  key={tabId}
                  className={`tab ${activeTab === tabId ? "active" : ""}`}
                  onClick={() => switchTab(tabId)}
                >
                  <div className="tab-inner">
                    <FileIcon name={files[tabId].tabTitle} />
                    <span className="tab-label">{files[tabId].tabTitle}</span>
                    <button className="tab-close" onClick={(e) => closeTab(tabId, e)}>×</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Barra GitHub */}
          {activeFile?.githubUrl && (
            <GitHubBar url={activeFile.githubUrl} />
          )}

          {/* Editor */}
          {activeFile ? (
            <CodeEditor key={activeTab} fileData={activeFile} />
          ) : (
            <div className="editor-empty">Seleccioná un archivo del árbol de proyectos</div>
          )}

          {/* Consola */}
          {activeFile && (
            <BuildConsole
              log={activeFile.consoleLog}
              logKey={logKey}
            />
          )}
        </div>
      </div>

      {/* ── Barra de estado ── */}
      <div className="status-bar">
        <span>UTF-8</span>
        <span>{activeFile?.language?.toUpperCase() ?? "TEXT"}</span>
        <span>Buenos Aires, Argentina</span>
        <span className="status-right">ignacioquiroga237@gmail.com</span>
      </div>
    </div>
  );
}
