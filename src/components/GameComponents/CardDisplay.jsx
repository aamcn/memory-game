import CardTemplate from "./CardTemplate";
import styles from "../../cssModules/cardDisplay.module.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function CardDisplay({
  chosenPokemonCardData,
  setCurrentScore,
  currentScore,
  setGameResults,
  cardObjects,
  setCardObjects,
  cardTotal
}) {
  const [isHidden, setIsHidden] = useState(false);

  //When isHidden is updated to true, it is reverted back to false after 0.5 seconds.
  useEffect(() => {
    if (isHidden != false) {
      setTimeout(() => {
        setIsHidden(false);
      }, 500);
    }
  }, [isHidden]);

  return (
    !isHidden && (
      <div className={cardTotal == 9 ? styles.nineCardsContainer : styles.cardsContainer}>
        {chosenPokemonCardData &&
          chosenPokemonCardData.map((pokemonCardDetails) => {
            return (
              <CardTemplate
                key={pokemonCardDetails.id}
                setGameResults={setGameResults}
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
  setGameResults: PropTypes.bool.isRequired,
  cardObjects: PropTypes.array.isRequired,
  setCardObjects: PropTypes.func.isRequired,
};

export default CardDisplay;
