import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeMain from './homeMain';
import NewPost from './newpost';
import '../App.css';

function Home() {
    return (
        <>
            <Router>
                <HomeMain />
                <Routes>
                    <Route exact path="/new-blogs" exactelement={<NewPost />} />
                </Routes>
            </Router>
        </>
    );
}

export default Home;