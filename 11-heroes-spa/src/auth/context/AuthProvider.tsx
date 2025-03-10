import { ReactNode, useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { AuthAction } from '../types/types';

const initialState = {
  logged: false,
  user: undefined,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  const login = (name: string = '') => {
    const action: AuthAction = {
      type: '[Auth] Login',
      payload: {
        id: '123',
        name,
      },
    };
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
