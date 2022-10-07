import React from 'react';
import { Link } from "react-router-dom";

const FindHroomTemplate = ({FindHroom}) => {
    return (
      <>
        <section className="booking-room-area">
            <div className="container">
                <div className="booking-room-main">
                    <div className="row">
                    <div className="col-md-5">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[1].image2} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[1].topHeading2} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[1].link2}>{FindHroom[1].topBtn2} </Link></h6>
                                        <h2><span>{FindHroom[1].btmHeading2} </span></h2>
                                        <p>{FindHroom[1].description2} </p>
                                        <Link to={FindHroom[1].link2}>{FindHroom[1].bottomBtn2} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[0].image} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[0].topHeading} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[0].link}>{FindHroom[0].topBtn} </Link></h6>
                                        <h2><span>{FindHroom[0].btmHeading} </span></h2>
                                        <p>{FindHroom[0].description} </p>
                                        <Link to={FindHroom[0].link}>{FindHroom[0].bottomBtn} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row custom-rows">
                        <div className="col-md-7">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[3].image4} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[3].topHeading4} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[3].link4}>{FindHroom[3].topBtn4} </Link></h6>
                                        <h2><span>{FindHroom[3].btmHeading4} </span></h2>
                                        <p>{FindHroom[3].description4} </p>
                                        <Link to={FindHroom[3].link4}>{FindHroom[3].bottomBtn4} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="grid">
                                <figure className="effect-layla">
                                    <img src={FindHroom[2].image3} alt="lazz polli" />
                                    <figcaption>
                                        <h3>{FindHroom[2].topHeading3} </h3>
                                        <h6 className="find-more"><Link to={FindHroom[2].link3}>{FindHroom[2].topBtn3} </Link></h6>
                                        <h2><span>{FindHroom[2].btmHeading3} </span></h2>
                                        <p>{FindHroom[2].description3} </p>
                                        <Link to={FindHroom[2].link3}>{FindHroom[2].bottomBtn3} </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
};

export default FindHroomTemplate;