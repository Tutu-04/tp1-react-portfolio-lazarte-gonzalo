import { useState } from "react";

function ProjectCard({ titulo, descripcion, detalle, tecnologias }) {
  const [verDetalle, setVerDetalle] = useState(false);

  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <ul className="lista-tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      {verDetalle && <p className="detalle">{detalle}</p>}

      <button
        className="boton boton-secundario"
        onClick={() => setVerDetalle(!verDetalle)}
      >
        {verDetalle ? "Ocultar detalle" : "Ver detalle"}
      </button>
    </article>
  );
}

export default ProjectCard;