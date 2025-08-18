import { fetchPokeUrls } from "./fetchPokeUrls";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

// Mock the global fetch function
Object.defineProperty(globalThis, 'fetch', {
    value: vi.fn(),
    writable: true
});


// Mock the Pokemon data
const mockPokemonData1 = {
    id: 1,
    name: "bulbasaur",
    sprites: { front_default: "https://example.com/bulbasaur.png" }
};
// Mock the second Pokemon data
const mockPokemonData2 = {
    id: 2,
    name: "ivysaur", 
    sprites: { front_default: "https://example.com/ivysaur.png" }
};


describe("fetchPokeUrls", () => {
    let setChosenPokemon;

    beforeEach(() => {
        setChosenPokemon = vi.fn();
        // Reset the mock function before each test
        globalThis.fetch.mockClear();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("fetches pokemon data and calls setChosenPokemon for each URL", async () => {
        const pokeApiUrls = [
            "https://mock.com/mock/1",
            "https://mock.com/mock/2"
        ];

        // Mock fetch to return different responses for each call
        globalThis.fetch
            .mockResolvedValueOnce({
                ok: true,
                json: () => Promise.resolve(mockPokemonData1)
            })
            .mockResolvedValueOnce({
                ok: true,
                json: () => Promise.resolve(mockPokemonData2)
            });

        fetchPokeUrls(pokeApiUrls, setChosenPokemon);

        // Wait for all promises to resolve
        await new Promise(resolve => setTimeout(resolve, 0));

        // Verify fetch was called with correct URLs
        expect(globalThis.fetch).toHaveBeenCalledTimes(2);
        expect(globalThis.fetch).toHaveBeenCalledWith(pokeApiUrls[0], { mode: "cors" });
        expect(globalThis.fetch).toHaveBeenCalledWith(pokeApiUrls[1], { mode: "cors" });
        // Verify setChosenPokemon was called with the correct data
        expect(setChosenPokemon).toHaveBeenCalledTimes(2);
        // Test the function behavior
        expect(setChosenPokemon.mock.calls[0][0]([])).toEqual([mockPokemonData1]);
        expect(setChosenPokemon.mock.calls[1][0]([])).toEqual([mockPokemonData2]);
    });

    it("handles fetch errors gracefully", async () => {
        const pokeApiUrls = ["https://pokeapi.co/api/v2/pokemon/1"];
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

        // Mock fetch to reject
        globalThis.fetch.mockRejectedValueOnce(new Error('Network error'));

        fetchPokeUrls(pokeApiUrls, setChosenPokemon);

        // Wait for promises to resolve/reject
        await new Promise(resolve => setTimeout(resolve, 0));

        expect(globalThis.fetch).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(new Error('Network error'));
        expect(setChosenPokemon).not.toHaveBeenCalled();

        consoleErrorSpy.mockRestore();
    });

    it("handles empty URL array", () => {
        const pokeApiUrls = [];
        
        fetchPokeUrls(pokeApiUrls, setChosenPokemon);
        
        expect(globalThis.fetch).not.toHaveBeenCalled();
        expect(setChosenPokemon).not.toHaveBeenCalled();
    });
});
