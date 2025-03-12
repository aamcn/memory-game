import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GameDisplay from "../components/GameComponents/GameDisplay";
import { getRandomInt } from "../modules/randomNumber";


function GamePage(){

    const [fullPokemonList, setFullPokemonList] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState([])
    const [randomNumbers, setRandomNumbers] = useState([])

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
        while (pokeUrls.length < 12) {
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
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', {mode: "cors"})
        .then((response) => response.json())
        .then((response) => setFullPokemonList(response))
        .catch((error) => console.error(error))
    }, [])

    const handleStartClick = () => {
        choosePokemon()
    }

    useEffect(() => {
        console.log(chosenPokemon)
    }, [chosenPokemon])
  
 
    return(
        <>
        <Navbar />
        <GameDisplay handleStartClick={handleStartClick}/>
        </>
    )
}

export default GamePage;