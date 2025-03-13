import styles from "../../cssModules/scoreBoard.module.css"

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default ScoreBoard;
