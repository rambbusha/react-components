import React from 'react';

export const GBCard13 = ({ background, content }) => {
    return (
        <div className='component-to-copy gb-card-13'>
            <div className='image-background'>
                <img className='card-13-background-image' src={background}/>
                <div className='background-gradient gb-gradient-red-black'/>
            </div>
            <div className='card-13-content'>{content}</div>
        </div>
    );
};