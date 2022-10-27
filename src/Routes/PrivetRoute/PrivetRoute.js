import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);

    const location = useLocation();
    
    if(loading){
        return <h1 className='text-xl'>Loading</h1>
    }


    if(user){
        return children;
    }return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;