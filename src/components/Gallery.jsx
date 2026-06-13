import heroImg from '../assets/hero.jpg'
import interiorImg from '../assets/interior.jpg'
import chairsImg from '../assets/chairs.jpg'
import chairImg from '../assets/chair.jpg'

const items = [
  { cls: 'gal-item wide tall', img: chairsImg, alt: 'Ряд барберских кресел и зеркала с подсветкой', pos: '40% center' },
  { cls: 'gal-item', img: chairImg, alt: 'Кресло Apollo крупным планом', pos: '78% center' },
  { cls: 'gal-item', img: interiorImg, alt: 'Стена с фотографиями работ мастеров', pos: '92% center' },
  { cls: 'gal-item wide', img: heroImg, alt: 'Неоновая вывеска Top Барбершоп и стойка ресепшн', pos: '30% center' },
  { cls: 'gal-item tall', img: chairImg, alt: 'Рабочее место мастера: зеркало с подсветкой и инструменты', pos: '22% center' },
  { cls: 'gal-item', img: interiorImg, alt: 'Винтажное кресло в зоне ожидания с лампой', pos: '48% 70%' },
  { cls: 'gal-item wide', img: chairsImg, alt: 'Общий вид зала с тёплым светом и зеркалами', pos: '60% center' },
  { cls: 'gal-item', img: heroImg, alt: 'Неоновая вывеска и стойка ресепшн крупным планом', pos: '80% center' },
  { cls: 'gal-item wide', img: interiorImg, alt: 'Зона ожидания с тёплым светом', pos: '20% center' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label reveal">Наши работы</span>
            <h2 className="heading reveal" data-d="1" style={{ marginTop: '20px' }}>Атмосфера и детали</h2>
          </div>
        </div>
        <div className="gal-grid reveal">
          {items.map((it, i) => (
            <div className={it.cls} key={i}>
              <img src={it.img} alt={it.alt} loading="lazy" decoding="async" style={{ objectPosition: it.pos }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
