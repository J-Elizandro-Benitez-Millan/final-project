import './style.css';
import { getPokemons } from './api/pokeApi';
import { createPokemonCard } from './components/card';

// Función principal para inicializar la aplicación Pokédex
const initApp = async () => {
  const container = document.getElementById('pokedex-container');
  if (!container) return;

  container.innerHTML = '<p>Cargando Pokédex...</p>';

  const pokemons = await getPokemons();
  
  container.innerHTML = '';

  // Crear y agregar tarjetas de Pokémon al contenedor
  pokemons.forEach((pokemon) => {
    const card = createPokemonCard(pokemon);
    container.appendChild(card);
  });
};
document.addEventListener('DOMContentLoaded', initApp);