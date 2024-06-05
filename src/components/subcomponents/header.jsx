import React from 'react';
import '../App.css';

function Header() {
    return (
        <div id="header">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
                    <a class="navbar-brand effect-shine" href="">
                        <img class="logo" src="../src/assets/blogIcon.png"/>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onclick="scrollToTop()">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#write-a-blog-page">Write A Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;