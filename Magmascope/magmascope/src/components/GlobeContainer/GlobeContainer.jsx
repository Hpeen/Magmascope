import { useRef } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { VOLCANO_DATA } from '../../data/volcanoes';
import { useGlobe } from '../../hooks/useGlobe';

export default function GlobeContainer() {
  const mountRef = useRef(null);
  const ctx = useGlobeContext();
  const { currentLang } = useLanguage();

  useGlobe(mountRef, VOLCANO_DATA, ctx, currentLang);

  return <div id="globeViz" ref={mountRef} />;
}
