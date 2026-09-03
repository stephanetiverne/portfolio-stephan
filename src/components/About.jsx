import { useEffect, useRef, useState } from 'react'
import { profile, stats } from '../data/portfolio'
import Reveal from './Reveal'

/** Compteur animé qui s'incrémente quand visible. */
function Counter({ target, suffix = '', duration = 1400 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            // Accélération douce (ease-out)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span className="stat-number" ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

function About() {
  return (
    <section className="section about" id="a-propos">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Qui suis-je ?</span>
            <h2>À propos<span className="dot">.</span></h2>
            <p>Apprenez à me connaître un peu mieux</p>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-image">
            <div className="about-photo-frame">
              <img
                src={profile.photo}
                alt={`Portrait de ${profile.fullName}`}
                width="400"
                height="400"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal className="about-content" delay={150}>
            <h3>Développeur Full Stack & passionné de technologies</h3>
            <p>
              Je suis <strong>{profile.fullName}</strong>, étudiant en{' '}
              <strong>Master 1 Informatique Générale</strong> à l'École Nationale
              d'Informatique (Antananarivo, Madagascar).
            </p>
            <p>
              Déterminé, sérieux et autonome, je suis persuadé qu'une bonne solution
              naît de la compréhension du besoin réel. Mon parcours m'a permis de
              maîtriser le développement <strong>web</strong> (front & back), les
              applications <strong>mobiles</strong>, ainsi que les bases du{' '}
              <strong>Machine Learning</strong> et de l'<strong>intelligence artificielle</strong>.
            </p>
            <ul className="about-info">
              <li>
                <span className="about-label">📧 Email :</span>{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="about-label">📞 Téléphone :</span>{' '}
                <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
              </li>
              <li>
                <span className="about-label">📍 Localisation :</span> {profile.location}
              </li>
              <li>
                <span className="about-label">🎓 Statut :</span> {profile.status}
              </li>
              <li>
                <span className="about-label">🌐 Langues :</span>{' '}
                {profile.languages.map((l) => `${l.name} (${l.level})`).join(' · ')}
              </li>
            </ul>
            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">Discutons de votre projet</a>
            </div>
          </Reveal>
        </div>

        <Reveal className="stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default About