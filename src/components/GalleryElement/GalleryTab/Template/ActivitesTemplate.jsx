import React from "react";
import { Link } from "react-router-dom";

const ActivitesTemplate = ({ product }) => {
  return (
    <div className="gallery-single-item">
        <Link to="/">
          <img src={product.image} alt="lorem" />
        </Link>
        <div className="gallery-overly">
          <img
            className="gallery__Image"
            src={product.image}
            alt="GalleryImage"
            data-large={product.image}
          />
        </div>
    </div>
  );
};

export default ActivitesTemplate;
