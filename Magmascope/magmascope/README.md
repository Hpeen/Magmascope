# Magmascope

Interactive 3D globe showing 226 active, dormant, and historic volcanoes worldwide. Built with Vite + React, Three.js, and Globe.gl.

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Setup

```bash
cd magmascope
npm install
```

## Running locally

```bash
npm run dev
```

Opens at `http://localhost:5173` (or the next available port).

## Building for production

```bash
npm run build      # output goes to dist/
npm run preview    # preview the production build at http://localhost:4173
```

## Running tests

```bash
npm run test                # watch mode
npm run test -- --run       # single run
```

## Project structure

```
src/
  data/           Volcano dataset, i18n dictionary, monitoring agencies
  hooks/          useGlobe (Globe.gl boundary), useSearch (filter logic)
  context/        LanguageContext, GlobeContext
  components/     Feature-organized React components
  styles/         Global CSS tokens, reset, cluster/tooltip styles
```

## Architecture notes

- **Three.js and Globe.gl are loaded from CDN** via `index.html` script tags, not bundled through Vite. This is intentional — Globe.gl has WebGL build issues when processed by module bundlers.
- **CORS**: WebGL textures must come from CORS-permissive hosts. Current textures are on unpkg.com. Do not swap texture URLs without verifying the host allows cross-origin reads.
- **Never call `customLayerData(filtered)`** — this rebuilds all 226 Three.js cone meshes and causes race conditions. Search filtering toggles `mesh.visible` on existing objects instead.
- The `useGlobe` hook owns all imperative Three.js code. React components only read state from `GlobeContext` and `LanguageContext`.
asfsafsaf
