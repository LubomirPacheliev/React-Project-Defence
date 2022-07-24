import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { useAuthenticator as callAuthenticator } from '../Hooks/userHooks';

const AuthGuard = ({ children }) => {
    const [isAuth, setAuth] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const authenticateUser = async () => {
        await callAuthenticator(setAuth);
    }

    useEffect(() => authenticateUser, []);
    useEffect(() => {
        if ((location.pathname === '/login' || location.pathname === '/register') && !isAuth) navigate("/");
    }, [location.pathname]);

    return children;
}

export default AuthGuard;