import { useEffect, useState, useRef } from 'react'
import splashLogoUrl from '../assets/splash-logo.png'

export default function Splash() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const dismissed = useRef(false)

  const dismiss = () => {
    if (dismissed.current) return
    dismissed.current = true
    // 1) start opacity fade to 0
    setFading(true)
    // 2) wait for the transition to finish (1.6s + 0.2s delay = 1800ms)
    setTimeout(() => {
      // 3) make sure page is at the top — 'instant' overrides scroll-behavior:smooth
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      // 4) remove splash from the DOM
      setVisible(false)
    }, 1800)
  }

  useEffect(() => {
    // Only listen while the splash is on screen. Splash returns null after
    // dismiss but stays mounted, so we key the effect on `visible`: when it
    // flips to false the cleanup runs and the scroll-blocking listeners are
    // removed — otherwise blockScroll's preventDefault would lock the page
    // forever. No overflow toggling, so the scrollbar never disappears (= no jerk).
    if (!visible) return

    const onKey = (e) => { if (e.code === 'Space') { e.preventDefault(); dismiss() } }
    const blockScroll = (e) => { e.preventDefault(); e.stopPropagation(); dismiss() }

    let touchStartY = 0
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e) => { if (touchStartY - e.changedTouches[0].clientY > 30) dismiss() }

    window.addEventListener('keydown', onKey)
    window.addEventListener('wheel', blockScroll, { passive: false })
    window.addEventListener('touchmove', blockScroll, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('wheel', blockScroll)
      window.removeEventListener('touchmove', blockScroll)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100vw', height: '100vh', overflow: 'hidden',
      background: '#000000',
      zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: fading ? 0 : 1,
      transition: 'opacity 1.6s ease-in-out 0.2s',
      pointerEvents: fading ? 'none' : 'auto',
    }}>
      <div
        className="splash-logo"
        style={{ backgroundImage: `url(${splashLogoUrl})` }}
      />
      <span className="splash-hint">
        <span className="splash-hint-en">Press Space or Scroll</span>
        <span className="splash-hint-ru">Нажмите или листайте</span>
      </span>

      <style>{`
        @keyframes splashFloat {
          0%   { transform: translateX(-50%) translateY(0px); }
          50%  { transform: translateX(-50%) translateY(-6px); }
          100% { transform: translateX(-50%) translateY(0px); }
        }
        .splash-logo {
          width: clamp(240px, 50vw, 500px);
          aspect-ratio: 5 / 3;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .splash-hint {
          position: absolute;
          bottom: 48px;
          left: 50%;
          transform: translateX(-50%);
          color: #C9A84C;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          opacity: 0.7;
          white-space: nowrap;
          animation: splashFloat 2.5s ease-in-out infinite;
        }
        .splash-hint-ru { display: none; }
        @media (max-width: 768px) {
          .splash-hint { bottom: 36px; font-size: 10px; }
          .splash-hint-en { display: none; }
          .splash-hint-ru { display: inline; }
        }
      `}</style>
    </div>
  )
}
