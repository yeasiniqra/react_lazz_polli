import React from 'react';
import { getGallery } from '../../../services/data-service';
import RestaurantTemplate from './Template/RestaurantTemplate';

const Restaurants = () => {
    const gallery = getGallery();
    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        gallery[3].restaurants.map( (product, index ) => 
                        <RestaurantTemplate product={product} key={index} />
                        )
                    }                 
                </div>
            </div>
        </>
    );
};

export default Restaurants;