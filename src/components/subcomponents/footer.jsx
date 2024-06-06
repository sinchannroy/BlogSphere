import React from 'react';
import '../App.css';

function Footer() {
    return (
        <div id='Footer'>
            <div className="contact-leftside">
                <h1 className="subtitle">Contact Me</h1>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sinchan1509@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="med-size">
                        <i className="fa-solid fa-envelope"></i>sinchan1509@gmail.com
                    </p>
                </a>
                <div className="social-media">
                    <a
                        href="https://www.linkedin.com/in/sinchannroy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/sinchannroy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                        href="https://twitter.com/sinchannnroy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/sinchanroy8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook-f social"></i>
                    </a>
                </div>
                <div className="copyright">
                    <p className="footer_title">Sinchan Roy!</p>
                    <p className="foot">
                        <strong><i className="fa-regular fa-copyright"></i> 
                            Copyright 2024 | All rights reserved
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;