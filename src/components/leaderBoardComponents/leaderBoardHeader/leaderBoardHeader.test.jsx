import LeaderBoardHeader from "./LeaderBoardHeader";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import React from "react";
const mockProps = {
    selectedDifficulty: "Easy",
}

afterEach(() => {
  vi.clearAllMocks();
});

describe("LeaderBoardHeader", () => {
  
  it("renders the header correctly", () => {
    render(<LeaderBoardHeader {...mockProps} />);
    const headerElement = screen.getByTestId("leader-board-header");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders with the correct default difficulty", () => {
    render(<LeaderBoardHeader {...mockProps} />);
    const difficultyElement = screen.getByRole("heading", { name: /easy/i });
    expect(difficultyElement.textContent).toBe("Easy Leader Board");
  });   

  it("renders with the correct updated difficulty", () => {
    render(<LeaderBoardHeader selectedDifficulty="Hard" />);
    const difficultyElement = screen.getByRole("heading", { name: /hard/i });
    expect(difficultyElement.textContent).toBe("Hard Leader Board");
  });

  it("updates to the new selectedDifficulty when rerendered", () => {
    const { rerender } = render(<LeaderBoardHeader selectedDifficulty="Easy" />);
    const difficultyElement = screen.getByRole("heading", { name: /easy/i });
    expect(difficultyElement.textContent).toBe("Easy Leader Board");

    rerender(<LeaderBoardHeader selectedDifficulty="Medium" />);
    expect(difficultyElement.textContent).toBe("Medium Leader Board");

    rerender(<LeaderBoardHeader selectedDifficulty="Hard" />);
    expect(difficultyElement.textContent).toBe("Hard Leader Board");

    rerender(<LeaderBoardHeader selectedDifficulty="Easy" />);
    expect(difficultyElement.textContent).toBe("Easy Leader Board");
  });

});
