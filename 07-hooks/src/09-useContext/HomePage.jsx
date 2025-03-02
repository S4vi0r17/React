import { useContext } from 'react';
import { UserContext } from './context/userContext';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-4">Home Page</h1>
          <pre className="bg-light p-3 rounded">
            {JSON.stringify(user, null, 3)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
