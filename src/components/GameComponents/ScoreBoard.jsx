import styles from "../../cssModules/scoreBoard.module.css"

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <p role="currentScore">Current Score: {currentScore}</p>
      <p role="highScore">High Score: {highScore}</p>
    </div>
  );
}

export default ScoreBoard;
