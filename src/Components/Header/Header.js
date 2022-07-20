import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className='nav-header'>
            <h1 className='nav-header-h1'>grimoire</h1>
            <nav className='nav-header-nav'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Library</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;