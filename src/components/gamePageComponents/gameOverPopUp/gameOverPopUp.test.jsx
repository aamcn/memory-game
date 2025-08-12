import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import GameOverPopUp from "./GameOverPopUp";
import React from "react";

const mockProps = {
  setGameOver: vi.fn(),
  setGameStarted: vi.fn(),
  gameOver: false,
  gameStarted: false,
};

afterEach(() => {
  vi.clearAllMocks();
});

describe("GameOverPopUp Component", () => {
  describe("Basic Rendering", () => {
    it("Should render GameOverPopUp", () => {
      render(<GameOverPopUp {...mockProps} />);
      const GameOverheading = screen.getByTestId("game-over-popup");
      expect(GameOverheading).toBeInTheDocument();
    });

    it("Should render the Game Over title with correct text", () => {
      render(<GameOverPopUp {...mockProps} />);
      const GameOverheading = screen.getByRole("heading", {
        name: "Game Over",
      });
      expect(GameOverheading).toBeInTheDocument();
      expect(GameOverheading).toHaveTextContent("Game Over");
    });

    it("Should render the final time text", () => {
      render(<GameOverPopUp {...mockProps} finalTime="00:30" />);
      const finalTimeText = screen.getByTestId("final-time");
      expect(finalTimeText).toBeInTheDocument();
      expect(finalTimeText).toHaveTextContent("00:30");
    });
  });

  describe("Retry Button", () => {
    it('Should render "Retry" button', () => {
      render(<GameOverPopUp {...mockProps} />);
      const retryButton = screen.getByRole("button", { name: "Retry?" });
      expect(retryButton).toBeInTheDocument();
    });

    it('Should change "gameResults" and "gameStarted" to "true" when clicked', async () => {
      const user = userEvent.setup();
      render(<GameOverPopUp {...mockProps} />);
      const retryButton = screen.getByRole("button", { name: "Retry?" });
      await user.click(retryButton);

      expect(mockProps.setGameOver).toHaveBeenCalled();
      expect(mockProps.setGameStarted).toHaveBeenCalled();
    });
  });
});
