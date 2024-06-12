import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar () {
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

            if (navbarRef.current) {
                if (window.scrollY > 1) {
                    navbarRef.current.classList.add('sticky');
                } else {
                    navbarRef.current.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const opentab = (tabname) => {
        let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");

        for(let tablink of tablinks){
            tablink.classList.remove("active-link");
        }

        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tabs");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tabs");
    };


    return (
        <div id="navbar" ref={navbarRef}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                    <Link className="navbar-brand effect-shine" to="/">
                        <img className="logo" src="../src/assets/blogIcons.png"/>
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
                                <Link className="nav-Link" to="/" onclick="scrollToTop()">Home</Link>
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