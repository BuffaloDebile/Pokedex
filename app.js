
let allPokemon = [];
let TableauFin = [];
const searchInput = document.querySelector('.recherche-poke input');

// Appel API pokedex

function fetchPokemonBase() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(reponse => reponse.json())
        .then((allPoke) => {
            
            allPoke.results.forEach((pokemon) => {
                fetchPokemonComplet(pokemon);
            })

        });
}
fetchPokemonBase();

function fetchPokemonComplet(pokemon) {
    let objPokemonFull = {};
    let url = pokemon.url;
    let nameP = pokemon.name;

    fetch(url)
    .then(reponse => reponse.json())
    .then((pokeData) => {
        objPokemonFull.pic = pokeData.sprites.front_default;
        objPokemonFull.type = pokeData.types[0].type.name;

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameP}`)
        .then(reponse => reponse.json())
        .then((pokeData) => {

            
            objPokemonFull.name = pokeData.names[4].name;
            allPokemon.push(objPokemonFull);
          

          if (allPokemon.length === 151) {
            console.log(allPokemon);
            
          }

        })
    })
}



// Animation input

searchInput.addEventListener('input', function(e) {
    if (e.target.value !== "") {
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove('active-input');
    }
})
