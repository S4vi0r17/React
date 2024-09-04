import PropTypes from 'prop-types';
import { UserContext } from './userContext';

const user = {
  id: 1,
  name: 'Tania',
  email: 'tania@tania.com',
};

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'mundo', user }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProvider;
