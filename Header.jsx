/* global React */
const { useState } = React;

function Header({ onOrder }) {
  const [scrolled, setScrolled] = useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    ['Hoy', '#today'],
    ['Tortillas', '#tortillas'],
    ['Visítanos', '#hours'],
    ['Historia', '#story'],
  ];

  return (
    <header className={`r-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="r-header__brand">
        <span className="r-header__script">Tortillería</span>
        <span className="r-header__serif">RASCÓN</span>
      </a>
      <nav className="r-header__nav">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <div className="r-header__actions">
        <a className="r-header__phone" href="tel:+526144107788" aria-label="Llamar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10a16 16 0 0 0 7 7l1.25-1.83a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z"/>
          </svg>
          <span>614 410 7788</span>
        </a>
        <button className="btn btn--primary" onClick={onOrder}>Aparta tu pedido</button>
      </div>
    </header>
  );
}

window.Header = Header;
