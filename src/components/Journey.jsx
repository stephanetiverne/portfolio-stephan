import { timeline } from '../data/portfolio'
import Reveal from './Reveal'

function Journey() {
  return (
    <section className="section journey" id="parcours">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Mon chemin</span>
            <h2>Formation & Expériences<span className="dot">.</span></h2>
            <p>Les étapes clés de mon parcours</p>
          </div>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={`${item.title}-${index}`} delay={index * 80} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey