import React from 'react';
import FindHroomTemplate from './FindHroomTemplate/FindHroomTemplate';
import { getFindHroom } from "../../services/data-service";

const FindHroom = () => {
    const FindHroom = getFindHroom();
   
    return (
        <div>
            <FindHroomTemplate FindHroom={FindHroom} />
        </div>
    );
};

export default FindHroom;