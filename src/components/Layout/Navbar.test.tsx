import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  const mockProps = {
    navData: { home: 'Inicio', about: 'Sobre Mí' },
    activeSection: 'hero',
    scrollToSection: vi.fn(),
    language: 'es' as const,
    toggleLanguage: vi.fn(),
    githubLink: 'https://github.com/test',
  };

  it('renders navigation links correctly', () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Sobre Mí')).toBeInTheDocument();
  });

  it('calls scrollToSection when a link is clicked', () => {
    render(<Navbar {...mockProps} />);
    fireEvent.click(screen.getByText('Sobre Mí'));
    expect(mockProps.scrollToSection).toHaveBeenCalledWith('about');
  });

  it('calls toggleLanguage when language button is clicked', () => {
    render(<Navbar {...mockProps} />);
    const langButton = screen.getByLabelText('Toggle language');
    fireEvent.click(langButton);
    expect(mockProps.toggleLanguage).toHaveBeenCalled();
  });
});
