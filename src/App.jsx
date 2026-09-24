import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <>
      <Header nombre="Gonzalo Lazarte" profesion="Estudiante de Programación · C# / .NET" />
      <main>
        <Hero nombre="Gonzalo" />
        <About />
      </main>
    </>
  );
}

export default App;