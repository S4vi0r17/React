import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { store } from './store';
import HomePage from './HomePage';
import CounterApp from './CounterApp';
import PokemonsApp from './PokemonsApp';
import TodosApp from './TodosApp';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/counter',
    element: <CounterApp />,
  },
  {
    path: '/pokemons',
    element: <PokemonsApp />,
  },
  {
    path: '/todos',
    element: <TodosApp />,
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
