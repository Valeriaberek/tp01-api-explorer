import { useEffect, useState } from "react";
import { getPokemon, getPokemonList } from "./services/api";
import type { Pokemon, PokemonPreview } from "./types/pokemon";
import ResourceCard from "./components/ResourceCard";
import PokemonDetail from "./components/PokemonDetail";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<PokemonPreview[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [listLoading, setListLoading] = useState(true);
  const [listError, setListError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getPokemonList()
      .then((data) => setPokemonList(data))
      .catch(() => setListError("Impossible de charger la liste."))
      .finally(() => setListLoading(false));
  }, []);

  async function selectPokemon(name: string) {
    setLoading(true);
    setError("");
    setPokemon(null);

    try {
      const data = await getPokemon(name);
      setPokemon(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("La recherche a échoué.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="main">
      <h1>Pokédex</h1>
      <form className="search" onSubmit={(event) => {
        event.preventDefault();
        selectPokemon(search);
      }}>
        <label htmlFor="search">Nom</label>
        <input
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          
        />
        <button disabled={loading || search.trim() === ""}>Rechercher</button>
      </form>

      <div className="layout">
        <section>
         
          {listLoading && <p role="status">Chargement de la liste…</p>}
          {listError && <p role="alert">{listError}</p>}
          <ul className="pokemon-list">
            {pokemonList.map((item) => (
              <li key={item.id}>
                <ResourceCard pokemon={item} onSelect={selectPokemon} disabled={loading} />
              </li>
            ))}
          </ul>
        </section>

        <section className="detail" aria-live="polite">
          <h2>Détail</h2>
          {loading && <p role="status">Chargement du Pokémon…</p>}
          {error && <p role="alert">{error}</p>}
          {pokemon && <PokemonDetail pokemon={pokemon} />}
          {!pokemon && !loading && !error && <p>Choisis un Pokémon</p>}
        </section>
      </div>
    </main>
  );
}

export default App;
