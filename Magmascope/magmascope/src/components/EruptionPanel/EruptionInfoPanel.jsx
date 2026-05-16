import { useEffect, useState, useRef } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { getEruptionProfile, getAftermathText, tierLabel } from '../../data/eruptionProfile';
import './EruptionInfoPanel.css';

// ── Geophysical tables ────────────────────────────────────────────────────────
const SO2_KT     = [0.1, 0.5, 2, 15, 100, 800, 5000, 25000, 100000];
const EJECTA_KM3 = [0.00001, 0.0001, 0.001, 0.01, 0.1, 1, 12, 100, 1000];
const TIME_SCALE = [2, 4, 8, 15, 25, 45, 90, 180, 300];

function formatSO2(vei) {
  const kt = SO2_KT[Math.min(8, vei)];
  if (kt >= 1000) return `${(kt / 1000).toFixed(0)} Mt/d`;
  if (kt < 1)     return `${Math.round(kt * 1000)} t/d`;
  return `${kt} kt/d`;
}
function formatEjecta(vei) {
  const v = EJECTA_KM3[Math.min(8, vei)];
  if (v < 0.001) return '<0.001 km³';
  if (v < 1)     return `${v} km³`;
  return `${v.toLocaleString()} km³`;
}
function ventTempRange(type) {
  const basaltic = ['Shield Volcano','Fissure Vent','Lava Cone'];
  const silicic  = ['Maar','Lava Dome','Caldera','Submarine Caldera'];
  if (basaltic.includes(type)) return '1,100–1,200°C';
  if (silicic.includes(type))  return '800–920°C';
  return '900–1,050°C';
}
function columnStyle(vei, isRo) {
  const en = ['Hawaiian','Strombolian','Vulcanian','Sub-Plinian','Plinian','Plinian','Ultra-Plinian','Ultra-Plinian','Caldera-forming'];
  const ro = ['Hawaiian','Strombolian','Vulcanian','Sub-Plinian','Plinian','Plinian','Ultra-Plinian','Ultra-Plinian','Formare de calderă'];
  return (isRo ? ro : en)[Math.min(8, vei)];
}

// ── Projected impact ──────────────────────────────────────────────────────────
const CASUALTIES_EN = ['','<50','<100','100s','1,000s–10,000s','10,000s–100,000s','100,000s–millions','Millions','Tens of millions'];
const CASUALTIES_RO = ['','<50','<100','Sute','Mii–zeci de mii','Zeci–sute de mii','Sute de mii–milioane','Milioane','Zeci de milioane'];
const DISPLACED_EN  = ['','<500','~2,000','~20,000','~50,000–200,000','~200,000–1M','~1M–10M','~10M–50M','~50M+'];
const DISPLACED_RO  = ['','<500','~2.000','~20.000','~50.000–200.000','~200.000–1M','~1M–10M','~10M–50M','~50M+'];
const ECONOMIC_EN   = ['','$1M','$10M','$100M','$1–10B','$10–100B','$100B–$1T','$1–10T','$10T+'];
const ECONOMIC_RO   = ['','$1M','$10M','$100M','$1–10 mild.','$10–100 mild.','$100M–$1 tril.','$1–10 tril.','$10 tril.+'];

// ── Helpers ───────────────────────────────────────────────────────────────────
function fmtSimTime(mins) {
  if (mins < 60) return `T+${mins}min`;
  const h = Math.floor(mins / 60), m = mins % 60;
  if (h >= 24) { const d = Math.floor(h / 24), rh = h % 24; return rh ? `T+${d}d ${rh}h` : `T+${d}d`; }
  return m ? `T+${h}h ${m}min` : `T+${h}h`;
}
function formatKm(km) {
  return km >= 1000 ? km.toLocaleString() : km;
}
function veiBadgeClass(vei) {
  if (vei >= 6) return 'eip-vei-badge vei-extreme';
  if (vei >= 4) return 'eip-vei-badge vei-high';
  if (vei >= 2) return 'eip-vei-badge vei-mid';
  return 'eip-vei-badge vei-low';
}

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const ease    = (x) => 1 - Math.pow(1 - x, 3);

function buildTimeline(profile, v, isRo) {
  const vei = profile.vei;
  const scale = TIME_SCALE[Math.min(8, vei)];
  const dur   = profile.durationS;
  const ts    = (f) => fmtSimTime(Math.round(f * dur * scale));
  const mag   = (4.0 + vei * 0.35).toFixed(1);

  if (vei >= 5) {
    const evs = [
      { at: 0,    time: ts(0),    sev: 'critical', en: `M${mag} tremor registered; vent opens, gas-and-ash column begins rising`,                                     ro: `Cutremur M${mag}; gura de erupție se deschide, coloană de gaze se ridică` },
      { at: 0.08, time: ts(0.08), sev: 'critical', en: `Plinian column stabilises at ${profile.plumeKm} km; fine ash injected into stratosphere`,                    ro: `Coloana Pliniană la ${profile.plumeKm} km; cenușă fină injectată în stratosferă` },
      { at: 0.15, time: ts(0.15), sev: 'critical', en: `Pyroclastic density currents confirmed; evacuation zone extended to ${profile.pyroKm} km`,                   ro: `Curenți piroclastici confirmați; evacuare extinsă la ${profile.pyroKm} km` },
      { at: 0.25, time: ts(0.25), sev: 'warning',  en: `SO₂ cloud detected by satellite; downwind cities enter air-quality alert`,                                   ro: `Norul de SO₂ detectat prin teledetecție; orașe din aval în alertă` },
      { at: 0.35, time: ts(0.35), sev: 'warning',  en: `Aviation RED: airports within ${Math.round(profile.ashRadiusKm * 0.15)} km closed; routes diverted`,         ro: `Aviație ROȘU: aeroporturi în ${Math.round(profile.ashRadiusKm * 0.15)} km închise` },
      { at: 0.48, time: ts(0.48), sev: 'warning',  en: `Lava front at ${Math.round(profile.lavaKm * 0.5)} km; road infrastructure compromised`,                     ro: `Frontul de lavă la ${Math.round(profile.lavaKm * 0.5)} km; drumuri compromise` },
      { at: 0.62, time: ts(0.62), sev: 'warning',  en: `Heavy ash fall ${Math.round(profile.ashRadiusKm * 0.4)} km downwind; roof collapses reported`,               ro: `Căderi grele la ${Math.round(profile.ashRadiusKm * 0.4)} km sub vânt; acoperișuri cedează` },
    ];
    if (vei >= 6) evs.push({ at: 0.68, time: ts(0.68), sev: 'critical', en: `Partial edifice collapse; secondary pyroclastic surges propagate outward`, ro: `Colaps parțial al edificiului; valuri piroclastice secundare` });
    evs.push(
      { at: 0.82, time: ts(0.82), sev: 'info', en: `Intensity declining; column height drops and begins to collapse`,  ro: `Intensitate în scădere; coloana se destabilizează` },
      { at: 1.0,  time: ts(1.0),  sev: 'info', en: `Main phase ends; aftershocks and gas emission persist for weeks`,  ro: `Faza principală încheiată; replici și degajare de gaze persistă` },
    );
    return evs.map(e => ({ triggerAt: e.at, time: e.time, severity: e.sev, text: isRo ? e.ro : e.en }));
  }

  return [
    { triggerAt: 0,    time: ts(0),    severity: 'warning',  text: isRo ? `Roi seismic precursor; emisii crescute de SO₂ și vapori`                                   : `Precursory seismic swarm; elevated SO₂ and steam emissions at surface` },
    { triggerAt: 0.12, time: ts(0.12), severity: 'critical', text: isRo ? `Erupție inițiată; lavă și tefră ejectate din gura principală`                               : `Eruption begins; lava and tephra ejected from main vent` },
    { triggerAt: 0.38, time: ts(0.38), severity: 'warning',  text: isRo ? `Căderi de tefră în raza de ${Math.round(profile.ashRadiusKm * 0.5)} km; avertisment emis`  : `Tephra fall within ${Math.round(profile.ashRadiusKm * 0.5)} km; advisory issued` },
    { triggerAt: 0.72, time: ts(0.72), severity: 'info',     text: isRo ? `Activitate în stabilizare; curgere de lavă la ${Math.round(profile.lavaKm * 0.6)} km`       : `Activity stabilising; lava flow extends to ${Math.round(profile.lavaKm * 0.6)} km` },
    { triggerAt: 1.0,  time: ts(1.0),  severity: 'info',     text: isRo ? `Erupție în subsistență; monitorizare continuă`                                              : `Eruption subsiding; continuous monitoring maintained` },
  ];
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function EruptionInfoPanel() {
  const { eruptingVolcano, eruptionPhase, stopEruption, affectedCities } = useGlobeContext();
  const { currentLang } = useLanguage();

  const [elapsed, setElapsed] = useState(0);
  const rafRef  = useRef(0);
  const startRef = useRef(0);
  const isActive = !!eruptingVolcano;

  useEffect(() => {
    if (!isActive || eruptionPhase !== 'erupting') { setElapsed(0); return; }
    startRef.current = performance.now();
    const tick = () => {
      setElapsed((performance.now() - startRef.current) / 1000);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive, eruptionPhase, eruptingVolcano]);

  const prevEngulfedRef = useRef(new Set());
  const [flashSet, setFlashSet] = useState(new Set());
  useEffect(() => {
    const cur = new Set(affectedCities.filter(c => c.status === 'Engulfed').map(c => c.name));
    const newly = [...cur].filter(n => !prevEngulfedRef.current.has(n));
    prevEngulfedRef.current = cur;
    if (!newly.length) return;
    setFlashSet(new Set(newly));
    const id = setTimeout(() => setFlashSet(new Set()), 1800);
    return () => clearTimeout(id);
  }, [affectedCities]);

  if (!eruptingVolcano) return <aside className="eruption-info-panel" aria-hidden="true" />;

  const v           = eruptingVolcano;
  const profile     = getEruptionProfile(v);
  const vei         = profile.vei;
  const isMajor     = vei >= 5;
  const isRo        = currentLang === 'ro';
  const lbl         = (en, ro) => isRo ? ro : en;
  const isErupting  = eruptionPhase === 'erupting';
  const isAftermath = eruptionPhase === 'aftermath';

  const progress      = isAftermath ? 1 : clamp01(elapsed / profile.durationS);
  const plumeT        = ease(clamp01((elapsed - profile.durationS * 0.05) / (profile.durationS * 0.35)));
  const lavaT         = ease(clamp01((elapsed - profile.durationS * 0.20) / (profile.durationS * 0.80)));
  const currentPlumeKm = isAftermath ? profile.plumeKm : Math.round(profile.plumeKm * plumeT * 10) / 10;
  const currentLavaKm  = isAftermath ? profile.lavaKm  : Math.round(profile.lavaKm  * lavaT  * 10) / 10;
  const elapsedDisp   = isAftermath
    ? profile.durationS.toFixed(1)
    : Math.min(elapsed, profile.durationS).toFixed(1);

  const tierName = tierLabel(profile.tier, currentLang);

  const timeline = buildTimeline(profile, v, isRo);
  const timelineWithState = timeline.map(e => ({
    ...e,
    unlocked: isAftermath || progress >= e.triggerAt,
  }));
  const currentEventIdx = timelineWithState.reduceRight(
    (found, e, i) => found !== -1 ? found : (e.unlocked ? i : -1), -1
  );

  const sortedCities = [...affectedCities].sort((a, b) => a.distKm - b.distKm);
  const aviationKm   = Math.round(profile.ashRadiusKm * 0.15);

  return (
    <aside className={`eruption-info-panel${isActive ? ' active' : ''}`} aria-hidden={!isActive}>
      <div className="eip-inner" key={v.id}>
        <div className="eip-ambient" />

        {/* ── Header ── */}
        <div className="eip-panel-header">
          <div className="eip-header-top">
            <span className="eip-panel-eyebrow">{lbl('Eruption Simulation', 'Simulare Eruptivă')}</span>
            <button className="close-btn eip-close-btn" aria-label={lbl('Stop simulation', 'Oprește simularea')} onClick={stopEruption}>×</button>
          </div>
          <div className="eip-title-row">
            <span className="eip-panel-volcano">{v.name}</span>
            <span className={veiBadgeClass(vei)}>VEI {vei}</span>
          </div>
          <span className="eip-subtitle-line">
            {tierName} · {v.country}{v.region ? ` · ${v.region}` : ''}
          </span>
        </div>

        {/* ── Phase + Progress ── */}
        <div className="eip-phase-block">
          <div className={`eip-phase ${isErupting ? 'is-erupting' : 'is-aftermath'}`}>
            <span className="phase-pulse" />
            <span className="phase-label">
              {isErupting ? lbl('Erupting', 'Erupție Activă') : lbl('Aftermath', 'Consecințe')}
            </span>
            <span className="phase-elapsed">{elapsedDisp} / {profile.durationS} s</span>
          </div>
          <div className="eip-progress">
            <div className="eip-progress-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        {/* ── Live Stats ── */}
        <div className="eip-section" style={{ '--delay': '0.08s' }}>
          <div className="eip-section-title">{lbl('Live Data', 'Date Live')}</div>
          <div className="eip-stats-grid">
            <div className="eip-stat live">
              <div className="eip-stat-label">{lbl('Plume Height', 'Înălțime Penaj')}</div>
              <div className="eip-stat-value">{formatKm(currentPlumeKm)}<span className="eip-stat-unit"> km</span></div>
              <div className="eip-stat-sub">↑ max {formatKm(profile.plumeKm)} km</div>
            </div>
            <div className="eip-stat live">
              <div className="eip-stat-label">{lbl('Lava Extent', 'Extindere Lavă')}</div>
              <div className="eip-stat-value">{formatKm(currentLavaKm)}<span className="eip-stat-unit"> km</span></div>
              <div className="eip-stat-sub">↑ max {formatKm(profile.lavaKm)} km</div>
            </div>
            {isMajor && <>
              <div className="eip-stat">
                <div className="eip-stat-label">{lbl('Ash Radius', 'Rază Cenușă')}</div>
                <div className="eip-stat-value">{formatKm(profile.ashRadiusKm)}<span className="eip-stat-unit"> km</span></div>
                <div className="eip-stat-sub">{profile.ashAreaKm2.toLocaleString()} km²</div>
              </div>
              <div className="eip-stat">
                <div className="eip-stat-label">{lbl('Pyroclastic', 'Piroclastic')}</div>
                <div className="eip-stat-value">{formatKm(profile.pyroKm)}<span className="eip-stat-unit"> km</span></div>
                <div className="eip-stat-sub">{lbl('lethal surge radius', 'rază surge letală')}</div>
              </div>
            </>}
          </div>
        </div>

        {/* ── Geophysical Data ── */}
        <div className="eip-section" style={{ '--delay': '0.18s' }}>
          <div className="eip-section-title">{lbl('Geophysical Data', 'Date Geofizice')}</div>
          <div className="eip-geo-grid">
            {[
              { val: formatSO2(vei),        lbl: lbl('SO₂ Flux','Flux SO₂'),          sub: lbl('peak emission','emisie maximă') },
              { val: formatEjecta(vei),      lbl: lbl('Ejecta Volume','Vol. Ejectat'),  sub: lbl('dense rock equiv.','echiv. rocă densă') },
              { val: ventTempRange(v.type),  lbl: lbl('Vent Temp.','Temp. Vent'),       sub: lbl('at crater','la crater') },
              { val: columnStyle(vei, isRo), lbl: lbl('Column Style','Stil Coloană'),   sub: lbl('eruption type','tip eruptiv') },
            ].map((c, i) => (
              <div key={i} className="geo-cell">
                <div className="geo-value">{c.val}</div>
                <div className="geo-label">{c.lbl}</div>
                <div className="geo-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="eip-section" style={{ '--delay': '0.28s' }}>
          <div className="eip-section-title">{lbl('Destruction Timeline', 'Cronologia Distrugerii')}</div>
          <div className="eip-timeline">
            {timelineWithState.map((e, i) => (
              <div key={i} className={['tl-event', e.severity, e.unlocked && 'unlocked', i === currentEventIdx && isErupting && 'current'].filter(Boolean).join(' ')}>
                <div className="tl-dot-col">
                  <span className="tl-dot" />
                  {i < timelineWithState.length - 1 && <span className="tl-line" />}
                </div>
                <div className="tl-body">
                  <span className="tl-time">{e.time}</span>
                  <p className="tl-text">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Projected Impact ── */}
        {isMajor && (
          <div className="eip-section" style={{ '--delay': '0.38s' }}>
            <div className="eip-section-title">{lbl('Projected Impact', 'Impact Proiectat')}</div>
            <div className="eip-impact-grid">
              {[
                { icon: '💀', val: (isRo ? CASUALTIES_RO : CASUALTIES_EN)[Math.min(8,vei)], lbl: lbl('Casualties','Victime') },
                { icon: '🏚', val: (isRo ? DISPLACED_RO  : DISPLACED_EN )[Math.min(8,vei)], lbl: lbl('Displaced','Evacuați') },
                { icon: '💸', val: (isRo ? ECONOMIC_RO   : ECONOMIC_EN  )[Math.min(8,vei)], lbl: lbl('Economic Loss','Pierderi econ.') },
                { icon: '✈',  val: `${aviationKm} km`,                                        lbl: lbl('Aviation Closure','Zonă aviație') },
              ].map((c, i) => (
                <div key={i} className="imp-cell">
                  <span className="imp-icon">{c.icon}</span>
                  <div className="imp-value">{c.val}</div>
                  <div className="imp-label">{c.lbl}</div>
                </div>
              ))}
            </div>
            <p className="imp-note">{lbl('Worst-case estimates assuming dense population. Actual impact is location-dependent.','Estimări în cel mai rău caz. Impactul real depinde de localizare.')}</p>
          </div>
        )}

        {/* ── Hazard Zones ── */}
        {isMajor && (
          <div className="eip-section" style={{ '--delay': '0.48s' }}>
            <div className="eip-section-title">{lbl('Hazard Zones', 'Zone de Hazard')}</div>
            <div className="eip-zones">
              {[
                { cls: 'zone-magma', title: lbl('Exclusion Zone','Zonă de Excludere'), desc: lbl('No survival. Pyroclastic flows, lava, and lethal gas concentration.','Supraviețuire imposibilă. Curenți piroclastici, lavă și gaze letale.') },
                { cls: 'zone-pyro',  title: lbl('Evacuation Zone','Zonă de Evacuare'), desc: lbl('Mandatory evacuation. High fatality risk from surges, lahars, and ashfall.','Evacuare obligatorie. Risc ridicat de deces prin valuri piroclastice și lahare.') },
                { cls: 'zone-ash',   title: lbl('Ash Zone','Zona de Cenușă'),           desc: lbl('Heavy ashfall, roof collapses, respiratory risk.','Căderi grele de cenușă, risc respirator.') },
              ].map((z, i) => (
                <div key={i} className="zone-row">
                  <div className={`zone-dot ${z.cls}`} />
                  <div><strong>{z.title}</strong> — {z.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Aftermath ── */}
        <div className="eip-section" style={{ '--delay': isMajor ? '0.58s' : '0.38s' }}>
          <div className="eip-section-title">{lbl('Destruction & Aftermath', 'Distrugere & Consecințe')}</div>
          <div className="eip-aftermath">
            <p>{getAftermathText(profile.tier, currentLang)}</p>
          </div>
        </div>

        {/* ── Cities ── */}
        {sortedCities.length > 0 && (
          <div className="eip-section" style={{ '--delay': isMajor ? '0.68s' : '0.48s' }}>
            <div className="eip-section-title">{lbl('Cities in Danger', 'Orașe în Pericol')}</div>
            <div className="eip-cities">
              {sortedCities.map(city => {
                const desc    = isRo && city.desc_ro   ? city.desc_ro   : city.desc;
                const damage  = isRo && city.damage_ro ? city.damage_ro : city.damage;
                const engulfed = city.status === 'Engulfed';
                const flashing = flashSet.has(city.name);
                return (
                  <div key={city.name} className={['city-card', engulfed && 'engulfed', flashing && 'flashing'].filter(Boolean).join(' ')}>
                    <div className="city-card-top">
                      <span className="city-name">{city.name}</span>
                      {engulfed && <span className="city-fire">🔥</span>}
                      <span className="city-dist">{Math.round(city.distKm)} km</span>
                    </div>
                    {city.pop  && <div className="city-pop">{city.pop.toLocaleString()} {lbl('pop.','loc.')}</div>}
                    {desc      && <div className="city-desc">{desc}</div>}
                    {engulfed && damage && <div className="city-damage"><strong>{lbl('Impact','Impact')}:</strong> {damage}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── End simulation ── */}
        <div className="eip-section eip-reset-section" style={{ '--delay': '0s' }}>
          <button className="eip-reset-btn" onClick={stopEruption}>
            {lbl('End Simulation', 'Încheie Simularea')}
          </button>
        </div>

        <p className="eip-disclaimer">
          {lbl('Stylized model based on historical VEI and edifice type. Eruptions vary widely.','Model stilizat bazat pe IEV istoric și tipul edificiului. Erupțiile variază considerabil.')}
        </p>
      </div>
    </aside>
  );
}
