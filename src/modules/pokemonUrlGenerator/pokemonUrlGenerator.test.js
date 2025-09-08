import { generatePokemonUrls } from "./PokemonUrlGenerator";
import { describe, it, expect } from "vitest";

const mockApiUrlPrefix = "https://pokeapi.co/api/v2/pokemon/";

describe("generatePokemonUrls", () => {
  it("should generate expected number of unique Pokemon API URLs", () => {
    const cardTotal = 5;
    const urls = generatePokemonUrls(cardTotal);
    expect(urls.length).toBe(cardTotal);
  });

  it("should generate api urls with the correct prefix", () => {
    const cardTotal = 5;
    const urls = generatePokemonUrls(cardTotal);
    urls.forEach((url) => {
      expect(url).toContain(mockApiUrlPrefix);
    });
  });

  it("should generate unique Pokemon API URLs", () => {
    const cardTotal = 5;
    const urls = generatePokemonUrls(cardTotal);
    const uniqueUrls = [...new Set(urls)];
    expect(uniqueUrls.length).toBe(cardTotal);
  });

  it("Each url should end with a number 0 or greater", () => {
    const cardTotal = 5;
    const urls = generatePokemonUrls(cardTotal);
    const splitUrls = urls.map((url) => {
      const splitUrlArray = url.split("/");
      return splitUrlArray[splitUrlArray.length - 1];
    });
    splitUrls.forEach((url) => {
      expect(parseInt(url)).not.toBeNaN();
      expect(parseInt(url)).toBeTypeOf("number");
      expect(Number(url)).toBeGreaterThanOrEqual(0);
      expect(Number(url)).toBeLessThanOrEqual(150);
    });
  });
});
