import type { Pokemon } from "../types/pokemon";
import PokemonTypes from "./PokemonTypes";

interface PokemonDetailProps {
  pokemon: Pokemon;
}

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
  return (
    <article>
      <h2>{pokemon.name} — N° {pokemon.id}</h2>
      <p>Taille : {pokemon.height / 10} m</p>
      <p>Poids : {pokemon.weight / 10} kg</p>
      <h3>Types</h3>
      <PokemonTypes types={pokemon.types} />
    </article>
  );
}
