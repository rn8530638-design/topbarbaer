import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Nav background on scroll — ports the vanilla onScroll handler.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* NAV */}
      <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <a href="#" className="brand">TOP<b>·</b>БАРБЕРШОП</a>
          <nav className="nav-links">
            <a href="#about">О нас</a>
            <a href="#services">Услуги</a>
            <a href="#gallery">Работы</a>
            <a href="#team">Мастера</a>
            <a href="#contact">Контакты</a>
          </nav>
          <div className="nav-cta">
            <a href="tel:+79607047897" className="nav-phone">+7 960 704 78 97</a>
            <a href="https://t.me/topbarbershop" className="btn" style={{ padding: '13px 26px' }}>Записаться</a>
            <div className="burger" id="burger" onClick={() => setMenuOpen(true)}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <div className="close" id="closeMenu" onClick={closeMenu}>×</div>
        <a href="#about" onClick={closeMenu}>О нас</a>
        <a href="#services" onClick={closeMenu}>Услуги</a>
        <a href="#gallery" onClick={closeMenu}>Работы</a>
        <a href="#team" onClick={closeMenu}>Мастера</a>
        <a href="#contact" onClick={closeMenu}>Контакты</a>
        <a href="https://t.me/topbarbershop" style={{ color: 'var(--accent)' }} onClick={closeMenu}>Записаться</a>
      </div>
    </>
  )
}
