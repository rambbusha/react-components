import React from 'react';
import ClockSVG from './svgs/ClockSVG';
import SourceSVG from './svgs/SourceSVG';

export const GBCard12ImageRight = ({ backgroundImg, title, source, time, category }) => {
    return (
        <div className='component-to-copy gb-card-12 gb-card-12-image-right'>
            <div className='card-image gb-phone-hide' style={{ backgroundImage: `url(${backgroundImg})` }}/>
            <div className='text-content'>
                <h1 className='card-title gb-text-black gb-title-medium'>{title}</h1>
                <div className="gb-card-label">
                    <div className="card-label-item">
                        <SourceSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                        <a href='#' className="gb-text-black gb-label">{source}</a>
                    </div>
                    <div className="card-label-item">
                        <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                        <p className="gb-text-black gb-label">{time}</p>
                    </div>
                    <div className="card-label-item gb-grow-one">
                        <a href="#" className="gb-underline gb-text-black gb-label ">{category}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};