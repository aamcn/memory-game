import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ScoreBoard from './ScoreBoard';

describe('Scoreboard', () => {
  it('renders currentScore passed as props', () => {
    render(<ScoreBoard currentScore={1} />);
    
    expect(screen.getByTestId("currentScore").textContent).toMatch(/Current Score: 1/);
    expect(screen.getByTestId("currentScore").textContent).not.toMatch(/Current Score: 2/);
  });

  it('renders highScore passed as props', () => {
    render(<ScoreBoard highScore={9} />);
    
    expect(screen.getByTestId("highScore").textContent).toMatch(/High Score: 9/);
    expect(screen.getByTestId("highScore").textContent).not.toMatch(/High Score: 1/);
  });
});