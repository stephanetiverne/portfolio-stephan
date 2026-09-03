import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  // Effet sur le scroll : navbar compacte
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Surligner la section active pendant le défilement
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Fermer le menu mobile au clic
  const handleLinkClick = () => {
    setMenuOpen(false)
    document.body.classList.remove('no-scroll')
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev
      document.body.classList.toggle('no-scroll', next)
      return next
    })
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-container" aria-label="Navigation principale">
        <a href="#accueil" className="nav-logo" onClick={handleLinkClick} aria-label="Retour à l'accueil">
          <span className="nav-logo-icon">ST</span>
          <span className="nav-logo-text">Stéphane<span className="dot">.</span></span>
        </a>

        <ul className={`nav-menu ${menuOpen ? 'is-open' : ''}`} id="navMenu">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:tivernestephane@gmail.com" className="nav-cta" onClick={handleLinkClick}>
              Me contacter
            </a>
          </li>
        </ul>

        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="navMenu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar