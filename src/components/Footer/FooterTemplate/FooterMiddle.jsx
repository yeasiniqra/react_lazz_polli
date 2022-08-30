import React from 'react';
import logo from '../../../images/logo-white.png'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee';

const FooterMiddle = () => {
    return (
        <div>
         <section className="footer-area">
            <div className="container">
                <div className="footer-main-flex">
                    <div className="footer-logo">
                        <Link to="/home"><img src={logo} alt="footer logo" /></Link>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu">
                            <ul className="footer-links">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/">Search Room</Link></li>
                                <li><Link to="/room">Rooms</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/">Gallery</Link></li>
                                <li><Link to="/">Career</Link></li>
                                <li><Link to="/">Suites</Link></li>
                                <li><Link to="/">Dine</Link></li>
                                <li><Link to="/">Relax</Link></li>
                                <li><Link to="/">Enjoy</Link></li>
                                <li><Link to="/">Checkout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-news footer-logo">
                        <div className="footer-marque">
                            <Marquee behavior={"scrolling"} direction={"left"} scrollamount={3}>
                               <h2>TExplore & Enjoy With Our Resort</h2>
                             </Marquee>
                            {/* <marquee behavior="scrolling" direction="left" scrollamount="3"></marquee> */}
                            <div className="footer-overly">
                                <Link to="/"><img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg" alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="footer-bottom">
                    <p>&copy; 2022. Lazz Polli Resort. All rights reserved.</p>
                    <span>Site by - <a target="_blank" href='https://iqrasys.com' rel="noopener noreferrer">Iqrasys Solutions Ltd</a></span>
                </div>
            </div>
        </section>
        </div>
    );
};

export default FooterMiddle;