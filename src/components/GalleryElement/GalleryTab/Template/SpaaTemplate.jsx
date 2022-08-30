import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { AsyncGallery } from "../../../../lib/gallery";

const SpaaTemplate = ({item}) => {
    useEffect(() => {
        const settings = {
          images: ".gallery__Image",
          loop: true,
          next: undefined,
          prev: undefined,
          dots: undefined,
          close: undefined,
          loader: undefined,
          counter: undefined,
          counterDivider: "/",
          keyboardNavigation: true,
          hiddenElements: [],
        };
        new AsyncGallery(settings);
      }, []);
    return (
        <div className="gallery-single-item">
            <Link to='/'>
                <img src={item.image} alt="lorem" />
            </Link>
            <div className="gallery-overly">
                <img className="gallery__Image" src={item.image} alt="lorem" data-large={item.image} />
            </div>
        </div> 
    );
};

export default SpaaTemplate;