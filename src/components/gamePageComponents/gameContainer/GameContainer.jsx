import CardDisplay from "../../cardComponents/cardDisplay/CardDisplay";
import GameOverPopUp from "../gameOverPopUp/GameOverPopUp";
import GameMenu from "../gameMenu/GameMenu";
import ScoreBoard from "../scoreBoard/ScoreBoard";
import styles from "./gameContainer.module.css";
import PropTypes from "prop-types";
import GameWonPopUp from "../gameWonPopUp/GameWonPopUp";


function GameContainer({
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
  setCardTotal,
  gameWon,
  setGameWon,
}) {
  return (
    <div className={styles.gameContainer}>
      {gameStarted  && <ScoreBoard highScore={highScore} currentScore={currentScore} />}
      <CardDisplay
        setCurrentScore={setCurrentScore}
        setGameResults={setGameResults}
        currentScore={currentScore}
        chosenPokemonCardData={cardObjects}
        cardObjects={cardObjects}
        setCardObjects={setCardObjects}
        cardTotal={cardTotal}
      />
      {gameWon && (
        <GameWonPopUp setGameStarted={setGameStarted} setGameWon={setGameWon} />
      )}
      {gameResults && (
        <GameOverPopUp
          setGameStarted={setGameStarted}
          gameResults={gameResults}
          setGameResults={setGameResults}
        />
      )}
      {!gameStarted && (
        <GameMenu
          handleStartClick={handleStartClick}
          cardTotal={cardTotal}
          setCardTotal={setCardTotal}
        />
      )}
    </div>
  );
}

GameContainer.propTypes = {
  cardObjects: PropTypes.array.isRequired,
  gameResults: PropTypes.bool.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  setCardObjects: PropTypes.func.isRequired,
  setCardTotal: PropTypes.func.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  setGameResults: PropTypes.func.isRequired,
  setGameStarted: PropTypes.func.isRequired,
  cardTotal: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default GameContainer;
