import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Header nombre="Gonzalo Lazarte" profesion="Estudiante de Programación · C# / .NET" />
      <main>
        <Hero nombre="Gonzalo" />
      </main>
    </>
  );
}

export default App;