import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { currentLang, setLanguage } = useLanguage();
  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <button
        data-lang="en"
        className={currentLang === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
      >EN</button>
      <button
        data-lang="ro"
        className={currentLang === 'ro' ? 'active' : ''}
        onClick={() => setLanguage('ro')}
      >RO</button>
    </div>
  );
}
