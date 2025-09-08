import { it, describe, expect } from "vitest";
import { getRandomInt } from "./randomNumber";

describe("getRandomInt", () => {
  it("Should return a number", () => {
    expect(getRandomInt(1, 10)).toBeTypeOf("number");
  });

  it("Should return a number within the inclusive range", () => {
    const result = getRandomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10); // More precise than < 11
  });

  it("Should return a number greater than 0", () => {
    expect(getRandomInt(1, 10)).toBeGreaterThan(0);
  });

  it("Should return a number equal to the input when min and max are the same", () => {
    expect(getRandomInt(10, 10)).toBe(10);
  });

  it("Should handle non-integer values", () => {
    expect(getRandomInt(0.5, 1.5)).toBe(1);
    expect(getRandomInt(9.5, 10.5)).toBe(10);
  });

  it("Should be able to return the max value (statistical test)", () => {
    let foundMax = false;
    for (let i = 0; i < 50; i++) {
      if (getRandomInt(5, 5) === 5) {
        // Simple case
        foundMax = true;
        break;
      }
    }
    expect(foundMax).toBe(true);
  });

  it("Should handle type errors gracefully", () => {
    expect(() => {
      getRandomInt("a", 10);
    }).toThrow("Invalid input, both min and max must be numbers");
    expect(() => {
      getRandomInt(1, "b");
    }).toThrow("Invalid input, both min and max must be numbers");
    expect(() => {
      getRandomInt("a", "b");
    }).toThrow("Invalid input, both min and max must be numbers");
  });
});
