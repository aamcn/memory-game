import CardTemplate from "./CardTemplate";

function CardDisplay({
  chosenPokemonCardData,
  setCurrentScore,
  currentScore,
  setGameResults,
}) {
  return (
    <>
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
    </>
  );
}

export default CardDisplay;
