import { Link, NavLink, useNavigate } from 'react-router';

export const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 border-b border-zinc-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to={'/'} className="text-3xl font-bold tracking-tight">
            Heroes<span className="text-red-600">App</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to={'/marvel'}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? 'text-red-600' : 'hover:text-red-600'
                } transition-colors`
              }
            >
              Marvel
            </NavLink>
            <NavLink
              to={'/dc'}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? 'text-red-600' : 'hover:text-red-600'
                } transition-colors`
              }
            >
              DC
            </NavLink>
            <NavLink
              to={'/search'}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? 'text-red-600' : 'hover:text-red-600'
                } transition-colors`
              }
            >
              Search
            </NavLink>
          </nav>
        </div>

        <button
          onClick={onLogout}
          className="px-4 py-1.5 text-lg font-medium rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
        >
          Login
        </button>
      </div>
    </header>
  );
};
