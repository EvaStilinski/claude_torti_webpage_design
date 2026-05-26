/* global React */
const { useState: useStateM, useEffect: useEffectM } = React;

function OrderModal({ open, onClose, presetProduct }) {
  const [step, setStep] = useStateM('form'); // form | success
  const [product, setProduct] = useStateM(presetProduct || 'Maíz blanco');
  const [qty, setQty] = useStateM(2);
  const [time, setTime] = useStateM('07:30');
  const [pickup, setPickup] = useStateM('local'); // local | domicilio
  const [name, setName] = useStateM('');
  const [phone, setPhone] = useStateM('');

  useEffectM(() => {
    if (open) {
      setStep('form');
      if (presetProduct) setProduct(presetProduct);
    }
  }, [open, presetProduct]);

  if (!open) return null;

  const submit = (e) => { e.preventDefault(); setStep('success'); };

  return (
    <div className="r-modal" role="dialog" aria-modal="true">
      <div className="r-modal__scrim" onClick={onClose}></div>
      <div className="r-modal__card">
        {step === 'form' && (
          <form onSubmit={submit}>
            <header className="r-modal__head">
              <div>
                <div className="eyebrow">PEDIDO RÁPIDO</div>
                <h3>Aparta tu pedido</h3>
                <p className="r-modal__sub">Te avisamos por SMS cuando estén listas.</p>
              </div>
              <button type="button" className="r-modal__close" onClick={onClose} aria-label="Cerrar">×</button>
            </header>
            <div className="r-modal__body">
              <div className="r-field">
                <label>Tipo de tortilla</label>
                <select value={product} onChange={(e) => setProduct(e.target.value)}>
                  <option>Maíz blanco</option>
                  <option>Maíz azul</option>
                  <option>Harina</option>
                  <option>Tostadas</option>
                </select>
              </div>
              <div className="r-modal__row">
                <div className="r-field">
                  <label>Cantidad (docenas)</label>
                  <input type="number" min="1" max="20" value={qty} onChange={(e) => setQty(+e.target.value)} />
                </div>
                <div className="r-field">
                  <label>Hora de recoger</label>
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
              </div>
              <div className="r-field">
                <label>¿Cómo lo quieres?</label>
                <div className="r-segmented">
                  <button type="button" className={pickup==='local'?'is-on':''} onClick={() => setPickup('local')}>Pasar a recoger</button>
                  <button type="button" className={pickup==='domicilio'?'is-on':''} onClick={() => setPickup('domicilio')}>A domicilio</button>
                </div>
              </div>
              <div className="r-modal__row">
                <div className="r-field">
                  <label>Nombre</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="María R." />
                </div>
                <div className="r-field">
                  <label>Teléfono</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="614 ..." />
                </div>
              </div>
            </div>
            <footer className="r-modal__foot">
              <button type="button" className="btn btn--ghost" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn btn--primary">Confirmar</button>
            </footer>
          </form>
        )}
        {step === 'success' && (
          <div className="r-modal__success">
            <div className="r-modal__check" aria-hidden="true">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3>¡Pedido apartado!</h3>
            <p className="r-modal__sub">Te esperamos a las <strong>{time}</strong> — {qty} {qty === 1 ? 'docena' : 'docenas'} de {product}.</p>
            <span className="handwritten r-modal__hand">¡Gracias!</span>
            <button className="btn btn--primary" onClick={onClose}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

window.OrderModal = OrderModal;
