import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function HomeMain() {
    useEffect(() => {
        const handleScroll = () => {
            var scrollPosition = window.scrollY;
            var welcomeSpeechDiv = document.querySelector('.welcome-speech');
            var blogButtonDiv = document.querySelector('.blog-button');

            if(window.innerWidth >= 1140) {
                welcomeSpeechDiv.style.top = 50 + scrollPosition + '%';
                blogButtonDiv.style.top = 65 + scrollPosition + '%';
            }

            else if (window.innerWidth >= 1027 && window.innerWidth < 1140) {
                welcomeSpeechDiv.style.top = 50 + scrollPosition + '%';
                blogButtonDiv.style.top = 72 + scrollPosition + '%';
            }

            else if (window.innerWidth >= 735 && window.innerWidth < 1027) {
                welcomeSpeechDiv.style.top = 50 + scrollPosition + '%';
                blogButtonDiv.style.top = 72 + scrollPosition + '%';
            }

            else if (window.innerWidth >= 500 && window.innerWidth < 735) {
                welcomeSpeechDiv.style.top = 50 + scrollPosition + '%';
                blogButtonDiv.style.top = 74 + scrollPosition + '%';
            }

            else if (window.innerWidth < 500) {
                welcomeSpeechDiv.style.top = 50 + scrollPosition + '%';
                blogButtonDiv.style.top = 72 + scrollPosition + '%';
            }

            welcomeSpeechDiv.style.left = '50%';
            welcomeSpeechDiv.style.left = '50%';
        };
        //correct the effects after scrolling

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

