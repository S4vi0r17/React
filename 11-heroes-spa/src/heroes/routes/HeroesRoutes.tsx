import { Routes, Route, Navigate } from 'react-router';
import { NavBar } from '../../ui';
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <NavBar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />

        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<Navigate to={'/marvel'} />} />
      </Routes>
    </div>
  );
};
