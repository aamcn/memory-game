import CardDisplay from "./CardDisplay";
import GameMenu from "./GameMenu";

function GameDisplay({ handleStartClick, chosenPokemon }){

    console.log(chosenPokemon)
    
    return(
        <>

            <CardDisplay chosenPokemonCardData={chosenPokemon}/>
            <GameMenu handleStartClick={handleStartClick}/>
            
        </>
    )
}

export default GameDisplay;