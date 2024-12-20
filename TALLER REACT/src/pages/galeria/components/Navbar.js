import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/galeria">Galeria</Link>
                <Link to="/Favoritos">Favoritos</Link>
            </div>
        </nav>
    );
};

export default Navbar;