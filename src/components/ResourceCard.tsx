import type { PokemonPreview } from "../types/pokemon";
import PokemonIdentity from "./PokemonIdentity";

interface ResourceCardProps {
  pokemon: PokemonPreview;
  onSelect: (name: string) => void;
  disabled: boolean;
}

export default function ResourceCard({ pokemon, onSelect, disabled }: ResourceCardProps) {
  return (
    <button className="resource-card" disabled={disabled} onClick={() => onSelect(pokemon.name)}>
      <PokemonIdentity pokemon={pokemon} />
    </button>
  );
}
