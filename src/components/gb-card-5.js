import React from 'react';
import {BookmarkSVG} from './svgs/BookmarkSVG';

import '../style/gb-style.css';

export const CardFive = () => {
  return (
     
      <div className="gb-card-five-wrapper">
    <ul className="gb-card-five-cards">
      <li className="gb-card-five-card">
        <div className="gb-card-five-card-icon">
          <BookmarkSVG classes="gb-card-five-card-bookmark-icon"/>
        </div>
        <div className="gb-card-five-card-content">
          <div className="gb-card-five-card-title-time">
            <h3 className="gb-title-tiny gb-text-red gb-text-capitalize">BOOKMARKED</h3>
            <p className="gb-subtitle-small gb-text-dark-blue">9:34am</p>
          </div>
          <div className="article-title">
            <h4 className="gb-title-medium">NASA goes to Mars: Astronauts could land on Red Planet by 2039</h4>
          </div>
        </div>
        <div className="gb-card-five-wrapper-article-image">
          <img src={require("../images/article-img.jpg")} alt="article"/>
        </div>
      </li>
    </ul>
  </div>

);
};

