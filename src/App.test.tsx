import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    // Check for a basic element that should always be there, e.g., the name in the navbar or hero
    // Since content is dynamic, we can check for something static or mock the content if needed.
    // For now, let's check if the navbar renders (it has the "BZ" logo text)
    expect(screen.getByText('BZ')).toBeInTheDocument();
  });
});
