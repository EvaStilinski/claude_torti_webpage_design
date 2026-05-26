/* global React */
function DailyBoard() {
  const items = [
    { type: 'Maíz blanco', price: '$28', tag: 'DEL DÍA',  tone: 'gold',  color: '#E8D49A' },
    { type: 'Maíz azul',   price: '$32', tag: 'NUEVA',    tone: 'chile', color: '#5A6D9C' },
    { type: 'Harina',      price: '$30', tag: 'CLÁSICA',  tone: 'navy',  color: '#F4E5C2' },
  ];
  const rotations = [-1.5, 1.2, -0.8];

  return (
    <section id="today" className="r-board">
      <div className="r-board__head">
        <div>
          <div className="eyebrow">HOY EN EL COMAL</div>
          <h2>Lo que está saliendo ahora</h2>
        </div>
        <span className="r-board__stamp">
          <span className="handwritten">Listas a las 7 a.m.</span>
        </span>
      </div>
      <div className="r-board__cards">
        {items.map((it, i) => (
          <div key={it.type} className="r-stamp" style={{ transform: `rotate(${rotations[i]}deg)` }}>
            <span className={`tag tag--${it.tone}`}>{it.tag}</span>
            <div className="r-stamp__product">{it.type}</div>
            <div className="r-stamp__sub">docena · {it.price} MXN</div>
            <div className="r-stamp__photo" aria-hidden="true">
              <span className="r-stamp__tortilla" style={{ background: it.color }}></span>
              <span className="r-stamp__tortilla" style={{ background: it.color, transform: 'translate(-46%, -50%) rotate(-12deg)' }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.DailyBoard = DailyBoard;
