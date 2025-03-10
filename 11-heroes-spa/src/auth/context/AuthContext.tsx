import { createContext } from 'react';

export interface AuthState {
  logged: boolean;
  user: { id: string; name: string } | undefined;
}

export interface AuthContextType {
  logged: boolean;
  user: { id: string; name: string } | undefined;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
