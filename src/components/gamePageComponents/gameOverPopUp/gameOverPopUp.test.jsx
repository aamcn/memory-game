import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import GameOverPopUp from "./GameOverPopUp";
import React from "react";

describe("GameOverPopUp Component", () => {
  it("Should render GameOverPopUp", () => {
    render(<GameOverPopUp />);

    const GameOverheading = screen.getByRole("heading", { name: "Game Over" });
    console.log(GameOverheading.textContent);
    expect(GameOverheading).toBeInTheDocument();
  });
});

describe("Retry Button", () => {
  it('Should render "Retry" button', () => {
    render(<GameOverPopUp />);
    const retryButton = screen.getByRole("button", { name: "Retry?" });
    expect(retryButton).toBeInTheDocument();
  });

  it('Should change "gameResults" and "gameStarted" to "true" when clicked', async () => {
    const user = userEvent.setup();
    let gameStarted = false;
    let gameOver = false;
    const setGameStarted = () => {
      gameStarted = true;
    };
    const setGameOver = () => {
      gameOver = true;
    };

    render(
      <GameOverPopUp
        setGameOver={setGameOver}
        setGameStarted={setGameStarted}
        gameOver={gameOver}
        gameStarted={gameStarted}
      />,
    );
    const retryButton = screen.getByRole("button", { name: "Retry?" });
    await user.click(retryButton);

    expect(gameOver).toBe(true);
    expect(gameStarted).toBe(true);
  });
});
