import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import React from "react";
import GameMenu from "./GameMenu";


describe("GameMenu Component", () => {
  const mockProps = {
    cardTotal: 4,
    handleStartClick: vi.fn(),
    setCardTotal: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Basic rendering", () => {
    it("Should render the game menu container", () => {
      render(<GameMenu {...mockProps} />);
      const container = screen.getByTestId("game-menu-container");
      expect(container).toBeInTheDocument();
    });

    it("Should render the title with correct text", () => {
      render(<GameMenu {...mockProps} />);
      const title = screen.getByRole("heading", { name: "Menu" });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent("Menu");
    });

    it("Should render the difficulty title", () => {
      render(<GameMenu {...mockProps} />);
      const difficultyTitle = screen.getByTestId("difficulty-title");
      expect(difficultyTitle).toBeInTheDocument();
      expect(difficultyTitle).toHaveTextContent("Choose Your Difficulty");
    });

    it("Should render the Start button", () => {
      render(<GameMenu {...mockProps} />);
      const startButton = screen.getByTestId("start-button");
      expect(startButton).toBeInTheDocument();
    });
  });

  describe("Difficulty display", () => {
    it("Should display '4 Cards' when cardTotal is 4", () => {
      render(<GameMenu {...mockProps} cardTotal={4} />);
      const difficultyText = screen.getByTestId("difficultyText");
      expect(difficultyText).toHaveTextContent("4 Cards");
    });

    it("Should display '6 Cards' when cardTotal is 6", () => {
      render(<GameMenu {...mockProps} cardTotal={6} />);
      const difficultyText = screen.getByTestId("difficultyText");
      expect(difficultyText).toHaveTextContent("6 Cards");
    });

    it("Should display '9 Cards' when cardTotal is 9", () => {
      render(<GameMenu {...mockProps} cardTotal={9} />);
      const difficultyText = screen.getByTestId("difficultyText");
      expect(difficultyText).toHaveTextContent("9 Cards");
    });
  });

  describe("Difficulty buttons", () => {
    it("Should render Easy button with correct value", () => {
      render(<GameMenu {...mockProps} />);
      const easyButton = screen.getByTestId("easy-button");
      expect(easyButton).toBeInTheDocument();
      expect(easyButton).toHaveAttribute("value", "4");
      expect(easyButton).toHaveTextContent("Easy");
    });

    it("Should render Medium button with correct value", () => {
      render(<GameMenu {...mockProps} />);
      const mediumButton = screen.getByTestId("medium-button");
      expect(mediumButton).toBeInTheDocument();
      expect(mediumButton).toHaveAttribute("value", "6");
      expect(mediumButton).toHaveTextContent("Medium");
    });

    it("Should render Hard button with correct value", () => {
      render(<GameMenu {...mockProps} />);
      const hardButton = screen.getByTestId("hard-button");
      expect(hardButton).toBeInTheDocument();
      expect(hardButton).toHaveAttribute("value", "9");
      expect(hardButton).toHaveTextContent("Hard");
    });
  });

  describe("User interactions", () => {
    it("Should call setCardTotal with 4 when Easy button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameMenu {...mockProps} />);
      
      const easyButton = screen.getByTestId("easy-button");
      await user.click(easyButton);
      
      expect(mockProps.setCardTotal).toHaveBeenCalledWith(4);
    });

    it("Should call setCardTotal with 6 when Medium button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameMenu {...mockProps} />);
      
      const mediumButton = screen.getByTestId("medium-button");
      await user.click(mediumButton);
      
      expect(mockProps.setCardTotal).toHaveBeenCalledWith(6);
    });

    it("Should call setCardTotal with 9 when Hard button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameMenu {...mockProps} />);
      
      const hardButton = screen.getByTestId("hard-button");
      await user.click(hardButton);
      
      expect(mockProps.setCardTotal).toHaveBeenCalledWith(9);
    });

    it("Should call handleStartClick when Start button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameMenu {...mockProps} />);
      
      const startButton = screen.getByTestId("start-button");
      await user.click(startButton);
      
      expect(mockProps.handleStartClick).toHaveBeenCalledTimes(1);
    });

    it("Should not call setCardTotal when Start button is clicked", async () => {
      const user = userEvent.setup();
      render(<GameMenu {...mockProps} />);
      
      const startButton = screen.getByTestId("start-button");
      await user.click(startButton);
      
      expect(mockProps.setCardTotal).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("Should have all buttons accessible by role", () => {
      render(<GameMenu {...mockProps} />);
      
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(4); 
    });

    it("Should have proper heading structure", () => {
      render(<GameMenu {...mockProps} />);
      
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toBeInTheDocument();
    });
  });

});
