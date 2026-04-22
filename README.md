# Pokédex

A React Pokédex web app that lets you browse Pokémon, inspect their stats, types, sprites, and moves, and read a description for each move. Built with React + Vite and styled with fantaCSS.

Data comes from the public [PokéAPI](https://pokeapi.co/). Results are cached in the browser's `localStorage` so previously viewed Pokémon and moves don't need to be refetched.

## Features

- Sidebar navigation to select a Pokémon from the Pokédex
- Detail view showing the Pokémon's number, name, types, sprites, and base stats
- Clickable moves — each move opens a modal with its in-game flavor text (from the Fire Red / Leaf Green version)
- `localStorage` cache for both Pokémon data (`pokedex` key) and move descriptions (`pokemon-moves` key)
- Responsive layout with a toggleable side menu

## Tech stack

- [React](https://react.dev/) (with Hooks: `useState`, `useEffect`)
- [Vite](https://vitejs.dev/) as the dev server and bundler
- Plain CSS + fantaCSS utility classes
- ESLint for linting
- [PokéAPI](https://pokeapi.co/api/v2/) as the data source

## Project structure

```
pokedex/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Top-level layout: Header + SideNav + PokeCard
    ├── index.css         # Global styles
    ├── fanta.css         # fantaCSS styles
    ├── assets/
    ├── utils/            # Helpers (e.g. getPokedexNumber, getFullPokedexNumber)
    └── components/
        ├── Header.jsx
        ├── SideNav.jsx
        ├── PokeCard.jsx  # Fetches and displays the selected Pokémon
        ├── TypeCard.jsx
        └── Modal.jsx
```

## Getting started

### Prerequisites

- Node.js (18+ recommended)
- npm

### Install

```bash
git clone https://github.com/MaPiJu/pokedex.git
cd pokedex
npm install
```

### Run the dev server

```bash
npm run dev
```

Then open the URL Vite prints in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## How it works

When a Pokémon is selected in the side navigation, `PokeCard` checks `localStorage` under the `pokedex` key. If the Pokémon is cached, it renders immediately; otherwise it calls `https://pokeapi.co/api/v2/pokemon/{id}`, displays the result, and writes it back to the cache.

Clicking a move button triggers the same pattern against the `pokemon-moves` cache: the move's URL from the Pokémon payload is fetched, the flavor text for the `firered-leafgreen` version group is extracted, and the result is displayed in a modal and cached for next time.

## Notes

- Large default sprites are loaded from a local `/pokemon/{id}.png` path — make sure the corresponding image assets are present in `public/pokemon/` if you want those to render.
- This project was built as a React tutorial / learning exercise.

## License

No license specified — treat as "all rights reserved" unless the author adds one.
