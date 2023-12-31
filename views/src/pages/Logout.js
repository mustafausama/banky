import { useEffect, useRef } from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
  const navigate = useNavigate();
  const { user, statelessInit, logout } = useAuth();
  const opRef = useRef(null);
  useEffect(() => {
    if (!user) {
      statelessInit();
      navigate('/');
      if (!opRef.current) opRef.current = toast.info('You are not logged in');
    } else {
      const logoutHandler = async () => {
        try {
          await axios.post('/auth/logout');
          logout();
          navigate('/');
          toast.success('Logout successful');
        } catch (err) {
          toast.error('Logout failed');
          statelessInit();
          navigate('/');
        }
      };
      if (!opRef.current) opRef.current = logoutHandler();
    }
  }, [user, logout, navigate, statelessInit]);
};
export default Logout;
