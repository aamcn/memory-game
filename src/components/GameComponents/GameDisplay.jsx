import CardDisplay from "./CardDisplay";
import GameLostWindow from "./GameLostWindow";
import GameMenu from "./GameMenu";
import ScoreBoard from "./ScoreBoard";
import styles from "../../cssModules/gameDisplay.module.css"

function GameDisplay({
  highScore,
  gameStarted,
  setGameStarted,
  handleStartClick,
  cardObjects,
  setCardObjects,
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
      <CardDisplay
        setCurrentScore={setCurrentScore}
        setGameResults={setGameResults}
        currentScore={currentScore}
        chosenPokemonCardData={cardObjects}
        cardObjects={cardObjects}
        setCardObjects={setCardObjects}
      />
      {gameResults && <GameLostWindow setGameStarted={setGameStarted} gameResults={gameResults} setGameResults={setGameResults}/>}
      {!gameStarted && <GameMenu handleStartClick={handleStartClick} cardTotal={cardTotal} setCardTotal={setCardTotal}/>}
    </div>
  );
}

export default GameDisplay;
