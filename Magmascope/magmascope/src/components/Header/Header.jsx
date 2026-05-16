import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';
import SearchBar from '../SearchBar/SearchBar';
import Stats from '../Stats/Stats';
import './Header.css';
import '../LearnPanel/LearnPanel.css';

export default function Header({ onLearnOpen }) {
  const { currentLang } = useLanguage();
  return (
    <header className="header">
      <div className="brand">
        <button className="learn-btn" onClick={onLearnOpen} aria-label="Open learn panel">
          <span className="learn-btn-icon">▲</span>
          {t('learn.btn', currentLang)}
        </button>
        <div className="brand-row">
          <span className="brand-dot" aria-hidden="true"></span>
          <span>{t('brand', currentLang)} · {t('live', currentLang)}</span>
        </div>
      </div>
      <div className="title">
        <div className="title-eyebrow">{t('title.eyebrow', currentLang)}</div>
        <div className="title-main">{t('title.main', currentLang)}</div>
        <SearchBar />
      </div>
      <Stats />
    </header>
  );
}
