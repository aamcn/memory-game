import CardDisplay from "../../cardComponents/cardDisplay/CardDisplay";
import GameOverPopUp from "../gameOverPopUp/GameOverPopUp";
import GameMenu from "../gameMenu/GameMenu";
import ScoreBoard from "../scoreBoard/ScoreBoard";
import styles from "./gameContainer.module.css";
import PropTypes from "prop-types";
import GameWonPopUp from "../gameWonPopUp/GameWonPopUp";
import Timer from "../timer/timer";
import { useState } from "react";
function GameContainer({
  highScore,
  gameStarted,
  setGameStarted,
  handleStartClick,
  cardObjects,
  setCardObjects,
  setCurrentScore,
  currentScore,
  setGameOver,
  gameOver,
  cardTotal,
  setCardTotal,
  gameWon,
  setGameWon,
}) {

  const [finalTime, setFinalTime] = useState(null)

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameInfoContainer}>
        {gameStarted && 
        <Timer setFinalTime={setFinalTime} gameStarted={gameStarted} gameWon={gameWon} gameOver={gameOver}/> 
      }
      {gameStarted && 
        <ScoreBoard highScore={highScore} currentScore={currentScore} />
      }
      </div>
      <CardDisplay
        setCurrentScore={setCurrentScore}
        setGameOver={setGameOver}
        currentScore={currentScore}
        chosenPokemonCardData={cardObjects}
        cardObjects={cardObjects}
        setCardObjects={setCardObjects}
        cardTotal={cardTotal}
      />
      {gameWon && (
        <GameWonPopUp  setGameStarted={setGameStarted} setGameWon={setGameWon} />
      )}
      {gameOver && (
        <GameOverPopUp
          setGameStarted={setGameStarted}
          gameOver={gameOver}
          setGameOver={setGameOver}
          finalTime={finalTime}
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
  gameOver: PropTypes.bool.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  setCardObjects: PropTypes.func.isRequired,
  setCardTotal: PropTypes.func.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  setGameStarted: PropTypes.func.isRequired,
  cardTotal: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default GameContainer;
