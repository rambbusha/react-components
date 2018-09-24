import React from 'react'
import {NavAsideLink} from './navAsideLink';
import PropTypes from 'prop-types';
import {Close} from '../svgs/svgs';

export const GbNavAside = ({links , userName, userImageUrl}) => (

    <div className="gb-nav-aside gb-gradient-red-black">
    <div className="nav-aside-image-background"></div>
    

    <div className="nav-aside-content">
      <div className="nav-aside-close">
        <Close myClases='nav-aside-close-icon gb-icon-medium gb-icon-white-opacity-50'/>
      </div>
      <ul className="nav-aside-content-top">
        {
					links.map((el,idx)=>(
						<NavAsideLink icon={el.icon} key={idx}>{el.txt}</NavAsideLink>
					))
				}
      </ul>
      <div className="nav-aside-content-bottom line-top">
        <div className="content-left">
          <a className="left-link gb-text-uppercase gb-text-white gb-title-tiny" href="#"><b>LOG OUT</b></a>
          <a href="#" className="left-link gb-label gb-text-white-opacity-50">{userName}</a>
        </div>
        <div className="content-right">
          <a className="profile-link" href="#">
            <img src={userImageUrl} alt='avatar' className='gb-avatar gb-avatar-medium'/>
          </a> 
        </div>
      </div>
    </div>
  </div>
)


GbNavAside.propTypes = {
  userName : PropTypes.string.isRequired,
  userImageUrl : PropTypes.string.isRequired,
  links : PropTypes.arrayOf(PropTypes.object).isRequired
}

/*
<li className="nav-aside-top-list-item">
            <a className="nav-aside-link gb-text-white" href="#">

              <h5 className="gb-text-uppercase gb-text-white gb-title-tiny">CHANNELS</h5>
            </a>
        </li>

<img className="gb-avatar gb-avatar-medium" src="../images/profile.jpg" alt="avatar">
        */