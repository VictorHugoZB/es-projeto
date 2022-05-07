import React, { useState, useContext } from 'react';

const AuthContext = React.createContext({});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState('');
  const [role, setRole] = useState('');

  const values = {
    authUser,
    role,
    setAuthUser,
    setRole,
  };

  return (
    <AuthContext.Provider values={values}>
      { children }
    </AuthContext.Provider>
  );
}
