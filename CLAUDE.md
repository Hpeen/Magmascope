# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project structure

The React app lives at `Magmascope/magmascope/`. All commands below must be run from that directory.

```
Magmascope/magmascope/
  src/
    components/      # UI components, each in its own folder with paired .css
    context/         # GlobeContext.jsx, LanguageContext.jsx
    data/            # Static data: volcanoes.js, i18n.js, eruptionProfile.js, monitoring.js
    hooks/           # useGlobe.js (main globe logic), useSearch.js
    three/           # eruptionEffects.js (Three.js mesh builders)
    styles/          # global.css, tokens.css, cluster.css
    __tests__/       # Vitest test files
```

## Commands

```bash
# from Magmascope/magmascope/
npm run dev       # start dev server
npm run build     # production build
npm run lint      # ESLint
npm run test      # run tests (Vitest)
npx vitest run --reporter=verbose  # single test run with details
```

## Architecture

### Globe rendering
Three.js and Globe.gl are loaded from **CDN** in `index.html` as `window.THREE` and `window.Globe` — they are not npm packages and must be accessed as globals. `GlobeContainer.jsx` is just a mount-point div; all globe logic lives in `useGlobe.js`.

`useGlobe.js` has a single mount-once `useEffect` that initializes the Globe.gl instance, builds 3D volcano markers (truncated cones + glow halos via Three.js), clusters nearby volcanoes into group markers, wires up raycaster-based click/hover, and manages auto-rotation. Subsequent effects in the same hook handle eruption animation, selection highlighting, and search filtering.

### State management
Two React contexts wrap the entire app:
- **`GlobeContext`** — selected volcano, eruption state machine (`idle → erupting → aftermath`), affected cities list. `lockVolcano` / `unlockVolcano` control selection; `startEruption` / `stopEruption` / `markEruptionAftermath` drive the simulation.
- **`LanguageContext`** — `en` / `ro` toggle, persisted to `localStorage` key `magmascope.lang`. Default is `ro`.

### Eruption system
1. `eruptionProfile.js` — pure functions that derive scientific values (plume height, lava extent, ash radius, pyroclastic zone, duration) from VEI + volcano type. Also provides visual scale factors for 3D rendering and aftermath text bucketed into five tiers.
2. `eruptionEffects.js` — creates/animates Three.js meshes (plume cone, lava disk, ash cloud, city markers). Returns `{ update(elapsedS), dispose(), cities[] }`.
3. `useGlobe.js` eruption effect — calls `createEruption`, runs `requestAnimationFrame` loop calling `update()`, hides non-erupting markers, zooms camera to vent. City collision separation runs up to 10 relaxation iterations. Cities are only shown for VEI ≥ 5.
4. `EruptionPanel.jsx` — reads `eruptingVolcano` / `eruptionPhase` from context, animates stat readouts with an eased progress calculation, and renders the cities-in-danger sidebar.

### i18n
All UI strings go through `t(key, lang)` from `src/data/i18n.js`. Volcano type, status, and country names have translation fallbacks via `tFallback`. Volcano names themselves are never translated. Curated per-volcano city data in `eruptionEffects.js` includes both `desc` / `desc_ro` and `damage` / `damage_ro` fields.

### Volcano data
`src/data/volcanoes.js` exports `VOLCANO_DATA` — an array of objects with `{ id, name, lat, lng, country, region, type, status, vei, notable, lastEruption, elevation }`. `volcanoes-ro.js` is a Romanian-named mirror (used for search, not rendering).

### Clustering
`useGlobe.js` builds clusters at mount time using a greedy 400 km haversine threshold, weighted by VEI. Clusters render as oversized cone markers plus HTML overlay badges. Cluster visibility fades in/out based on camera distance and is hidden during eruptions.
