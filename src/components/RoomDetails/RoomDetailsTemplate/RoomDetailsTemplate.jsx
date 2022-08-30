import React from 'react';
import RoomReview from "./RoomReview/RoomReview";
import DescriptionSlider from "./DescriptionSlider/DescriptionSlider";
import RoomDescService from './RoomDescService/RoomDescService';

const RoomDetailsTemplate = ({room}) => {
  return (
    <>
      <div className="details-room-main-grid-inner">
        <DescriptionSlider room={room} />
        <RoomDescService />
      </div>
      <RoomReview />
    </>
  );
};

export default RoomDetailsTemplate;
