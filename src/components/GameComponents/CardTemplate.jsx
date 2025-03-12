
function CardTemplate({ pokemonCardDetails }){

    console.log(pokemonCardDetails)
    return(
        <>
            {pokemonCardDetails  &&  
            <div>
                <p>{pokemonCardDetails.name}</p>
            </div>
            }
        </>
    )
}

export default CardTemplate;