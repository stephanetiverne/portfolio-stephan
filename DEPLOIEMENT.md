# 🚀 Guide de déploiement — Portfolio Stéphane

Le dépôt git local est **déjà initialisé** avec un commit prêt.
Il ne reste que 3 étapes (≈ 3 minutes) pour mettre le site en ligne.

---

## Étape 1 — Créer le dépôt GitHub (1 minute)

1. Ouvrez https://github.com/new dans votre navigateur (connecté à votre compte `stephanetiverne`)
2. **Repository name** : `portfolio-stephan`
3. Choisissez **Public** (ou Private, Vercel s'en fiche)
4. ⚠️ Ne cochez **rien** (pas de README, pas de .gitignore, pas de licence)
5. Cliquez sur **Create repository**

*Le dépôt créé doit être vide (sans fichier) pour que les commandes suivantes fonctionnent.*

---

## Étape 2 — Pousser le code (à faire dans votre terminal)

```bash
cd "C:\Users\steph\.cline\data\workspaces\chat\portfolio-stephan"
git branch -M main
git remote add origin https://github.com/stephanetiverne/portfolio-stephan.git
git push -u origin main
```

Une fenêtre GitHub peut s'ouvrir pour vous connecter → acceptez et autorisez.

---

## Étape 3 — Déployer sur Vercel (2 minutes)

1. Connectez-vous sur https://vercel.com avec votre compte
2. Cliquez sur **Add New…** → **Project**
3. Suivez l'assistant pour **importer votre dépôt GitHub** (`portfolio-stephan`)
4. Vercel détectera automatiquement **Vite** :
   - Framework Preset : **Vite**
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Cliquez sur **Deploy** 🎉

---

## Étape 4 — Vérifier

- Vercel vous donne une URL du type : `https://portfolio-stephan.vercel.app`
- Chaque push sur `main` redéploiera automatiquement le site ✅

---

## En cas de souci

- **Push refusé/authentification** → installez GitHub Desktop (https://desktop.github.com), ouvrez le dossier du projet, puis *Publish branch*.
- **Vercel ne trouve pas le dépôt** → vérifiez que votre compte GitHub est bien connecté dans Vercel (Settings → Git).
- **Modifier le contenu du site** → tout est dans `src/data/portfolio.js` (nom, contact, compétences, projets). Ensuite `git add -A && git commit -m "message" && git push` → le site se met à jour tout seul.