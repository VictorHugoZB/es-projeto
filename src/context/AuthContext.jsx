import React, { useState, useContext, useMemo } from 'react';

const AuthContext = React.createContext({});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState('');
  const [role, setRole] = useState('');

  const values = useMemo(() => ({
    authUser,
    role,
    setAuthUser,
    setRole,
  }), [authUser, role]);

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  );
}
