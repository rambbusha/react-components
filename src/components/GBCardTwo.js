import React from 'react';

const Follower = ({ image }) => {
  return (
      <li className='gb-avatar-small'>
          <a href='#'>
              <img src={image} alt='follower'/>
          </a>
      </li>
  );
};

export const GBCardTwo = ({ channelName, numFollowers, followers }) => {
    return (
        <div className='component-to-copy gb-card-two-wrapper'>
            <h2 className='gb-title-xx-large gb-text-uppercase'>{channelName}</h2>
            <input className="gb-btn gb-btn-small gb-btn-white" type='button' value='following'/>

                <div className='gb-avatars'>
                    <h4 className="gb-title-tiny">{numFollowers} Followers</h4>
                    <ul className='gb-avatars-list'>
                        {followers.map((item) => {
                            return(
                                <Follower image={item.img}/>
                            );
                        })}
                    </ul>
                </div>
        </div>
    );
};