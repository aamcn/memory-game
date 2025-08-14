import Navbar from "./Navbar";
import { render, screen, act  } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import { BrowserRouter, MemoryRouter, Routes, Route} from "react-router-dom";
import userEvent from "@testing-library/user-event";
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
    
    act(() => {
      gameLink.click();
      leaderBoardLink.click();
    });
    expect(gameLinkSpy).toHaveBeenCalled();
    expect(leaderBoardSpy).toHaveBeenCalled();
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

describe("Navigation tests", () => {

  it("should navigate to game-page path when user clicks the Game Page link", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/leader-board"]}>
        <Routes>
          <Route path="/game-page" element={
            <div>Game Page
              <Navbar />
            </div>
          } />
          <Route path="/leader-board" element=
          {
            <div>Leader Board Page
              <Navbar />
            </div>} />
        </Routes>
      </MemoryRouter>,
    );
    const gamePageLink = screen.getByRole("link", { name: /Game/i });
    await user.click(gamePageLink);
    const gamePage = screen.queryByText("Game Page");
    expect(gamePage).toBeInTheDocument();
  });

  it("should navigate to leader-board path when user clicks the Leader Board link", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/game-page"]}>
        <Routes>
          <Route path="/game-page" element={
            <div>Game Page
              <Navbar />
            </div>
          } />
          <Route path="/leader-board" element=
          {
            <div>Leader Board Page
              <Navbar />
            </div>} />
        </Routes>
      </MemoryRouter>,
    );
    const leaderBoardLink = screen.getByRole("link", { name: /Leader Board/i });
    await user.click(leaderBoardLink);
    const LeaderBoardPage = screen.queryByText("Leader Board Page");
    expect(LeaderBoardPage).toBeInTheDocument();
  });
})

