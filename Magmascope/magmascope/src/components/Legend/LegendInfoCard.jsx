import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';
import './LegendInfoCard.css';

const VEI_TIERS = [
  { n: 0, tier: 'minor' }, { n: 1, tier: 'minor' }, { n: 2, tier: 'minor' }, { n: 3, tier: 'minor' },
  { n: 4, tier: 'significant' }, { n: 5, tier: 'significant' }, { n: 6, tier: 'significant' },
  { n: 7, tier: 'cataclysmic' }, { n: 8, tier: 'cataclysmic' },
];

export default function LegendInfoCard({ onClose }) {
  const { currentLang } = useLanguage();
  return (
    <div className="legend-info-card visible" id="legendInfoCard" role="dialog" aria-modal="false" aria-hidden="false">
      <div className="legend-info-card-header">
        <span className="legend-info-card-title">{t('legend.info', currentLang)}</span>
        <button
          className="legend-info-card-close"
          type="button"
          id="legendInfoCardClose"
          aria-label={t('legend.close', currentLang)}
          onClick={onClose}
        >×</button>
      </div>
      <div className="legend-info-section">
        <div className="legend-info-section-title">{t('info.statusTitle', currentLang)}</div>
        <div className="legend-info-row">
          <span className="swatch swatch-active"></span>
          <span>{t('info.statusActive', currentLang)}</span>
        </div>
        <div className="legend-info-row">
          <span className="swatch swatch-dormant"></span>
          <span>{t('info.statusDormant', currentLang)}</span>
        </div>
        <div className="legend-info-row">
          <span className="swatch swatch-extinct"></span>
          <span>{t('info.statusExtinct', currentLang)}</span>
        </div>
      </div>
      <div className="legend-info-section">
        <div className="legend-info-section-title">{t('info.veiTitle', currentLang)}</div>
        <div className="legend-info-blurb">{t('info.veiBlurb', currentLang)}</div>
        {VEI_TIERS.map(({ n, tier }) => (
          <div key={n} className="legend-info-vei-row" data-tier={tier}>
            <span className="legend-info-vei-tier">{n}</span>
            <span>{t(`info.vei.${n}`, currentLang)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
