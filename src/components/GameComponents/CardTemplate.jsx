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
         <div>
          </div> <div className={styles.imageContainer}>
             <img className={styles.cardImage} src={pokemonCardDetails.imageUrl}></img>
          </div>
          <div className={styles.cardTitleContainer}>
            <p value={pokemonCardDetails.name}>{pokemonCardDetails.name}</p>
          </div>
        </div>
        
      )}
    </>
  );
}

export default CardTemplate;
