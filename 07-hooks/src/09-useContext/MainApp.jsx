import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import UserProvider from './context/UserProvider';

const MainApp = () => {
  return (
    <UserProvider>
      <div>
        {/* Barra de navegación */}
        <NavBar />

        {/* Contenido principal */}
        <div className="container my-4">
          <div className="row">
            <div className="col">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
};

export default MainApp;
