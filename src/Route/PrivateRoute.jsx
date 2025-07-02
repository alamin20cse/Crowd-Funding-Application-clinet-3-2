import React, { useContext } from 'react';
import { AuthContex } from '../Shared/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user,loading}=useContext(AuthContex)
    const loaction=useLocation();
    if(loading)
    {
        return <h1>Loading</h1>
    }
    console.log(user);

    if(user)
    {
        return children;
    }
    else
    {
        return <Navigate state={loaction.pathname} to='/login' > </Navigate>

    }

};

export default PrivateRoute;