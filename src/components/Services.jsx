import { services } from '../data/portfolio'
import Reveal from './Reveal'

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Ce que je propose</span>
            <h2>Services<span className="dot">.</span></h2>
            <p>Des solutions adaptées à chaque besoin</p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80} className="service-card">
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services