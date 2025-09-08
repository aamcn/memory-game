import PropTypes from "prop-types";
import styles from "./cardTemplate.module.css";
import { shuffleArray } from "../../../modules/shuffleArray/shuffleArray";
import React from "react";

function CardTemplate({
  pokemonCardDetails,
  setCurrentScore,
  currentScore,
  setGameOver,
  setCardObjects,
  setIsHidden,
  cardTotal,
}) {
  /* 
    When the card is clicked, if it is the first time, the isClicked state is 
    changed to 'true' and a point is added to the current score. 
    If the card has been previously clicked (meaning isClicked is already true) gameResults
    is set to true ending the game which renders the gameOver pop up menu component.
  */
  const handleCardClick = () => {
    if (pokemonCardDetails.isClicked !== true) {
      setCurrentScore(currentScore + 1);
      pokemonCardDetails.isClicked = true;
      setCardObjects((cardObjects) => shuffleArray(cardObjects));
      setIsHidden(true);
    } else {
      setGameOver(true);
    }
  };

  return (
    pokemonCardDetails && (
      <div
        key={pokemonCardDetails.id}
        data-testid="playingCard"
        className={
          cardTotal === 9
            ? styles.nineCardContainer
            : cardTotal === 6
              ? styles.sixCardContainer
              : styles.fourCardContainer
        }
        onClick={handleCardClick}
        aria-label={`Click to select ${pokemonCardDetails.name} card`}
      >
        <div
          className={
            cardTotal === 9
              ? styles.nineImageContainer
              : cardTotal === 6
                ? styles.sixImageContainer
                : styles.fourImageContainer
          }
        >
          <img
            className={styles.cardImage}
            src={pokemonCardDetails.imageUrl}
            alt={`${pokemonCardDetails.name} Pokemon`}
            data-testid="card-image"
          />
        </div>
        <div className={styles.cardTitleContainer}>
          <p data-testid="card-name">{pokemonCardDetails.name}</p>
        </div>
      </div>
    )
  );
}

CardTemplate.propTypes = {
  pokemonCardDetails: PropTypes.object.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  currentScore: PropTypes.number.isRequired,
  setGameOver: PropTypes.func.isRequired, // Should be func, not bool
  setCardObjects: PropTypes.func.isRequired, // Should be func, not object
  setIsHidden: PropTypes.func.isRequired,
  cardTotal: PropTypes.number.isRequired,
};

export default CardTemplate;
