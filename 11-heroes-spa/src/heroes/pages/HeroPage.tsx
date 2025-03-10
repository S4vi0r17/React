import { ArrowLeft, Heart } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { getHeroByID } from '../helpers';
import { useMemo, useState } from 'react';

export const HeroPage = () => {
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroByID(id as string), [id]);

  if (!hero) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="bg-zinc-50 text-zinc-900">
      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagen del héroe */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg animate__animated animate__fadeInLeft">
            <img
              src={`/heroes/${hero.id}.jpg`}
              alt={hero.superhero}
              className="object-cover w-full h-full"
            />
            <button className="absolute top-4 left-4 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer hover:scale-115 transition-transform">
              <ArrowLeft
                className="h-6 w-6 text-zinc-900"
                onClick={() => navigate(-1)}
              />
            </button>
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full backdrop-blur-md bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer`}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'fill-white' : ''}`}
                />
              </button>
            </div>
          </div>

          {/* Información del héroe */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-600">
                  {hero.publisher}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{hero.superhero}</h1>
              <p className="text-xl text-zinc-600">{hero.alter_ego}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Primera aparición
                </h2>
                <p className="text-zinc-600">{hero.first_appearance}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Personajes</h2>
                <p className="text-zinc-600">{hero.characters}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                <p className="text-zinc-600">
                  {hero.superhero} es uno de los héroes más emblemáticos de{' '}
                  {hero.publisher}. Con una historia rica y compleja, este
                  personaje ha cautivado a fans por décadas con sus aventuras y
                  desarrollo de personaje.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <button className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-colors">
                Añadir a mi colección
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
