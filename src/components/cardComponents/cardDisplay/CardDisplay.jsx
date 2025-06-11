import CardTemplate from "../cardTemplate/CardTemplate";
import styles from "./cardDisplay.module.css";
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
  const [cardsContainerClassName, setCardsContainerClassName] = useState(null)
  
  /*
    When isHidden is updated to true, it is reverted back to false after 0.5 seconds.
    This hides the cards while their order is shuffled.
  */
  useEffect(() => {
    if (isHidden != false) {
      setTimeout(() => {
        setIsHidden(false);
      }, 500);
    }
  }, [isHidden]);


  /*
    Depending on the variable of cardTotal a different className is set in cardsContainerClassName. 
    This allows for different styling to be applied to the div depending on the total of cards in play.CardDisplay.
  */
  useEffect(() =>{
    if(cardTotal == 9){
      setCardsContainerClassName(`${styles.nineCardsContainer}`)
    }
    if(cardTotal == 6){
      setCardsContainerClassName(`${styles.sixCardsContainer}`)
    }
    if(cardTotal == 4){
      setCardsContainerClassName(`${styles.fourCardsContainer}`)
    }
  }, [cardTotal])

  return (
    !isHidden && (
      <div className={cardsContainerClassName}>
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
