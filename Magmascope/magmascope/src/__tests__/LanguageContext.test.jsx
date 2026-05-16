import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

function LangDisplay() {
  const { currentLang, setLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{currentLang}</span>
      <button onClick={() => setLanguage('ro')}>Switch to RO</button>
    </div>
  );
}

describe('LanguageContext', () => {
  beforeEach(() => localStorage.clear());

  it('defaults to "ro" when localStorage is empty', () => {
    render(<LanguageProvider><LangDisplay /></LanguageProvider>);
    expect(screen.getByTestId('lang').textContent).toBe('ro');
  });

  it('initializes from localStorage when saved value exists', () => {
    localStorage.setItem('magmascope.lang', 'en');
    render(<LanguageProvider><LangDisplay /></LanguageProvider>);
    expect(screen.getByTestId('lang').textContent).toBe('en');
  });

  it('updates lang and persists to localStorage on setLanguage', () => {
    render(<LanguageProvider><LangDisplay /></LanguageProvider>);
    fireEvent.click(screen.getByText('Switch to RO'));
    expect(screen.getByTestId('lang').textContent).toBe('ro');
    expect(localStorage.getItem('magmascope.lang')).toBe('ro');
  });
});
