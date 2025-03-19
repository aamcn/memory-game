import { it, describe, expect } from "vitest";
import { PokemonCardObject } from "./cardConstructor";

describe("PokemonCardObject Contructor", () => {
  const newCard = new PokemonCardObject("Tom", "url", 1, "grass");

  it("Should return an object", () => {
    expect(newCard).toBeTypeOf("object");
  });

  it("Should return an object containing input arguments", () => {
    expect(newCard.name).toStrictEqual("Tom");
    expect(newCard.imageUrl).toStrictEqual("url");
    expect(newCard.id).toStrictEqual(1);
    expect(newCard.type).toStrictEqual("grass");
  });

  it("Should initially return isClicked as false", () => {
    expect(newCard.isClicked).toBe(false);
  });

  it("Should store isClicked as true when updated", () => {
    newCard.isClicked = true;
    expect(newCard.isClicked).toBe(true);
  });
});
