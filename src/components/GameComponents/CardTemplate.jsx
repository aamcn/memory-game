
function CardTemplate({ pokemonCardDetails, setCurrentScore, currentScore, setGameResults }){
    
    const handleCardClick = (e) => {
        if(pokemonCardDetails.isClicked != true){
            setCurrentScore(currentScore +1)
            pokemonCardDetails.isClicked = true
        } else{
            setGameResults(true)
            console.log('game over')
        }
    }

    return(
        <>
            {pokemonCardDetails  &&  
            <div onClick={handleCardClick}>
                <p  value={pokemonCardDetails.name}>{pokemonCardDetails.name}</p>
                <img width="50px" src={pokemonCardDetails.imageUrl}></img>
            </div>
            }
        </>
    )
}

export default CardTemplate;