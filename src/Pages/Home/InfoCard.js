import React from 'react';
import './Info.css'

const InfoCard = ({img, cardTitle, subTitle}) => {
    return (
        <div className="card lg:card-side p">
          <figure><img src={img} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <p>{subTitle}</p>
          </div>
        </div>
    );
};

export default InfoCard;