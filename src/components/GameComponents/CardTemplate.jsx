
function CardTemplate({ pokemonCardDetails }){

    const handleCardClick = (e) => {
        console.log(pokemonCardDetails.name)
    }

    console.log(pokemonCardDetails)
    return(
        <>
            {pokemonCardDetails  &&  
            <div>
                <p onClick={handleCardClick} value={pokemonCardDetails.name}>{pokemonCardDetails.name}</p>
            </div>
            }
        </>
    )
}

export default CardTemplate;