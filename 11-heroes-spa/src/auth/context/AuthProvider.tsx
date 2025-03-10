import { ReactNode, useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { AuthAction } from '../types/types';

const initialState = {
  logged: false,
  user: undefined,
};

const init = () => {
  const user = localStorage.getItem('user');
  return user ? { logged: true, user: JSON.parse(user) } : initialState;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

  const login = (name: string = '') => {
    const action: AuthAction = {
      type: '[Auth] Login',
      payload: {
        id: '123',
        name,
      },
    };

    localStorage.setItem('user', JSON.stringify(action.payload));

    dispatch(action);
  };

  const logout = () => {
    dispatch({ type: '[Auth] Logout' });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
