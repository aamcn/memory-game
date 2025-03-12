
function CardTemplate({ pokemonCardDetails }){

    const handleCardClick = (e) => {
        console.log(pokemonCardDetails.name)
        if(pokemonCardDetails.isClicked != true){
            pokemonCardDetails.isClicked = true
        } else{
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