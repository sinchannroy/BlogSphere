import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar () {
    return (
        <div id="navbar">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                    <Link className="navbar-brand effect-shine" to="/">
                        <img className="logo" src="../src/assets/blogIcon.png"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-Link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" to="/posts">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" to="/new-blogs">Write A Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;