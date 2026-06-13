import heroImg from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src={heroImg} alt="Интерьер Top Барбершоп — неоновая вывеска, кожаные кресла, зеркала с LED-подсветкой" />
      </div>
      <div className="hero-inner">
        <span className="label reveal">Барбершоп в Москве</span>
        <h1 className="reveal" data-d="1"><span>YOUR CUT.</span><span className="gold">YOUR CROWN.</span></h1>
        <p className="sub reveal" data-d="2">Точные фейды и чёткие линии в самом сердце Москвы. Кресло, в котором мужчина становится собой.</p>
        <div className="hero-actions reveal" data-d="3">
          <a href="https://t.me/topbarbershop" className="btn">Записаться</a>
          <a href="tel:+79607047897" className="btn ghost">+7 960 704 78 97</a>
        </div>
      </div>
    </section>
  )
}
