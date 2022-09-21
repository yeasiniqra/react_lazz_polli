import React from 'react';
import { getGallery } from '../../../services/data-service';
import ReviewTemplate from './Template/ReviewTemplate';

const Reviews = () => {
    const gallery = getGallery();
    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        gallery[5].reviews.map( (product, index ) => 
                        <ReviewTemplate product={product} key={index} />
                        )
                    }                 
                </div>
            </div>
        </>
    );
};

export default Reviews;