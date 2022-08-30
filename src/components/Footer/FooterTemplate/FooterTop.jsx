import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Clock from '../Clock/Clock';

const FooterTop = () => {
    const footerHeadingTag = {
        topHeading : 'Lazz Polli Convention, Hemayetpur Saver',
        bottomHeading : 'Local Time'
    }
    

    return (
        <div>
            <div className="footer-area-top">
                <div className="container">
                    <div className="footer-top-flex">
                        <div className="header-top-right">
                            <ul className="d-flex cmn">
                                <li>
                                  <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-youtube" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-top-content">
                            <p>{footerHeadingTag.topHeading}</p>
                            <div className="header-top-left">
                                <ul className="d-flex al-center">
                                    <li>
                                        <Link to="tel:01778-772327"><i className="fa fa-volume-control-phone" aria-hidden="true"></i><span className="ex-number">+88 01778-772327</span></Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:info@lazzpolli.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>info@lazzpolli.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-time">
                            <span>{footerHeadingTag.bottomHeading}</span>
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;