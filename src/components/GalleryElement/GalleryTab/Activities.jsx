import React from 'react';
import { getGallery } from '../../../services/data-service';
import ActivitesTemplate from './Template/ActivitesTemplate';

const Activities = () => {
    const gallery = getGallery();
    return (
        <div id="Tab7" className="tabcontent">
        <div className="gallery-grid">
            {
                gallery[1].activities.map( (product, index ) => 
                <ActivitesTemplate product={product} key={index} />
                )
            }                 
        </div>
    </div>
    );
};

export default Activities;