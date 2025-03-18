import styles from "../../cssModules/gameLostWindow.module.css"

function GameLostWindow() {
  return (
    <div className={styles.lostGameWindow}>
      <h3 className={styles.gameOverTitle}>Game Over</h3>
      <div className={styles.gameOverText}>
        <p>Oh no...</p>
        <p>You already clicked  on that</p>
      </div>
      <div>
        <p>Would you like to try again?</p>
        <br></br>
        <button>Retry?</button>
      </div>
    </div>
  );
}

export default GameLostWindow;
