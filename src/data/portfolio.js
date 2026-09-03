// =============================================
// Données du portfolio — TIVERNE Solonomena Stéphane
// Modifiez ce fichier pour mettre à jour le contenu
// =============================================

export const profile = {
  firstName: 'Stéphane',
  lastName: 'TIVERNE',
  fullName: 'TIVERNE Solonomena Stéphane',
  role: 'Développeur Full Stack',
  typedRoles: ['Full Stack', 'Web', 'Mobile', 'IA / ML'],
  tagline:
    'Étudiant en Master 1 Informatique à l\'École Nationale d\'Informatique de Madagascar. Passionné par le développement d\'applications web, mobiles et l\'intelligence artificielle.',
  photo: '/photo.png',
  location: 'Antananarivo, Madagascar',
  status: 'Étudiant Master 1 & Freelance',
  email: 'tivernestephane@gmail.com',
  phone: '+261 34 53 493 97',
  phoneRaw: '+261345349397',
  address: 'Rue de Sacré Cœur, Tsianaloka, Antananarivo',
  languages: [
    { name: 'Malagasy', level: 'Maternel' },
    { name: 'Français', level: 'B2' },
    { name: 'Anglais', level: 'Moyen' },
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/stephanetiverne',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/stephanetiverne',
      icon: 'linkedin',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/261345349397',
      icon: 'whatsapp',
    },
  ],
}

export const stats = [
  { value: 3, suffix: '', label: 'Projets réalisés' },
  { value: 15, suffix: '+', label: 'Technologies maîtrisées' },
  { value: 3, suffix: '', label: "Années d'études en info" },
  { value: 100, suffix: '%', label: 'Engagement' },
]

export const skillGroups = [
  {
    title: 'Front-End',
    icon: '🎨',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 78 },
      { name: 'Vue.js', level: 75 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Back-End',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'Laravel', level: 70 },
      { name: 'Java', level: 70 },
      { name: 'MySQL', level: 85 },
    ],
  },
  {
    title: 'Mobile & IA',
    icon: '📱',
    skills: [
      { name: 'React Native', level: 65 },
      { name: 'Kotlin', level: 65 },
      { name: 'Python', level: 75 },
      { name: 'Machine Learning', level: 70 },
      { name: 'Intelligence Artificielle', level: 70 },
      { name: 'Gestion de projet', level: 75 },
    ],
  },
  {
    title: 'Systèmes & Outils',
    icon: '🛡️',
    skills: [
      { name: 'Linux / Windows', level: 80 },
      { name: 'Adm. réseau & système', level: 70 },
      { name: 'Sécurité Unix / Cybersec', level: 65 },
      { name: 'Figma / Intégration web', level: 80 },
      { name: 'Systèmes embarqués', level: 65 },
    ],
  },
]

export const timeline = [
  {
    date: '2023 — aujourd\'hui',
    title: 'Master 1 Informatique Générale',
    place: 'École Nationale d\'Informatique',
    description: 'Parcours Informatique Générale — approfondissement en développement, IA et systèmes.',
  },
  {
    date: '2024 — 2025',
    title: 'Licence III Informatique Générale',
    place: 'École Nationale d\'Informatique',
    description: 'Parcours Informatique Générale — fondations solides en développement logiciel.',
  },
   {
    date: '2024 — 2025',
    title: 'Stage - Assemblée Nationale',
    place: 'École Nationale d\'Informatique',
    description: 'Attestation de stage en environnement professionnel : services réseau.',
  },
  {
    date: '2024',
    title: 'Stage — Hôtel de Finance (CIR)',
    place: 'Toliara',
    description: 'Attestation de stage en environnement professionnel : informatique et services.',
  },
  {
    date: '2021',
    title: 'Stage — Indosuma',
    place: 'Industrie',
    description: 'Attestation de stage industriel : découverte du milieu professionnel technique.',
  },
  {
    date: '2020 — 2022',
    title: 'CFP Don Bosco',
    place: 'Secteur industriel',
    description: 'BEP & BAC secteur industriel — formations aux métiers d\'électricien.',
  },
]

export const services = [
  {
    icon: '🌐',
    title: 'Développement Web',
    description: 'Sites vitrines, portfolios et applications web modernes, responsives et performantes.',
  },
  {
    icon: '📱',
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles Android avec React Native et Kotlin.',
  },
  {
    icon: '🤖',
    title: 'Machine Learning & IA',
    description: 'Modèles de classification, prédiction et intelligence artificielle appliquée.',
  },
  {
    icon: '🗄️',
    title: 'Bases de données',
    description: 'Conception et gestion de bases de données MySQL, PostgreSQL et SQLite.',
  },
  {
    icon: '🛜',
    title: 'Systèmes & Réseaux',
    description: 'Administration système (Linux/Windows), configuration réseau et sécurité.',
  },
  {
    icon: '🎨',
    title: 'UI / UX & Intégration',
    description: 'Maquettes Figma, intégration web et interfaces pensées pour l\'expérience utilisateur.',
  },
]

export const projects = [
  {
    title: 'GestionSalle',
    category: 'Application Web',
    emoji: '🏫',
    description:
      'Plateforme de gestion des salles, des occupations et des professeurs avec tableau de bord interactif.',
    tags: ['Web', 'Dashboard', 'Vercel'],
    url: 'https://salle-six.vercel.app/',
    urlLabel: 'Voir le projet',
  },
  {
    title: 'Applications Mobiles',
    category: 'Mobile',
    emoji: '📱',
    description:
      'Applications mobiles avec backend associé, développées avec les technologies modernes.',
    tags: ['Kotlin', 'Java', 'API'],
    url: 'https://github.com/stephanetiverne/Applis_mobile',
    urlLabel: 'Voir sur GitHub',
  },
  {
    title: 'Projet IA — Classification Sonar',
    category: 'Intelligence Artificielle',
    emoji: '🤖',
    description: 'Classification de signaux sonar (minéral vs roche) avec Random Forest, SVM et KNN.',
    tags: ['Python', 'scikit-learn', 'ML'],
    url: 'https://github.com/stephanetiverne/Projet_IA',
    urlLabel: 'Voir sur GitHub',
  },
]