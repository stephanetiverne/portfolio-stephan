import { useState } from 'react'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'

const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: '📞', label: 'Téléphone', value: profile.phone, href: `tel:${profile.phoneRaw}` },
  { icon: '📍', label: 'Localisation', value: profile.location, href: null },
  { icon: '💬', label: 'WhatsApp', value: 'Discuter maintenant', href: `https://wa.me/${profile.phoneRaw}` },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation simple
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus({ type: 'error', text: 'Veuillez remplir tous les champs.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', text: "L'adresse email n'est pas valide." })
      return
    }

    setSending(true)
    setStatus({ type: 'info', text: 'Envoi en cours…' })

    try {
      // Construction de l'URL mailto pré-remplie
      const subject = encodeURIComponent(form.subject)
      const body = encodeURIComponent(
        `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus({ type: 'success', text: 'Votre client email s\'est ouvert. Merci !' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus({ type: 'error', text: 'Une erreur est survenue. Réessayez ou écrivez-moi directement.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Parlons-en</span>
            <h2>Contact<span className="dot">.</span></h2>
            <p>Une idée, un projet, une question ? Écrivez-moi !</p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info">
            {CONTACT_ITEMS.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-icon" aria-hidden="true">{item.icon}</div>
                <div>
                  <h3>{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message…"
                  required
                />
              </div>

              {status && (
                <p className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
                  {status.text}
                </p>
              )}

              <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                {sending ? 'Envoi…' : 'Envoyer le message ✉️'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact