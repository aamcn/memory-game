import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GameDisplay from "../components/GameComponents/GameDisplay";
import { getRandomInt } from "../modules/randomNumber";
import Header from "../components/Header/Header";
import { v4 as uuidv4 } from 'uuid';
import { PokemonCardObject } from "../modules/cardConstructor";

function GamePage(){

    const [fullPokemonList, setFullPokemonList] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState([])
    const [cardObjects, setCardObjects] = useState([])
    const theNumber = 12

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
        while (pokeUrls.length < theNumber) {
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
        if(chosenPokemon.length === theNumber){
            chosenPokemon.map(pokemon => {
                let newId = uuidv4()
                let imageUrl = pokemon.sprites.other.dream_world.front_default
                let name = pokemon.name
                const newCard = new PokemonCardObject(name, imageUrl, newId)
                setCardObjects(cardObjects => [...cardObjects, newCard])
            })    
        }
    }, [chosenPokemon])
  
    useEffect(() => {
    }, [cardObjects])
    
    return(
        <>
            
            <Header />
            <Navbar />
            <GameDisplay handleStartClick={handleStartClick} chosenPokemon={cardObjects}/>
        </>
    )
}

export default GamePage;