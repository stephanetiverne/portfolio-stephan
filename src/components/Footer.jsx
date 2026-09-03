import { profile } from '../data/portfolio'
import SocialLinks from './SocialLinks'

const FOOTER_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#services', label: 'Services' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="nav-logo-icon">ST</span>
            <p>
              Développeur Full Stack passionné par la création de solutions web,
              mobiles et intelligentes.
            </p>
          </div>

          <div className="footer-col">
            <h4>Liens rapides</h4>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a></li>
              <li>{profile.location}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Suivez-moi</h4>
            <SocialLinks />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} {profile.fullName}. Tous droits réservés.</p>
          <p className="footer-made">Fait avec 💙 à Antananarivo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer