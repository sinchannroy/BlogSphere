import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomeMain() {
    return (
        <div id='home'>
            <div className='welcome-speech'>
                <h2 className='welcome'>Welcome To The World Of</h2>
                <h1 className='welcome2'>Blog <em className='writing'>Writing!</em></h1>
            </div>
            <div className='blog-button btn'>
                <Link className="nav-Link" to="/new-blogs">Write a blog</Link>
            </div>
        </div>
    );
}

export default HomeMain;