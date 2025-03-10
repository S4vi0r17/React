import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login('Gustavo');

    navigate('/', { replace: true });
  };

  return (
    <>
      <div>LoginPage</div>
      <button
        onClick={onLogin}
        className="px-4 py-1.5 text-sm font-medium rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
      >
        Login
      </button>
    </>
  );
};
