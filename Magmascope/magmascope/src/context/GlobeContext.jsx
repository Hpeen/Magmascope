import { createContext, useContext, useState, useCallback } from 'react';
import { getEruptionProfile } from '../data/eruptionProfile';

const GlobeContext = createContext(null);

export function GlobeProvider({ children }) {
  const [selectedVolcano, setSelectedVolcano] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [eruptingVolcano, setEruptingVolcano] = useState(null);
  // 'idle' | 'erupting' | 'aftermath'
  const [eruptionPhase, setEruptionPhase] = useState('idle');
  const [affectedCities, setAffectedCities] = useState([]);

  const stopEruption = useCallback(() => {
    setEruptingVolcano(null);
    setEruptionPhase('idle');
    setAffectedCities([]);
  }, []);

  const startEruption = useCallback((volcano) => {
    if (!volcano) return;
    const profile = getEruptionProfile(volcano);
    if (!profile) return;
    setEruptingVolcano(volcano);
    setAffectedCities([]);
    setEruptionPhase('erupting');
  }, []);

  // Marks the simulation as visually complete; effects keep their final
  // shapes (residual ash cloud, cooled lava) until the user resets.
  const markEruptionAftermath = useCallback(() => {
    setEruptionPhase('aftermath');
  }, []);

  const lockVolcano = useCallback((volcano) => {
    setSelectedVolcano((prev) => {
      if (prev !== volcano) {
        // Switching to a different volcano (or unlocking) ends any
        // in-flight simulation so we don't leak effects on the globe.
        setEruptingVolcano(null);
        setEruptionPhase('idle');
        setAffectedCities([]);
      }
      return volcano;
    });
  }, []);

  const unlockVolcano = useCallback(() => {
    setSelectedVolcano(null);
    setEruptingVolcano(null);
    setEruptionPhase('idle');
    setAffectedCities([]);
  }, []);

  return (
    <GlobeContext.Provider value={{
      selectedVolcano,
      lockVolcano,
      unlockVolcano,
      isLoaded,
      setIsLoaded,
      searchQuery,
      setSearchQuery,
      eruptingVolcano,
      eruptionPhase,
      startEruption,
      stopEruption,
      markEruptionAftermath,
      affectedCities,
      setAffectedCities,
    }}>
      {children}
    </GlobeContext.Provider>
  );
}

export function useGlobeContext() {
  const ctx = useContext(GlobeContext);
  if (!ctx) throw new Error('useGlobeContext must be used inside GlobeProvider');
  return ctx;
}
