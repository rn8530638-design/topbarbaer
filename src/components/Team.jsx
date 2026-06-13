import masterAleksandr from '../assets/master-aleksandr.jpg'
import masterDenis from '../assets/master-denis.jpg'
import masterMaksim from '../assets/master-maksim.jpg'

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label reveal">Команда</span>
            <h2 className="heading reveal" data-d="1" style={{ marginTop: '20px' }}>Наши мастера</h2>
          </div>
        </div>
        <div className="team-grid">
          <div className="master reveal">
            <div className="master-photo">
              <img src={masterAleksandr} alt="Александр — старший мастер Top Барбершоп" loading="lazy" decoding="async" style={{ objectPosition: '50% 22%' }} />
            </div>
            <div className="master-body">
              <span className="mono">А</span>
              <div className="role">Senior Barber</div>
              <h3 style={{ fontSize: '30px' }}>Александр</h3>
              <div className="exp">8 лет опыта</div>
              <p>Александр начинал в небольшой мастерской, а сегодня — старший мастер Top Барбершоп. Его конёк — идеальный skin fade и классические стрижки под тип лица. Каждый клиент уходит с ощущением, что эта стрижка была создана именно для него.</p>
            </div>
          </div>
          <div className="master reveal" data-d="1">
            <div className="master-photo">
              <img src={masterDenis} alt="Денис — специалист по бороде и бритью опасной бритвой" loading="lazy" decoding="async" style={{ objectPosition: '50% 22%' }} />
            </div>
            <div className="master-body">
              <span className="mono">Д</span>
              <div className="role">Beard &amp; Razor</div>
              <h3 style={{ fontSize: '30px' }}>Денис</h3>
              <div className="exp">специалист по бороде</div>
              <p>Денис работает с бородой как скульптор. Опасная бритва, горячее полотенце, точный контур — его ритуал неизменен. Если вы хотите бороду, которая меняет лицо — вы к нему.</p>
            </div>
          </div>
          <div className="master reveal" data-d="2">
            <div className="master-photo">
              <img src={masterMaksim} alt="Максим — специалист по текстурным стрижкам и фейдам" loading="lazy" decoding="async" style={{ objectPosition: '50% 22%' }} />
            </div>
            <div className="master-body">
              <span className="mono">М</span>
              <div className="role">Texture &amp; Fade</div>
              <h3 style={{ fontSize: '30px' }}>Максим</h3>
              <div className="exp">СПЕЦИАЛИСТ СО СТАЖЕМ 10 ЛЕТ</div>
              <p>Максим чувствует структуру волоса. Текстурные стрижки, молодёжные фейды, нестандартные решения — его территория. Приходит клиент с референсом — уходит лучше референса.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
