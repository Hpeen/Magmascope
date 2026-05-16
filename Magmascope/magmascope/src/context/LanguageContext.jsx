import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);

function getInitialLang() {
  const saved = localStorage.getItem('magmascope.lang');
  if (saved === 'en' || saved === 'ro') return saved;
  return 'ro';
}

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLangState] = useState(getInitialLang);

  function setLanguage(lang) {
    localStorage.setItem('magmascope.lang', lang);
    setCurrentLangState(lang);
  }

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
