import { useCallback, useContext, useDebugValue } from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
import Cookies from 'js-cookie';
const useAuth = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const logout = useCallback(() => {
    if (!Cookies.get('isTokenAttached')) setUser(null);
  }, [setUser]);

  const login = useCallback(() => {
    const isTokenAttached = Cookies.get('isTokenAttached');
    if (!isTokenAttached) return;
    setUser(isTokenAttached);
  }, [setUser]);

  const statelessInit = useCallback(() => {
    const user = Cookies.get('isTokenAttached');
    if (!user) setUser(null);
    else setUser(JSON.parse(user));
  }, [setUser]);

  useDebugValue(user, (user) => (user ? 'Logged In' : 'Logged Out'));
  return { user, login, logout, statelessInit };
};

export default useAuth;
