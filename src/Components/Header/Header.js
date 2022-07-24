import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser, validateJWT } from '../../Services/authService';
import './Header.scss';

const Header = () => {
    const [cookie, setCookie] = useState(false);

    const handleLogout = async () => {
        await logoutUser();
        setCookie(false);
    }

    useEffect(async () => {
        const res = await validateJWT();
        if (!res) setCookie(false);
        setCookie(res.validated);
    }, []);

    return (
        <header className='nav-header'>
            <h1 className='nav-header-h1'>grimoire</h1>
            <nav className='nav-header-nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/collections">Collections</Link></li>
                    <li><Link to="/marketplace">Marketplace</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {!cookie && <li><Link to="/login">Login</Link></li>}
                    {!cookie || <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
// TODO: Check the best way to validate a cookie when entering the website