import React from "react";
import { Twitter , Instagram , Facebook } from '../svgs/svgs'

export const GbFooter = ({links}) => (
  <div className="gb-footer gb-background-black-opacity-5">
    <div className="footer-wrapper">
      <ul className="footer-nav">
        {links.map((el,idx)=>(
          <li key={idx} className="footer-nav-item">
            <a className="gb-text-black-opacity-30 gb-subtitle-medium" href={el.link}>
              <b>{el.txt}</b>
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-social-media-list">
      <li className="footer-social-media-item">
        <a href="#">
          <Facebook myClases='gb-icon-fill-black-opacity-30 gb-icon-small'/>
        </a>
      </li>
      <li className="footer-social-media-item">
        <a href="#">
          <Instagram myClases='gb-icon-fill-black-opacity-30 gb-icon-small'/>
        </a>
      </li>
      <li className="footer-social-media-item">
        <a href="#">
          <Twitter myClases='gb-icon-fill-black-opacity-30 gb-icon-small'/>
        </a>
      </li>
      </ul>
      <div className="footer-rights-reserved">
        <p className="gb-label gb-text-black-opacity-30">
          © 2018 All rights reserved.
        </p>
      </div>
    </div>
  </div>
); 


