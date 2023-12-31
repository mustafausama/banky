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
import NearestAtm from './pages/NearestAtm';
import 'react-toastify/dist/ReactToastify.css';
import Review from './pages/Review';
import Currency from './pages/Currency';
import CreateLoan from './pages/CreateLoan';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import TransactionDetails from './pages/TransactionDetails';
import Notification from './components/Notification';

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
          <Route
            path="/transaction-details/:num"
            element={<TransactionDetails />}
          />
          <Route path="/create-transaction" element={<CreateTransaction />} />
          <Route path="/create-loan" element={<CreateLoan />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<Review />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/nearest-atm" element={<NearestAtm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notification page={true} />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
