import GamePage from "./GamePage";
import React from "react";
import { render, screen } from "@testing-library/react";
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
});
