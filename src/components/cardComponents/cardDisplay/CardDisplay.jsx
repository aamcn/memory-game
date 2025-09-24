import CardTemplate from "../cardTemplate/CardTemplate";
import styles from "./cardDisplay.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import React from "react";

function CardDisplay({
  chosenPokemonCardData,
  setCurrentScore,
  currentScore,
  setGameOver,
  cardObjects,
  setCardObjects,
  cardTotal,
}) {
  const [isHidden, setIsHidden] = useState(false);

  let cardContainerClass = "";

  // If isHidden is true, set it back to false after 0.5 seconds to re-render the cards.
  if (isHidden != false) {
    setTimeout(() => {
      setIsHidden(false);
    }, 500);
  }

  // Set the class name for the cards container based on the cardTotal prop.
  const setCardClassName = () => {
    if (cardTotal === 9) {
      cardContainerClass = `${styles.nineCardsContainer}`;
    }
    if (cardTotal === 6) {
      cardContainerClass = `${styles.sixCardsContainer}`;
    }
    if (cardTotal === 4) {
      cardContainerClass = `${styles.fourCardsContainer}`;
    }
  };
  // Call the function to set the class name when the component renders.
  setCardClassName();

  return (
    !isHidden && (
      <div data-testid="cards-container" className={cardContainerClass}>
        {chosenPokemonCardData &&
          chosenPokemonCardData.map((pokemonCardDetails) => {
            return (
              <CardTemplate
                key={pokemonCardDetails.id}
                setGameOver={setGameOver}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                pokemonCardDetails={pokemonCardDetails}
                cardObjects={cardObjects}
                setCardObjects={setCardObjects}
                cardTotal={cardTotal}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
              />
            );
          })}
      </div>
    )
  );
}

CardDisplay.propTypes = {
  chosenPokemonCardData: PropTypes.object.isRequired,
  currentScore: PropTypes.number.isRequired,
  setCurrentScore: PropTypes.func.isRequired,
  setGameOver: PropTypes.bool.isRequired,
  cardObjects: PropTypes.array.isRequired,
  setCardObjects: PropTypes.func.isRequired,
  cardTotal: PropTypes.number.isRequired,
};

export default CardDisplay;
