import { useState } from 'react';
import AuthenticationContext from './AuthenticationContext';

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
