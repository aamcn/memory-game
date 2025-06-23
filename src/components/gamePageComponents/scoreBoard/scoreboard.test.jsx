import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ScoreBoard from "./ScoreBoard";
import React from "react";
describe("Scoreboard", () => {
  it("renders currentScore passed as props", () => {
    render(<ScoreBoard currentScore={1} />);

    expect(screen.getByTestId("currentScore").textContent).toMatch(
      /1/,
    );
    expect(screen.getByTestId("currentScore").textContent).not.toMatch(
      /2/,
    );
  });

  it("renders highScore passed as props", () => {
    render(<ScoreBoard highScore={9} />);

    expect(screen.getByTestId("highScore").textContent).toMatch(
      /9/,
    );
    expect(screen.getByTestId("highScore").textContent).not.toMatch(
      /1/,
    );
  });
});
