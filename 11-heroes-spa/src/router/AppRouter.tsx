import { Route, Routes } from 'react-router';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
