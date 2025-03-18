import styles from "../../cssModules/cardTemplate.module.css"

function CardTemplate({
  pokemonCardDetails,
  setCurrentScore,
  currentScore,
  setGameResults,
}) {

  /* When the card is clicked, if it is the first time, the isClicked state is 
  changed to 'true' and a point is added to the current score. 
  If the card has been previously clicked (meaning isClicked is true) gameResults
  is set to true (which renders the gameOver component).
  */
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
