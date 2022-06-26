

const searchInput = document.querySelector('.recherche-poke input');

// Appel API pokedex

function fetchPokemonBase() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(reponse => reponse.json())
        .then((allPoke) => {
            console.log(allPoke.results[0].name);
        });
}
fetchPokemonBase();



// Animation input

searchInput.addEventListener('input', function(e) {
    if (e.target.value !== "") {
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove('active-input');
    }
})
