import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    );
    expect(screen.getByText('BZ')).toBeInTheDocument();
  });
});
