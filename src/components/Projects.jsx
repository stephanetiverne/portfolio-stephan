import { projects } from '../data/portfolio'
import Reveal from './Reveal'

function Projects() {
  return (
    <section className="section projects" id="projets">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Mes réalisations</span>
            <h2>Projets<span className="dot">.</span></h2>
            <p>Quelques travaux développés en pratique</p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className="project-card">
              <div className="project-thumb" aria-hidden="true">
                <span className="project-emoji">{project.emoji}</span>
              </div>
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-small btn-primary"
                >
                  {project.urlLabel} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects