export function CollectionsIndex (props) {
    
    return (
        <div>
            <h1>Pokedex</h1>
            {props.collections.map((collection) => (
                <div key={collection.id}>
                    {collection.pokemon.name}
                    <img src={collection.pokemon.image_url}/>
                </div>
            ))}
        </div>
    )
}