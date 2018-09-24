import React from 'react';
import '../style/gb-style.css';

export const CardTwo = () => {
  return (
      
<div className="gb-card-two-wrapper">
    <h2 className="gb-title-xx-large gb-text-uppercase">SCIENCE CHANNEL</h2>
    <input className="gb-btn gb-btn-small gb-btn-white" value="following" type="button"/>

    <div className="gb-avatars">
      <h4 className="gb-title-tiny">234k Followers</h4>
      <ul className="gb-avatars-list">
        <li className="gb-avatar-small">
          <a href="www.globuzzer.com">
            <img src={require('../images/follower1.jpg')} alt="follower"/>
          </a>
        </li>
        <li className="gb-avatar-small">
          <a href="www.globuzzer.com">
          <img src={require('../images/follower1.jpg')} alt="follower"/>
          </a>
        </li>
        <li className="gb-avatar-small">
          <a href="www.globuzzer.com">
          <img src={require('../images/follower1.jpg')} alt="follower"/>
          </a>
        </li>
        <li className="gb-avatar-small">
          <a href="www.globuzzer.com">
          <img src={require('../images/follower1.jpg')} alt="follower"/>
          </a>
        </li>
        <li className="gb-avatar-small">
          <a href="www.globuzzer.com">
          <img src={require('../images/follower1.jpg')} alt="follower"/>
          </a>
        </li>
      </ul>
    </div>
  </div>


);
};

