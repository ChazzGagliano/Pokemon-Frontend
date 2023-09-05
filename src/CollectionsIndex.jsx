export function CollectionsIndex (props) {
    const handleClick = (collectionId) => {
        props.onDestroyCollection(collectionId)
    }
    return (
        <div>
            <h1>Pokedex</h1>
            {props.collections.map((collection) => (
                <div key={collection.id}>
                    {collection.pokemon.name}
                    <img src={collection.pokemon.image_url}/>
                    <button onClick={() => handleClick(collection.id)}type="input">transfer</button> 
                </div>
            ))}
        </div>
    )
}