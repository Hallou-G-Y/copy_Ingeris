# Ingeris Clone - React Application

Une application React moderne qui reproduit fidèlement le site web d'Ingeris (https://www.ingeris.com) avec une interface responsive et des fonctionnalités complètes.

## 🚀 Technologies utilisées

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **React Router v6** pour la navigation
- **React Icons** pour les icônes

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd ingeris-clone
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # Navigation principale
│   ├── Footer.tsx      # Pied de page
│   └── DomainGrid.tsx  # Grille des domaines
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── Domains.tsx     # Page des domaines
│   ├── Services.tsx    # Page des services
│   ├── Careers.tsx     # Page carrières
│   ├── Contact.tsx     # Page contact
│   └── Quote.tsx       # Page devis
├── data/               # Données statiques
│   └── domains.ts      # Données des domaines
├── App.tsx             # Composant principal
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🎨 Fonctionnalités

### ✅ Implémentées

- **Header responsive** avec navigation et menu hamburger
- **Page d'accueil** avec hero section, stats et grille de domaines
- **Navigation complète** entre toutes les pages
- **Formulaires fonctionnels** (Contact et Devis)
- **Design responsive** pour mobile, tablette et desktop
- **Accessibilité** avec HTML sémantique et attributs ARIA
- **SEO optimisé** avec meta tags appropriés

### 📱 Responsive Design

- **Mobile First** : Optimisé pour les écrans mobiles
- **Tablette** : Adaptation pour les écrans moyens
- **Desktop** : Interface complète pour les grands écrans

### 🎯 Pages disponibles

- **Accueil** (`/`) : Page principale avec présentation
- **Domaines** (`/domains`) : Tous les domaines d'activité
- **Services** (`/services`) : Prestations avec sous-pages
- **Carrières** (`/careers`) : Offres d'emploi
- **Contact** (`/contact`) : Formulaire de contact
- **Devis** (`/quote`) : Demande de devis

## 🚀 Scripts disponibles

```bash
npm run dev          # Lance le serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualise le build de production
npm run lint         # Vérification du code avec ESLint
```

## 🌐 Déploiement GitHub Pages

Le projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

### Configuration automatique

1. **Poussez votre code** sur la branche `main` ou `master`
2. **Activez GitHub Pages** dans les Settings du repository
3. **Sélectionnez "GitHub Actions"** comme source
4. Le déploiement se lance automatiquement !

### Workflow CI/CD

Le pipeline automatique :
- ✅ Installe les dépendances avec npm
- ✅ Lance les tests de linting
- ✅ Build le projet React
- ✅ Déploie sur GitHub Pages

📖 **Guide complet** : Voir [DEPLOYMENT.md](./DEPLOYMENT.md)

### URL de déploiement

Votre site sera accessible à : `https://[username].github.io/copy_Ingeris/`

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'ingeris-blue': '#1e40af',
  'ingeris-dark': '#1f2937',
  'ingeris-gray': '#6b7280',
}
```

### Styles

Les styles personnalisés sont dans `src/index.css` avec les classes utilitaires :

- `.btn-primary` : Bouton principal
- `.btn-secondary` : Bouton secondaire
- `.container-custom` : Conteneur centré

## 📝 Notes importantes

- Les images des domaines utilisent des placeholders. Remplacez les URLs dans `src/data/domains.ts` par vos vraies images.
- Les formulaires sont fonctionnels mais n'envoient pas réellement les données. Intégrez votre backend selon vos besoins.
- Le site est optimisé pour les performances avec lazy loading des images.

## 🔧 Configuration avancée

### Variables d'environnement

Créez un fichier `.env` pour les variables d'environnement :

```env
VITE_API_URL=https://api.ingeris.com
VITE_CONTACT_EMAIL=contact@ingeris.com
```

### Build de production

```bash
npm run build
```

Le build sera généré dans le dossier `dist/` et prêt pour le déploiement.

## 📄 Licence

Ce projet est créé à des fins éducatives et de démonstration.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**Développé avec ❤️ pour reproduire fidèlement le site d'Ingeris** 