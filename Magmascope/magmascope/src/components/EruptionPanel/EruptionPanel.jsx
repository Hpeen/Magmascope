import { useEffect, useState, useRef } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';
import { getEruptionProfile, tierLabel } from '../../data/eruptionProfile';
import './EruptionPanel.css';

const ease = (x) => 1 - Math.pow(1 - x, 3);
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);

function formatKm(km) {
  return km >= 1000 ? km.toLocaleString() : km;
}

function veiBadgeClass(vei) {
  if (vei >= 6) return 'vei-badge vei-extreme';
  if (vei >= 4) return 'vei-badge vei-high';
  if (vei >= 2) return 'vei-badge vei-mid';
  return 'vei-badge vei-low';
}

export default function EruptionPanel() {
  const { eruptingVolcano, eruptionPhase, stopEruption } = useGlobeContext();
  const { currentLang } = useLanguage();

  const [elapsed, setElapsed] = useState(0);
  const startTimeRef = useRef(0);
  const isActive = !!eruptingVolcano;

  useEffect(() => {
    if (!isActive || eruptionPhase !== 'erupting') { setElapsed(0); return; }
    startTimeRef.current = performance.now();
    let raf = 0;
    const tick = () => {
      setElapsed((performance.now() - startTimeRef.current) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isActive, eruptionPhase, eruptingVolcano]);

  const isRo = currentLang === 'ro';
  const lbl  = (en, ro) => isRo ? ro : en;

  if (!eruptingVolcano) return <aside className="eruption-panel" aria-hidden="true" />;

  const v          = eruptingVolcano;
  const profile    = getEruptionProfile(v);
  const tier       = profile.tier;
  const tierName   = tierLabel(tier, currentLang);
  const vei        = profile.vei;
  const isMajor    = vei >= 5;
  const isErupting  = eruptionPhase === 'erupting';
  const isAftermath = eruptionPhase === 'aftermath';

  const progress       = isAftermath ? 1 : clamp01(elapsed / profile.durationS);
  const plumeT         = ease(clamp01((elapsed - profile.durationS * 0.05) / (profile.durationS * 0.35)));
  const lavaT          = ease(clamp01((elapsed - profile.durationS * 0.20) / (profile.durationS * 0.80)));
  const currentPlumeKm = isAftermath ? profile.plumeKm : Math.round(profile.plumeKm * plumeT * 10) / 10;
  const currentLavaKm  = isAftermath ? profile.lavaKm  : Math.round(profile.lavaKm  * lavaT  * 10) / 10;
  const elapsedDisp    = isAftermath
    ? profile.durationS.toFixed(1)
    : Math.min(elapsed, profile.durationS).toFixed(1);

  const subtitleRaw = t('eruption.subtitle', currentLang) || '';
  const subtitle = subtitleRaw.replace('{vei}', String(vei)).replace('{tier}', tierName);

  return (
    <aside className={`eruption-panel${isActive ? ' active' : ''}`} aria-hidden={!isActive}>
      <div className="eruption-inner">

        {/* Header */}
        <div className="eruption-header">
          <span className="eruption-tag">{t('eruption.tag', currentLang)}</span>
          <button className="close-btn eruption-close" aria-label={t('eruption.close', currentLang)} onClick={stopEruption}>×</button>
        </div>

        <div className="eruption-title-row">
          <h2 className="eruption-volcano-name">{v.name}</h2>
          <span className={veiBadgeClass(vei)}>VEI {vei}</span>
        </div>
        <div className="eruption-meta-row">
          <span className="eruption-subtitle">{subtitle}</span>
          <span className="eruption-location">{v.country}{v.region ? ` · ${v.region}` : ''}</span>
        </div>

        {/* Phase + Progress */}
        <div className={`eruption-phase ${isErupting ? 'is-erupting' : 'is-aftermath'}`}>
          <span className="phase-pulse" />
          <span className="phase-label">
            {isErupting ? t('eruption.phase.erupting', currentLang) : t('eruption.phase.aftermath', currentLang)}
          </span>
          <span className="phase-elapsed">{elapsedDisp} / {profile.durationS} {t('eruption.unitS', currentLang)}</span>
        </div>
        <div className="eruption-progress">
          <div className="eruption-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>

        {/* Live Stats */}
        <div className="eruption-section-title">{t('eruption.statsTitle', currentLang)}</div>
        <div className="eruption-stats-grid">
          <div className="estat live">
            <div className="estat-label">{t('eruption.plumeCurrent', currentLang)}</div>
            <div className="estat-value">{formatKm(currentPlumeKm)}<span className="estat-unit"> km</span></div>
            <div className="estat-sub">↑ max {formatKm(profile.plumeKm)} km</div>
          </div>
          <div className="estat live">
            <div className="estat-label">{t('eruption.lavaExtent', currentLang)}</div>
            <div className="estat-value">{formatKm(currentLavaKm)}<span className="estat-unit"> km</span></div>
            <div className="estat-sub">↑ max {formatKm(profile.lavaKm)} km</div>
          </div>
          {isMajor && <>
            <div className="estat">
              <div className="estat-label">{t('eruption.ashRadius', currentLang)}</div>
              <div className="estat-value">{formatKm(profile.ashRadiusKm)}<span className="estat-unit"> km</span></div>
              <div className="estat-sub">{profile.ashAreaKm2.toLocaleString()} km²</div>
            </div>
            <div className="estat">
              <div className="estat-label">{t('eruption.pyroclastic', currentLang)}</div>
              <div className="estat-value">{formatKm(profile.pyroKm)}<span className="estat-unit"> km</span></div>
              <div className="estat-sub">{lbl('lethal surge radius', 'rază surge letală')}</div>
            </div>
          </>}
        </div>

        {/* Reset */}
        <button className="eruption-reset" onClick={stopEruption}>
          {t('eruption.reset', currentLang)}
        </button>
      </div>
    </aside>
  );
}
