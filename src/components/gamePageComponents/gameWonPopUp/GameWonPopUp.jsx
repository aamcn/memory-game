import styles from "./gameWonPopUp.module.css";
import PropTypes from "prop-types";

function GameWonPopUp({ setGameStarted, setGameWon, finalTime }) {
  /* 
    Setting gameResults to false hides the GameLostWindow component 
    setting gameStarted to false displays the gameMenu component starting the game over
  */
  const handleClickNewGame = () => {
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <div className={styles.gameWonWindow}>
      <h3 className={styles.gameWonTitle}>You Did It!</h3>
      <div className={styles.gameWonText}>
        <p>You Beat This Round</p>
        <p>Nice Work!</p>
      </div>
      <div>
        <p>Your final time was:</p>
        <p className={styles.winTimeText}>{finalTime}</p>
      </div>
      <div>
        <p>Would you like to play again?</p>
        <br></br>
        <button className={styles.newGameButton} onClick={handleClickNewGame}>
          New Game?
        </button>
      </div>
    </div>
  );
}

GameWonPopUp.propTypes = {
  setGameStarted: PropTypes.bool.isRequired,
  setGameWon: PropTypes.bool.isRequired,
};

export default GameWonPopUp;
