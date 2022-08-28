import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading ] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    // if(loading){
    //     return <Loading></Loading>
    // }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    // return (
    //     <div>
            
    //     </div>
    // );

    return children;
};

export default RequireAuth;