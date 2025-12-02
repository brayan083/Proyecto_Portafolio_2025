import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  const mockProps = {
    data: {
      name: 'Test Name',
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      learnMore: 'Learn More',
      cvPath: '/test-cv.pdf',
    },
    scrollToSection: vi.fn(),
  };

  it('renders hero content correctly', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
});
