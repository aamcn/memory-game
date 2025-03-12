import CardTemplate from "./CardTemplate"

function CardDisplay({ chosenPokemonCardData }){
    
   
    
    return(
        <>
        <p>ducvk</p>
            {chosenPokemonCardData && chosenPokemonCardData.map(pokemonCardDetails => {
             return  <CardTemplate pokemonCardDetails={pokemonCardDetails}/>
            })}
        </>
    )
}

export default CardDisplay