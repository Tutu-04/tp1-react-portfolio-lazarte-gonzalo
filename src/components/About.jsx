import { useState } from "react";

function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  function alternar() {
    setMostrarMas(!mostrarMas);
  }

  return (
    <section id="sobre-mi" className="seccion">
      <h2>Sobre mí</h2>
      <p>
        Soy de San Miguel de Tucumán y estoy cursando el último cuatrimestre
        de la Tecnicatura. Me interesa el desarrollo de software: vengo de
        C# y .NET.Mi objetivo es recibirme y conseguir mi primera experiencia como desarrollador
        o trabajar de manera independiente en algún proyecto, como un juego o alguna app.
      </p>

      {mostrarMas && (
        <p>
          Desde 2022 trabajo de forma independiente haciendo mantenimiento,
          reparación y armado de computadoras, y doy clases particulares de
          algunas materias. Eso me dio práctica para resolver
          problemas y explicar cosas técnicas de forma simple.
        </p>
      )}

      <button className="boton" onClick={alternar}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
}

export default About;