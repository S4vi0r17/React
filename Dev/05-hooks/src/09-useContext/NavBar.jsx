import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? 'active' : ''}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? 'active' : ''}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(args) =>
                  `nav-link ${args.isActive ? 'active' : ''}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
