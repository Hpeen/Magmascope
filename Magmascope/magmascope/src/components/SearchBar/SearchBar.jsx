import { useRef, useState, useMemo } from 'react';
import { useGlobeContext } from '../../context/GlobeContext';
import { useLanguage } from '../../context/LanguageContext';
import { t, tFallback } from '../../data/i18n';
import { highlightMatch } from '../../hooks/useSearch';
import { VOLCANO_DATA } from '../../data/volcanoes';
import './SearchBar.css';

function levenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function fuzzyScoreSuggestions(volcanoes, term, currentLang) {
  const q = term.trim().toLowerCase();
  if (!q) return [];

  return volcanoes
    .map(v => {
      const name = v.name.toLowerCase();
      const country = v.country.toLowerCase();
      const region = (v.region || '').toLowerCase();
      const type = v.type.toLowerCase();
      let score = 0;

      if (name.startsWith(q)) {
        score = 100;
      } else if (name.includes(q)) {
        score = 50;
      } else if (country.includes(q) || region.includes(q) || type.includes(q)) {
        score = 25;
      } else {
        const words = name.split(/[\s-]+/);
        words.push(name);

        let bestDist = Infinity;
        for (const word of words) {
          const prefix = word.substring(0, q.length);
          const dist = levenshteinDistance(q, prefix);
          if (dist < bestDist) {
            bestDist = dist;
          }
        }

        const maxAllowed = q.length <= 4 ? 1 : 2;
        if (bestDist <= maxAllowed) {
          score = 10 - bestDist;
        }
      }

      return { v, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score || a.v.name.localeCompare(b.v.name))
    .slice(0, 8)
    .map(x => x.v);
}

export default function SearchBar() {
  const { lockVolcano, setSearchQuery } = useGlobeContext();
  const { currentLang } = useLanguage();
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [hasValue, setHasValue] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const [showCurated, setShowCurated] = useState(false);
  const [curatedSearch, setCuratedSearch] = useState('');
  const isRo = currentLang === 'ro';

  const curatedVolcanoes = useMemo(() => {
    return VOLCANO_DATA.filter(v => (v.vei || 0) >= 5)
      .filter(v => v.status === 'Active')
      .filter(v => {
        const q = curatedSearch.toLowerCase();
        return v.name.toLowerCase().includes(q) || (v.country && v.country.toLowerCase().includes(q));
      })
      .sort((a, b) => (b.vei || 0) - (a.vei || 0));
  }, [curatedSearch]);

  function applyInput(value) {
    setInputValue(value);
    setHasValue(value.length > 0);
    setSearchQuery(value);

    const scored = fuzzyScoreSuggestions(VOLCANO_DATA, value, currentLang);
    setSuggestions(scored);
    setActiveIdx(scored.length > 0 ? 0 : -1);
    setNoResults(value.trim().length > 0 && scored.length === 0);
    setShowSuggestions(value.trim().length > 0);
  }

  function selectVolcano(volcano) {
    if (!volcano) return;
    setInputValue('');
    setHasValue(false);
    setNoResults(false);
    setShowSuggestions(false);
    setSuggestions([]);
    setSearchQuery('');
    setShowCurated(false);
    inputRef.current?.blur();
    lockVolcano(volcano);
  }

  function handleKeyDown(e) {
    if (!showSuggestions || !suggestions.length) {
      if (e.key === 'Escape') setShowSuggestions(false);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx(i => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx(i => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectVolcano(suggestions[activeIdx] ?? suggestions[0]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  }

  const containerClass = [
    'search-container',
    hasValue ? 'has-value' : '',
    noResults ? 'no-results' : '',
    showSuggestions && (suggestions.length > 0 || noResults) ? 'has-suggestions' : '',
  ].filter(Boolean).join(' ');

  const term = inputValue.trim().toLowerCase();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', position: 'relative', margin: '0 auto', width: 'fit-content' }}>
      <style>{`
        @keyframes slideDownFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .curated-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: rgba(255, 171, 145, 0.1);
          color: #ffab91;
          border: 1px solid rgba(255, 171, 145, 0.25);
          padding: 0 10px;
          height: 34px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease-out;
          white-space: nowrap;
          margin-top: 10px;
        }
        .curated-toggle-btn:hover {
          background: rgba(255, 171, 145, 0.2);
          color: #ffccbc;
          border-color: rgba(255, 171, 145, 0.4);
        }
        .curated-toggle-btn:active {
          background: rgba(255, 171, 145, 0.3);
        }
        .curated-toggle-btn.is-open {
          background: rgba(255, 171, 145, 0.25);
          color: #ffffff;
          border-color: rgba(255, 171, 145, 0.6);
        }
        .csv-meta { display: flex; justify-content: space-between; font-size: 11px; color: #aaa; }
        .vei-badge-small { font-size: 10px; padding: 2px 6px; border-radius: 4px; background: #ff5722; color: #fff; font-weight: bold; }
        .csv-name { font-weight: 600; color: #fff; margin-bottom: 4px; font-size: 14px; }
        .curated-sidebar-item { padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); cursor: pointer; transition: background 0.2s; text-align: left; }
        .curated-sidebar-item:hover { background: rgba(255, 87, 34, 0.15); }
        .curated-sidebar-search { margin: 12px; padding: 10px; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 4px; color: white; font-family: inherit; font-size: 13px; }
        .curated-sidebar-search:focus { outline: none; border-color: #ff5722; }
        .curated-sidebar-header { padding: 16px; font-weight: bold; font-size: 14px; color: #ffab91; border-bottom: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 87, 34, 0.1); text-align: left; }
        .curated-dropdown-list { list-style: none; padding: 0; margin: 0; overflow-y: auto; flex: 1; scrollbar-width: thin; scrollbar-color: rgba(255, 110, 50, 0.4) transparent; }
        .curated-dropdown-list::-webkit-scrollbar { width: 6px; }
        .curated-dropdown-list::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); border-radius: 4px; }
        .curated-dropdown-list::-webkit-scrollbar-thumb { background: rgba(255, 110, 50, 0.4); border-radius: 4px; }
        .curated-dropdown-list::-webkit-scrollbar-thumb:hover { background: var(--magma-core, #ff5722); }
      `}</style>
      <div className={containerClass}>
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          ref={inputRef}
          type="text"
          id="volcanoSearch"
          value={inputValue}
          placeholder={t('search.placeholder', currentLang)}
          autoComplete="off"
          spellCheck="false"
          aria-label={t('search.ariaLabel', currentLang)}
          aria-autocomplete="list"
          aria-controls="searchSuggestions"
          onChange={e => applyInput(e.target.value)}
          onFocus={() => { if (inputValue.trim()) setShowSuggestions(true); }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="search-clear"
          id="searchClear"
          aria-label={t('search.clear', currentLang)}
          tabIndex={-1}
          onClick={() => applyInput('')}
        >×</button>
        <ul className="search-suggestions" id="searchSuggestions" role="listbox" aria-label="Volcano suggestions">
          {showSuggestions && suggestions.length === 0 && noResults && (
            <li className="suggestion-empty">{t('search.empty', currentLang)}</li>
          )}
          {showSuggestions && suggestions.map((v, i) => (
            <li
              key={v.id}
              className={`search-suggestion${i === activeIdx ? ' active' : ''}`}
              role="option"
              data-index={i}
              onClick={() => selectVolcano(v)}
            >
              <span className={`suggestion-icon${v.notable ? '' : ' dim'}`}></span>
              <div className="suggestion-text">
                <div
                  className="suggestion-name"
                  dangerouslySetInnerHTML={{ __html: highlightMatch(v.name, term) }}
                />
                <div
                  className="suggestion-meta"
                  dangerouslySetInnerHTML={{
                    __html: `${highlightMatch(tFallback('country', v.country, currentLang), term)} · ${highlightMatch(tFallback('type', v.type, currentLang), term)}`
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`curated-toggle-btn ${showCurated ? 'is-open' : ''}`}
        onClick={() => setShowCurated(!showCurated)}
        aria-label={isRo ? "Vulcani Activi cu Distrugere Urbană" : "Active Volcanoes with Urban Destruction"}
        title={isRo ? "Vulcani Activi cu Distrugere Urbană" : "Active Volcanoes with Urban Destruction"}
      >
        <span style={{ fontSize: '13px' }} aria-hidden="true">🌋</span>
        <span>{isRo ? 'Distrugere Urbană' : 'Urban Destruction'}</span>
      </button>

      {showCurated && (
        <div className="curated-dropdown" style={{
          position: 'absolute',
          top: '100%',
          right: '0',
          marginTop: '8px',
          width: '320px',
          maxHeight: '60vh',
          background: 'rgba(10, 11, 16, 0.95)',
          border: '1px solid rgba(255, 87, 34, 0.4)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 999,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          animation: 'slideDownFade 0.2s ease-out forwards'
        }}>
          <div className="curated-sidebar-header">
            {isRo ? 'Vulcani Activi cu Distrugere Urbană' : 'Active Volcanoes with Urban Destruction'}
          </div>
          <input
            type="text"
            className="curated-sidebar-search"
            placeholder={isRo ? 'Caută vulcan...' : 'Search volcano...'}
            value={curatedSearch}
            onChange={e => setCuratedSearch(e.target.value)}
          />
          <ul className="curated-dropdown-list">
            {curatedVolcanoes.map(v => (
              <li key={v.id} className="curated-sidebar-item" onClick={() => selectVolcano(v)}>
                <div className="csv-name">{v.name}</div>
                <div className="csv-meta">
                  <span>{isRo ? 'Țară:' : 'Country:'} {v.country}</span>
                  <span className="vei-badge-small">VEI: {v.vei}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
