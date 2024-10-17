import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand text-light">WELCOME TO MY PAGE</Link>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-light">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active text-light">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active text-light">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
