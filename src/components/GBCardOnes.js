import React from 'react';

const GBCardOnesLi = ({ backgroundImg, category, numFollowers }) => {
    return (
        <li className="gb-card-one-image gb-card-one-image-fashion" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="gb-card-one-info">
                <p className="gb-phone-title-tiny gb-title-large">{category}</p>
                <div className="gb-card-one-btn-wrapper">
                    <input className="gb-btn gb-btn-small gb-btn-white" type='button' value='following'/>
                </div>

            </div>

            <div className="gb-card-one-avatars-wrapper">
                <div className="gb-title-small">
                    <p>{numFollowers} followers</p>
                </div>
                <div className="gb-card-one-follower-avatar">
                    <div className="gb-card-one-avatars-container">
                        <img src="../images/profile.jpg" alt="avatar" className="gb-avatar gb-avatar-small"/>
                        <img src="../images/profile.jpg" alt="avatar" className="gb-avatar gb-avatar-small"/>
                        <img src="../images/profile.jpg" alt="avatar" className="gb-avatar gb-avatar-small"/>
                        <img src="../images/profile.jpg" alt="avatar"
                             className="gb-avatar gb-avatar-small"/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export const GBCardOnes = ({ cards }) => {
    return (
        <div className="component-to-copy gb-card-one-wrapper">
            <ul className="gb-card-one">
                {cards.map((item) => {
                    return (
                        <GBCardOnesLi category={item.category} backgroundImg={item.background} followers={item.numFollowers}/>
                    );
                })}
            </ul>
        </div>
    );
};