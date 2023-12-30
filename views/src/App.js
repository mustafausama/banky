import { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Register from './pages/Register';

function App() {
  const { statelessInit } = useAuth();

  useEffect(() => {
    statelessInit();
  }, [statelessInit]);

  return (
    <>
      {' '}
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
