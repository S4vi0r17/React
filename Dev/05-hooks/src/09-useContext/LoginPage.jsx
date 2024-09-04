import { useContext } from 'react';
import { UserContext } from './context/userContext';

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-4">Login Page</h1>
          <pre className="bg-light p-3 rounded">
            {JSON.stringify(user, null, 3)}
          </pre>
          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              setUser({
                id: 1,
                name: 'Tania',
                email: 'tania@tania.com',
              });
            }}
          >
            Set User
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
