import React from 'react';
import './Navbar.css'
import nuru from '../../assets/images/Rectangle 25.png'
import nuru1 from '../../assets/images/Image.png'

const Card = () => {
    return (
        <div className='b-card my-28'>
            <div className="hero min-h-screen b-cards">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={nuru} className="max-w-sm rounded-lg shadow-2xl" />
                <img  src={nuru1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">50+ Beautiful rooms 
            inspiration</h1>
                <p className="py-6">Our designer already made a lot of beautiful prototipe of rooms that inspire you.</p>
                <button className="btn Btn-clor">Explore More</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Card;