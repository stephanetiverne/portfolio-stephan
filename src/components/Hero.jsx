import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import SocialLinks from './SocialLinks'

/** Effet machine à écrire pour les rôles. */
function useTypewriter(words, typeSpeed = 80, deleteSpeed = 45, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timer

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          )
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

function Hero() {
  const typed = useTypewriter(profile.typedRoles)

  return (
    <section className="hero" id="accueil">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-text reveal is-visible">
          <span className="hero-greeting">👋 Bonjour, je suis</span>
          <h1>{profile.fullName}</h1>
          <h2 className="hero-role">
            Développeur <span className="typed-text">{typed}</span>
            <span className="cursor-blink" aria-hidden="true">|</span>
          </h2>
          <p className="hero-desc">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projets" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
          <SocialLinks />
        </div>

        <div className="hero-image reveal is-visible">
          <div className="hero-photo-frame">
            <img src={profile.photo} alt={`Portrait de ${profile.fullName}`} width="340" height="340" />
          </div>
          <div className="hero-badge hero-badge-1">💻 Développeur Web</div>
          <div className="hero-badge hero-badge-2">📱 Mobile</div>
          <div className="hero-badge hero-badge-3">🤖 IA / ML</div>
        </div>
      </div>

      <a href="#a-propos" className="hero-scroll-down" aria-label="Faire défiler vers la section À propos">
        <span className="mouse" />
      </a>
    </section>
  )
}

export default Hero