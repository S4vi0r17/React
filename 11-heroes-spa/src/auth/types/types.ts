export interface User {
  id: string;
  name: string;
}

export type AuthAction =
  | { type: '[Auth] Login'; payload: User }
  | { type: '[Auth] Logout' };
