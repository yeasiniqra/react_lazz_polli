import React from 'react';
import { getGallery } from '../../../services/data-service';
import SpaaTemplate from './Template/SpaaTemplate';

const Spaa = () => {
    const gallery = getGallery();
    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        gallery[4].spaa.map( (product, index ) => 
                        <SpaaTemplate product={product} key={index} />
                        )
                    }                 
                </div>
            </div>
        </>
    );
};

export default Spaa;