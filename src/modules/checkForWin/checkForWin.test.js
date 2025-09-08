import { checkForWin } from "./checkForWin";
import { it, describe, expect, vi, beforeEach } from "vitest";
describe("checkForWin", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const cardTotal = 4; // Total number of cards in the game.

  it("should call setGameWon when a winning condition is met", () => {
    const mockSetGameWon = vi.fn(() => {});
    checkForWin(4, cardTotal, mockSetGameWon);
    expect(mockSetGameWon).toHaveBeenCalled();
  });

  it("should call setGameWon when a winning condition is met", () => {
    const mockSetGameWon = vi.fn(() => {});
    checkForWin(4, cardTotal, mockSetGameWon);
    expect(mockSetGameWon).toHaveBeenCalledWith(true);
  });

  it("should NOT call setGameWon when a winning condition is met", () => {
    const mockSetGameWon = vi.fn(() => {});
    checkForWin(1, cardTotal, mockSetGameWon);
    expect(mockSetGameWon).not.toHaveBeenCalled();
  });

  it("should NOT call setGameWon and pass 'false' when a winning condition is met", () => {
    const mockSetGameWon = vi.fn(() => {});
    checkForWin(1, cardTotal, mockSetGameWon);
    expect(mockSetGameWon).not.toHaveBeenCalledWith(false);
  });
});
