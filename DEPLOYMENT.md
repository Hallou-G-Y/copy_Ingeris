# Guide de Déploiement GitHub Pages

## Configuration GitHub Pages

### 1. Activation de GitHub Pages

1. Allez dans les **Settings** de votre repository GitHub
2. Naviguez vers la section **Pages** dans le menu de gauche
3. Dans **Source**, sélectionnez **GitHub Actions**

### 2. Configuration des Permissions

Le workflow GitHub Actions nécessite les permissions suivantes :
- `contents: read` - Pour lire le code source
- `pages: write` - Pour déployer sur GitHub Pages
- `id-token: write` - Pour l'authentification

Ces permissions sont déjà configurées dans le workflow `.github/workflows/deploy.yml`.

### 3. Variables d'Environnement

Aucune variable d'environnement n'est nécessaire pour ce déploiement.

## Workflow CI/CD

Le pipeline automatique effectue les étapes suivantes :

### Sur chaque Push/Pull Request :
1. **Checkout** du code source
2. **Setup** de Node.js 18 et pnpm
3. **Cache** des dépendances pnpm
4. **Installation** des dépendances avec pnpm install --frozen-lockfile
5. **Vérification** des packages TypeScript ESLint
6. **Linting** du code TypeScript/React
7. **Build** du projet React
8. **Upload** des artefacts de build

### Sur Push vers main/master :
8. **Déploiement** automatique sur GitHub Pages

## Structure du Déploiement

- **URL de base** : `https://[username].github.io/copy_Ingeris/`
- **Dossier de build** : `dist/`
- **Branch de déploiement** : `main` ou `master`

## Optimisations

Le build est optimisé avec :
- **Code splitting** automatique
- **Chunks manuels** pour React, React Router et React Icons
- **Cache** des dépendances pnpm
- **Installation** sécurisée avec --frozen-lockfile
- **Sourcemaps** désactivées en production

## Dépannage

### Problèmes courants :

1. **Erreur 404** : Vérifiez que la base URL dans `vite.config.ts` correspond au nom de votre repository
2. **Build échoue** : Vérifiez les erreurs de linting dans les logs GitHub Actions
3. **Déploiement ne se lance pas** : Vérifiez que vous poussez sur la branche `main` ou `master`

### Logs utiles :
- Actions → Workflows → Deploy to GitHub Pages
- Onglet "Actions" dans votre repository GitHub

## Déploiement Manuel

Si nécessaire, vous pouvez déclencher un déploiement manuel :
1. Allez dans Actions → Deploy to GitHub Pages
2. Cliquez sur "Run workflow"
3. Sélectionnez la branche source
4. Cliquez sur "Run workflow" 