import styles from "./scoreBoard.module.css";
import PropTypes from "prop-types";

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <p className={styles.score} data-testid="currentScore" role="currentScore">
        Current Score: {currentScore}
      </p>
      <p className={styles.highScore} data-testid="highScore">High Score: {highScore}</p>
    </div>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
