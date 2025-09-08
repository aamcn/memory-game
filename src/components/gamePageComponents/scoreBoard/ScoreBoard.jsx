import styles from "./scoreBoard.module.css";
import PropTypes from "prop-types";
import React from "react";

//Displays current score and high score during games
//When player scores or beats the high score the component re-renders with updated props
function ScoreBoard({ currentScore, highScore }) {
  return (
    <div
      className={styles.scoreBoardContainer}
      data-testid="scoreboard-container"
    >
      <div className={styles.scoreTextContainer}>
        <p className={styles.score}>Current Score:</p>
        <p data-testid="current-score-text">{currentScore}</p>
      </div>
      <div className={styles.scoreTextContainer}>
        <p className={styles.highScore}>High Score:</p>
        <p data-testid="high-score-text">{highScore}</p>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default ScoreBoard;
