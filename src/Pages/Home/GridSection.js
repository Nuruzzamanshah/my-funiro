import React from 'react';
import './GridSection.css'
import img from '../../assets/images/Rectangle 36.png';
import img1 from '../../assets/images/Rectangle 38.png';
import img2 from '../../assets/images/Rectangle 40.png';
import img3 from '../../assets/images/Rectangle 43.png';
import img4 from '../../assets/images/Rectangle 45.png';
import img5 from '../../assets/images/Rectangle 37.png';
import img6 from '../../assets/images/Rectangle 39.png';
import img7 from '../../assets/images/Rectangle 41.png';
import img8 from '../../assets/images/Rectangle 44.png';

const GridSection = () => {
    return (
        <main>
            <div className='div1'><img src={img}/></div>
            <div className='div2'><img src={img1}/></div>
            <div className='div3'><img src={img2}/></div>
            <div className='div4'><img src={img3}/></div>
            <div className='div5'><img src={img4}/></div>
            <div className='div6'><img src={img5}/></div>
            <div className='div7'><img src={img6}/></div>
            <div className='div8'></div>
            <div className='div9'><img src={img7}/></div>
            <div className='div10'><img src={img8}/></div>
        </main>
    );
};

export default GridSection;