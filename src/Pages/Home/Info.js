import React from 'react';
import './Info.css'
import InfoCard from './InfoCard';
import Group from '../../assets/icon/Group.png';
import Group1 from '../../assets/icon/Group (1).png';
import Vector from '../../assets/icon/Vector.png';
import Vector1 from '../../assets/icon/Vector (1).png';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 p'>
            <InfoCard subTitle='crafted from top materials' cardTitle='High Quality' img={Group}></InfoCard>
            <InfoCard subTitle='Over 2 years' cardTitle='Warrany Protection' img={Group1}></InfoCard>
            <InfoCard subTitle='Order over 150 $' cardTitle='Free Shipping' img={Vector}></InfoCard>
            <InfoCard subTitle='Dedicated support' cardTitle='24 / 7 Support' img={Vector1}></InfoCard>
        </div>
    );
};

export default Info;