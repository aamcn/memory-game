import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import GameWonPopUp from "./GameWonPopUp";
import React from "react";

const mockProps = {
  setGameStarted: vi.fn(),
  setGameWon: vi.fn(),
  finalTime: 4.2,
};

afterEach(() => {
  vi.clearAllMocks();
});

describe("GameWonPopUp Component", () => {
  describe("Basic rendering tests", () => {
    it("Should render GameWonPopUp", () => {
      render(<GameWonPopUp {...mockProps} />);
      const gameWonPopUp = screen.getByTestId("game-won-popup");
      expect(gameWonPopUp).toBeInTheDocument();
    });

    it("Should render new game button", () => {
      render(<GameWonPopUp {...mockProps} />);

      const newGameButton = screen.getByRole("button", { name: "New Game?" });
      expect(newGameButton).toBeInTheDocument();
    });

    it("Should display final time", () => {
      render(<GameWonPopUp {...mockProps} />);
      const finalTimeText = screen.getByTestId("win-final-time");
      expect(finalTimeText).toBeInTheDocument();
      expect(finalTimeText).toHaveTextContent(mockProps.finalTime);
    });
  });

  describe("button interactions", () => {
    it("Should call setGameStarted and setGameWon when new game button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameWonPopUp {...mockProps} />);
      const newGameButton = screen.getByRole("button", { name: "New Game?" });
      await user.click(newGameButton);
      expect(mockProps.setGameStarted).toHaveBeenCalled();
      expect(mockProps.setGameWon).toHaveBeenCalled();
    });

    it("Should call setGameStarted and setGameWon with 'false' when new game button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameWonPopUp {...mockProps} />);
      const newGameButton = screen.getByRole("button", { name: "New Game?" });
      await user.click(newGameButton);
      expect(mockProps.setGameStarted).toHaveBeenCalledWith(false);
      expect(mockProps.setGameWon).toHaveBeenCalledWith(false);
    });

    it("Should NOT call setGameStarted and setGameWon with 'false' when new game button is clicked", async () => {
      render(<GameWonPopUp {...mockProps} />);
      expect(mockProps.setGameStarted).not.toHaveBeenCalled();
      expect(mockProps.setGameWon).not.toHaveBeenCalled();
    });
  });
});
