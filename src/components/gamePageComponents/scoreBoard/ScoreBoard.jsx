import styles from "./scoreBoard.module.css";
import PropTypes from "prop-types";

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <div className={styles.scoreTextContainer}>
        <p className={styles.score} data-testid="currentScore" role="currentScore">Current Score:</p>
        <p>{currentScore}</p>
      </div>
      <div className={styles.scoreTextContainer}>
        <p className={styles.highScore} data-testid="highScore">High Score:</p>
        <p>{highScore}</p>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
