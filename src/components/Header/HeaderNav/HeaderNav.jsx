import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../../images/logo-white.png';
import logoBlack from '../../../images/logo-black.png';


const HeaderNav = () => {
    const [isActive, setActive] = useState();
    const toggleClass = () => {
        setActive(!isActive)
    };

    const [isActiveSub, setActiveSub] = useState();
    const toggleClassSub = () => {
        setActiveSub(!isActiveSub)
    };

    const [isActiveSearch, setActiveSearch] = useState();
    const toggleClassSearch = () => {
        setActiveSearch(!isActiveSearch)
    };

    return (
        <>
            <div className="header-top-area">
                <div className="container">
                    <div className="main-menu-flex">
                        <div className="logo">
                            <Link to="/home"><img src={logo} alt="logo" /></Link>
                        </div>
                      
                        <button className="nav_icon mobile-desk openbtn" onClick={toggleClass}><i className="fa fa-bars"></i></button>
                        
                        <div id="mySidepanel" className={`main-menu sidepanel ${isActive && 'showMenu'}`}   >
                            <div  className="mobile-desk closebtn" onClick={toggleClass}>&times;</div>
                            <ul>

                                <li className="active"><Link to="/home">Home</Link></li>
                                <li><Link to="/searchroom">Search Room</Link></li>
                                <li><Link to="/room">Rooms</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li className="prent-dropdown">
                                    <Link onClick={toggleClassSub} to="#">Other Page <span className="caret"></span></Link>
                                    <ul className={`child-dropdown ${isActiveSub && 'showSubMenu'}`}>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/career">Career</Link></li>
                                        <li><Link to="/room">Suites</Link></li>
                                        <li><Link to="/dine">Dine</Link></li>
                                        <li><Link to="/relax">Relax</Link></li>
                                        <li><Link to="/enjoy">Enjoy</Link></li>
                                    </ul>
                                </li>
                                <li className="search-mobile">
                                    <Link to="#"><i className="fa fa-search openBtn" onClick={toggleClassSearch}></i> </Link>
                                </li>
                                <li className="book-now"><Link to="/searchroom">Book Now</Link></li>
                              
                                <div id="myOverlay" className={`overlaySearch ${isActiveSearch && 'showMenuSearch'}`}>
                                    <span className="closebtn" onClick={toggleClassSearch} title="Close Overlay">×</span>
                                    <div className="overlay-content">
                                        <form action="#">
                                            <input type="text" placeholder="Search.." name="search" />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                               
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="hide-menu animi slideInDown">
                <div className="container">
                    
                    <div className="main-menu-flex">
                        <div className="logo">
                            <Link to="/home"><img src={logoBlack} alt="logo" /></Link>
                        </div>
                        
                        <button className="nav_icon mobile-desk openbtn" onClick={toggleClass}><i className="fa fa-bars"></i></button>
                       
                        <div id="mySidepanel2" className={`main-menu sidepanel ${isActive && 'showMenu'}`}>
                           <div  className="mobile-desk closebtn" onClick={toggleClass}>&times;</div>
                           <ul>
                                <li className="active"><Link to="/home">Home</Link></li>
                                <li><Link to="/searchroom">Search Room</Link></li>
                                <li><Link to="/room">Rooms</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li className="prent-dropdown">
                                    <Link onClick={toggleClassSub} to="#">Other Page <span className="caret"></span></Link>
                                    <ul className={`child-dropdown ${isActiveSub && 'showSubMenu'}`} >
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/career">Career</Link></li>
                                        <li><Link to="/room">Suites</Link></li>
                                        <li><Link to="/dine">Dine</Link></li>
                                        <li><Link to="/relax">Relax</Link></li>
                                        <li><Link to="/enjoy">Enjoy</Link></li>
                                    </ul>
                                </li>
                                <li className="search-mobile">
                                   <Link onClick={toggleClassSearch} to="#"><i className="fa fa-search openBtn" ></i> </Link>
                                </li>
                                <li className="book-now"><Link to="/searchroom">Book Now</Link></li>
                              
                                <div id="myOverlay" className={`overlaySearch ${isActiveSearch && 'showMenuSearch'}`}>
                                <span className="closebtn" onClick={toggleClassSearch} title="Close Overlay">×</span>
                                    <div className="overlay-content">
                                        <form action="#">
                                            <input type="text" placeholder="Search.." name="search" />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                               
                            </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default HeaderNav;