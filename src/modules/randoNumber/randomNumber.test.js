import { it, describe, expect } from "vitest";
import { getRandomInt } from "./randomNumber";

describe("getRandomInt", () => {
  it("Should return a number", () => {
    expect(getRandomInt(1, 10)).toBeTypeOf("number");
  });

  it("Should return a number smaller than the input argument", () => {
    expect(getRandomInt(1, 10)).toBeLessThan(11);
  });

  it("Should return a number greater than 0", () => {
    expect(getRandomInt(1, 10)).toBeGreaterThan(0);
  });
});
