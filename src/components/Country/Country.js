import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area , population , name, flags} = props.country;
    // console.log(props.country)
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h6>Area: {area}</h6>
        </div>
    );
};

export default Country;