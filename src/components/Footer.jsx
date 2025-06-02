import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <nav>
          <a href="/about">Sobre nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Privacidad</a>
        </nav>
      </div>
    </footer>
  );
};
