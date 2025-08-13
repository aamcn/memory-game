import { getRandomInt } from "../randomNumber/randomNumber";

const apiUrlPrefix = "https://pokeapi.co/api/v2/pokemon/";

  /* Resets chosenPokemon and pokeApiUrls to original value.
     Creates and stores random pokemon api urls by appending the apiUrl
     with a random number. if a duplicate url is created it is disregarded.
  */
  function generatePokemonUrls(cardTotal) {
    let pokeApiUrls = [];
    while (pokeApiUrls.length < parseInt(cardTotal)) {
      let randomNumber = getRandomInt(1, 150);
      if (!pokeApiUrls.includes(apiUrlPrefix + randomNumber)) {
        pokeApiUrls.push(apiUrlPrefix + randomNumber);
      }
    }
    // When pokeApiUrls length equals the cardTotal the fetchPokeUrls function is called.
    return pokeApiUrls
  }

  export { generatePokemonUrls };