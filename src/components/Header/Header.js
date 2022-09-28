import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <h1>MealDB</h1>
                <div className='navbar'>
                    <a href="/home">Home</a>
                    <a href=".about">About</a>
                    <a href="/meal">Meal</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;