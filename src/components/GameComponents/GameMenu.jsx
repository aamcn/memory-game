import Button from "../../elements/Button";
import styles from "../../cssModules/gameMenu.module.css"

function GameMenu({ handleStartClick, cardTotal, setCardTotal}) {


  const handleClickDifficulty = (event) => {
    setCardTotal(parseInt(event.target.value))
  }

  return (
    <div className={styles.gameMenuContainer}>
        <div className={styles.titleContainer}>
          <h2>Menu</h2>
        </div>
        <div className={styles.difficultyContainer}>
          <p className={styles.difficultyTitle}>Choose Your Difficulty</p>
          <p>{cardTotal} cards</p>
          <div className={styles.difficultyButtons}>
            <button className={styles.optionButton} onClick={handleClickDifficulty} value={3}>Easy</button>
            <button className={styles.optionButton}  onClick={handleClickDifficulty} value={9}>Medium</button>
            <button className={styles.optionButton}  onClick={handleClickDifficulty} value={16}>Hard</button>
          </div>
        </div>
        <div id="menu-buttons-container">
          <button className={styles.startButton}  onClick={handleStartClick}>Start</button>
        </div>
      </div>
  );
}

export default GameMenu;
