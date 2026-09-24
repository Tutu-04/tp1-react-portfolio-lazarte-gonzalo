function Header({ nombre, profesion }) {
  return (
    <header className="header">
      <div className="header-marca">
        <strong>{nombre}</strong>
        <span>{profesion}</span>
      </div>

      <nav className="header-nav">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;