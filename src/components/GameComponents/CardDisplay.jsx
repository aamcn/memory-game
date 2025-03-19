import CardTemplate from "./CardTemplate";
import styles from "../../cssModules/cardDisplay.module.css";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';



function CardDisplay({
  chosenPokemonCardData,
  setCurrentScore,
  currentScore,
  setGameResults,
  cardObjects,
  setCardObjects,
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
    <div className={styles.cardsContainer}>
      {chosenPokemonCardData &&
        chosenPokemonCardData.map((pokemonCardDetails) => {
          return (
            <>
              {!isHidden && (
                <CardTemplate
                  key={pokemonCardDetails.id}
                  setGameResults={setGameResults}
                  currentScore={currentScore}
                  setCurrentScore={setCurrentScore}
                  pokemonCardDetails={pokemonCardDetails}
                  cardObjects={cardObjects}
                  setCardObjects={setCardObjects}
                  isHidden={isHidden}
                  setIsHidden={setIsHidden}
                />
              )}
            </>
          );
        })}
    </div>
  );
}

export default CardDisplay;
