// Maps and fetches pokemon API URLs and inserts the returned data into chosenPokemon state.
function fetchPokeUrls(pokeApiUrls, setChosenPokemon) {
  pokeApiUrls.map((pokemonUrl) => {
    fetch(pokemonUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((response) =>
        setChosenPokemon((chosenPokemon) => [...chosenPokemon, response]),
      )
      .catch((error) => console.error(error));
  });
}

export { fetchPokeUrls };
