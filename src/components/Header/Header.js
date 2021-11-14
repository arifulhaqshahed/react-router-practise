import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div></div>
            <div className="navbar">
                <Link className='nav-link' to="/home">Home</Link>
                <Link className='nav-link' to="/about">About us</Link>
                <Link className='nav-link' to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Header;