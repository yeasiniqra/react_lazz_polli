import React, { useState } from 'react';
import { useEffect } from 'react';
import './Spinner.css'

const Spnieer = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>{
        setIsLoading()
    },[])
    const clickHandeler = () => {
        setIsLoading(isLoading)
    }
    return (
        <>
            <div className="spinner-container">
                <div className="loading-spinner">
                    <h2>{clickHandeler}</h2>
                </div>
            </div>
        </>
    );
};

export default Spnieer;