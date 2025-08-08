import { it, describe, expect } from "vitest";
import { shuffleArray } from "./shuffleArray";

describe("shuffleArray", () => {
  it("Should return an Array", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    const shuffled = shuffleArray(testArray);
    expect(Array.isArray(shuffled)).toBe(true);
  });

  it("Should return a new Array instance", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    const shuffled = shuffleArray(testArray);
    expect(shuffled).not.toBe(testArray);
  });

  it("Should return error if input is not an array", () => {
    expect(() => {
      shuffleArray("not an array");
    }).toThrow("Expected input to be an array");
  });

  it("Should return an Array the same length as passed in", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    const shuffled = shuffleArray(testArray);
    expect(shuffled.length).toEqual(testArray.length);
  });

  it("Should return a shuffled array with the same elements", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    const shuffled = shuffleArray(testArray);
    expect(shuffled.sort()).toStrictEqual(testArray.sort());
  });

  it("Should not return an empty array", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    const shuffled = shuffleArray(testArray);
    expect(shuffled).not.toEqual([]);
  });

  it("Should not return an array with undefined elements", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    const shuffled = shuffleArray(testArray);
    expect(shuffled).not.toContain(undefined);
  });

  it("Should shuffle the array (statistical test)", () => {
    const testArray = ["tony", "trevor", "bob", "gary"];
    let differentCount = 0;

    // Run shuffle multiple times
    for (let i = 0; i < 10; i++) {
      const shuffled = shuffleArray(testArray);
      if (JSON.stringify(shuffled) !== JSON.stringify(testArray)) {
        differentCount++;
      }
    }
    // Should shuffle differently at least once in 10 attempts
    expect(differentCount).toBeGreaterThan(0);
  });
});
