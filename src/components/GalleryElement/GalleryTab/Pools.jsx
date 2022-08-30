import React from 'react';
import { getGallery } from '../../../services/data-service';
import PoolsTemplate from './Template/PoolsTemplate';

const Pools = () => {
    const gallery = getGallery();
    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        gallery[2].pools.map( (item, index ) => 
                        <PoolsTemplate item={item} key={index} />
                        )
                    }                 
                </div>
            </div>
        </>
    );
};

export default Pools;