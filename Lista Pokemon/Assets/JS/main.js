function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function getPokemonList(pokemon){
    return `
        <li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.dream_world.front_default}">
                </div>
            </li>
    `
}
const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(getPokemonList).join('')
    pokemonList.innerHTML += newHtml
})
        
