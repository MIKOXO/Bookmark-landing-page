# Bookmark Landing Page

This repository contains a solution to the "Bookmark Landing Page" challenge from Frontend Mentor. It is a responsive, accessible static site built with Vite, React, and Tailwind CSS. The project reproduces the provided design and includes components for the hero, features, download, FAQ, and other sections.

## Features

- Responsive layout (mobile-first) with Tailwind CSS
- Component-based structure using React
- Accessible markup for interactive elements
- Reusable components: `Navbar`, `Hero`, `Features`, `DownloadExtension`, `FAQ`, `CTA`, `Footer`

## Tech stack

- Vite
- React
- Tailwind CSS
- PostCSS
- npm (package manager)

## Getting started

These instructions assume you have Node.js (>=14) and npm installed.

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Project structure

Key files and folders:

- `index.html` - Root HTML file
- `src/` - React source files
  - `main.jsx` - App bootstrap
  - `App.jsx` - Root app component
  - `index.css` - Tailwind imports and global styles
  - `components/` - Reusable UI components
  - `pages/` - Page-level components
- `public/` - Static assets
- `package.json` - Scripts and dependencies
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.js` - Vite configuration

## Scripts

Common npm scripts (defined in `package.json`):

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the production bundle
- `npm run preview` - Preview the production build locally
