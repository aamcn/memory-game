import CardDisplay from "./CardDisplay";
import GameLostWindow from "./GameLostWindow";
import GameMenu from "./GameMenu";
import ScoreBoard from "./ScoreBoard";

function GameDisplay({ highScore, gameStarted, handleStartClick, chosenPokemon, setCurrentScore, currentScore, setGameResults, gameResults}){

    
    return(
        <>  
            <ScoreBoard highScore={highScore} currentScore={currentScore} />
            {gameResults && <GameLostWindow />}
            <CardDisplay setCurrentScore={setCurrentScore} setGameResults={setGameResults} currentScore={currentScore} chosenPokemonCardData={chosenPokemon}/>
            {!gameStarted && <GameMenu handleStartClick={handleStartClick}/>}
            
        </>
    )
}

export default GameDisplay;