import React from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PublicOnlyRoute = ({redirectTo = "/Home"}) => {
    const {user} = useAuth();
    console.log(user);

  return user ? <Navigate to={redirectTo} replace /> : <Outlet/>
}

export default PublicOnlyRoute