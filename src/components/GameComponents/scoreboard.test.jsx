import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ScoreBoard from './ScoreBoard';

describe('Scoreboard', () => {
  it('renders currentScore passed as props', () => {
    render(<ScoreBoard currentScore={1} />);
    
    expect(screen.getByRole("currentScore").textContent).toMatch(/Current Score: 1/);
    expect(screen.getByRole("currentScore").textContent).not.toMatch(/Current Score: 2/);

  });

  it('renders highScore passed as props', () => {
    render(<ScoreBoard highScore={9} />);
    
    expect(screen.getByRole("highScore").textContent).toMatch(/High Score: 9/);
    expect(screen.getByRole("highScore").textContent).not.toMatch(/High Score: 1/);

  });

});


// describe("App component", () => {
//     it("renders correct heading", () => {
//       render(<App />);
//       expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//     });
//   });