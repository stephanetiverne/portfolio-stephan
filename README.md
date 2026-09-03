# Portfolio — TIVERNE Solonomena Stéphane

Portfolio personnel en **React (Vite)** — développeur Full Stack (Web, Mobile, IA).

## 🚀 Démarrage rapide

```bash
npm install     # installer les dépendances
npm run dev     # lancer le serveur de dev (http://localhost:5173)
npm run build   # générer la version de production (dossier /dist)
npm run preview # prévisualiser la version buildée
```

## 📁 Structure

```
portfolio-stephan/
├── index.html               # Point d'entrée HTML
├── public/
│   └── avatar.svg           # Avatar / photo de profil
├── src/
│   ├── main.jsx             # Bootstrap React
│   ├── App.jsx              # Assemblage des sections
│   ├── data/
│   │   └── portfolio.js     # 📝 TOUTES LES DONNÉES (à modifier !)
│   ├── styles/
│   │   └── global.css       # Feuille de style (thème bleu)
│   └── components/          # Composants des sections
│       ├── Navbar.jsx       # Barre de navigation (sticky + mobile)
│       ├── Hero.jsx         # Accueil avec effet machine à écrire
│       ├── About.jsx        # Bio + statistiques animées
│       ├── Skills.jsx       # Compétences avec barres animées
│       ├── Journey.jsx      # Timeline formation / expériences
│       ├── Services.jsx     # Services proposés
│       ├── Projects.jsx     # Projets (liens GitHub / démos)
│       ├── Contact.jsx      # Formulaire de contact
│       ├── Footer.jsx       # Pied de page
│       ├── Reveal.jsx       # Animation au scroll
│       ├── SocialLinks.jsx  # Icônes réseaux sociaux
│       └── ScrollToTop.jsx  # Bouton retour en haut
└── vite.config.js           # Configuration Vite
```

## ✏️ Personnalisation

Tout le contenu se modifie dans **`src/data/portfolio.js`** :
- nom, coordonnées, réseaux sociaux
- compétences et niveaux
- parcours (timeline)
- services
- projets et liens

Le **thème** (couleurs, polices) se règle dans **`src/styles/global.css`**
via les variables CSS en haut du fichier (`--primary`, `--primary-light`, etc.).

## ♿ Accessibilité & IHM

- Navigation clavier (`:focus-visible`)
- `prefers-reduced-motion` respecté
- Contraste suffisant, `aria-label`, `aria-live` sur le formulaire
- Menu mobile avec hamburger, scroll fluide, bouton retour en haut

## 📦 Déploiement

Compatible **Vercel**, **Netlify** ou **GitHub Pages** (build statique `/dist`).

```bash
npm run build && npx vercel deploy --prod
```