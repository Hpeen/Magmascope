import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GlobeProvider, useGlobeContext } from '../context/GlobeContext';

const mockVolcano = { id: 'vesuvius', name: 'Mount Vesuvius', status: 'Active' };

function TestConsumer() {
  const { selectedVolcano, lockVolcano, unlockVolcano, searchQuery, setSearchQuery, isLoaded } = useGlobeContext();
  return (
    <div>
      <span data-testid="selected">{selectedVolcano?.name ?? 'none'}</span>
      <span data-testid="query">{searchQuery}</span>
      <span data-testid="loaded">{String(isLoaded)}</span>
      <button onClick={() => lockVolcano(mockVolcano)}>Lock</button>
      <button onClick={() => unlockVolcano()}>Unlock</button>
      <button onClick={() => setSearchQuery('etna')}>Search</button>
    </div>
  );
}

describe('GlobeContext', () => {
  it('starts with no selected volcano and empty query', () => {
    render(<GlobeProvider><TestConsumer /></GlobeProvider>);
    expect(screen.getByTestId('selected').textContent).toBe('none');
    expect(screen.getByTestId('query').textContent).toBe('');
    expect(screen.getByTestId('loaded').textContent).toBe('false');
  });

  it('lockVolcano sets selectedVolcano', () => {
    render(<GlobeProvider><TestConsumer /></GlobeProvider>);
    fireEvent.click(screen.getByText('Lock'));
    expect(screen.getByTestId('selected').textContent).toBe('Mount Vesuvius');
  });

  it('unlockVolcano clears selectedVolcano', () => {
    render(<GlobeProvider><TestConsumer /></GlobeProvider>);
    fireEvent.click(screen.getByText('Lock'));
    fireEvent.click(screen.getByText('Unlock'));
    expect(screen.getByTestId('selected').textContent).toBe('none');
  });

  it('setSearchQuery updates searchQuery', () => {
    render(<GlobeProvider><TestConsumer /></GlobeProvider>);
    fireEvent.click(screen.getByText('Search'));
    expect(screen.getByTestId('query').textContent).toBe('etna');
  });
});
