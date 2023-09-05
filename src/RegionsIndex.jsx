export function RegionsIndex(props) {
    
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
                    </div>
                    ))}
                </div>
            ))}
        </div>
    )
}