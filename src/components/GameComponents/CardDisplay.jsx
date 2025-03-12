import CardTemplate from "./CardTemplate"

function CardDisplay({ chosenPokemonCardData }){
    
    return(
        <>
        <p>ducvk</p>
            {chosenPokemonCardData && chosenPokemonCardData.map(pokemonCardDetails => {
             return  <CardTemplate key={pokemonCardDetails.id} pokemonCardDetails={pokemonCardDetails}/>
            })}
        </>
    )
}

export default CardDisplay