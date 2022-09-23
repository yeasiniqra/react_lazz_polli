import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CareerContentTemplate from './CareerContentTemplate/CareerContentTemplate';
import commonBg from '../../images/room.jpg';
import CareerMain from './CareerContentTemplate/CareerMain';
import Spnieer from './CareerContentTemplate/Spnieer';



const CareerContent = () => {
    return (
        <>
            <PageHeader imageURL={commonBg} title='Career'/>
            <CareerContentTemplate /> 
            <CareerMain />
            <Spnieer />    
        </>
        
    );
};

export default CareerContent;