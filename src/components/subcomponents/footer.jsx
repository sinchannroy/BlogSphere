import React from 'react';
import '../App.css';

function Footer() {
    return (
        <div id='Footer'>
            <div className="contact-leftside">
                <div className="copyright">
                    <h1 className="footer_title">Sinchan Roy!</h1>
                    <div className="social-media">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sinchan1509@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>
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
                    </div>
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