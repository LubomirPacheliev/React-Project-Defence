import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
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
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;