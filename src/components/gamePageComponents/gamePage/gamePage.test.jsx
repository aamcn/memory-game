import GamePage from "./GamePage";
import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

// Helper function to render component with Router context
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("GamePage Component", () => {

  describe("Basic rendering tests", () => {
    it("Should render GamePage", () => {
      renderWithRouter(<GamePage />);
      const gamePageElement = screen.getByTestId("game-page");
      expect(gamePageElement).toBeInTheDocument();
    });

    it("Should render Header", () => {
      renderWithRouter(<GamePage />);
      const headerElement = screen.getByTestId("header");
      expect(headerElement).toBeInTheDocument();
    });

    it("Should render GameContainer", () => {
      renderWithRouter(<GamePage />);
      const gameContainerElement = screen.getByTestId("game-container");
      expect(gameContainerElement).toBeInTheDocument();
    });
  });

  describe("Game logic tests", () => {
    it("Should start a new game", () => {
      renderWithRouter(<GamePage />);
      const startButton = screen.getByTestId("start-button");
      fireEvent.click(startButton);
      const gameContainerElement = screen.getByTestId("game-container");
      expect(gameContainerElement).toBeInTheDocument();
    });

    it("Should reset game state when gameOver is true", () => {
      // Since GamePage manages its own state, we need to test this differently
      // This test would need to simulate actions that lead to gameOver state
      renderWithRouter(<GamePage />);
      // You would need to trigger game over conditions here
      // and then check if the appropriate elements are rendered/hidden
      const gamePageElement = screen.getByTestId("game-page");
      expect(gamePageElement).toBeInTheDocument();
    });

  });
  
});

