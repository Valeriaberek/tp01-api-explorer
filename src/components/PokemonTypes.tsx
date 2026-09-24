import type { Pokemon } from "../types/pokemon";

interface PokemonTypesProps {
  types: Pokemon["types"];
}

export default function PokemonTypes({ types }: PokemonTypesProps) {
  return <ul>{types.map(({ type }) => <li key={type.name}>{type.name}</li>)}</ul>;
}
