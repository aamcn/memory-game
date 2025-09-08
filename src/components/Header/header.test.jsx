import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Header Component", () => {
  it("renders the header", () => {
    renderWithRouter(<Header />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    const titleLink = screen.getByTestId("header-title");
    expect(titleLink).toBeInTheDocument();

    const titleContainer = screen.getByTestId("header-title-container");
    expect(titleContainer).toBeInTheDocument();
  });

  it("renders the game title", () => {
    renderWithRouter(<Header />);
    const titleElement = screen.getByLabelText(/game title: poke-mem/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("has proper heading structure", () => {
    renderWithRouter(<Header />);
    const link = screen.getByTestId("header-title");
    expect(link).toHaveTextContent("Poke-Mem");
  });

  it("Renders the correct attributes", () => {
    renderWithRouter(<Header />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toHaveAttribute("aria-label", "header");
    const titleElement = screen.getByLabelText(/game title: poke-mem/i);
    expect(titleElement).toHaveAttribute("aria-label", "Game Title: Poke-Mem");
  });

  it("Should have a clickable and accessible title link", () => {
    renderWithRouter(<Header />);
    const titleLink = screen.getByTestId("header-title");
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).not.toHaveAttribute("disabled");
  });

  it("Should have a link to the game page", () => {
    renderWithRouter(<Header />);
    const titleLink = screen.getByTestId("header-title");
    expect(titleLink).toHaveAttribute("href", "/game-page");
  });
});
