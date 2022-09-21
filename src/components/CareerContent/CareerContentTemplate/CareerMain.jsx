import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CareerMain = () => {
    const userName = [
        {name:'sakib', roll : 45},
        {name:'sakib All', roll : 35}
    ]

    const [isActive, setActive] = useState(false);
    const clickHandeler = () => {
        setActive(!isActive)
    }

    // https://openapi.programming-hero.com/api/news/categories
    const [datax, setData] = useState([]);
    // console.log(datax);
    datax.sort((a,b) => b.total_view - a.total_view)

    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/news/category/07')
        .then(res => res.json())
        .then(data => setData(data.data))
    },[])

    return (
        <div className='container'>
            <div className='singleParent'>
                {
                    datax.map(item => 
                        <div onClick={clickHandeler} className='single'>
                            <div className={`newMnu ${isActive && 'first'}`}>
                                <img src={item.image_url} alt="x" />
                                <h3>{item.author.name ? item.author.name : 'not found'}</h3>
                                <h6>Views : {item.total_view ? item.total_view : 'not found'}</h6>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='use'>
                {
                    userName.map(p => 
                        <>
                            <h2>{p.name}</h2>
                            <p>{p.roll}</p>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default CareerMain;