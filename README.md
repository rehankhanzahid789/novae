# NOVAÉ — Reset. Repair. Glow.

A conceptual, frontend-only marketing + e-commerce site for NOVAÉ, a modern skincare brand.
Built with React, Vite, and react-router-dom. No backend — cart state lives in React Context
+ localStorage, and login / sign up / checkout intentionally end in a brand-styled
"Sorry, website down for maintenance." message, since this is a portfolio concept, not a live store.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` to match your GitHub username/repo, e.g.
   `"homepage": "https://yourusername.github.io/novae"`.
2. Push this project to a GitHub repo named `novae` (or update the homepage URL to match your repo name).
3. Run:

```bash
npm run deploy
```

This builds the site and pushes the `dist` folder to a `gh-pages` branch. Then in your repo
settings, set GitHub Pages to serve from the `gh-pages` branch.

The app uses `HashRouter`, so client-side routes (like `/#/shop`) work correctly on GitHub Pages
without any extra server configuration or 404 redirects.

## Project structure

- `src/components` — Navbar, Footer, Hero, ProductCard, MaintenanceModal
- `src/context/CartContext.jsx` — cart state (React Context + localStorage)
- `src/data/products.js` — product catalog
- `src/pages` — one component per route (Home, Shop, ProductDetail, Cart, Checkout, Login, SignUp, About, NotFound)
- `src/assets` — brand imagery cropped from the provided NOVAÉ asset pack

## Brand

- Colors: espresso `#523B31`, forest `#294637`, bone `#EAE6DE`
- Fonts: Cormorant Garamond (serif) + Montserrat (sans-serif), loaded via Google Fonts
