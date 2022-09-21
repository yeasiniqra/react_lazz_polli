import React from 'react';

import { getGallery } from '../../../services/data-service';
import SpaceTemplate from './Template/SpaceTemplate';

const Space = () => {
    const gallery = getGallery();
    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        gallery[0].space.map( (product, index ) => 
                        <SpaceTemplate product={product} key={index} />
                        )
                    }                 
                </div>
            </div>
        </>
    );
};

export default Space;