import { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import BankAccount from './pages/BankAccount';
import CreateTransaction from './pages/CreateTransaction';

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
          <Route path="/account-details/:num" element={<BankAccount />} />
          <Route path="/create-transaction" element={<CreateTransaction />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
