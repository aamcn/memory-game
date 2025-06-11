import Button from "../../../elements/Button"
import styles from "./gameMenu.module.css";
import PropTypes from "prop-types";

function GameMenu({ handleStartClick, cardTotal, setCardTotal }) {

  /* 
  The difficulty of the game is set by the cardTotal, this limits how many cards 
  are drawn, the value of the button clicked is stored as the cardTotal.
*/
  const handleClickDifficulty = (event) => {
    setCardTotal(parseInt(event.target.value));
  };

  return (
    <div className={styles.gameMenuContainer}>
      <div className={styles.titleContainer}>
        <h2>Menu</h2>
      </div>
      <div className={styles.difficultyContainer}>
        <p className={styles.difficultyTitle}>Choose Your Difficulty</p>
        <p data-testid="difficultyText">{cardTotal} Cards</p>
        <div className={styles.difficultyButtons}>
          <button
            className={styles.optionButton}
            onClick={handleClickDifficulty}
            value={4}
          >
            Easy
          </button>
          <button
            className={styles.optionButton}
            onClick={handleClickDifficulty}
            value={6}
          >
            Medium
          </button>
          <button
            className={styles.optionButton}
            onClick={handleClickDifficulty}
            value={9}
          >
            Hard
          </button>
        </div>
      </div>
      <div id="menu-buttons-container">
        <button className={styles.startButton} onClick={handleStartClick} >
          Start
        </button>
      </div>
    </div>
  );
}

// handleStartClick, cardTotal, setCardTotal

GameMenu.propTypes = {
  handleStartClick: PropTypes.func.isRequired,
  cardTotal: PropTypes.number.isRequired,
  setCardTotal: PropTypes.func.isRequired,
};

export default GameMenu;
