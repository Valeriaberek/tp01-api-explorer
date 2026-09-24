import type { PokemonPreview } from "../types/pokemon";

interface PokemonIdentityProps {
  pokemon: PokemonPreview;
}

export default function PokemonIdentity({ pokemon }: PokemonIdentityProps) {
  return (
    <>
      <span>N° {pokemon.id}</span>
      <strong>{pokemon.name}</strong>
    </>
  );
}
