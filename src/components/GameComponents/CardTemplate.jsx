import PropTypes from "prop-types";
import styles from "../../cssModules/cardTemplate.module.css";
import { shuffleArray } from "../../modules/shuffleArray";


function CardTemplate({
  pokemonCardDetails,
  setCurrentScore,
  currentScore,
  setGameResults,
  setCardObjects,
  setIsHidden,
}) 

{
  /* When the card is clicked, if it is the first time, the isClicked state is 
  changed to 'true' and a point is added to the current score. 
  If the card has been previously clicked (meaning isClicked is true) gameResults
  is set to true (which renders the gameOver component).
  */
  const handleCardClick = () => {
    if (pokemonCardDetails.isClicked != true) {
      setCurrentScore(currentScore + 1);
      pokemonCardDetails.isClicked = true;
      setCardObjects((cardObjects) => shuffleArray(cardObjects));
      setIsHidden(true);
    } else {
      setGameResults(true);
    }
  };

  return (
    <>
      {pokemonCardDetails && (
        <div data-testid="playingCard" className={styles.cardContainer} onClick={handleCardClick}>
          <div></div>{" "}
          <div className={styles.imageContainer}>
            <img
              className={styles.cardImage}
              src={pokemonCardDetails.imageUrl}
              data-testid="card-image">
            </img>
          </div>
          <div className={styles.cardTitleContainer}>
            <p data-testid="card-name" value={pokemonCardDetails.name}>{pokemonCardDetails.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

CardTemplate.propTypes = {
  pokemonCardDetails: PropTypes.object.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  currentScore: PropTypes.number.isRequired,
  setGameResults: PropTypes.bool.isRequired,
  setCardObjects: PropTypes.object.isRequired,
  setIsHidden: PropTypes.func.isRequired
}

export default CardTemplate;
