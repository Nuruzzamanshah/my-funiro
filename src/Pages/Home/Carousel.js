import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Navbar.css'

import img from '../../assets/images/Rectangle 32.png';
import img1 from '../../assets/images/Rectangle 32 (1).png';
import img2 from '../../assets/images/Rectangle 32 (2).png';


const Carousel = () => {
    return (
        <div>
        <OwlCarousel
        className='owl-theme b-card'
        items='3'
        autoplay
        dots
        loop
        margin={20}
        >
            <div className='item'>
                <img src={img}/>
            </div>
            <div className='item'>
                <img src={img1}/>
            </div>
            <div className='item'>
                <img src={img2}/>
            </div>
            
        </OwlCarousel>
        </div>
    );
};

export default Carousel;