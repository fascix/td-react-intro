# TD React Intro

Ce projet est un TP d’introduction à **React**, réalisé pour découvrir les composants fonctionnels, la gestion de l’état, les effets secondaires, et l’affichage dynamique de données.

## Description

L’application permet de :

- Afficher un message de bienvenue personnalisé.
- Gérer un compteur interactif avec `useState`.
- Mettre à jour dynamiquement le titre de la page avec `useEffect`.
- Importer et afficher une liste de super-héros depuis un fichier JSON.
- Filtrer la liste des super-héros grâce à un champ de recherche.

## Installation

1. Cloner le dépôt ou créer un projet React (`Vite`) :

```bash
npm create vite@latest td-react-intro
```

2.	Installer les dépendances :

```bash
cd td-react-intro
npm install
```

3.	Lancer le serveur de développement :

```bash
npm run dev   
```

## Fonctionnalités principales :

Le composant App.tsx contient :
- Une variable nom affichée dans le message de bienvenue avec mon prénom
- Un compteur interactif avec boutons '+' et 'Réinitialiser'.
- L’utilisation de 'useEffect' pour mettre à jour le titre de la page à chaque changement du compteur.

Liste de super-héros
- Importation d’un fichier JSON SuperHeros.json.
- Affichage du nombre total de super-héros.
- Affichage des noms de superhéros dans une liste <ul>.
- Recherche dynamique pour filtrer les super-héros selon le texte saisi dans un input.

Technologies utilisées
- React
- TypeScript
- Vite
- CSS pour avoir un style style minimal

Structure du projet

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── SuperHeros.json
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```


