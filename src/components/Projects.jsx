import ProjectCard from "./ProjectCard.jsx";

function Projects({ proyectos }) {
  return (
    <section id="proyectos" className="seccion">
      <h2>Proyectos</h2>
      <div className="grilla-proyectos">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            detalle={proyecto.detalle}
            tecnologias={proyecto.tecnologias}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;