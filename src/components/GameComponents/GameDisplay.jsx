import CardDisplay from "./CardDisplay";
import GameLostWindow from "./GameLostWindow";
import GameMenu from "./GameMenu";
import ScoreBoard from "./ScoreBoard";

function GameDisplay({
  highScore,
  gameStarted,
  handleStartClick,
  chosenPokemon,
  setCurrentScore,
  currentScore,
  setGameResults,
  gameResults,
  cardTotal,
  setCardTotal
}) {
  return (
    <>
      <ScoreBoard highScore={highScore} currentScore={currentScore} />
      {gameResults && <GameLostWindow />}
      <CardDisplay
        setCurrentScore={setCurrentScore}
        setGameResults={setGameResults}
        currentScore={currentScore}
        chosenPokemonCardData={chosenPokemon}
      />
      {!gameStarted && <GameMenu handleStartClick={handleStartClick} cardTotal={cardTotal} setCardTotal={setCardTotal}/>}
    </>
  );
}

export default GameDisplay;
