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
  const [classerName, setClassName] = useState(null)
  
  //When isHidden is updated to true, it is reverted back to false after 0.5 seconds.
  useEffect(() => {
    if (isHidden != false) {
      setTimeout(() => {
        setIsHidden(false);
      }, 500);
    }
  }, [isHidden]);

  useEffect(() =>{
    console.log(cardTotal)
    if(cardTotal == 9){
      setClassName(`${styles.nineCardsContainer}`)
    }
    if(cardTotal == 6){
      setClassName(`${styles.sixCardsContainer}`)
    }
    if(cardTotal == 4){
      setClassName(`${styles.fourCardsContainer}`)
    }
  }, [cardTotal])

  return (
    !isHidden && (
      <div className={classerName}>
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
