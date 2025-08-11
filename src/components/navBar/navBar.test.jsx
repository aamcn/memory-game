import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import React from "react";

// Helper function to render component with Router context
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe("Navbar Component", () => {
  it("renders the navbar", () => {
    renderWithRouter(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  it("Renders navbar links.", () => {
    renderWithRouter(<Navbar />);
    const gameLink = screen.getByRole("link", { name: /game/i });
    const leaderBoardLink = screen.getByRole("link", { name: /leader board/i });
    expect(gameLink).toBeInTheDocument();
    expect(leaderBoardLink).toBeInTheDocument();
  });

  it("Navbar links should be clickable.", () => {
    renderWithRouter(<Navbar />);
    const gameLink = screen.getByRole("link", { name: /game/i });
    const gameLinkSpy = vi.spyOn(gameLink, "click");
    const leaderBoardLink = screen.getByRole("link", { name: /leader board/i });
    const leaderBoardSpy = vi.spyOn(leaderBoardLink, "click");
    gameLink.click();
    leaderBoardLink.click()
    expect(gameLinkSpy).toHaveBeenCalled();
    expect(leaderBoardSpy).toHaveBeenCalled()
  });

  it("should have correct href attributes", () => {
    renderWithRouter(<Navbar />);
    const gameLink = screen.getByRole("link", { name: /game/i });
    const leaderBoardLink = screen.getByRole("link", { name: /leader board/i });
    expect(gameLink).toHaveAttribute("href", "/game-page");
    expect(gameLink).toHaveAttribute("id", "game-link");
    expect(leaderBoardLink).toHaveAttribute("href", "/leader-board");
    expect(leaderBoardLink).toHaveAttribute("id", "leaderboard-link");
  })

})