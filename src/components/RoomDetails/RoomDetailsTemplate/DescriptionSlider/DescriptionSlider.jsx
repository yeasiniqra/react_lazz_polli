
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import singleOne from "../../../../images/dtl2.jpg";
import singleTwo from "../../../../images/dtl.jpg";
import singleThree from "../../../../images/dtl3.jpg";
import singleFour from '../../../../images/6.png';
import GalleryPreview from "../../../Sheared/GalleryPreview/GalleryPreview";
import { useState } from "react";

const DescriptionSlider = ( {room} ) => {
    const singleImages = [
        { image: singleOne },
        { image: singleTwo },
        { image: singleThree },
        { image: singleFour },
      ];
      const options = {
        rewind: true,
        type: "fade",
        autoplay: true,
        rewindSpeed: 1000,
        speed: 500,
        pauseOnHover: false,
        fixedWidth: "100%",
        fixedHeight: "auto",
        start  : 0
      };
    

      const [preview, setPreview] = useState({ show: false, images: [], start: 0});

      const previewCloseHandler = () => {
        setPreview({ show: false, images: [], start: 0});
      };
    
      const checkClickHandler = (index) => {
        const  images = [
          { url: singleOne },
          { url: singleTwo },
          { url: singleThree },
          { url: singleFour },
        ];
        
        setPreview({
          show: true,
          images,
          start: index
        });
      };


    return (
      <>
        <div className="dts-left-img">
            <div className="dts_banner_slide">
                <Splide options={options} aria-label="React Splide Example">
                    {singleImages.map((imagesSlide, index) => (
                    <SplideSlide key={index}>
                        <img
                          className="gallery__Image"
                          src={imagesSlide.image}
                          alt="b1.png"
                          onClick={checkClickHandler.bind(null, index)}
                          data-large={imagesSlide.image}
                        />
                    </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className="dts-heading-content">
                <h1>{room.roomTitle}</h1>
                <h4>
                    {room.roomAmount} / <span>{room.dayNight}</span>
                </h4>
            </div>
       </div>
      <GalleryPreview start={preview.start} show={preview.show} images={preview.images} onClose={previewCloseHandler} />
      </>
    );
};

export default DescriptionSlider;