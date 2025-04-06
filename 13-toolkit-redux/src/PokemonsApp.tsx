import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Zap } from 'lucide-react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getPokemons } from './store/slices/pokemon/thunks';

export default function PokemonList() {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useAppSelector((state) => state.pokemons);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(getPokemons(page - 2));
    }
  };

  const handleNextPage = () => {
    dispatch(getPokemons(page));
  };

  const filteredPokemon = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  interface TypeColors {
    [key: string]: string;
  }

  const getTypeColor = (type: string): string => {
    const typeColors: TypeColors = {
      normal: 'bg-gray-400',
      fire: 'bg-orange-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-cyan-300',
      fighting: 'bg-red-600',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-300',
      psychic: 'bg-pink-500',
      bug: 'bg-lime-500',
      rock: 'bg-yellow-700',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-600',
      dark: 'bg-gray-700',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300',
    };
    return typeColors[type] || 'bg-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="mb-2 font-mono text-3xl font-bold uppercase tracking-wider text-cyan-400">
            CYBER<span className="text-purple-400">DEX</span>
          </h1>
          <p className="font-mono text-gray-400">
            Digital Monster Database // v2.0.4
          </p>

          <div className="mt-6 relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-lg border border-cyan-500 bg-gray-900 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <input
                type="text"
                placeholder="SEARCH POKEMON..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent py-3 px-4 font-mono text-cyan-400 placeholder-cyan-700 outline-none"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500">
                <Search size={18} />
              </div>
            </div>
          </div>
        </header>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-cyan-500"></div>
              <p className="mt-4 font-mono text-cyan-400">LOADING DATA...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {filteredPokemon.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="group relative overflow-hidden rounded-lg border border-cyan-800 bg-gray-900 p-4 transition-all hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl"></div>

                  <div className="relative z-10">
                    <div className="mb-3 flex items-center justify-between">
                      <h2 className="font-mono text-lg font-bold uppercase text-cyan-400">
                        {pokemon.name}
                      </h2>
                      <span className="font-mono text-xs text-purple-400">
                        #{pokemon.id.toString().padStart(3, '0')}
                      </span>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                      {pokemon.types.map((typeInfo, index) => (
                        <span
                          key={index}
                          className={`${getTypeColor(
                            typeInfo.type.name
                          )} rounded-full px-2 py-1 font-mono text-xs uppercase text-white`}
                        >
                          {typeInfo.type.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <img
                      src={pokemon.sprites.front_default || '/placeholder.svg'}
                      alt={pokemon.name}
                      className="h-32 w-32 object-contain transition-all group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={page <= 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-800 bg-gray-900 text-cyan-400 transition-all hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="font-mono text-cyan-400">{page}</span>

              <button
                onClick={handleNextPage}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-800 bg-gray-900 text-cyan-400 transition-all hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}

        <footer className="mt-12 border-t border-gray-800 pt-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <Zap size={14} className="text-cyan-500" />
            <div className="font-mono text-xs text-gray-500">
              POWERED BY POKEAPI
            </div>
            <Zap size={14} className="text-purple-500" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
