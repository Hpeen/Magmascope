// Eruption-profile derivation. Pure functions: given a volcano record,
// return scientifically plausible numbers (plume height, lava extent,
// ashfall radius, pyroclastic zone, duration) that drive both the
// 3D simulation and the side-panel readouts. Aftermath text is bucketed
// into five impact tiers so we never have to author per-volcano copy.

const VEI_PROFILES = [
  { vei: 0, plumeKm: 0.5, lavaKm: 8,  ashRadiusKm: 2,    pyroKm: 0,   durationS: 22 },
  { vei: 1, plumeKm: 1.5, lavaKm: 5,  ashRadiusKm: 8,    pyroKm: 1,   durationS: 22 },
  { vei: 2, plumeKm: 5,   lavaKm: 3,  ashRadiusKm: 30,   pyroKm: 2,   durationS: 22 },
  { vei: 3, plumeKm: 12,  lavaKm: 5,  ashRadiusKm: 80,   pyroKm: 5,   durationS: 24 },
  { vei: 4, plumeKm: 18,  lavaKm: 8,  ashRadiusKm: 200,  pyroKm: 10,  durationS: 26 },
  { vei: 5, plumeKm: 25,  lavaKm: 12, ashRadiusKm: 500,  pyroKm: 18,  durationS: 28 },
  { vei: 6, plumeKm: 35,  lavaKm: 15, ashRadiusKm: 1200, pyroKm: 30,  durationS: 30 },
  { vei: 7, plumeKm: 45,  lavaKm: 25, ashRadiusKm: 3000, pyroKm: 50,  durationS: 32 },
  { vei: 8, plumeKm: 55,  lavaKm: 35, ashRadiusKm: 6000, pyroKm: 80,  durationS: 34 },
];

// Per-type modifiers — shield volcanoes spew lava with little ash;
// calderas amplify ash; mud volcanoes do almost nothing visible.
const TYPE_MODIFIERS = {
  'Shield Volcano':    { plumeKm: 0.6, lavaKm: 3.0, ashRadiusKm: 0.4, pyroKm: 0.3 },
  'Cinder Cone':       { plumeKm: 0.8, lavaKm: 1.4, ashRadiusKm: 0.7, pyroKm: 0.7 },
  'Lava Cone':         { plumeKm: 0.6, lavaKm: 2.5, ashRadiusKm: 0.4, pyroKm: 0.3 },
  'Lava Dome':         { plumeKm: 0.8, lavaKm: 0.4, ashRadiusKm: 0.9, pyroKm: 1.4 },
  'Fissure Vent':      { plumeKm: 0.4, lavaKm: 4.0, ashRadiusKm: 0.3, pyroKm: 0.2 },
  'Mud Volcano':       { plumeKm: 0.2, lavaKm: 0.1, ashRadiusKm: 0.2, pyroKm: 0.0 },
  'Maar':              { plumeKm: 1.0, lavaKm: 0.3, ashRadiusKm: 1.1, pyroKm: 0.6 },
  'Caldera':           { plumeKm: 1.1, lavaKm: 1.0, ashRadiusKm: 1.2, pyroKm: 1.2 },
  'Submarine Caldera': { plumeKm: 1.0, lavaKm: 0.5, ashRadiusKm: 0.9, pyroKm: 1.1 },
  'Submarine Volcano': { plumeKm: 0.5, lavaKm: 0.5, ashRadiusKm: 0.4, pyroKm: 0.4 },
  'Submarine':         { plumeKm: 0.5, lavaKm: 0.5, ashRadiusKm: 0.4, pyroKm: 0.4 },
};

function tierFromVei(vei, type) {
  // Effusive volcanoes always read as effusive regardless of historical VEI.
  if (type === 'Shield Volcano' || type === 'Fissure Vent' || type === 'Lava Cone') return 'effusive';
  if (vei >= 6) return 'catastrophic';
  if (vei >= 5) return 'major';
  if (vei >= 3) return 'moderate';
  if (vei >= 2) return 'minor';
  return 'effusive';
}

function round1(x) {
  if (x >= 100) return Math.round(x);
  if (x >= 10) return Math.round(x);
  return Math.round(x * 10) / 10;
}

export function getEruptionProfile(volcano) {
  const vei = Math.max(0, Math.min(8, volcano.vei || 0));
  const base = VEI_PROFILES[vei];
  const mods = TYPE_MODIFIERS[volcano.type] || {};
  const plumeKm = round1(base.plumeKm * (mods.plumeKm ?? 1));
  const lavaKm = round1(base.lavaKm * (mods.lavaKm ?? 1));
  const ashRadiusKm = round1(base.ashRadiusKm * (mods.ashRadiusKm ?? 1));
  const pyroKm = round1(base.pyroKm * (mods.pyroKm ?? 1));
  const ashAreaKm2 = Math.round(Math.PI * ashRadiusKm * ashRadiusKm);
  return {
    vei,
    plumeKm,
    lavaKm,
    ashRadiusKm,
    pyroKm,
    ashAreaKm2,
    durationS: base.durationS,
    tier: tierFromVei(vei, volcano.type),
  };
}

// Visual height for the 3D plume cone (in globe-radius units, where
// the globe is 100 units). Tuned so even a VEI-2 marker's plume is
// readable at default zoom, without VEI-7 plumes leaving the camera.
const VISUAL_PLUME_HEIGHT = [0.55, 0.85, 1.25, 1.85, 2.45, 3.20, 4.30, 5.60, 7.00];
// Visual lava-flow disk radius (globe units).
const VISUAL_LAVA_RADIUS  = [0.45, 0.40, 0.30, 0.40, 0.55, 0.75, 0.95, 1.25, 1.60];

export function visualPlumeUnits(vei) {
  return VISUAL_PLUME_HEIGHT[Math.max(0, Math.min(8, vei))];
}
export function visualLavaUnits(vei, type) {
  // Shield/fissure get exaggerated lava extent (visually distinctive).
  const base = VISUAL_LAVA_RADIUS[Math.max(0, Math.min(8, vei))];
  if (type === 'Shield Volcano' || type === 'Fissure Vent') return base * 2.5;
  return base;
}

const AFTERMATH_EN = {
  effusive:
    'Slow lava advance buried farmland and a few villages along the flow path. ' +
    'No mass casualties; long-term, the new basalt will weather into fertile soil. ' +
    'Local roads, pasture, and any structures within the flow zone are total losses.',
  minor:
    'A short-lived explosive phase scattered tephra around the vent. Ashfall reaching ' +
    'several tens of kilometres caused respiratory issues, contaminated water tanks, ' +
    'and disrupted crops for one season. Small evacuations in the immediate hazard zone.',
  moderate:
    'A sustained eruption column drove ashfall across the surrounding region. Air travel ' +
    'was suspended for days; roof collapses occurred in towns within the fallout corridor. ' +
    'Tens of thousands evacuated; agriculture in the affected zone failed for one to two seasons.',
  major:
    'A Plinian column reached the stratosphere. Pyroclastic density currents leveled ' +
    'everything within tens of kilometres of the vent — settlements, forests, infrastructure. ' +
    'Stratospheric sulphate aerosols measurably cooled the hemisphere for two to three years. ' +
    'Multiple cities required permanent relocation.',
  catastrophic:
    'A globe-altering event. Pyroclastic flows obliterated regions out to dozens of kilometres ' +
    'from the vent. Ash circled the hemisphere within days; stratospheric aerosols dimmed ' +
    'sunlight for years. Failed harvests across multiple continents triggered famine. ' +
    'Comparable to Tambora 1815, Toba ~74 ka, or Yellowstone Lava Creek.',
};

const AFTERMATH_RO = {
  effusive:
    'Înaintarea lentă a lavei a îngropat terenuri agricole și câteva sate de-a lungul curgerii. ' +
    'Fără victime în masă; pe termen lung, noul bazalt se va transforma în sol fertil. ' +
    'Drumurile locale, pășunea și orice structură din zona de curgere sunt pierderi totale.',
  minor:
    'O fază explozivă scurtă a împrăștiat tefra în jurul gurii de erupție. Căderea de cenușă ' +
    'pe câteva zeci de kilometri a provocat probleme respiratorii, a contaminat rezervoarele de ' +
    'apă și a afectat culturile pentru un sezon. Evacuări limitate în zona imediată de pericol.',
  moderate:
    'O coloană eruptivă susținută a generat căderi de cenușă pe întreaga regiune. Traficul aerian ' +
    'a fost suspendat zile întregi; acoperișurile s-au prăbușit în orașele din coridorul de cenușă. ' +
    'Zeci de mii de oameni evacuați; agricultura din zona afectată a eșuat pentru unu-două sezoane.',
  major:
    'O coloană pliniană a atins stratosfera. Curenții piroclastici denși au șters tot ce se afla ' +
    'pe zeci de kilometri în jurul gurii de erupție — așezări, păduri, infrastructură. Aerosolii ' +
    'sulfatici stratosferici au răcit emisfera măsurabil timp de doi-trei ani. Mai multe orașe ' +
    'au necesitat relocare permanentă.',
  catastrophic:
    'Un eveniment care modifică planeta. Curenții piroclastici au pulverizat regiuni la zeci de ' +
    'kilometri de gura de erupție. Cenușa a înconjurat emisfera în câteva zile; aerosolii ' +
    'stratosferici au estompat lumina solară timp de ani. Recolte ratate pe mai multe continente ' +
    'au declanșat foamete. Comparabil cu Tambora 1815, Toba ~74 ka sau Yellowstone Lava Creek.',
};

export function getAftermathText(tier, lang) {
  const dict = lang === 'ro' ? AFTERMATH_RO : AFTERMATH_EN;
  return dict[tier] || dict.moderate;
}

export function tierLabel(tier, lang) {
  const labels = {
    en: { effusive: 'Effusive', minor: 'Minor', moderate: 'Moderate', major: 'Major', catastrophic: 'Catastrophic' },
    ro: { effusive: 'Efuziv', minor: 'Minor', moderate: 'Moderat', major: 'Major', catastrophic: 'Catastrofic' },
  };
  return (labels[lang] || labels.en)[tier] || tier;
}
