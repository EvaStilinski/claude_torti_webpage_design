/* global React */
const { useState: useStateP } = React;

function ProductCard({ product, onOrder }) {
  const [fav, setFav] = useStateP(false);
  return (
    <article className="r-product">
      <div className="r-product__photo">
        <span className="r-product__tortilla" style={{ background: product.color }}></span>
        <button
          className={`r-product__bookmark ${fav ? 'is-on' : ''}`}
          onClick={() => setFav(!fav)}
          aria-label="Guardar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
        {product.badge && <span className={`tag tag--${product.badgeTone || 'gold'} r-product__badge`}>{product.badge}</span>}
      </div>
      <div className="r-product__body">
        <h3>{product.name}</h3>
        <p className="r-product__desc">{product.desc}</p>
        <div className="r-product__foot">
          <span className="r-product__price">{product.price} <span>MXN / docena</span></span>
          <button className="btn btn--primary btn--sm" onClick={() => onOrder(product)}>Aparta</button>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ products, onOrder }) {
  return (
    <section id="tortillas" className="r-grid">
      <div className="r-grid__head">
        <div className="eyebrow">NUESTRAS TORTILLAS</div>
        <h2>Recién hechas, todos los días</h2>
      </div>
      <div className="r-grid__cards">
        {products.map((p) => <ProductCard key={p.id} product={p} onOrder={onOrder} />)}
      </div>
    </section>
  );
}

window.ProductCard = ProductCard;
window.ProductGrid = ProductGrid;
