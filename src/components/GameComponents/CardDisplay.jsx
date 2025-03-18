import CardTemplate from "./CardTemplate";
import styles from "../../cssModules/cardDisplay.module.css"


function CardDisplay({
  chosenPokemonCardData,
  setCurrentScore,
  currentScore,
  setGameResults,
  cardObjects,
  setCardObjects
}) {


  return (
    <div className={styles.cardsContainer}>
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
            />
          );
        })}
    </div>
  );
}

export default CardDisplay;
