import styles from "../../cssModules/cardTemplate.module.css"

function CardTemplate({
  pokemonCardDetails,
  setCurrentScore,
  currentScore,
  setGameResults,
}) {
  const handleCardClick = () => {
    if (pokemonCardDetails.isClicked != true) {
      setCurrentScore(currentScore + 1);
      pokemonCardDetails.isClicked = true;
    } else {
      setGameResults(true);
      console.log("game over");
    }
  };

  return (
    <>
      {pokemonCardDetails && (
        <div  className={styles.cardContainer} onClick={handleCardClick}>
          <img className={styles.cardImage} width="50px" src={pokemonCardDetails.imageUrl}></img>
          <p value={pokemonCardDetails.name}>{pokemonCardDetails.name}</p>
        </div>
      )}
    </>
  );
}

export default CardTemplate;
