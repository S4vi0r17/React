import { heroes } from '../data/heroes';

export const getHeroesByName = (name: string) => {
  if (name.trim().length <= 1) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
