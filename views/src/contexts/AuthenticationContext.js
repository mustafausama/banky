import { createContext } from 'react';

const AuthenticationContext = createContext({
  user: null,
  setUser: () => null,
});

export default AuthenticationContext;
