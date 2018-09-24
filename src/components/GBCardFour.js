import React from 'react';
import SourceSVG from "./svgs/SourceSVG";
import ClockSVG from "./svgs/ClockSVG";

const GBCardFourLi = ({ title, source, date, image }) => {
    return (
        <li className='gb-card-four-sub-card'>
            <div className='gb-card-four-sub-card-info'>
                <h2 className='gb-title-medium'>{title}</h2>
                <ul className='posted-info'>
                    <li className='posted-by'>
                        <SourceSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                        <a className='gb-text-black' href='#'>{source}</a>
                    </li>
                    <li className='posted-at'>
                        <ClockSVG classes="gb-label-icon gb-icon-black-opacity-30 gb-icon-small"/>
                        <p>{date}</p>
                    </li>
                </ul>
            </div>
            <div className='gb-card-four-sub-card-image'>
                <img src={image} alt='story-image'/>
            </div>
        </li>
    );
};

export const GBCardFour = ({ cards }) => {
    return (
        <div className='component-to-copy gb-card-four-wrapper'>
            <ul className='gb-card-four-sub-cards'>
                {cards.map((item) => {
                    return (
                       <GBCardFourLi title={item.title} source={item.source} date={item.date} image={item.img}/>
                    );
                })}
            </ul>
        </div>
    );
};