import CardDisplay from "./CardDisplay";
import GameLostWindow from "./GameLostWindow";
import GameMenu from "./GameMenu";
import ScoreBoard from "./ScoreBoard";
import styles from "../../cssModules/gameDisplay.module.css"
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
    <div className={styles.gameDisplay}>
      <ScoreBoard highScore={highScore} currentScore={currentScore} />
      {gameResults && <GameLostWindow />}
      <CardDisplay
        setCurrentScore={setCurrentScore}
        setGameResults={setGameResults}
        currentScore={currentScore}
        chosenPokemonCardData={chosenPokemon}
      />
      {!gameStarted && <GameMenu handleStartClick={handleStartClick} cardTotal={cardTotal} setCardTotal={setCardTotal}/>}
    </div>
  );
}

export default GameDisplay;
