import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="title">
                <h1>Best food waiting for your belly</h1>
                <input type="text" defaultValue="Search food item" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;