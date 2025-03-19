import { useState, useEffect } from "react";
import GameDisplay from "../components/GameComponents/GameDisplay";
import { getRandomInt } from "../modules/randomNumber";
import Header from "../components/Header/Header";
import { v4 as uuidv4 } from "uuid";
import { PokemonCardObject } from "../modules/cardConstructor";

function GamePage() {
  const [fullPokemonList, setFullPokemonList] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [cardObjects, setCardObjects] = useState([]);
  const [gameResults, setGameResults] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [cardTotal, setCardTotal] = useState(3);

  /* On render the initial pokemon list is fetched and stored, this contains pokemon 
  name and its individual api url only. */

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setFullPokemonList(response))
      .catch((error) => console.error(error));
  }, []);

  // Function to choose random pokemon from the pre fetched pokemon list.
  function choosePokemon() {
    //Reset chosenPokemon state.
    setChosenPokemon([]);
    let pokeUrls = [];
    //Adds unique, randomly chosen urls from fullPokemonList and discards duplicates.
    while (pokeUrls.length < parseInt(cardTotal)) {
      let randomNumber = getRandomInt(150);
      if (!pokeUrls.includes(fullPokemonList.results[randomNumber])) {
        pokeUrls.push(fullPokemonList.results[randomNumber]);
      }
    }
    //Once pokeUrls length reaches cardTotal the individual pokemon api data is fetched.
    pokeUrls.map((item) => {
      fetchIndividualPokedata(item.url);
    });
  }

  // Fetches individiual pokemon API and inserts it into chosenPokemon state.
  function fetchIndividualPokedata(pokemonUrl) {
    fetch(pokemonUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((response) =>
        setChosenPokemon((chosenPokemon) => [...chosenPokemon, response]),
      )
      .catch((error) => console.error(error));
  }

  /* When the game is started the currentScore is reset to 0, theGameStarted state
  is set to true (hiding the game menu).
  */
  const handleStartClick = () => {
    setGameStarted(true);
    setCurrentScore(0);
    choosePokemon();
  };

  /* When the length of the chosenPokemon array reaches the card total, 
  each array entry's name, imageUrl and type along with a unique id are passed to the
  PokemonCardObject constructor and the returned object is stored in the cardObjects
  state.
  */
  useEffect(() => {
    if (chosenPokemon.length === cardTotal) {
      chosenPokemon.map((pokemon) => {
        let newId = uuidv4();
        let imageUrl = pokemon.sprites.other.dream_world.front_default;
        let name = pokemon.name;
        let type = pokemon.types[0].type.name;
        const newCard = new PokemonCardObject(name, imageUrl, newId, type);
        setCardObjects((cardObjects) => [...cardObjects, newCard]);
      });
    }
  }, [chosenPokemon]);

  //When the gameResults state is changed the cardObjects are wiped.
  useEffect(() => {
    if (gameResults) {
      setCardObjects([]);
    }
  }, [gameResults]);

  /* If the currentScore is greater than the highScore the highScore is updated to 
  match currentScore */
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [highScore, currentScore]);

  return (
    <>
      <Header />
      <GameDisplay
        cardTotal={cardTotal}
        setCardTotal={setCardTotal}
        highScore={highScore}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameResults={gameResults}
        handleStartClick={handleStartClick}
        currentScore={currentScore}
        setGameResults={setGameResults}
        setCurrentScore={setCurrentScore}
        cardObjects={cardObjects}
        setCardObjects={setCardObjects}
      />
    </>
  );
}

export default GamePage;
