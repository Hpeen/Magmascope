import { describe, it, expect } from 'vitest';
import { t, tFallback } from '../data/i18n';

describe('t()', () => {
  it('returns the English value for a known key', () => {
    expect(t('brand', 'en')).toBe('Magmascope');
  });

  it('returns the Romanian value when lang is ro', () => {
    expect(t('live', 'ro')).toBe('Live');
  });

  it('falls back to English when the key is missing in Romanian', () => {
    expect(t('brand', 'ro')).toBe('Magmascope');
  });

  it('returns the key itself when missing in both languages', () => {
    expect(t('nonexistent.key', 'en')).toBe('nonexistent.key');
  });
});

describe('tFallback()', () => {
  it('returns the i18n value when a translation exists for the key', () => {
    expect(tFallback('status', 'Active', 'en')).toBe('Active');
  });

  it('returns the raw value when no translation exists for the key', () => {
    expect(tFallback('type', 'SomeUnknownType', 'en')).toBe('SomeUnknownType');
  });
});
