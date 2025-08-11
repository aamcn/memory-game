import CardDisplay from "./CardDisplay";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi }  from "vitest";
import React from "react";

// Mock CardTemplate as a simple functional component for testing CardDisplay in isolation
vi.mock("../cardTemplate/CardTemplate", () => ({
  default: ({ pokemonCardDetails }) => (
    <div data-testid="card-template">
      {pokemonCardDetails.name}
    </div>
  ),
}));

describe("CardDisplay Component", () => {
  // Mock props for testing
  const mockProps = {
    chosenPokemonCardData: [
      { id: 1, name: "Pikachu", imageUrl: "test-url-1" },
      { id: 2, name: "Charmander", imageUrl: "test-url-2" },
    ],
    setCurrentScore: vi.fn(),
    currentScore: 0,
    setGameOver: vi.fn(),
    cardObjects: [],
    setCardObjects: vi.fn(),
  };

  it("renders the card display container when not hidden", () => {
    render(<CardDisplay {...mockProps} cardTotal={4} />);
    expect(screen.getByTestId("cards-container")).toBeInTheDocument();
  });

  it("applies correct CSS class for 4 cards", () => {
    render(<CardDisplay {...mockProps} cardTotal={4} />);
    const container = screen.getByTestId("cards-container");
    expect(container.className).toMatch(/fourCardsContainer/);
  });

  it("applies correct CSS class for 6 cards", () => {
    render(<CardDisplay {...mockProps} cardTotal={6} />);
    const container = screen.getByTestId("cards-container");
    expect(container.className).toMatch(/sixCardsContainer/);
  });

  it("applies correct CSS class for 9 cards", () => {
    render(<CardDisplay {...mockProps} cardTotal={9} />);
    const container = screen.getByTestId("cards-container");
    expect(container.className).toMatch(/nineCardsContainer/);
  });

  it("renders CardTemplate components for each Pokemon", () => {
    render(<CardDisplay {...mockProps} cardTotal={4} />);
    
    // Check that CardTemplate components are rendered for each Pokemon
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
    
    // Check that we have the correct number of card templates
    const cardTemplates = screen.getAllByTestId("card-template");
    expect(cardTemplates).toHaveLength(2);
  });

  it("does not render when chosenPokemonCardData is null", () => {
    render(
      <CardDisplay 
        {...mockProps} 
        chosenPokemonCardData={null} 
        cardTotal={4} 
      />
    );
    
    // The container should still exist but no cards should be rendered
    expect(screen.getByTestId("cards-container")).toBeInTheDocument();
    expect(screen.queryByTestId("card-template")).not.toBeInTheDocument();
  });

  it("handles empty chosenPokemonCardData array", () => {
    render(
      <CardDisplay 
        {...mockProps} 
        chosenPokemonCardData={[]} 
        cardTotal={4} 
      />
    );
    
    expect(screen.getByTestId("cards-container")).toBeInTheDocument();
    expect(screen.queryByTestId("card-template")).not.toBeInTheDocument();
  });

  it("passes correct props to CardTemplate components", () => {
    render(<CardDisplay {...mockProps} cardTotal={6} />);
    
    // Verify that CardTemplate receives the correct Pokemon data
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
  });
  
  it("initially renders with cards visible", () => {
    render(<CardDisplay {...mockProps} cardTotal={4} />);
    
    // The container should be visible and contain cards
    const container = screen.getByTestId("cards-container");
    expect(container).toBeInTheDocument();
    expect(screen.getAllByTestId("card-template")).toHaveLength(2);
  });
});