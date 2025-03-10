import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../auth';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to="/login" />;
};
