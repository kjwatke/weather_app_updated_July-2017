import React from 'react';
import type { WSProps } from '../flow-types';

// TODO: Add logic to determine the correct animated icon to return here.
const getWeatherIcon = (): string => 'img/animated/cloudy-day-1.svg';
const WeatherStatus = ({ desc, img }: WSProps) =>
  (<div className="card weather-status-card z-depth-5">
    <div className="card-image">
      <img src={img} alt="similar weather background" />
      <h2 className="card-title">Current Weather</h2>
    </div>
    <div className="card-content">
      <span
        className="weather-icon"
        alt="test weather icon"
        style={{
          background: `url(${getWeatherIcon()}) center center no-repeat`,
        }}
      />
    </div>
    <div className="card-action center weather-desc">
      <h4>
        {desc}
      </h4>
    </div>
  </div>);

export default WeatherStatus;
