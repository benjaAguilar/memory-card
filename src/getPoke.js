import { v4 as uuidv4 } from 'uuid';

export const pokemonNames = [
  "pikachu",
  "charmander",
  "bulbasaur",
  "squirtle",
  "jigglypuff",
  "meowth",
  "psyduck",
  "snorlax",
  "gengar",
  "eevee",
  "mewtwo",
  "charizard",
  "magikarp",
  "machamp",
  "gyarados",
];

// get and return pokemon name and img from api
export default async function getPokemons(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const pokemon = await response.json();

    return {
      name: pokemon.name,
      img: pokemon.sprites.front_default,
      id: uuidv4(),
    };
  } catch (e) {
    console.log("failed to fetch: " + e);
  }
}
