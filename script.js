const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input_search = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => {
    const APIPesponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIPesponse.json();
    return data;
}
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || 'caminho/para/imagem/default.png';

} 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input_search.value.toLowerCase());
    input_search.value = ''

});
