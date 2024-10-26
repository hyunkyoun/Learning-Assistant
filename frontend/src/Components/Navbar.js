import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">MyWebsite</div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="/" onClick={toggleMenu}>Home</a>
                <a href="/myprofile" onClick={toggleMenu}>My Profile</a>
                <a href="/aboutus" onClick={toggleMenu}>About Us</a>
                <a href="/settings" onClick={toggleMenu}>Settings</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'line1' : ''}`}></div>
                <div className={`line ${isOpen ? 'line2' : ''}`}></div>
                <div className={`line ${isOpen ? 'line3' : ''}`}></div>
            </div>
        </nav>
    );
};

export default Navbar;
