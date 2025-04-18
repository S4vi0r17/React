import { useLocation, useNavigate } from 'react-router';
import { Search, ArrowRight } from 'lucide-react';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const filteredHeroes = getHeroesByName(q as string);

  const { searchText, onInputChange } = useForm({
    searchText: q as string,
  });

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 animate__animated animate__fadeIn">
      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Sección de búsqueda */}
        <div className="mb-12">
          <form
            onSubmit={onSearchSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                name="searchText"
                placeholder="Buscar por nombre de héroe o alter ego..."
                className="w-full pl-11 pr-4 py-3 rounded-xl text-base bg-white border-zinc-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                value={searchText}
                onChange={onInputChange}
              />
            </div>
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium transition-colors flex items-center justify-center gap-2 sm:w-auto w-full cursor-pointer"
            >
              <span>Buscar</span>
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Resultados de búsqueda */}
        <div className="space-y-4">
          {filteredHeroes.length === 0 ? (
            q === '' ? (
              <p className="text-center text-zinc-600">
                Realiza una búsqueda para encontrar héroes.
              </p>
            ) : (
              <p className="text-center text-zinc-600">
                No se encontraron héroes que coincidan con "{q}".
              </p>
            )
          ) : (
            filteredHeroes.map((hero) => (
              <div
                key={hero.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate__animated animate__bounceInLeft"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Imagen del héroe */}
                  <div className="relative w-full sm:w-48 aspect-[3/2] sm:aspect-auto">
                    <img
                      src={`/heroes/${hero.id}.jpg`}
                      alt={hero.superhero}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Información del héroe */}
                  <div className="flex-1 p-6 flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-600">
                          {hero.publisher}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold">{hero.superhero}</h2>
                      <p className="text-zinc-600">{hero.alter_ego}</p>
                      <p className="text-sm text-zinc-500">
                        Primera aparición: {hero.first_appearance}
                      </p>
                    </div>

                    <div className="flex items-center self-end sm:self-center">
                      <button
                        onClick={() => navigate(`/hero/${hero.id}`)}
                        className="group/btn flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                      >
                        <span className="cursor-pointer">Ver detalle</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};
