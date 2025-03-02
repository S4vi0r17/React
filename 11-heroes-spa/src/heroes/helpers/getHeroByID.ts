import { heroes } from '../data/heroes';

export const getHeroByID = (id: string) => {
  return heroes.find((hero) => hero.id === id);
};
