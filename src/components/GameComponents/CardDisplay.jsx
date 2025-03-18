import CardTemplate from "./CardTemplate";
import styles from "../../cssModules/cardDisplay.module.css"


function CardDisplay({
  chosenPokemonCardData,
  setCurrentScore,
  currentScore,
  setGameResults,
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
            />
          );
        })}
    </div>
  );
}

export default CardDisplay;
