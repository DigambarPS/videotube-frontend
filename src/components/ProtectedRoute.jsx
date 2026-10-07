import React from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const ProtectedRoute = ({redirectTo = "/login"}) => {
    const {user} = useAuth();

  return user ? <Outlet/> : <Navigate to={redirectTo} replace />
}

export default ProtectedRoute