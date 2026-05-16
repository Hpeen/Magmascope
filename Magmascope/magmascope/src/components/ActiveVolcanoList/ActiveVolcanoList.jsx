import { useMemo } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { t, tFallback } from '../../data/i18n';
import { VOLCANO_DATA } from '../../data/volcanoes';
import './ActiveVolcanoList.css';

const MAX_VISIBLE = 20;

export default function ActiveVolcanoList() {
  const { currentLang } = useLanguage();
  const { lockVolcano } = useGlobeContext();

  const activeVolcanoes = useMemo(() => {
    return VOLCANO_DATA
      .filter((v) => v.status === 'Active')
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const visibleVolcanoes = activeVolcanoes.slice(0, MAX_VISIBLE);
  const extraCount = activeVolcanoes.length - visibleVolcanoes.length;

  return (
    <section className="active-volcano-list" aria-label={t('eruption.listAria', currentLang)}>
      <div className="active-volcano-list-header">
        <h2>{t('eruption.listTitle', currentLang)}</h2>
        <span>{activeVolcanoes.length} {t('eruption.listCountSuffix', currentLang)}</span>
      </div>
      <div className="active-volcano-grid">
        {visibleVolcanoes.map((volcano) => (
          <button
            key={volcano.id}
            type="button"
            className="active-volcano-card"
            onClick={() => lockVolcano(volcano)}
          >
            <span className="active-volcano-name">{volcano.name}</span>
            <span className="active-volcano-country">{tFallback('country', volcano.country, currentLang)}</span>
          </button>
        ))}
      </div>
      {extraCount > 0 && (
        <div className="active-volcano-more">
          {t('eruption.moreActive', currentLang).replace('{count}', String(extraCount))}
        </div>
      )}
    </section>
  );
}
