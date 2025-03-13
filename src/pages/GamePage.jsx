import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
  const [cardTotal, setCardTotal] = useState(3)
  

  function fetchIndividualPokedata(pokemonUrl) {
    fetch(pokemonUrl, { mode: "cors" })
      .then((response) => response.json())
      .then((response) =>
        setChosenPokemon((chosenPokemon) => [...chosenPokemon, response]),
      )
      .catch((error) => console.error(error));
  }

  function choosePokemon() {
    setChosenPokemon([]);
    let pokeUrls = [];
    while (pokeUrls.length < parseInt(cardTotal)) {
      let integer = getRandomInt(150);
      if (!pokeUrls.includes(fullPokemonList.results[integer])) {
        pokeUrls.push(fullPokemonList.results[integer]);
      }
    }
    pokeUrls.map((item) => {
      fetchIndividualPokedata(item.url);
    });
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setFullPokemonList(response))
      .catch((error) => console.error(error));
  }, []);

  const handleStartClick = () => {
    setGameStarted(true);
    setGameResults(false);
    choosePokemon();
    setCurrentScore(0);
    console.log(cardTotal)
  };

  useEffect(() => {
    if (chosenPokemon.length === cardTotal) {
      chosenPokemon.map((pokemon) => {
        let newId = uuidv4();
        let imageUrl = pokemon.sprites.other.dream_world.front_default;
        let name = pokemon.name;
        const newCard = new PokemonCardObject(name, imageUrl, newId);
        setCardObjects((cardObjects) => [...cardObjects, newCard]);
      });
    }
  }, [chosenPokemon]);

  useEffect(() => {
    if (gameResults) {
      setCardObjects([]);
    }
    setGameStarted(false);
  }, [gameResults]);

  useEffect(
    () => {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setGameStarted(false);
    },
    [highScore, currentScore],
  );

  return (
    <>
      <Header />
      <Navbar />
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
        chosenPokemon={cardObjects}
      />
    </>
  );
}

export default GamePage;
