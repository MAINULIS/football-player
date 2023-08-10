import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="/player">OurPlayer</a>

            <div>
                <a href="/home">Home</a>
                <a href="/order">Club</a>
                <a href="/login">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;