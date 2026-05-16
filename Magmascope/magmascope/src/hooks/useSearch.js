import { tFallback } from '../data/i18n';

export function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

export function highlightMatch(text, term) {
  if (!term) return escapeHtml(text);
  const idx = text.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return escapeHtml(text);
  return (
    escapeHtml(text.slice(0, idx)) +
    '<span class="suggestion-match">' +
      escapeHtml(text.slice(idx, idx + term.length)) +
    '</span>' +
    escapeHtml(text.slice(idx + term.length))
  );
}

function searchableFields(v, lang) {
  const fields = [v.name, v.country, v.region, v.type, v.status];
  if (lang && lang !== 'en') {
    fields.push(tFallback('country', v.country, lang));
    fields.push(tFallback('type', v.type, lang));
    fields.push(tFallback('status', v.status, lang));
  }
  return fields;
}

export function filterVolcanoes(volcanoes, term, lang) {
  const q = term.trim().toLowerCase();
  if (!q) return volcanoes;
  return volcanoes.filter(v =>
    searchableFields(v, lang).some(s => s && s.toLowerCase().includes(q))
  );
}

export function scoreSuggestions(volcanoes, term, lang) {
  const q = term.trim().toLowerCase();
  if (!q) return [];

  return volcanoes
    .map(v => {
      const name = v.name.toLowerCase();
      const others = searchableFields(v, lang)
        .slice(1)
        .map(s => (s || '').toLowerCase());
      let score = 0;
      if (name.startsWith(q))                       score = 3;
      else if (name.includes(q))                    score = 2;
      else if (others.some(s => s.includes(q)))     score = 1;
      return { v, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score || a.v.name.localeCompare(b.v.name))
    .slice(0, 8)
    .map(x => x.v);
}
