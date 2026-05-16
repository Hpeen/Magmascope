import { VOLCANO_DATA } from '../../data/volcanoes';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';

const totalCount = String(VOLCANO_DATA.length).padStart(2, '0');
const activeCount = String(VOLCANO_DATA.filter(v => v.status === 'Active').length).padStart(2, '0');

export default function Stats() {
  const { currentLang } = useLanguage();
  return (
    <div className="stats">
      <span>
        <span className="stats-value" id="statCount">{totalCount}</span>{' '}
        <span>{t('stats.sites', currentLang)}</span>
      </span>
      <span>
        <span className="stats-value" id="statActive">{activeCount}</span>{' '}
        <span>{t('stats.active', currentLang)}</span>
      </span>
    </div>
  );
}
