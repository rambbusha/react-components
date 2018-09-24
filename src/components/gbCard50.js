import React from "react";
import { GbCardLabel } from "./gbCardLabel";

export const GbCard50 = ({ background, type , source , postedTime , category }) => (
  <div
    className={`gb-card-12 ${
      type == "half-left" ? "gb-card-12-image-left" : "gb-card-12-image-right"
    } ${type == "full" ? "gb-card-12-full-desktop" : ""}`}
  >
    <div
      className="card-image gb-phone-hide"
      style={{ backgroundImage: `url(${background})` }}
    />
    <div className="text-content">
      <h1
        className={`card-title gb-text-black gb-title-medium ${
          type === "full" ? "gb-desktop-text-white gb-desktop-title-large" : ""
        }`}
      >
        Arctic sea ice extent hits record low for winter maximum
      </h1>
      <GbCardLabel
        txtColor={`gb-text-black ${
          type === "full" ? "gb-desktop-text-white" : ""
        }`}
        iconColor={`gb-icon-black-opacity-30 ${
          type === "full" ? "gb-desktop-icon-white-opacity-50" : ""
        }`}
        source={source}
        time={postedTime}
        category={category}
      />
    </div>
  </div>
);
