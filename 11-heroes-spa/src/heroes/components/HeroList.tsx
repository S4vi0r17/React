import { Link } from 'react-router';
import { Publisher } from '../interfaces';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

interface Props {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: Props) => {
  const filteredHeroes = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate__animated animate__fadeIn">
      {filteredHeroes.map((hero) => (
        <div
          key={hero.id}
          className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={`/heroes/${hero.id}.jpg`}
              alt={hero.superhero}
              width={300}
              height={400}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white">{hero.superhero}</h2>
            <p className="text-zinc-300 text-sm">{hero.alter_ego}</p>
            <p className="text-zinc-400 text-xs mt-1">
              {hero.first_appearance}
            </p>
            <Link
              to={`/hero/${hero.id}`}
              className="mt-4 text-xs font-medium text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-full transition-colors self-start"
            >
              Más...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
