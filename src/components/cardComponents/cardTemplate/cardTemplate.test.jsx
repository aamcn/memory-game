import { describe, it, vi, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import CardTemplate from "./CardTemplate";
import React from "react";
import { afterEach } from "vitest";

describe("Card Element", () => {
  const mockCardDetails = {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
    imageUrl: "https://fakeimg.pl/100/",
    isClicked: false,
  };

  const mockProps = {
    pokemonCardDetails: mockCardDetails,
    setCurrentScore: vi.fn(),
    currentScore: 0,
    setGameOver: vi.fn(() => {}),
    setCardObjects: vi.fn(),
    setIsHidden: vi.fn(() => {}),
    cardTotal: 4,
  };

  afterEach(() => {
    // Reset the card's clicked state for each test
    mockProps.pokemonCardDetails.isClicked = false;
    mockProps.cardTotal = 4;
    mockProps.currentScore = 0;

    // Clear mock function calls
    vi.clearAllMocks();
  });

  it("Should render a card container", () => {
    render(<CardTemplate {...mockProps} />);
    expect(screen.getByTestId("playingCard")).toBeInTheDocument();
  });

  it("Should display Pokemon name and image correctly", () => {
    render(<CardTemplate {...mockProps} />);

    const renderedCardName = screen.getByTestId("card-name");
    const renderedCardImage = screen.getByTestId("card-image");

    expect(renderedCardName.textContent).toBe("Bulbasaur");
    expect(renderedCardImage.src).toBe("https://fakeimg.pl/100/");
  });

  it("Should call setCurrentScore and update the current score when the card is clicked", async () => {
    const user = userEvent.setup();
    render(<CardTemplate {...mockProps} />);
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(mockProps.setCurrentScore).toHaveBeenCalledWith(
      mockProps.currentScore + 1,
    );
    expect(mockProps.setCurrentScore).toHaveBeenCalled();
  });

  it('Should set pokemonCardDetails.isClicked to "true" ', async () => {
    const user = userEvent.setup();

    render(<CardTemplate {...mockProps} />);
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(mockProps.pokemonCardDetails.isClicked).toBe(true);
  });

  it('Should call setIsHidden and isHidden should be set to "true"', async () => {
    const user = userEvent.setup();
    render(<CardTemplate {...mockProps} />);
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(mockProps.setIsHidden).toHaveBeenCalledWith(true);
  });

  it("Should call setCardObjects", async () => {
    const user = userEvent.setup();

    render(<CardTemplate {...mockProps} />);
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(mockProps.setCardObjects).toHaveBeenCalled();
  });

  it("Should call setGameOver when card is clicked twice", async () => {
    const user = userEvent.setup();

    // Set up a card that has already been clicked
    const alreadyClickedProps = {
      ...mockProps,
      pokemonCardDetails: {
        ...mockProps.pokemonCardDetails,
        isClicked: true,
      },
    };

    render(<CardTemplate {...alreadyClickedProps} />);
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(alreadyClickedProps.setGameOver).toHaveBeenCalledWith(true);
  });

  it("Should apply fourCardContainer CSS class when cardTotal is 4", () => {
    render(<CardTemplate {...mockProps} />);
    const playingCard = screen.getByTestId("playingCard");

    expect(playingCard.className).toContain("fourCardContainer");
  });

  it("Should apply sixCardContainer CSS class when cardTotal is 6", () => {
    mockProps.cardTotal = 6;
    render(<CardTemplate {...mockProps} />);
    const playingCard = screen.getByTestId("playingCard");

    expect(playingCard.className).toContain("sixCardContainer");
  });

  it("Should apply nineCardContainer CSS class when cardTotal is 9", () => {
    mockProps.cardTotal = 9;
    render(<CardTemplate {...mockProps} />);
    const playingCard = screen.getByTestId("playingCard");

    expect(playingCard.className).toContain("nineCardContainer");
  });
});
