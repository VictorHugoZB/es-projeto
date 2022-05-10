/* eslint-disable no-nested-ternary */
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedOutlet({ neededRole }) {
  const { role, authUser } = useAuth();
  const location = useLocation();

  return (
    neededRole === role
      ? <Outlet />
      : authUser
        ? <h1 style={{ textAlign: 'center' }}>Você não tem permissão para acessar essa página</h1>
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}
