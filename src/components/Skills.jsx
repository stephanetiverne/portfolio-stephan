import { useEffect, useRef, useState } from 'react'
import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'

/** Barre de compétence animée au scroll. */
function SkillBar({ name, level }) {
  const ref = useRef(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFilled(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-bar" ref={ref}>
      <span className="skill-name">{name}</span>
      <div className="bar-track" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100" aria-label={name}>
        <div
          className="bar-fill"
          style={filled ? { width: `${level}%` } : { width: 0 }}
        />
      </div>
      <span className="skill-percent">{level}%</span>
    </div>
  )
}

function Skills() {
  return (
    <section className="section skills" id="competences">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Mon arsenal</span>
            <h2>Compétences<span className="dot">.</span></h2>
            <p>Les technologies que j'utilise au service de vos projets</p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100} className="skill-card">
              <h3>
                <span aria-hidden="true">{group.icon}</span> {group.title}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills