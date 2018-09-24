import React from "react";
import { Source, Clock } from "../svgs/svgs";

export const GbCardLabel = ({ iconColor, txtColor , source , time , category}) => (
  <div className="gb-card-label">
    <SourceLabel iconColor={iconColor} txtColor={txtColor} source={source}/>
    <ClockLabel iconColor={iconColor} txtColor={txtColor} time={time}/>
    <CategoryLabel iconColor={iconColor} txtColor={txtColor} category={category}/>
  </div>
);

const SourceLabel = ({ iconColor, txtColor , source }) => (
  <div className="card-label-item">
    <Source myClases={`gb-label-icon gb-icon-small ${iconColor}`} />
    <a href="#" className={`${txtColor} gb-label`}>
      {source}
    </a>
  </div>
);

const ClockLabel = ({ iconColor, txtColor , time}) => (
  <div className="card-label-item">
    <Clock myClases={`gb-label-icon gb-icon-small ${iconColor}`} />
    <p className={`${txtColor} gb-label`}>{time}</p>
  </div>
);

const CategoryLabel = ({ txtColor , category}) => (
  <div className="card-label-item gb-grow-one">
    <a href="#" className={`${txtColor} gb-label gb-underline`}>
      {category}
    </a>
  </div>
);
