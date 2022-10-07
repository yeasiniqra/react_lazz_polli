import React, { useState } from 'react';

import { getGallery } from '../../../services/data-service';
import GalleryPreview from '../../Sheared/GalleryPreview/GalleryPreview';
import SpaceTemplate from './Template/SpaceTemplate';

const Space = () => {
    const gallery = getGallery();

    const [preview, setPreview] = useState({ show: false, images: {}, start: 0});

    const previewCloseHandler = () => {
      setPreview({ show: false, images: [], start: 0});
    };
  
    const checkClickHandler = (index) => {
      const images = gallery[0].space.map(item => item.image);
    
      setPreview({
        show: true,
        images,
        start: index
      });
    };


    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        gallery[0].space.map( (product, index ) => 
                         <SpaceTemplate product={product} key={index} index={index}  checkClickHandler={checkClickHandler} />
                        )
                    }                 
                </div>
            </div>
            <GalleryPreview start={preview.start} show={preview.show} images={preview.images} onClose={previewCloseHandler} />   
        </>
    );
};

export default Space;