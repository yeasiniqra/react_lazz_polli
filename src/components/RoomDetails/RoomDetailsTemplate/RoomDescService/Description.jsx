import React from 'react';
import ServiceItem from './ServiceItem';

const Description = () => {
    const roomRightContent = {
        title : "Room Description",
        description : "The park area is totally eco friendly features with beautiful natural landscaping, garden areas, playground, lakes that make it a great place for recreational activities. The Rajendra Eco Resort & Village Cottage Park Standard Rooms are designed to hospitalities the families who are looking for a secure and comfortable place with all modern amenities within a budget. It’s the perfect place for a family getaway or romantic escape for two."
    }
    const roomService = [
        { serviceTitle : "Breakfast Included"},
        { serviceTitle : "Free wifi"},
        { serviceTitle : "Double Bed"},
        { serviceTitle : "120 sq mt."},
        { serviceTitle : "8 persons"},
        { serviceTitle : "Free internet"},
        { serviceTitle : "private balcony"},
        { serviceTitle : "good room service"},
        { serviceTitle : "flat screen tv"},
        { serviceTitle : "fully AC"},
        { serviceTitle : "mountain view"},
        { serviceTitle : "free pick & drop facilies"},
    ]
    return (
        <div className="dts-right-content">
            <div className="dts-right-content-inner">
                <div className="room-detaits-main">
                    <h2>{roomRightContent.title}</h2>
                    <p>{roomRightContent.description}</p>
                    <div className="room-service-list">
                        <h3>Room services</h3>
                        <ul>
                            {
                            roomService.map((service, index) => 
                                <ServiceItem service={service} key={index} />
                            )
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default Description;