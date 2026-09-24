function Hero({ nombre }) {
    return (
        <section className="hero">
            <h1>Hola, soy {nombre}</h1>
            <p>
                Estudiante de la Tecnicatura Universitaria en Programación en la UTN
                Facultad Regional Tucumán. Trabajo principalmente con C# y .NET, y
                ahora estoy sumando desarrollo web con React.
            </p>
            <a className="boton" href="#proyectos">
                Ver mis proyectos
            </a>
        </section>
    );
}

export default Hero;