import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { GlobeProvider, useGlobeContext } from './context/GlobeContext';
import { t } from './data/i18n';
import GlobeContainer from './components/GlobeContainer/GlobeContainer';
import Header from './components/Header/Header';
import ActiveVolcanoList from './components/ActiveVolcanoList/ActiveVolcanoList';
import InfoPanel from './components/InfoPanel/InfoPanel';
import EruptionInfoPanel from './components/EruptionPanel/EruptionInfoPanel';
import Legend from './components/Legend/Legend';
import HUD from './components/HUD/HUD';
import Loader from './components/Loader/Loader';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import LearnPanel from './components/LearnPanel/LearnPanel';

function AppInner() {
  const { unlockVolcano, selectedVolcano, searchQuery, setSearchQuery } = useGlobeContext();
  const { currentLang } = useLanguage();
  const [learnOpen, setLearnOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== 'Escape') return;
      if (learnOpen) { setLearnOpen(false); return; }
      if (searchQuery) {
        setSearchQuery('');
        const input = document.getElementById('volcanoSearch');
        if (input) input.blur();
        return;
      }
      if (selectedVolcano) {
        unlockVolcano();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [unlockVolcano, selectedVolcano, searchQuery, setSearchQuery, learnOpen]);

  return (
    <>
      <LanguageSwitcher />
      <Header onLearnOpen={() => setLearnOpen(true)} />
      {learnOpen && <LearnPanel onClose={() => setLearnOpen(false)} />}
      <ActiveVolcanoList />
      <GlobeContainer />
      <InfoPanel />
      <EruptionInfoPanel />
      <div className="footer">
        <kbd>DRAG</kbd> {t('footer.rotate', currentLang)} &nbsp;·&nbsp; <kbd>SCROLL</kbd> {t('footer.zoom', currentLang)} &nbsp;·&nbsp; <kbd>CLICK</kbd> {t('footer.inspect', currentLang)}
      </div>
      <Legend />
      <HUD />
      <Loader />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <GlobeProvider>
        <AppInner />
      </GlobeProvider>
    </LanguageProvider>
  );
}
