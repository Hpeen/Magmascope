import { useEffect, useRef } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';
import './HUD.css';

export default function HUD() {
  const { selectedVolcano } = useGlobeContext();
  const { currentLang } = useLanguage();
  const hudRef = useRef(null);
  const lockTimerRef = useRef(null);

  useEffect(() => {
    const hud = hudRef.current;
    if (!hud) return;

    if (lockTimerRef.current) {
      clearTimeout(lockTimerRef.current);
      lockTimerRef.current = null;
    }

    if (selectedVolcano) {
      const readout = hud.querySelector('#hudReadout');
      if (readout) readout.textContent = t('hud.target', currentLang) + ' · ' + selectedVolcano.name;
      hud.classList.remove('locked');
      hud.classList.add('active');
      hud.setAttribute('aria-hidden', 'false');
      lockTimerRef.current = setTimeout(() => hud.classList.add('locked'), 1700);
    } else {
      hud.classList.remove('active', 'locked');
      hud.setAttribute('aria-hidden', 'true');
    }

    return () => {
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [selectedVolcano, currentLang]);

  return (
    <div id="crosshair-hud" className="hud" aria-hidden="true" ref={hudRef}>
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>
      <div className="hud-scan-line"></div>
      <div className="hud-center-dot"></div>
      <div className="hud-readout" id="hudReadout"></div>
    </div>
  );
}
