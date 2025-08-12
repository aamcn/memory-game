import { useState, useEffect } from "react";
import GameContainer from "../gameContainer/GameContainer";
import { generatePokemonUrls } from "../../../modules/pokemonUrlGenerator/PokemonUrlGenerator";
import { fetchPokeUrls } from "../../../modules/fetchPokeUrls/fetchPokeUrls";
import { v4 as uuidv4 } from "uuid";
import { PokemonCardObject } from "../../../modules/cardConstructor/cardConstructor";
import { checkForWin } from "../../../modules/checkForWin/checkForWin";
import Header from "../../Header/Header.jsx";
import React from "react";

function GamePage() {
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [cardObjects, setCardObjects] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [cardTotal, setCardTotal] = useState(4);
  const [gameWon, setGameWon] = useState(false);

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
    setChosenPokemon([]);
    const pokeApiUrls = generatePokemonUrls(cardTotal);
    fetchPokeUrls(pokeApiUrls, setChosenPokemon);
  };

  //When the gameOver state is changed the cardObjects are wiped.
  useEffect(() => {
    if (gameOver || gameWon) {
      setCardObjects([]);
    }
  }, [gameOver, gameWon]);

  /* If the currentScore is greater than the highScore the highScore is updated to 
  match currentScore 
  */
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    checkForWin(currentScore, cardTotal, setGameWon);
  }, [currentScore]);

  return (
    <div data-testid="game-page">
      <Header />
      <GameContainer
        cardTotal={cardTotal}
        setCardTotal={setCardTotal}
        highScore={highScore}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        gameOver={gameOver}
        handleStartClick={handleStartClick}
        currentScore={currentScore}
        setGameOver={setGameOver}
        setCurrentScore={setCurrentScore}
        cardObjects={cardObjects}
        setCardObjects={setCardObjects}
        setGameWon={setGameWon}
        gameWon={gameWon}
      />
    </div>
  );
}

export default GamePage;
