import styles from "../../cssModules/scoreBoard.module.css";
import PropTypes from "prop-types";

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <p data-testid="currentScore" role="currentScore">
        Current Score: {currentScore}
      </p>
      <p data-testid="highScore">High Score: {highScore}</p>
    </div>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
