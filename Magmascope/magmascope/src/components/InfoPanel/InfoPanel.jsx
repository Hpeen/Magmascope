import { useEffect, useState } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { t, tFallback, formatEruption } from '../../data/i18n';
import { DESCRIPTIONS_RO } from '../../data/volcanoes-ro';
import SafetySection from './SafetySection';
import './InfoPanel.css';

const imageCache = new Map();

async function fetchVolcanoImage(wikiTitle) {
  if (!wikiTitle) return null;
  if (imageCache.has(wikiTitle)) return imageCache.get(wikiTitle);
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const imgUrl = data.originalimage?.source || data.thumbnail?.source || null;
    imageCache.set(wikiTitle, imgUrl);
    return imgUrl;
  } catch (err) {
    console.warn(`[Magmascope] Could not fetch image for "${wikiTitle}":`, err);
    imageCache.set(wikiTitle, null);
    return null;
  }
}

export default function InfoPanel() {
  const { selectedVolcano, unlockVolcano, startEruption, eruptionPhase } = useGlobeContext();
  const { currentLang } = useLanguage();
  const [heroUrl, setHeroUrl] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const v = selectedVolcano;
    if (!v?.imageUrl && !v?.wikiTitle) {
      setHeroUrl(null);
      setHeroLoaded(false);
      return;
    }
    let cancelled = false;
    setHeroUrl(null);
    setHeroLoaded(false);

    function loadUrl(url) {
      if (cancelled || !url) return;
      const img = new Image();
      img.onload = () => { if (!cancelled) { setHeroUrl(url); setHeroLoaded(true); } };
      img.onerror = () => {};
      img.src = url;
    }

    if (v.imageUrl) {
      loadUrl(v.imageUrl);
    } else {
      fetchVolcanoImage(v.wikiTitle).then(loadUrl);
    }
    return () => { cancelled = true; };
  }, [selectedVolcano]);

  function handleClose() {
    unlockVolcano();
  }

  const v = selectedVolcano;
  const isActive = !!v;

  const fmtLat = v ? `${Math.abs(v.lat).toFixed(3)}° ${v.lat >= 0 ? 'N' : 'S'}` : '';
  const fmtLng = v ? `${Math.abs(v.lng).toFixed(3)}° ${v.lng >= 0 ? 'E' : 'W'}` : '';

  return (
    <aside
      className={`info-panel${isActive ? ' active' : ''}${v?.notable ? ' is-notable' : ''}`}
      id="infoPanel"
      aria-hidden={!isActive}
    >
      {v && (
        <div className="panel-inner" id="panelInner">
          <div className="panel-hero" id="panelHero">
            {heroUrl && (
              <img
                className={`panel-hero-img${heroLoaded ? ' loaded' : ''}`}
                id="panelHeroImg"
                src={heroUrl}
                alt=""
              />
            )}
            {heroLoaded && (
              <span className="panel-hero-credit visible" id="panelHeroCredit">
                {t('panel.photoCredit', currentLang)}
              </span>
            )}
          </div>

          <div className="panel-header">
            <span className="panel-tag">
              {t('panel.record', currentLang)} · {v.id.toUpperCase()}
            </span>
            <button className="close-btn" id="closePanel" aria-label="Close panel" onClick={handleClose}>
              ×
            </button>
          </div>

          <div className="panel-section">
            <h2 className="volcano-name">{v.name}</h2>
            <div className="volcano-location">
              {v.region} · {tFallback('country', v.country, currentLang)}
            </div>
            <div className="status-row">
              <span className="chip chip-active">{tFallback('status', v.status, currentLang)}</span>
              <span className="chip">{tFallback('type', v.type, currentLang)}</span>
              {v.notable && (
                <span className="chip chip-notable">{t('panel.historic', currentLang)}</span>
              )}
            </div>
          </div>

          <div className="panel-section eruption-block">
            <div className="eruption-label">{t('panel.lastEruption', currentLang)}</div>
            <div className="eruption-value">{formatEruption(v.lastEruption, currentLang)}</div>
          </div>

          <div className="panel-section data-grid">
            <div className="data-cell">
              <div className="data-label">{t('panel.latitude', currentLang)}</div>
              <div className="data-value">{fmtLat}</div>
            </div>
            <div className="data-cell">
              <div className="data-label">{t('panel.longitude', currentLang)}</div>
              <div className="data-value">{fmtLng}</div>
            </div>
            <div className="data-cell">
              <div className="data-label">{t('panel.elevation', currentLang)}</div>
              <div className="data-value">{v.elevation.toLocaleString()} m</div>
            </div>
            <div className="data-cell">
              <div className="data-label">{t('panel.vei', currentLang)}</div>
              <div className="data-value data-value-accent">{v.vei} / 8</div>
            </div>
          </div>

          <SafetySection volcano={v} />

          {v.status === 'Active' && eruptionPhase === 'idle' && v.type !== 'Mud Volcano' && (
            <div className="panel-section">
              <button
                className="simulate-button"
                type="button"
                onClick={() => startEruption(v)}
                aria-label={t('eruption.simulateAria', currentLang)}
              >
                {t('eruption.simulate', currentLang)}
              </button>
            </div>
          )}

          {v.notable && v.description && (
            <div className="panel-section description-block">
              <div className="description-eyebrow">{t('panel.historicalSignificance', currentLang)}</div>
              {(currentLang === 'ro' && DESCRIPTIONS_RO[v.id] ? DESCRIPTIONS_RO[v.id] : v.description).map((p, i) => (
                <p key={i} className="description-text">{p}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
