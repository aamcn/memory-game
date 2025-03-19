import { it, describe, expect } from "vitest";
import { shuffleArray } from "./shuffleArray";

describe("shuffleArray", () => {
  it("Should return an Array", () => {
    const testArray = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(testArray);
    expect(Array.isArray(shuffled)).toBe(true);
  });

  it("Should fail if anything other than an Array is returned", () => {
    const testArray = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(testArray);
    expect(Array.isArray(shuffled)).not.toBe(false);
  });

  it("Should return an Array the same length as passed in", () => {
    const testArray = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(testArray);
    expect(shuffled.length).toEqual(testArray.length);
  });
});
