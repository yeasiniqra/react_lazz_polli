import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CareerContentTemplate from './CareerContentTemplate/CareerContentTemplate';
import commonBg from '../../images/room.jpg';


const CareerContent = () => {
    return (
        <div>
            <PageHeader imageURL={commonBg} title={'Career'}/>
            <CareerContentTemplate />                         
        </div>
        
    );
};

export default CareerContent;