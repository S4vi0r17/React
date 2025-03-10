import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context';
import { LogIn } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    login('Gustavo');

    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Heroes<span className="text-red-600">App</span>
        </h1>

        <p className="text-xl text-zinc-600">
          Descubre el universo de los superhéroes
        </p>

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`
            w-full flex items-center justify-center
            px-4 py-3 border border-transparent text-base font-medium rounded-md
            text-white cursor-pointer bg-red-600 hover:bg-red-700 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
            transition-colors duration-200
            ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}
          `}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Iniciando sesión...
            </span>
          ) : (
            <span className="flex items-center">
              <LogIn className="w-5 h-5 mr-2" />
              Iniciar sesión
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
