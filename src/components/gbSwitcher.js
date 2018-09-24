import React from 'react';

export const GbSwitcher = ({myClases}) => (
    <label className={`gb-switcher ${myClases}`}>
        <input className="gb-swithcer-checkbox" type="checkbox" />
        <div className="gb-switcher-slider"></div>
    </label>
)