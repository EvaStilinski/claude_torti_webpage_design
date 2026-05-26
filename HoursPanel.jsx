/* global React */
function HoursPanel() {
  const days = [
    ['Lunes', '7:00 – 14:00'],
    ['Martes', '7:00 – 14:00'],
    ['Miércoles', '7:00 – 14:00'],
    ['Jueves', '7:00 – 14:00'],
    ['Viernes', '7:00 – 14:00'],
    ['Sábado', '7:00 – 14:00'],
    ['Domingo', 'Cerrado'],
  ];

  return (
    <section id="hours" className="r-hours">
      <div className="r-hours__left">
        <div className="eyebrow">VISÍTANOS</div>
        <h2>En la esquina, a una cuadra del mercado.</h2>
        <div className="r-hours__addr">
          <p><strong>Tortillería Rascón</strong>Calle Hidalgo 412, Centro<br/>Chihuahua, Chih.</p>
          <p><strong>Teléfono</strong>+52 614 410 7788</p>
        </div>
        <div className="r-hours__status">
          <span className="r-hours__dot" aria-hidden="true"></span>
          <span>Abierto ahora · cierra a las 2:00 pm</span>
        </div>
      </div>
      <div className="r-hours__right">
        <table className="r-hours__table">
          <tbody>
            {days.map(([d, h]) => (
              <tr key={d}><td>{d}</td><td>{h}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

window.HoursPanel = HoursPanel;
