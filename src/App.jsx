import { useEffect } from 'react'
import Splash from './components/Splash.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Team from './components/Team.jsx'
import Contacts from './components/Contacts.jsx'

export default function App() {
  // Reveal on scroll — ports the IntersectionObserver from the original HTML.
  // Runs once after mount so every .reveal element across all sections is observed.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Splash />
      <Navbar />
      <main>
        <Hero />
        {/* BLACK DIVIDER */}
        <div className="section-divider" aria-hidden="true"></div>
        <About />
        <Services />
        <Gallery />
        <Team />
        <Contacts />
      </main>
    </>
  )
}
