import LandingPage from "./LandingPage";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, describe, it } from "vitest";
import { userEvent } from "@testing-library/user-event";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("LandingPage", () => {
  it("renders landing page", () => {
    renderWithRouter(<LandingPage />);
    const landingPageContainer = screen.getByTestId("landing-page-container");
    expect(landingPageContainer).toBeInTheDocument();
  });

  it("should render the main image", () => {
    renderWithRouter(<LandingPage />);
    const mainImage = screen.getByTestId("main-image");
    expect(mainImage).toBeInTheDocument();
  });

  it("main image source url should be correct", () => {
    renderWithRouter(<LandingPage />);
    const mainImage = screen.getByTestId("main-image");
    expect(mainImage).toHaveAttribute(
      "src",
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9qM2dmeW42aHQxMXAwNnA2YmV1dTRiaGoweHE4YWZoMDJoZnJkeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/teYrgUtS8tPl6/giphy.gif",
    );
  });

  it("should have a start button that links to the game page", () => {
    renderWithRouter(<LandingPage />);
    const startButton = screen.getByRole("link", { name: /start/i });
    expect(startButton).toHaveAttribute("href", "/game-page");
  });

  it("navigates to game page on start button click", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game-page" element={<div>Game Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    const startButton = screen.getByRole("link", { name: /start/i });
    await user.click(startButton);
    expect(screen.getByText("Game Page")).toBeInTheDocument();
  });

  it("should NOT navigate to game page with no start button click", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game-page" element={<div>Game Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
    const startButton = screen.getByRole("link", { name: /start/i });
    const gamePage = screen.queryByText("Game Page");
    expect(startButton).toBeInTheDocument();
    expect(gamePage).not.toBeInTheDocument();
  });
});
