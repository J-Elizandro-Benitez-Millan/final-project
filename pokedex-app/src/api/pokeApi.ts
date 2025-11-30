export interface PokemonBasic {
  name: string;
  url: string;
}

// Para obtener los detalles completos de un Pokémon use esta interfaz y asi obtener toda la información necesaria.
export interface PokemonDetails {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string; other: { 'official-artwork': { front_default: string } } };
}

// defini los colores asociados a cada tipo de Pokémon
export const typeColors: Record<string, string> = {
  grass: '#defde0',
  fire: '#fddfdf',
  water: '#def3fd',
  bug: '#f8d5a3',
  normal: '#f5f5f5',
  poison: '#98d7a5',
  electric: '#fcf7de',
  ground: '#f4e7da',
  fairy: '#fceaff',
  fighting: '#e6e0d4',
  psychic: '#eaeda1',
  rock: '#d5d5d4',
  ghost: '#705898',
  ice: '#98d8d8',
  dragon: '#7038f8',
};

// Función para obtener la lista de Pokémons con sus detalles
export const getPokemons = async (): Promise<PokemonDetails[]> => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    const results: PokemonBasic[] = data.results;
    const detailedPokemons = await Promise.all(
      results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      })
    );

    return detailedPokemons;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    return [];
  }
};