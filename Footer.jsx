/* global React */
function Footer() {
  return (
    <footer id="story" className="r-footer">
      <div className="r-footer__inner">
        <div className="r-footer__brand">
          <div className="r-footer__script">Tortillería</div>
          <div className="r-footer__serif">RASCÓN</div>
          <div className="r-footer__tag">Las mejores tortillas · desde 1997</div>
        </div>
        <div className="r-footer__cols">
          <div>
            <h5>Tortillas</h5>
            <a href="#tortillas">Maíz blanco</a>
            <a href="#tortillas">Maíz amarillo</a>
            <a href="#tortillas">Harina</a>
            <a href="#tortillas">Tostadas</a>
          </div>
          <div>
            <h5>Tienda</h5>
            <a href="#hours">Horarios</a>
            <a href="#hours">Cómo llegar</a>
            <a href="tel:+526144107788">Teléfono</a>
          </div>
          <div>
            <h5>Sobre nosotros</h5>
            <a href="#story">Historia</a>
            <a href="#story">Familia Rascón</a>
            <a href="#story">Prensa</a>
          </div>
        </div>
      </div>
      <div className="r-footer__base">
        <span>© 2026 Tortillería Rascón. Todos los derechos reservados.</span>
        <span>Hecho en Chihuahua, México</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
