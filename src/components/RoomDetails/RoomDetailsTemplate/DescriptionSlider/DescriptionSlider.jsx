import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AsyncGallery } from "../../../../lib/gallery";

import singleOne from "../../../../images/dtl2.jpg";
import singleTwo from "../../../../images/dtl.jpg";
import singleThree from "../../../../images/dtl3.jpg";

const DescriptionSlider = ( {room} ) => {
    const singleImages = [
        { image: singleOne },
        { image: singleTwo },
        { image: singleThree },
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
      };
    
    
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
        <div className="dts-left-img">
            <div className="dts_banner_slide">
                <Splide options={options} aria-label="React Splide Example">
                    {singleImages.map((imagesSlide, index) => (
                    <SplideSlide key={index}>
                        <img
                        className="gallery__Image"
                        src={imagesSlide.image}
                        alt="b1.png"
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
    );
};

export default DescriptionSlider;