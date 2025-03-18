import styles from "../../cssModules/scoreBoard.module.css"

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className={styles.scoreBoardContainer}>
      <p data-testid="currentScore" role="currentScore">Current Score: {currentScore}</p>
      <p data-testid="highScore">High Score: {highScore}</p>
    </div>
  );
}

export default ScoreBoard;
