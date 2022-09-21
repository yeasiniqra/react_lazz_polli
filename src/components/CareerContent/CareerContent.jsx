import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CareerContentTemplate from './CareerContentTemplate/CareerContentTemplate';
import commonBg from '../../images/room.jpg';
import CareerMain from './CareerContentTemplate/CareerMain';



const CareerContent = () => {
    return (
        <>
            <PageHeader imageURL={commonBg} title='Career'/>
            <CareerContentTemplate /> 
            <CareerMain />    
        </>
        
    );
};

export default CareerContent;