import { AuthAction } from '../types/types';
import { AuthState } from './AuthContext';

export const AuthReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case '[Auth] Login':
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case '[Auth] Logout':
      return {
        ...state,
        logged: false,
        user: undefined,
      };
    default:
      return state;
  }
};
