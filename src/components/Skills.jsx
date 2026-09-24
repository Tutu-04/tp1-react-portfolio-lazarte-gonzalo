function Skills({ habilidades }) {
  return (
    <section id="habilidades" className="seccion">
      <h2>Habilidades</h2>
      <ul className="lista-habilidades">
        {habilidades.map((habilidad) => (
          <li key={habilidad} className="chip">
            {habilidad}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;