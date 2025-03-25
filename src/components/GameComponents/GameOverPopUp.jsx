import styles from "../../cssModules/gameLostWindow.module.css";
import PropTypes from "prop-types";
function GameOverPopUp({ setGameResults, setGameStarted }) {
  /* Setting gameResults to false hides the GameLostWindow component 
  setting gameStarted displays the gameMenu component starting the game over
  */
  const handleClickRetry = () => {
    setGameResults(false);
    setGameStarted(false);
  };

  return (
    <div className={styles.lostGameWindow}>
      <h3 className={styles.gameOverTitle}>Game Over</h3>
      <div className={styles.gameOverText}>
        <p>Oh no...</p>
        <p>You already clicked on that</p>
      </div>
      <div>
        <p>Would you like to try again?</p>
        <br></br>
        <button onClick={handleClickRetry}>Retry?</button>
      </div>
    </div>
  );
}

GameOverPopUp.propTypes = {
  setGameResults: PropTypes.func.isRequired,
  setGameStarted: PropTypes.func.isRequired,
};

export default GameOverPopUp;
