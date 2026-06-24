// portfolioData.js — contenido centralizado del portfolio

export const fileTree = {
  name: "IgnacioQuiroga",
  type: "root",
  children: [
    {
      name: "SobreMi",
      type: "folder",
      children: [
        { name: "Perfil.java", type: "file", fileId: "perfil" },
      ],
    },
    {
      name: "Experiencia",
      type: "folder",
      children: [
        { name: "Habitium.java",  type: "file", fileId: "habitium"  },
        { name: "PagoFacil.java", type: "file", fileId: "pagofacil" },
      ],
    },
    {
      name: "Proyectos",
      type: "folder",
      children: [
        { name: "ServiciosSalud.java",      type: "file", fileId: "salud"         },
        { name: "AccessChecking.py",        type: "file", fileId: "access"        },
        { name: "GestionInmobiliaria.py",   type: "file", fileId: "inmobiliaria"  },
        { name: "Telefonia.cs",             type: "file", fileId: "telefonia"     },
      ],
    },
    {
      name: "StackTecnico",
      type: "folder",
      children: [
        { name: "Skills.json", type: "file", fileId: "skills" },
      ],
    },
    {
      name: "Contacto",
      type: "folder",
      children: [
        { name: "Contacto.txt", type: "file", fileId: "contacto" },
      ],
    },
  ],
};

export const files = {
  perfil: {
    tabTitle: "Perfil.java",
    language: "java",
    githubUrl: null,
    code: `/**
 * Ignacio Agustín Quiroga Atum
 * Estudiante de Ingeniería en Informática — UNAJ
 * Buenos Aires, Argentina
 *
 * Perfil híbrido: operaciones de e-commerce + desarrollo backend.
 * Uso IA (Claude, Copilot) en el flujo diario, no solo como línea de CV.
 */
public class Perfil {

    private String nombre     = "Ignacio Agustín Quiroga Atum";
    private String rol        = "E-commerce Ops Specialist | Future Java Backend Dev";
    private String universidad = "UNAJ — Ing. en Informática (egreso est. 2030-31)";
    private String ingles     = "B2-C1 (EF-TEST 68/100)";

    public String objetivo() {
        return "Busco mi primer rol como desarrollador Java/Backend "
             + "o en áreas afines a IT, datos y e-commerce.";
    }

    public String[] diferenciadores() {
        return new String[] {
            "Perfil híbrido: experiencia operativa real + desarrollo técnico",
            "Scrum Master real — lideré equipo de 7 personas con entregas concretas",
            "Track record con números: SLA >95%, reducción de incidencias ~30%",
            "Trabajo remoto autónomo comprobado (+1 año, empresa española)"
        };
    }
}`,
    consoleLog: [
      "ant -f build.xml run",
      "init:",
      "Deps-jar:",
      "compile:",
      "    [javac] Compiling 1 source file",
      "run:",
      "     [java] Nombre: Ignacio Agustín Quiroga Atum",
      "     [java] Rol objetivo: Java Developer Jr. / Fullstack Trainee",
      "     [java] Inglés: B2-C1",
      "BUILD SUCCESSFUL (total time: 0 seconds)",
    ],
  },

  habitium: {
    tabTitle: "Habitium.java",
    language: "java",
    githubUrl: null,
    code: `/**
 * E-commerce Operations Specialist
 * Reformam Network 2010 S.L. (Habitium) — Madrid, España (remoto)
 * Jun 2025 — Actualidad
 */
public class Habitium implements Empleo {

    private final String empresa = "Habitium";
    private final boolean remoto = true;
    private final String pais    = "España";

    @Override
    public Metricas gestionarOperaciones() {
        Metricas m = new Metricas();
        m.pedidosPorDia = "50-80";
        m.slaEntrega    = 0.95; // >95%
        return m;
    }

    public String optimizarProcesos() {
        // Make (Integromat) + Claude AI + GitHub Copilot
        return "Liberé ~2hs/día de trabajo manual con automatizaciones";
    }

    public String reducirIncidencias() {
        return "Protocolo de troubleshooting propio: -30% en tiempo de resolución";
    }

    public String[] responsabilidades() {
        return new String[] {
            "Gestión end-to-end de 50-80 pedidos/día en entorno 100% digital",
            "Coordinación con proveedores y agencias internacionales",
            "Gestión de catálogo, KPIs, devoluciones y reportes a dirección"
        };
    }
}`,
    consoleLog: [
      "ant -f build.xml run",
      "compile:",
      "    [javac] Compiling 1 source file",
      "run:",
      "     [java] Empresa: Habitium (Madrid, remoto)",
      "     [java] Pedidos gestionados/día: 50-80",
      "     [java] SLA de entrega: >95%",
      "     [java] Reducción de incidencias: -30%",
      "     [java] Automatización: ~2hs/día liberadas",
      "BUILD SUCCESSFUL (total time: 0 seconds)",
    ],
  },

  pagofacil: {
    tabTitle: "PagoFacil.java",
    language: "java",
    githubUrl: null,
    code: `/**
 * Cajero / Atención al Cliente
 * Pago Fácil / Western Union
 * Nov 2024 — Ene 2025
 */
public class PagoFacil implements Empleo {

    private final int    transaccionesPorDia = 50;
    private final double montoPromedioARS    = 300_000;
    private final int    erroresDeCaja       = 0;

    @Override
    public String atenderCliente() {
        return "Resolución de reclamos on-the-spot";
    }

    public boolean validarCierreDeCaja() {
        // 0 errores de caja durante todo el período
        return erroresDeCaja == 0;
    }
}`,
    consoleLog: [
      "ant -f build.xml run",
      "compile:",
      "run:",
      "     [java] Transacciones/día: +50",
      "     [java] Monto promedio: ARS 300.000",
      "     [java] Errores de caja: 0",
      "BUILD SUCCESSFUL (total time: 0 seconds)",
    ],
  },

  salud: {
    tabTitle: "ServiciosSalud.java",
    language: "java",
    githubUrl: "https://github.com/nachxg/webAppServiciosSalud",
    code: `/**
 * Plataforma de Servicios de Salud
 * github.com/nachxg/webAppServiciosSalud
 *
 * Stack: Java 8+, Spring Boot, Spring Data JPA/Hibernate,
 *        MySQL, React, REST APIs, Git
 *
 * Rol: Desarrollador Backend + Scrum Master (equipo de 7 personas)
 * Resultado: MVP entregado en 3 sprints, 0 defectos críticos
 */
@RestController
@RequestMapping("/api/turnos")
public class TurnosController {

    @Autowired
    private TurnoService turnoService;

    // Lógica de asignación de turnos con calendario
    @PostMapping
    public ResponseEntity<Turno> asignarTurno(@RequestBody TurnoRequest req) {
        Turno turno = turnoService.asignar(req);
        return ResponseEntity.ok(turno);
    }

    @GetMapping
    public List<Turno> listarTurnos() {
        return turnoService.findAll();
    }
}

/*
 * Gestión del equipo como Scrum Master:
 * - Dailys, sprint planning, retrospectivas
 * - Git: branching strategy + Pull Requests
 * - 7 personas — MVP funcional sin defectos críticos
 */`,
    consoleLog: [
      "mvn spring-boot:run",
      "[INFO] Building webAppServiciosSalud",
      "[INFO] Spring Boot :: (v3.x)",
      "[INFO] Tomcat started on port 8080",
      "[INFO] Conectado a MySQL",
      "[INFO] Sprints completados: 3/3",
      "[INFO] Defectos críticos: 0",
      "[INFO] Equipo: 7 personas | Rol: Backend Dev + Scrum Master",
      "BUILD SUCCESS",
      "Total time: 4.218 s",
    ],
  },

  access: {
    tabTitle: "AccessChecking.py",
    language: "python",
    githubUrl: "https://github.com/Nacho230/access-checking-system",
    code: `"""
Access Checking System — Control de Flotas Logísticas
github.com/Nacho230/access-checking-system
Deploy: PythonAnywhere

Stack: Python 3, Flask, Flask-Login, SQLAlchemy,
       SQLite, Pandas, OpenPyXL, Bootstrap 5, Jinja2

Sistema integral para gestionar y auditar el control de accesos
de flotas logísticas (choferes y camiones) en terminales industriales.
Reemplaza el seguimiento manual por una plataforma automatizada.
"""

# ── Roles del sistema ──────────────────────────────────────────
ROLES = {
    "administrador": ["dashboard", "auditoria", "abm_usuarios", "abm_flotas"],
    "operador":      ["abm_empresas", "abm_choferes", "abm_camiones"],
    "vigilador":     ["nuevo_ingreso", "inspecciones"],
}

# ── Motor de Precheck inteligente ─────────────────────────────
def precheck_ingreso(chofer, camion, fecha_solicitud):
    """
    Valida automáticamente vencimientos al momento del ingreso.
    Retorna True si la unidad está habilitada para ingresar.
    """
    licencia_ok = chofer.vencimiento_licencia >= fecha_solicitud
    seguro_ok   = camion.vencimiento_seguro   >= fecha_solicitud

    if not licencia_ok:
        raise VencimientoException(f"Licencia vencida: {chofer.nombre}")
    if not seguro_ok:
        raise VencimientoException(f"Seguro vencido: {camion.patente}")

    return True

# ── Importación masiva (Data Wrangling) ───────────────────────
def importar_desde_excel(filepath):
    """
    Ingesta de bases de datos desde Excel/CSV con limpieza en caliente:
    - DNIs leídos como float (12345678.0) → string limpio
    - Fechas vacías o con formato incorrecto → normalizadas
    - Duplicados prevenidos con validación previa
    """
    import pandas as pd
    df = pd.read_excel(filepath, dtype=str)
    df["dni"] = df["dni"].apply(lambda x: str(int(float(x))).zfill(8))
    df["fecha_vto"] = pd.to_datetime(df["fecha_vto"], errors="coerce")
    df.dropna(subset=["dni", "patente"], inplace=True)
    return df`,
    consoleLog: [
      "flask run --host=0.0.0.0",
      " * Environment: production",
      " * Running on https://nacho230.pythonanywhere.com",
      ">>> Roles cargados: administrador, operador, vigilador",
      ">>> Motor de Precheck: activo",
      ">>> Importación masiva (Pandas): lista",
      ">>> Exportación Excel (OpenPyXL): lista",
      ">>> Paginación SQLAlchemy: activa",
      "Proceso finalizado con éxito (exit code 0)",
    ],
  },

  inmobiliaria: {
    tabTitle: "GestionInmobiliaria.py",
    language: "python",
    githubUrl: "https://github.com/Nacho230/Proyectos-academicos",
    code: `"""
Sistema de Gestión Inmobiliaria — Javac
github.com/Nacho230/Proyectos-academicos

Stack: Python, CRUD completo
Gestión de propiedades, clientes y contratos
con modelado de datos e informes básicos.
"""

class Propiedad:
    def __init__(self, direccion, tipo, precio, disponible=True):
        self.direccion  = direccion
        self.tipo       = tipo
        self.precio     = precio
        self.disponible = disponible


class Cliente:
    def __init__(self, nombre, contacto):
        self.nombre   = nombre
        self.contacto = contacto


class Contrato:
    def __init__(self, propiedad: Propiedad, cliente: Cliente, monto):
        self.propiedad = propiedad
        self.cliente   = cliente
        self.monto     = monto
        propiedad.disponible = False

    def generar_informe(self):
        return (
            f"Contrato: {self.cliente.nombre} -> {self.propiedad.direccion}\n"
            f"Monto: ${self.monto}"
        )


class GestionInmobiliaria:
    """CRUD completo sobre propiedades, clientes y contratos."""

    def __init__(self):
        self.propiedades = []
        self.clientes    = []
        self.contratos   = []

    def crear_propiedad(self, propiedad: Propiedad):
        self.propiedades.append(propiedad)

    def listar_disponibles(self):
        return [p for p in self.propiedades if p.disponible]`,
    consoleLog: [
      "python gestion_inmobiliaria.py",
      ">>> Inicializando sistema...",
      ">>> Modelado de datos: Propiedad, Cliente, Contrato",
      ">>> CRUD: create, read, update, delete -> OK",
      ">>> Informes básicos: generados correctamente",
      "Proceso finalizado con éxito (exit code 0)",
    ],
  },

  telefonia: {
    tabTitle: "Telefonia.cs",
    language: "csharp",
    githubUrl: "https://github.com/Nacho230/Proyectos-academicos",
    code: `/**
 * Sistema de Gestión - Compañía de Telefonía Móvil
 * github.com/Nacho230/Proyectos-academicos
 *
 * Lenguaje: C# (.NET) — Paradigma: POO
 * Aplicación de consola para administrar operaciones
 * de una empresa de telefonía móvil.
 */

// ── Excepciones personalizadas ────────────────────────────────
public class SaldoInsuficienteException : Exception {
    public SaldoInsuficienteException(string msg) : base(msg) { }
}
public class ClienteSinLineasException : Exception {
    public ClienteSinLineasException(string msg) : base(msg) { }
}

// ── Entidades ─────────────────────────────────────────────────
public class Linea {
    public string Numero    { get; private set; }
    public decimal Saldo    { get; private set; }
    public bool Activa      { get; private set; } = true;

    public Linea(string numero, decimal saldoInicial) {
        Numero = numero;
        Saldo  = saldoInicial;
    }

    public void RealizarLlamada(decimal costo) {
        if (Saldo < costo)
            throw new SaldoInsuficienteException(
                $"Saldo insuficiente en {Numero}");
        Saldo -= costo;
    }

    public void TransferirSaldo(Linea destino, decimal monto) {
        if (Saldo < monto)
            throw new SaldoInsuficienteException(
                $"No hay saldo suficiente para transferir");
        Saldo       -= monto;
        destino.Saldo += monto;
    }

    public void Suspender()   => Activa = false;
    public void Reactivar()   => Activa = true;
}

public class Cliente {
    public string Nombre         { get; set; }
    public List<Linea> Lineas    { get; } = new List<Linea>();

    public Cliente(string nombre) => Nombre = nombre;

    public void AgregarLinea(Linea l) => Lineas.Add(l);
}`,
    consoleLog: [
      "dotnet run --project Telefonia.csproj",
      "Build succeeded.",
      "  Telefonia -> bin/Debug/net8.0/Telefonia.dll",
      ">>> Empresa inicializada",
      ">>> Clientes: cargados | Líneas: cargadas",
      ">>> Excepciones personalizadas: SaldoInsuficiente, ClienteSinLineas",
      ">>> Colecciones genéricas List<T>: activas",
      "BUILD SUCCESSFUL (total time: 1 second)",
    ],
  },

  skills: {
    tabTitle: "Skills.json",
    language: "json",
    githubUrl: null,
    code: `{
  "backend": [
    "Java 8+",
    "Spring Boot",
    "Spring Data JPA / Hibernate",
    "Maven",
    "REST APIs"
  ],
  "frontend": [
    "React",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "Bootstrap 5",
    "Jinja2"
  ],
  "basesDeDatos": [
    "MySQL",
    "SQLite",
    "SQL (modelado relacional, JOINs)"
  ],
  "controlDeVersiones": [
    "Git",
    "GitHub (branches, Pull Requests, flujo colaborativo)"
  ],
  "automatizacionEIA": [
    "Make (Integromat)",
    "Claude AI",
    "GitHub Copilot"
  ],
  "metodologias": [
    "Agile / Scrum (Scrum Master por práctica)",
    "Kanban",
    "Trello"
  ],
  "otros": {
    "python": "intermedio",
    "csharp": "básico",
    "flask": "intermedio",
    "pandas": "intermedio",
    "docker": "aprendiendo"
  },
  "idiomas": {
    "ingles": "B2-C1 (EF-TEST 68/100)"
  }
}`,
    consoleLog: [
      "node validate-skills.js",
      "Parsing Skills.json...",
      "✓ backend (5)",
      "✓ frontend (6)",
      "✓ basesDeDatos (3)",
      "✓ automatizacionEIA (3)",
      "✓ metodologias (3)",
      "JSON válido. 0 errores.",
    ],
  },

  contacto: {
    tabTitle: "Contacto.txt",
    language: "text",
    githubUrl: null,
    code: `===========================================
 CONTACTO — Ignacio Agustín Quiroga Atum
===========================================

Email     : ignacioquiroga237@gmail.com
Teléfono  : +54 9 11 2403-0798
LinkedIn  : linkedin.com/in/ignacio-agustin-quiroga
GitHub    : github.com/Nacho230
Ubicación : Buenos Aires, Argentina

-------------------------------------------
Disponible para roles de:
  - Java Developer Jr.
  - Fullstack Trainee
  - Analista Funcional IT
  - Analista de Datos / E-commerce
-------------------------------------------`,
    consoleLog: [
      "cat Contacto.txt",
      "Archivo leído correctamente.",
      "Esperando mensaje entrante...",
    ],
  },
};

export const defaultOpenFile = "perfil";
