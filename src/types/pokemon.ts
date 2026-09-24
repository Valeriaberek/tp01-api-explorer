export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

export type PokemonPreview = Pick<Pokemon, "id" | "name">;

export interface PokemonListResponse {
  results: { name: string; url: string }[];
}
