import React from 'react';

import { FaAirbnb } from 'react-icons/fa';



const Logo = () => {
    return (
        <div style={{ display: 'flex', alignItems: "center" }}>
            <FaAirbnb size={40} color={'red'} />
            <p style={{ fontSize: '22px', color: " #f22121", fontWeight: '800', fontFamily: 'Raleway, sans-serif', marginLeft: "3px" }}>airbnb</p>
        </div >
    );
};

export default Logo;