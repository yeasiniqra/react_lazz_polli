import React from 'react';
import { getResortRoom } from '../../../services/data-service';
import RoomCard from '../../RoomCard/RoomCard';

const RoomGrid = () => {
    const resortRoom = getResortRoom();
    return (
        <section className="room-search-area">
            <div className="container">
                <div className="other-page-heading">
                    <h1>
                    <span>Explore Our </span>rooms
                    </h1>
                    <small>choose room according to budget</small>
                </div>

                <div className="choose-room-main-grid">
                    {resortRoom.map((room) => (
                    <RoomCard room={room} key={room.id}/>
                    ))}
                </div>
            </div>
       </section>
    );
};

export default RoomGrid;