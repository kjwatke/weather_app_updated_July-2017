/* @flow*/

import React from 'react';
import type { AtmosphereInfoProps } from '../flow-types';

const AtmosphereInfo = ({ windSpeed, pressure, humidity }: AtmosphereInfoProps) =>
  (<div className="card weather-atmosphere-card transparent z-depth-5">
    <h2 className="card-title center black-text">Atmosphere Info</h2>
    <div className="card-content center weather-desc">
      <div className="card-action transparent orange-text">
        Air Pressure: {pressure} hPa
      </div>
      <div className="card-action orange-text">
        Humidity: {humidity}&#x00025;
      </div>
      <div className="card-action transparent orange-text">
        Wind Speed: {windSpeed} m/s
      </div>
    </div>
  </div>);
export default AtmosphereInfo;
