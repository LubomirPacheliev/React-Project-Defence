import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Header.scss';

const Header = () => {
    const cookieName = 'authman2';
    const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

    const handleLogout = async () => {
        removeCookie(cookieName);
    }

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
                    {!cookies[cookieName] && <li><Link to="/login">Login</Link></li>}
                    {!cookies[cookieName] || <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
// TODO: Check the best way to validate a cookie when entering the website