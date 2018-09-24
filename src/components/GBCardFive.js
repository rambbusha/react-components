import React from 'react';
import {BookmarkSVG} from "./svgs/BookmarkSVG";

export const GBCardFive = ({ bookmark, time, title, img }) => {
    return (
        <div className="component-to-copy gb-card-five-wrapper">
            <ul className='gb-card-five-cards'>
                <li className='gb-card-five-card'>
                    <div className='gb-card-five-card-icon'>
                        <BookmarkSVG classes="gb-card-five-card-bookmark-icon"/>
                    </div>
                    <div className='gb-card-five-card-content'>
                        <div className='gb-card-five-card-title-time'>
                            <h3 className="gb-title-tiny gb-text-red gb-text-capitalize">{bookmark}</h3>
                            <p className="gb-subtitle-small gb-text-dark-blue">{time}</p>
                        </div>
                        <div className='article-title'>
                            <h4 className="gb-title-medium">{title}</h4>
                        </div>
                    </div>
                    <div className='gb-card-five-wrapper-article-image'>
                        <img src={img} alt='article-image'/>
                    </div>
                </li>
            </ul>
        </div>
    );
};