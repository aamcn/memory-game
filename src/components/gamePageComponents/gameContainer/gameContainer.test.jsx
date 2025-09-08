import GameContainer from "./GameContainer";
import React from "react";
import { screen, render } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";

// Mock all child components.
vi.mock("../timer/timer", () => ({
  default: ({ gameStarted }) => (
    <div data-testid="timer-component">
      Timer: {gameStarted ? "started" : "stopped"}
    </div>
  ),
}));

vi.mock("../scoreBoard/ScoreBoard", () => ({
  default: ({ highScore, currentScore }) => (
    <div data-testid="score-board">
      Score: {currentScore}/{highScore}
    </div>
  ),
}));

vi.mock("../gameOverPopUp/GameOverPopUp", () => ({
  default: () => <div data-testid="game-over-popup">Game Over!</div>,
}));

vi.mock("../gameWonPopUp/GameWonPopUp", () => ({
  default: () => <div data-testid="game-won-popup">Game Won!</div>,
}));

vi.mock("../gameMenu/GameMenu", () => ({
  default: ({ cardTotal }) => (
    <div data-testid="game-menu">Menu - Cards: {cardTotal}</div>
  ),
}));

vi.mock("../../cardComponents/cardDisplay/CardDisplay", () => ({
  default: ({ cardTotal, cardObjects }) => (
    <div data-testid="card-display">
      Cards: {cardObjects.length} of {cardTotal}
    </div>
  ),
}));

// Mock props for the GameContainer component
const mockProps = {
  highScore: 10,
  gameStarted: false,
  setGameStarted: vi.fn(),
  handleStartClick: vi.fn(),
  cardObjects: [
    { id: 1, name: "Pikachu" },
    { id: 2, name: "Charmander" },
  ],
  setCardObjects: vi.fn(),
  setCurrentScore: vi.fn(),
  currentScore: 5,
  setGameOver: vi.fn(),
  gameOver: false,
  cardTotal: 4,
  setCardTotal: vi.fn(),
  gameWon: false,
  setGameWon: vi.fn(),
};

describe("GameContainer Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  //Rendering child components

  describe("Basic rendering", () => {
    it("renders the game container", () => {
      render(<GameContainer {...mockProps} />);
      expect(screen.getByTestId("game-container")).toBeInTheDocument();
    });

    it("renders the game info container", () => {
      render(<GameContainer {...mockProps} />);
      expect(screen.getByTestId("game-info-container")).toBeInTheDocument();
    });

    it("always renders CardDisplay component", () => {
      render(<GameContainer {...mockProps} />);
      expect(screen.getByTestId("card-display")).toBeInTheDocument();
    });
  });

  // Game not started state tests.

  describe("Game not started state", () => {
    it("renders GameMenu when game is not started", () => {
      render(<GameContainer {...mockProps} gameStarted={false} />);
      expect(screen.getByTestId("game-menu")).toBeInTheDocument();
    });

    it("does not render Timer when game is not started", () => {
      render(<GameContainer {...mockProps} gameStarted={false} />);
      expect(screen.queryByTestId("timer-component")).not.toBeInTheDocument();
    });

    it("does not render ScoreBoard when game is not started", () => {
      render(<GameContainer {...mockProps} gameStarted={false} />);
      expect(screen.queryByTestId("score-board")).not.toBeInTheDocument();
    });
  });

  //Game started state tests.

  describe("Game started state", () => {
    it("renders Timer when game is started", () => {
      render(<GameContainer {...mockProps} gameStarted={true} />);
      expect(screen.getByTestId("timer-component")).toBeInTheDocument();
    });

    it("renders ScoreBoard when game is started", () => {
      render(<GameContainer {...mockProps} gameStarted={true} />);
      expect(screen.getByTestId("score-board")).toBeInTheDocument();
    });

    it("does not render GameMenu when game is started", () => {
      render(<GameContainer {...mockProps} gameStarted={true} />);
      expect(screen.queryByTestId("game-menu")).not.toBeInTheDocument();
    });
  });

  // Game over state tests.

  describe("Game over state", () => {
    it("renders GameOverPopUp when game is over", () => {
      render(<GameContainer {...mockProps} gameOver={true} />);
      expect(screen.getByTestId("game-over-popup")).toBeInTheDocument();
    });

    it("does not render GameOverPopUp when game is not over", () => {
      render(<GameContainer {...mockProps} gameOver={false} />);
      expect(screen.queryByTestId("game-over-popup")).not.toBeInTheDocument();
    });
  });

  // Game won state tests.

  describe("Game won state", () => {
    it("renders GameWonPopUp when game is won", () => {
      render(<GameContainer {...mockProps} gameWon={true} />);
      expect(screen.getByTestId("game-won-popup")).toBeInTheDocument();
    });

    it("does not render GameWonPopUp when game is not won", () => {
      render(<GameContainer {...mockProps} gameWon={false} />);
      expect(screen.queryByTestId("game-won-popup")).not.toBeInTheDocument();
    });
  });

  // Props passing tests.

  describe("Props passing", () => {
    it("passes correct props to ScoreBoard", () => {
      render(
        <GameContainer
          {...mockProps}
          gameStarted={true}
          currentScore={7}
          highScore={15}
        />,
      );
      expect(screen.getByText("Score: 7/15")).toBeInTheDocument();
    });

    it("passes correct props to GameMenu", () => {
      render(
        <GameContainer {...mockProps} gameStarted={false} cardTotal={6} />,
      );
      expect(screen.getByText("Menu - Cards: 6")).toBeInTheDocument();
    });

    it("passes correct props to CardDisplay", () => {
      render(<GameContainer {...mockProps} />);
      expect(screen.getByText("Cards: 2 of 4")).toBeInTheDocument();
    });
  });
});
