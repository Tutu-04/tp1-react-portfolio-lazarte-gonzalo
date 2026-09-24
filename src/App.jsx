import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";

const habilidades = ["C#", ".NET", "HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];

function App() {
  return (
    <>
      <Header nombre="Gonzalo Lazarte" profesion="Estudiante de Programación · C# / .NET" />
      <main>
        <Hero nombre="Gonzalo" />
        <About />
        <Skills habilidades={habilidades} />
      </main>
    </>
  );
}

export default App;