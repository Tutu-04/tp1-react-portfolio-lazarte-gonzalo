import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

const habilidades = ["C#", ".NET", "HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];
const proyectos = [
  {
    id: 1,
    titulo: "Fiscalización satelital de quema de caña",
    descripcion: "Mi proyecto final de carrera: un sistema en C# para fiscalizar quemas de caña de azúcar con información satelital.",
    detalle: "Detecta focos de quema y la zona quemada a partir de imágenes satelitales, la cruza con el catastro para saber a qué lote corresponde y arma el expediente de fiscalización. Actualmente en desarrollo.",
    tecnologias: ["C#", ".NET", "Python"],
  },
  {
    id: 2,
    titulo: "Reportes ciudadanos",
    descripcion: "Aplicación web para reportar desperfectos de la vía pública marcándolos en un mapa.",
    detalle: "Cada reporte se ubica en el mapa con un pin de color según su categoría y puede incluir una foto. El backend es una API en ASP.NET Core con base de datos SQLite.",
    tecnologias: ["C#", "ASP.NET Core", "EF Core", "SQLite", "Leaflet"],
  },
  {
    id: 3,
    titulo: "Este portfolio",
    descripcion: "Sitio personal de una sola página hecho para el TP1 de Programación 4.",
    detalle: "Usa componentes, props, map(), useState y renderizado condicional.",
    tecnologias: ["React", "Vite", "CSS"],
  },
];

function App() {
  return (
    <>
      <Header nombre="Gonzalo Lazarte" profesion="Estudiante de Programación · C# / .NET" />
      <main>
        <Hero nombre="Gonzalo" />
        <About />
        <Skills habilidades={habilidades} />
        <Projects proyectos={proyectos} />
      </main>
    </>
  );
}

export default App;