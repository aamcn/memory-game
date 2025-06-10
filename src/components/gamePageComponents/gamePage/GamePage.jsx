import { useState, useEffect } from "react";
import GameContainer from "../gameContainer/GameContainer";
import { getRandomInt } from "../../../modules/randoNumber/randomNumber";
import { v4 as uuidv4 } from "uuid";
import { PokemonCardObject } from "../../../modules/cardConstructor/cardConstructor";
import {checkForWin} from "../../../modules/checkForWin/checkForWin"
import styles from "./gamePage.module.css"


function GamePage() {
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [cardObjects, setCardObjects] = useState([]);
  const [gameResults, setGameResults] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [cardTotal, setCardTotal] = useState(4);
  const [gameWon, setGameWon] = useState(false);

  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  /* Resets chosenPokemon and pokeApiUrls to original value.
     Creates and stores random pokemon api urls by appending the apiUrl
     with a random number. if a duplicate url is created it is disregarded.
  */
  function choosePokemon() {
    setChosenPokemon([]);
    let pokeApiUrls = [];
    while (pokeApiUrls.length < parseInt(cardTotal)) {
      let randomNumber = getRandomInt(150);
      if (!pokeApiUrls.includes(apiUrl + [randomNumber])) {
        pokeApiUrls.push(apiUrl + [randomNumber]);
      }
    }
    // When pokeApiUrls length equals the cardTotal the fetchPokeUrls function is called.
    fetchPokeUrls(pokeApiUrls);
  }

  // Maps and fetches pokemon API URLs and inserts the returned data into chosenPokemon state.
  function fetchPokeUrls(pokeApiUrls) {
    pokeApiUrls.map((pokemonUrl) => {
      fetch(pokemonUrl, { mode: "cors" })
        .then((response) => response.json())
        .then((response) =>
          setChosenPokemon((chosenPokemon) => [...chosenPokemon, response]),
        )
        .catch((error) => console.error(error));
    });
  }

  /* When the length of the chosenPokemon array reaches the card total, the array entries are 
  passed to the PokemonCardObject constructor and the returned object is stored in the cardObjects
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

  /* When the game is started the currentScore is reset to 0, theGameStarted state
  is set to true (hiding the game menu).
  */
  const handleStartClick = () => {
    setGameStarted(true);
    setCurrentScore(0);
    choosePokemon();
  };

  //When the gameResults state is changed the cardObjects are wiped.
  useEffect(() => {
    if (gameResults || gameWon) {
      setCardObjects([]);
    }
  }, [gameResults, gameWon]);

  /* If the currentScore is greater than the highScore the highScore is updated to 
  match currentScore 
  */
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    checkForWin(currentScore, cardTotal,setGameWon);
  }, [highScore, currentScore]);

  

  return (
    <>
      <GameContainer
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
        setGameWon={setGameWon}
        gameWon={gameWon}
      />
    </>
  );
}

export default GamePage;
