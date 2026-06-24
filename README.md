# 💻 Portfolio IDE

Un portfolio web interactivo construido con React que simula la experiencia visual y funcional de un Entorno de Desarrollo Integrado (IDE) oscuro. Diseñado para presentar mis proyectos, habilidades y perfil profesional de una manera inmersiva y original.

## ✨ Características

- **Interfaz Auténtica:** Diseño inspirado en editores clásicos (como NetBeans o IntelliJ) con paleta de colores de alto contraste.
- **Pestañas Dinámicas:** Navegación real mediante pestañas manejables (abrir, cerrar, cambiar foco) con persistencia de estado.
- **Árbol de Proyectos Recursivo:** Explorador de archivos en la barra lateral que permite navegar por diferentes secciones del portfolio organizadas por carpetas.
- **Resaltado de Sintaxis Custom:** Función propia y liviana para colorear el código según el lenguaje simulado (Java, Python, C#, JSON, etc.).
- **Simulación de Consola:** Terminal inferior que muestra los "logs de construcción" con animaciones temporizadas al abrir cada archivo.
- **Responsive Design:** Adaptación fluida para mantener la legibilidad tanto en monitores grandes como en dispositivos móviles.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React (Vite)
- **Estilos:** CSS3 puro (Flexbox, Variables CSS para fácil tematización)
- **Lógica:** JavaScript (Hooks: `useState`, `useEffect`, `useRef`)

## 🚀 Despliegue (Demo)

El proyecto se encuentra desplegado y funcionando en: **[https://portfolio-ide-one.vercel.app/]**

## 📂 Estructura Principal del Código

- `PortfolioIDE.jsx`: Componente principal que orquesta el layout (Sidebar, Editor, Consola) y maneja el estado de las pestañas activas.
- `portfolioData.js`: Estructura de datos que actúa como "Base de Datos" local, conteniendo el árbol de directorios y el contenido en código de cada archivo virtual.
- `PortfolioIDE.css`: Sistema de diseño basado en variables para mantener un control estricto sobre la paleta de colores oscuros y la geometría flexible (Flexbox).

## 💡 Motivación

Este proyecto nació con la idea de salir del clásico formato de currículum o landing page. Como desarrollador apasionado por el backend y las estructuras de software, quería que quien visite mi portfolio sintiera que está revisando mi código fuente directamente desde mi entorno de trabajo.
