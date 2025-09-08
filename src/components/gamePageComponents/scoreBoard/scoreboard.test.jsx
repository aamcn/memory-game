import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ScoreBoard from "./ScoreBoard";
import React from "react";

describe("Scoreboard", () => {
  it("renders scoreboard elements", () => {
    render(<ScoreBoard currentScore={1} highScore={9} />);
    const scoreboardContainer = screen.getByTestId("scoreboard-container");
    expect(scoreboardContainer).toBeInTheDocument();
  });

  it("renders current score text", () => {
    render(<ScoreBoard currentScore={1} highScore={9} />);
    const currentScoreText = screen.getByTestId("current-score-text");
    expect(currentScoreText).toBeInTheDocument();
  });

  it("renders high score text", () => {
    render(<ScoreBoard currentScore={1} highScore={9} />);
    const highScoreText = screen.getByTestId("high-score-text");
    expect(highScoreText).toBeInTheDocument();
  });

  it("handles zero scores correctly", () => {
    const zeroProps = { currentScore: 0, highScore: 0 };
    render(<ScoreBoard {...zeroProps} />);
    expect(screen.getByTestId("current-score-text")).toHaveTextContent("0");
    expect(screen.getByTestId("high-score-text")).toHaveTextContent("0");
  });

  it("current score text content matches 'currentScore' passed as props", () => {
    render(<ScoreBoard currentScore={1} highScore={9} />);
    const currentScoreText = screen.getByTestId("current-score-text");
    expect(currentScoreText).toHaveTextContent("1");
  });

  it("high score text content matches 'highScore' passed as props", () => {
    render(<ScoreBoard currentScore={1} highScore={9} />);
    const highScoreText = screen.getByTestId("high-score-text");
    expect(highScoreText).toHaveTextContent("9");
  });

  it("changes the current score text content when 'currentScore' prop changes", () => {
    const { rerender } = render(<ScoreBoard currentScore={1} />);
    const currentScoreText = screen.getByTestId("current-score-text");
    expect(currentScoreText).toHaveTextContent("1");
    rerender(<ScoreBoard currentScore={2} />);
    expect(currentScoreText).toHaveTextContent("2");
  });

  it("changes the high score text content when 'highScore' prop changes", () => {
    const { rerender } = render(<ScoreBoard highScore={9} />);
    const highScoreText = screen.getByTestId("high-score-text");
    expect(highScoreText).toHaveTextContent("9");
    rerender(<ScoreBoard highScore={10} />);
    expect(highScoreText).toHaveTextContent("10");
  });
});
