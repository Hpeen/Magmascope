import { useLanguage } from '../../context/LanguageContext';
import { t, tFallback } from '../../data/i18n';
import { MONITORING_AGENCIES, HAZARDS_BY_TYPE } from '../../data/monitoring';
import './SafetySection.css';

export default function SafetySection({ volcano }) {
  const { currentLang } = useLanguage();

  if (!volcano) return null;
  if (volcano.status === 'Extinct' && !volcano.notable) return null;

  const hazards = HAZARDS_BY_TYPE[volcano.type] || [];
  const agency = MONITORING_AGENCIES[volcano.country];

  return (
    <div className="panel-section safety-block">
      <div className="safety-eyebrow">{t('panel.safety', currentLang)}</div>
      {hazards.length > 0 && (
        <div className="safety-row">
          <span className="safety-label">{t('panel.hazards', currentLang)}</span>
          {hazards.map(h => (
            <span key={h} className="safety-tag">{t('hazard.' + h, currentLang)}</span>
          ))}
        </div>
      )}
      <div className="safety-row">
        <span className="safety-label">{t('panel.monitoring', currentLang)}</span>
        <span className="safety-agency">
          {agency ? (
            agency.url
              ? <a href={agency.url} target="_blank" rel="noopener noreferrer">{agency.name}</a>
              : agency.name
          ) : t('panel.unmonitored', currentLang)}
        </span>
      </div>
      <div className="safety-advice">
        {volcano.status === 'Extinct'
          ? t('panel.adviceExtinct', currentLang)
          : t('panel.advice', currentLang)}
      </div>
    </div>
  );
}
