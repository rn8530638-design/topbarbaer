import { useEffect, useState, useRef } from 'react'
import splashLogoUrl from '../assets/splash-logo.png'

export default function Splash() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const dismissed = useRef(false)

  const dismiss = () => {
    if (dismissed.current) return
    dismissed.current = true
    setFading(true)
    // Remove from DOM after fade completes — no overflow toggle, no scroll
    setTimeout(() => setVisible(false), 1800)
  }

  useEffect(() => {
    // No body overflow manipulation — splash is position:fixed, content stays in place
    const onKey = (e) => { if (e.code === 'Space') { e.preventDefault(); dismiss() } }
    const onWheel = () => dismiss()

    let touchStartY = 0
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e) => { if (touchStartY - e.changedTouches[0].clientY > 30) dismiss() }

    window.addEventListener('keydown', onKey)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

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
