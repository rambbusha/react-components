import React from 'react';

import '../style/gb-style.css';

export const CardOne = () => {
  return (
      <div className="gb-card-one-wrapper">
      <ul className="gb-card-one">
        <li className="gb-card-one-image gb-card-one-image-fashion">
          <div className="gb-card-one-info">
            <p className="gb-phone-title-tiny gb-title-large">Science</p>
            <div className="gb-card-one-btn-wrapper">
              <input className="gb-btn gb-btn-small gb-btn-white" value="following" type="button" /> </div>
  
          </div>
  
          <div className="gb-card-one-avatars-wrapper">
            <div className="gb-title-small">
              <p> followers</p>
            </div>
            <div className="gb-card-one-follower-avatar">
              <div className="gb-card-one-avatars-container">
              <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
                <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
                <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
                <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
              </div>
            </div>
          </div>
        </li>
        <li className="gb-card-one-image gb-card-one-image-fashion">
          <div className="gb-card-one-info">
            <p className="gb-phone-title-tiny gb-title-large">Science</p>
            <div className="gb-card-one-btn-wrapper">
              <input className="gb-btn gb-btn-small gb-btn-white" value="following" type="button" /> </div>
          </div>
          <div className="gb-card-one-avatars-wrapper">
            <div className="gb-title-small">
              <p> followers</p>
            </div>
            <div className="gb-card-one-follower-avatar">
              <div className="gb-card-one-avatars-container">
              <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
                <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
                <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
                <img src= {require("../images/profile.jpg")} alt="avatar" className="gb-avatar gb-avatar-small" />
              </div>
            </div>
          </div>
        </li>
  
  
      </ul>
    </div>

);
};

