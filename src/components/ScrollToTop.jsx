import { useEffect, useState } from 'react'

/** Bouton flottant pour remonter en haut de page. */
function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={scrollTop}
      aria-label="Revenir en haut de page"
      title="Haut de page"
    >
      ↑
    </button>
  )
}

export default ScrollToTop