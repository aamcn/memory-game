import CardDisplay from "./CardDisplay";
import GameLostWindow from "./GameLostWindow";
import GameMenu from "./GameMenu";

function GameDisplay({ handleStartClick, chosenPokemon, setCurrentScore, currentScore, setGameResults, gameResults}){

    
    return(
        <>
            {gameResults && <GameLostWindow />}
            <CardDisplay setCurrentScore={setCurrentScore} setGameResults={setGameResults} currentScore={currentScore} chosenPokemonCardData={chosenPokemon}/>
            <GameMenu handleStartClick={handleStartClick}/>
            
        </>
    )
}

export default GameDisplay;