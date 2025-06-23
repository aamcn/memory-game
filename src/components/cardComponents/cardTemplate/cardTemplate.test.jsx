import { describe, it, vi, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import CardTemplate from "./CardTemplate";
import React from "react";

describe("Card Element", () => {
  const pokemonCardDetails = {
    id: 1,
    name: "Tony",
    type: "Grass",
    imageUrl: "https://fakeimg.pl/100/",
    isClicked: false,
  };

  it("Should render a card displaying the arguments from the pokemonCardDetails object prop", () => {
    render(<CardTemplate pokemonCardDetails={pokemonCardDetails} />);

    const renderedName = screen.getByTestId("card-name");
    const renderedImage = screen.getByTestId("card-image");

    expect(renderedName.textContent).toBe("Tony");
    expect(renderedImage.src).toBe("https://fakeimg.pl/100/");
  });
});

describe("If PlayingCard is clicked for the first time", () => {
  const pokemonCardDetails = {
    id: 1,
    name: "Tony",
    type: "Grass",
    imageUrl: "https://fakeimg.pl/100/",
    isClicked: false,
  };

  it("Should call setCurrentScore and currentScore should update to 1", async () => {
    let currentScore = 0;
    const setCurrentScore = () => {
      currentScore += 1;
    };
    const setIsHidden = vi.fn();
    const setCardObjects = vi.fn();
    const user = userEvent.setup();

    render(
      <CardTemplate
        pokemonCardDetails={pokemonCardDetails}
        setIsHidden={setIsHidden}
        setCardObjects={setCardObjects}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />,
    );
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(currentScore).toBe(1);
  });

  it('Should set pokemonCardDetails.isClicked to "true" ', async () => {
    let currentScore = 0;
    const setCurrentScore = vi.fn();
    pokemonCardDetails.isClicked = false;
    const setIsHidden = vi.fn();
    const setCardObjects = vi.fn();
    const user = userEvent.setup();

    render(
      <CardTemplate
        pokemonCardDetails={pokemonCardDetails}
        setIsHidden={setIsHidden}
        setCardObjects={setCardObjects}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />,
    );
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(pokemonCardDetails.isClicked).toBe(true);
  });

  it('Should call setIsHidden and isHidden should be set to "true"', async () => {
    let currentScore = 0;
    const setCurrentScore = vi.fn();
    pokemonCardDetails.isClicked = false;
    let isHidden = false;
    const setIsHidden = () => {
      isHidden = true;
    };
    const setCardObjects = vi.fn();
    const user = userEvent.setup();

    render(
      <CardTemplate
        pokemonCardDetails={pokemonCardDetails}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        setCardObjects={setCardObjects}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />,
    );
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(isHidden).toBe(true);
  });

  it("Should call setCardObjects", async () => {
    let currentScore = 0;
    const setCurrentScore = vi.fn();
    pokemonCardDetails.isClicked = false;
    const setIsHidden = vi.fn();
    const setCardObjects = vi.fn();
    const user = userEvent.setup();

    render(
      <CardTemplate
        pokemonCardDetails={pokemonCardDetails}
        setIsHidden={setIsHidden}
        setCardObjects={setCardObjects}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />,
    );
    const PlayingCard = screen.getByTestId("playingCard");
    await user.click(PlayingCard);

    expect(setCardObjects).toHaveBeenCalled();
  });
});

describe('If PlayingCard is clicked and pokemonCardDetail.isClicked = "true"', () => {
  const pokemonCardDetails = {
    id: 1,
    name: "Tony",
    type: "Grass",
    imageUrl: "https://fakeimg.pl/100/",
    isClicked: true,
  };

  it('Should call setGameResults and set gameResults to "true" ', async () => {
    let gameOver = false;
    const setGameOver = () => {
      gameOver = true;
    };
    const user = userEvent.setup();

    render(
      <CardTemplate
        setGameOver={setGameOver}
        pokemonCardDetails={pokemonCardDetails}
      />,
    );
    const PlayingCard = screen.getByTestId("playingCard");

    expect(gameOver).toBe(false);

    await user.click(PlayingCard);

    expect(gameOver).toBe(true);
  });
});
