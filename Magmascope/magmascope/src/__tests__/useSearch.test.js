import { describe, it, expect } from 'vitest';
import { filterVolcanoes, scoreSuggestions, escapeHtml, highlightMatch } from '../hooks/useSearch';

const data = [
  { id: 'vesuvius', name: 'Mount Vesuvius', country: 'Italy', region: 'Campania', type: 'Stratovolcano', notable: true },
  { id: 'etna',     name: 'Mount Etna',     country: 'Italy', region: 'Sicily',   type: 'Stratovolcano', notable: true },
  { id: 'fuji',     name: 'Mount Fuji',     country: 'Japan', region: 'Honshu',   type: 'Stratovolcano', notable: true },
];

describe('filterVolcanoes()', () => {
  it('returns all volcanoes for empty term', () => {
    expect(filterVolcanoes(data, '')).toHaveLength(3);
  });

  it('filters by name (case insensitive)', () => {
    expect(filterVolcanoes(data, 'etna')).toHaveLength(1);
    expect(filterVolcanoes(data, 'etna')[0].id).toBe('etna');
  });

  it('filters by country', () => {
    expect(filterVolcanoes(data, 'italy')).toHaveLength(2);
  });

  it('returns empty array when no match', () => {
    expect(filterVolcanoes(data, 'zzznomatch')).toHaveLength(0);
  });
});

describe('scoreSuggestions()', () => {
  it('returns max 8 results', () => {
    const many = Array.from({ length: 20 }, (_, i) => ({
      id: `v${i}`, name: `Mount ${i}`, country: 'Country', region: 'Region', type: 'Type', notable: false,
    }));
    expect(scoreSuggestions(many, 'mount')).toHaveLength(8);
  });

  it('ranks name-start matches above name-contains matches', () => {
    const results = scoreSuggestions(data, 'mount');
    expect(results[0].name.toLowerCase().startsWith('mount')).toBe(true);
  });

  it('returns empty array for empty term', () => {
    expect(scoreSuggestions(data, '')).toHaveLength(0);
  });
});

describe('escapeHtml()', () => {
  it('escapes &, <, >, ", \'', () => {
    expect(escapeHtml('a&b<c>d"e\'f')).toBe('a&amp;b&lt;c&gt;d&quot;e&#39;f');
  });
});

describe('highlightMatch()', () => {
  it('wraps the matched substring in a suggestion-match span', () => {
    const result = highlightMatch('Mount Etna', 'etna');
    expect(result).toContain('<span class="suggestion-match">Etna</span>');
  });

  it('returns escaped text unchanged when no match', () => {
    expect(highlightMatch('Mount Fuji', 'zzz')).toBe('Mount Fuji');
  });
});
