import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import { useState } from 'react';

// const user = {
//   id: 1,
//   name: 'Tania',
//   email: 'tania@tania.com',
// };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    // <UserContext.Provider value={{ hola: 'mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
