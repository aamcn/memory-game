import { render, rerender, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import GameMenu from "./GameMenu";

describe("Easy Button", () => {
  it('Should render "Easy Button"', () => {
    render(<GameMenu cardTotal={3} />);

    const button = screen.getByRole("button", { name: "Easy" });
    console.log(button.value);
    expect(button).toBeInTheDocument();
  });

  it("Should update cardTotal to '3' when the Easy button is clickec", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    const user = userEvent.setup();

    render(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);

    const easyButton = screen.getByRole("button", { name: "Easy" });
    await user.click(easyButton);
    expect(cardTotal).toBe(3);
  });

  it("Should NOT update cardTotal to '3' when the Easy button is NOT clickec", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    render(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const easyButton = screen.getByRole("button", { name: "Easy" });
    expect(cardTotal).not.toBe(3);
  });

  it("Should change difficulty text to '3 Cards' when 'Easy button' is clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    const user = userEvent.setup();

    const { rerender } = render(
      <GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />,
    );
    const easyButton = screen.getByRole("button", { name: "Easy" });
    await user.click(easyButton);
    rerender(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const difficultyText = screen.getByTestId("difficultyText");
    expect(difficultyText.textContent).not.toStrictEqual("10 Cards");
    expect(difficultyText.textContent).toStrictEqual("3 Cards");
  });

  it("Should change difficulty text to '3 Cards' when 'Easy button' is clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };

    const { rerender } = render(
      <GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />,
    );
    const easyButton = screen.getByRole("button", { name: "Easy" });

    rerender(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const difficultyText = screen.getByTestId("difficultyText");

    expect(difficultyText.textContent).toStrictEqual("0 Cards");
    expect(difficultyText.textContent).not.toStrictEqual("3 Cards");
  });
});

describe("Medium Button", () => {
  it('Should render "Medium Button"', () => {
    render(<GameMenu />);
    const mediumButton = screen.getByRole("button", { name: "Medium" });
    expect(mediumButton).toBeInTheDocument();
  });

  it("Should change the cardTotal to '6' when Medium button is NOT clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    const user = userEvent.setup();

    render(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const mediumButton = screen.getByRole("button", { name: "Medium" });
    await user.click(mediumButton);

    expect(cardTotal).toBe(6);
  });

  it("Should NOT change the cardTotal to '6' if Medium button is NOT clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };

    render(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const mediumButton = screen.getByRole("button", { name: "Medium" });

    expect(cardTotal).toBe(0);
  });

  it("Should change difficulty text to '6 Cards' when 'Medium button' is clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    const user = userEvent.setup();

    const { rerender } = render(
      <GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />,
    );
    const mediumButton = screen.getByRole("button", { name: "Medium" });
    await user.click(mediumButton);
    rerender(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const difficultyText = screen.getByTestId("difficultyText");
    expect(difficultyText.textContent).not.toStrictEqual("0 Cards");
    expect(difficultyText.textContent).toStrictEqual("6 Cards");
  });

  it("Should NOT change difficulty text to '6 Cards' if 'Medium button' is NOT clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };

    const { rerender } = render(
      <GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />,
    );
    const mediumButton = screen.getByRole("button", { name: "Medium" });

    rerender(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const difficultyText = screen.getByTestId("difficultyText");
    expect(difficultyText.textContent).not.toStrictEqual("6 Cards");
    expect(difficultyText.textContent).toStrictEqual("0 Cards");
  });
});

describe("Hard Button", () => {
  it('Should render "Hard Button"', () => {
    render(<GameMenu />);
    const hardButton = screen.getByRole("button", { name: "Hard" });
    expect(hardButton).toBeInTheDocument();
  });

  it("Should change the cardTotal to '9' when Hard button is clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    const user = userEvent.setup();

    render(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const hardButton = screen.getByRole("button", { name: "Hard" });
    await user.click(hardButton);

    expect(cardTotal).toBe(9);
  });

  it("Should NOT change the cardTotal to '9' when Hard button is NOT clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };

    render(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const hardButton = screen.getByRole("button", { name: "Hard" });

    expect(cardTotal).toBe(0);
  });

  it("Should change difficulty text to '6 Cards' when 'Medium button' is clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };
    const user = userEvent.setup();

    const { rerender } = render(
      <GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />,
    );
    const hardButton = screen.getByRole("button", { name: "Hard" });
    await user.click(hardButton);
    rerender(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const difficultyText = screen.getByTestId("difficultyText");
    expect(difficultyText.textContent).not.toStrictEqual("0 Cards");
    expect(difficultyText.textContent).toStrictEqual("9 Cards");
  });

  it("Should change difficulty text to '6 Cards' when 'Medium button' is clicked", async () => {
    let cardTotal = 0;
    const setCardTotal = (number) => {
      cardTotal = number;
    };

    const { rerender } = render(
      <GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />,
    );
    const hardButton = screen.getByRole("button", { name: "Hard" });

    rerender(<GameMenu setCardTotal={setCardTotal} cardTotal={cardTotal} />);
    const difficultyText = screen.getByTestId("difficultyText");
    expect(difficultyText.textContent).not.toStrictEqual("9 Cards");
    expect(difficultyText.textContent).toStrictEqual("0 Cards");
  });
});

describe("Start Button", () => {
  it('Should render "Start Button"', () => {
    render(<GameMenu />);
    const startButton = screen.getByRole("button", { name: "Start" });
    expect(startButton).toBeInTheDocument();
  });

  it('Should call "handleStartClick" function when Start button is clicked', async () => {
    const handleStartClick = vi.fn();
    const user = userEvent.setup();
    render(<GameMenu handleStartClick={handleStartClick} />);
    const startButton = screen.getByRole("button", { name: "Start" });
    await user.click(startButton);
    expect(handleStartClick).toHaveBeenCalled();
  });

  it('Should NOT call "handleStartClick" function if Start button is NOT clicked', async () => {
    const handleStartClick = vi.fn();

    render(<GameMenu handleStartClick={handleStartClick} />);
    const startButton = screen.getByRole("button", { name: "Start" });

    expect(handleStartClick).not.toHaveBeenCalled();
  });
});
