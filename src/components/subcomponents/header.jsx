import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './home';
import NewPost from './newpost';
import Contact from './contact.jsx';
import '../App.css';
import Posts from './posts.jsx';

function Header() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" exactelement={<Home />} />
                    <Route exact path="/posts" exactelement={<Posts />} />
                    <Route exact path="/new-blogs" exactelement={<NewPost />} />
                    <Route exact path="/contact" exactelement={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}

export default Header;