import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img,name,price,description} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>

        </div>
    );
};

export default Service;