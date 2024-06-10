import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomeMain() {
    useEffect(() => {
        const handleScroll = () => {
            var scrollPosition = window.scrollY;
            var welcomeSpeechDiv = document.querySelector('.welcome-speech');

            welcomeSpeechDiv.style.top = 50 + scrollPosition + '%';
            welcomeSpeechDiv.style.left = '50%';

            var welcomeSpeechDiv = document.querySelector('.blog-button');

            welcomeSpeechDiv.style.top = 60 + scrollPosition + '%';
            welcomeSpeechDiv.style.left = '50%';
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div id='home'>
            <div className='fixedElement'>
                <div className='welcome-speech'>
                    <h2 className='welcome'>Welcome To The World Of</h2>
                    <h1 className='welcome2'>Blog <em className='writing'>Writing!</em></h1>
                </div>
                <div className='blog-button btn'>
                    <Link className="nav-Link" to="/new-blogs">Write a blog</Link>
                </div>
            </div>
        </div>
    );
}

export default HomeMain;

