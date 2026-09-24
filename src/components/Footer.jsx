function Footer({ nombre, email, github }) {
  const anio = new Date().getFullYear();

  return (
    <footer id="contacto" className="footer">
      <h2>Contacto</h2>
      <div className="footer-links">
        <a href={"mailto:" + email}>{email}</a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <p className="footer-legal">
        © {anio} {nombre} · TP1 Programación 4 · UTN FRT
      </p>
    </footer>
  );
}

export default Footer;