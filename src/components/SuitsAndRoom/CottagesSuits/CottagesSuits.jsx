import React from 'react';
import { Link } from 'react-router-dom';
import one from '../../../images/summer-overview-01.jpg';
import Two from '../../../images/summer-overview-02.jpg';
import Three from '../../../images/summer-overview-04.jpg';
import Four from '../../../images/summer-overview-05.jpg';

const CottagesSuits = () => {
    return (
        <div className='cottagesuits-area'>
            <div className="container">
                <div className='cottagesuits-grid-parent'>
                    <div className="cottagesuits-grid">
                        <div className="cottagesuits-single">
                            <div className='cottagesuits-img'>
                                <img src={one} alt="images" />
                            </div>
                            <div className='cottagesuits-img'>
                                <img src={Two} alt="images" />
                            </div>
                        </div>
                        <div className="cottagesuits-content">
                            <div className="overly-content">
                                <div className="hover-ef-1"></div>
                                    <div className='overly-content-inner'>
                                        <h2>Cottages</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.</p>
                                        <div className="common-btn">
                                            <Link to='/room'>View Cottages</Link>
                                        </div>
                                    </div>
                                <div className="hover-ef-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="cottagesuits-grid">
                        <div className="cottagesuits-single">
                            <div className='cottagesuits-img'>
                                <img src={Three} alt="images" />
                            </div>
                            <div className='cottagesuits-img'>
                                <img src={Four} alt="images" />
                            </div>
                        </div>
                        <div className="cottagesuits-content">
                            <div className="overly-content">
                                <div className="hover-ef-1"></div>
                                    <div className='overly-content-inner'>
                                        <h2>Suites</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.</p>
                                        <div className="common-btn">
                                            <Link to='/room'>View Suites</Link>
                                        </div>
                                    </div>
                                <div className="hover-ef-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="cottagesuits-grid">
                        <div className="cottagesuits-single">
                            <div className='cottagesuits-img'>
                                <img src={one} alt="images" />
                            </div>
                            <div className='cottagesuits-img'>
                                <img src={Two} alt="images" />
                            </div>
                        </div>
                        <div className="cottagesuits-content">
                            <div className="overly-content">
                                <div className="hover-ef-1"></div>
                                    <div className='overly-content-inner'>
                                        <h2>Villas</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.</p>
                                        <div className="common-btn">
                                            <Link to='/room'>View Villas</Link>
                                        </div>
                                    </div>
                                <div className="hover-ef-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CottagesSuits;