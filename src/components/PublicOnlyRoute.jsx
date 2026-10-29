import React from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PublicOnlyRoute = ({redirectTo = "/"}) => {
  const {user, isLoading} = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="animate-pulse">Loading...</p>
      </div>
    );
  }

  return user ? <Navigate to={redirectTo} replace /> : <Outlet/>
}

export default PublicOnlyRoute