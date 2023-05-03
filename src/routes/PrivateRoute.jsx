import React, { useContext } from 'react';
import { AuthContext } from '../layouts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpiner from '../layouts/LoadingSpiner';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <LoadingSpiner />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'  replace/>;
};

export default PrivateRoute;