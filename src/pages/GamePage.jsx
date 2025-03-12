import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import GameDisplay from "../components/GameComponents/GameDisplay";
import { getRandomInt } from "../modules/randomNumber";


function GamePage(){

    const [fullPokemonList, setFullPokemonList] = useState([])
    const [chosenPokemon, setChosenPokemon] = useState([])
    const [randomNumbers, setRandomNumbers] = useState([])

    const getRandomNumbers = () => {
        let numbersArray = []
        for(let i = 0; numbersArray.length < 8; i++){
            const newNumber = getRandomInt(150)
            if(!numbersArray.includes(newNumber)){
                numbersArray.push(newNumber)
            }
        }
        setRandomNumbers(numbersArray)
    }

    const choosePokemon = () => {
        randomNumbers.forEach(number => {
            setChosenPokemon(chosenPokemon => [...chosenPokemon, fullPokemonList.results[number]])
        })
    }

    useEffect(() => {
        getRandomNumbers()
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0', {mode: "cors"})
        .then((response) => response.json())
        .then((response) => setFullPokemonList(response))
        .catch((error) => console.error(error))
    }, [])

    const handleStartClick = () => {
        choosePokemon()
    }

    useEffect(() => {
        console.log(randomNumbers)
        console.log(fullPokemonList)
    }, [fullPokemonList])
  
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