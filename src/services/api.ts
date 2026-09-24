import type { Pokemon, PokemonListResponse, PokemonPreview } from "../types/pokemon";

export async function getPokemon(name: string): Promise<Pokemon> {
  const search = name.trim().toLowerCase();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(search)}`);

  if (!response.ok) {
    throw new Error("Impossible de récupérer ce Pokémon. Vérifie le nom saisi.");
  }

  const data: Pokemon = await response.json();
  return data;
}

export async function getPokemonList(): Promise<PokemonPreview[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

  if (!response.ok) {
    throw new Error("Impossible de charger la liste des Pokémon.");
  }

  const data: PokemonListResponse = await response.json();
  const pokemonList: PokemonPreview[] = [];

  for (const pokemon of data.results) {

    const parts = pokemon.url.split("/");
    const id = Number(parts[parts.length - 2]);
    pokemonList.push({ id: id, name: pokemon.name });
  }

  return pokemonList;
}
