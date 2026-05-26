/* global React */
function Hero({ onOrder }) {
  return (
    <section id="top" className="r-hero">
      <div className="r-hero__copy">
        <div className="eyebrow">DESDE 1997 · CHIHUAHUA, MÉXICO</div>
        <h1 className="r-hero__headline">
          <span className="r-hero__script">Las mejores</span>
          <span className="r-hero__serif">TORTILLAS</span>
        </h1>
        <p className="r-hero__sub">Tortillas de maíz nixtamalizado, hechas a mano y entregadas calientitas del comal a tu mesa. Aparta tu pedido en línea y pásalas a recoger.</p>
        <div className="r-hero__ctas">
          <button className="btn btn--primary btn--lg" onClick={onOrder}>Aparta tu pedido</button>
          <a className="btn btn--ghost btn--lg" href="#tortillas">Ver tortillas</a>
        </div>
        <div className="r-hero__meta">
          <span className="r-hero__dot" aria-hidden="true"></span>
          <span>Abierto ahora · cierra a las 8:00 pm</span>
        </div>
      </div>
      <div className="r-hero__art">
        <img src="assets/mascot-photo-transparent.png" alt="Mascota de elote Tortillería Rascón" className="r-hero__mascot"/>
        <span className="r-hero__sticker">¡Hoy: maíz azul!</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
