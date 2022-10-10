import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import commonBg from '../../images/room.jpg';
import CottagesSuits from './CottagesSuits/CottagesSuits';

const SuitsAndRoom = () => {
    return (
        <>
           <PageHeader imageURL={commonBg} title={'Rooms & Suites'} />
           <CottagesSuits />
        </>
    );
};

export default SuitsAndRoom;