import axios from "axios";


export function RegionsIndex(props) {
        const handleAddToCollections = (pokemonId) => {
            console.log('add to favorites')
            console.log(pokemonId)
            axios.post("http://localhost:3000/collections.json", {pokemon_id:pokemonId}).then(response => {
              console.log(response.data)
            })
         }

    return (
        <div>
            {props.regions.map((region) => (
                <div key={region.id}>
                    <h2>{region.name}</h2>
                    {region.pokemon?.map((pokemon) => (
                    <div key={pokemon.id}>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.image_url}/>
                    <p>{pokemon.ability}</p>
                    <p>Lvl: {pokemon.level}</p>
                    <button onClick={() => handleAddToCollections(pokemon.id)} type="input">Capture</button>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    )
}