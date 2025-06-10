import styles from "./gameWonPopUp.module.css";
import PropTypes from "prop-types";

function GameWonPopUp({ setGameStarted, setGameWon }) {
  /* Setting gameResults to false hides the GameLostWindow component 
  setting gameStarted displays the gameMenu component starting the game over
  */

  const handleClickNewGame = () => {
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <div className={styles.gameWonWindow}>
      <h3 className={styles.gameOverTitle}>You Did It!</h3>
      <div className={styles.gameOverText}>
        <p>You Beat This Round</p>
        <p>Nice Work!</p>
      </div>
      <div>
        <p>Would you like to play again?</p>
        <br></br>
        <button onClick={handleClickNewGame}>New Game?</button>
      </div>
    </div>
  );
}

export default GameWonPopUp;
