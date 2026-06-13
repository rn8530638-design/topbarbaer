import Footer from './Footer.jsx'

export default function Contacts() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="label reveal">Найти нас</span>
            <h2 className="heading reveal" data-d="1">Записаться</h2>
            <div className="reveal" data-d="2">
              <div className="info-row"><div className="k">Адрес</div><div className="v">Москва, ул. Бородатая, 98</div></div>
              <div className="info-row"><div className="k">Телефон</div><div className="v"><a href="tel:+79607047897">8 960 704 78 97</a></div></div>
              <div className="info-row"><div className="k">Часы</div><div className="v">Пн–Вс · 10:00–21:00</div></div>
            </div>
            <a href="https://t.me/topbarbershop" className="btn solid reveal" data-d="3">Записаться в Telegram</a>
          </div>
          <div className="map reveal" data-d="1">
            <iframe
              title="Карта — Top Барбершоп"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.60%2C55.748%2C37.63%2C55.762&amp;layer=mapnik"
            ></iframe>
            <div className="pin"><div className="dot"></div></div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </section>
  )
}
