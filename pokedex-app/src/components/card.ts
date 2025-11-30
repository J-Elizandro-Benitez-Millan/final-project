import { type PokemonDetails, typeColors } from '../api/pokeApi';

// Función para crear una tarjeta de Pokémon con estilo personalizado que incluye el ID, tipo y nombre del Pokémon
export const createPokemonCard = (pokemon: PokemonDetails): HTMLDivElement => {
  const card = document.createElement('div');
  card.classList.add('tarjeta-pokemon');

  const mainType = pokemon.types[0].type.name;
  const color = typeColors[mainType] || '#f5f5f5';
  card.style.backgroundColor = color;

  const idFormatted = `#${pokemon.id.toString()}`;
  
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;


// Estructura HTML de la tarjeta de Pokémon
  card.innerHTML = `
    <div class="card-header">
      <span class="pokemon-id">${idFormatted}</span>
      <span class="pokemon-type-badge">${mainType}</span>
    </div>
    <div class="card-image-container">
      <img src="${imageUrl}" alt="${pokemon.name}" loading="lazy"> </div>
    <div class="card-info">
      <p class="pokemon-name">${pokemon.name}</p> </div>
  `;

  return card;
};