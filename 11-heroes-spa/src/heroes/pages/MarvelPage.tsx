import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-5xl font-bold mb-14 text-center">
        Héroes de <span className="text-red-600">Marvel</span>
      </h2>

      <HeroList publisher="Marvel Comics" />
    </main>
  );
};
