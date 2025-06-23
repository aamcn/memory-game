import styles from "./scoreBoard.module.css";
import PropTypes from "prop-types";
import React  from "react";
function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <div className={styles.scoreTextContainer}>
        <p className={styles.score}role="currentScore">Current Score:</p>
        <p  data-testid="currentScore" >{currentScore}</p>
      </div>
      <div className={styles.scoreTextContainer}>
        <p className={styles.highScore} >High Score:</p>
        <p data-testid="highScore">{highScore}</p>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
