import { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import BankAccount from './pages/BankAccount';
import CreateTransaction from './pages/CreateTransaction';
import Register from './pages/Register';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import Review from './pages/Review';
import Currency from './pages/Currency';
import CreateLoan from './pages/CreateLoan';

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
          <Route path="/create-loan" element={<CreateLoan />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<Review />} />
          <Route path="/currency" element={<Currency />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
