import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';
import LegendInfoCard from './LegendInfoCard';
import './Legend.css';

export default function Legend() {
  const { currentLang } = useLanguage();
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    if (!infoOpen) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') setInfoOpen(false);
    }
    function handleClickOutside(e) {
      if (e.target.closest('#legendInfoCard') || e.target.closest('#legendInfoBtn')) return;
      setInfoOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [infoOpen]);

  return (
    <>
      <div className="legend" aria-label="Magnitude scale">
        <span className="legend-title">{t('legend.title', currentLang)}</span>
        <span className="legend-item">
          <span className="legend-dot legend-dot-cataclysmic"></span>
          <span className="legend-label">
            {t('legend.cataclysmic', currentLang)} <span className="legend-sub">VEI 7-8</span>
          </span>
        </span>
        <span className="legend-item">
          <span className="legend-dot legend-dot-significant"></span>
          <span className="legend-label">
            {t('legend.significant', currentLang)} <span className="legend-sub">VEI 4-6</span>
          </span>
        </span>
        <span className="legend-item">
          <span className="legend-dot legend-dot-minor"></span>
          <span className="legend-label">
            {t('legend.minor', currentLang)} <span className="legend-sub">VEI 0-3</span>
          </span>
        </span>
        <button
          type="button"
          className="legend-info-btn"
          id="legendInfoBtn"
          aria-expanded={infoOpen}
          aria-controls="legendInfoCard"
          onClick={() => setInfoOpen(o => !o)}
        >
          {t('legend.info', currentLang)}
        </button>
      </div>
      {infoOpen && <LegendInfoCard onClose={() => setInfoOpen(false)} />}
    </>
  );
}
