import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import service4 from '../assets/service-4.jpg'
import service5 from '../assets/service-5.jpg'
import service6 from '../assets/service-6.jpg'

const services = [
  { idx: '01', img: service1, title: 'Классическая стрижка', desc: 'Стрижка под ваш тип лица с укладкой и финишем.', price: '1 500 ₽' },
  { idx: '02', img: service2, title: 'Skin Fade', desc: 'Плавный переход в ноль. Идеальная геометрия, чистые виски.', price: '2 000 ₽' },
  { idx: '03', img: service3, title: 'Борода & форма', desc: 'Моделирование бороды опасной бритвой и контур.', price: '1 000 ₽' },
  { idx: '04', img: service4, title: 'Стрижка + борода', desc: 'Полный образ: стрижка и оформление бороды в одном кресле.', price: '2 500 ₽' },
  { idx: '05', img: service5, title: 'Бритьё горячим полотенцем', desc: 'Королевское бритьё с компрессом и уходом за кожей.', price: '1 500 ₽' },
  { idx: '06', img: service6, title: 'Детская стрижка', desc: 'Аккуратно и спокойно для маленьких джентльменов.', price: '1 000 ₽' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label reveal">Что мы делаем</span>
            <h2 className="heading reveal" data-d="1" style={{ marginTop: '20px', fontWeight: 500 }}>Услуги и прайс</h2>
          </div>
          <p className="reveal" data-d="2">Каждая услуга — это работа на результат. Без спешки, без компромиссов по чистоте линий.</p>
        </div>
        <div className="svc-grid reveal">
          {services.map((s) => (
            <div className="svc" key={s.idx} style={{ backgroundImage: `url("${s.img}")` }}>
              <div className="svc-body">
                <span className="idx">{s.idx}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="price">{s.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
