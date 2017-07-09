import React from 'react';
import type { WSProps } from '../flow-types';

// TODO: Add logic to determine the correct animated icon to return here.
const getWeatherIcon = (): string => 'img/animated/cloudy-day-1.svg';
const WeatherStatus = ({ desc, img }: WSProps) =>
  (<div className="card weather-status-card">
    <div className="card-image">
      <img src={img} alt="animated weather icon" />
      <span className="card-title">Current Weather</span>
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
    <div className="card-action center">
      {desc}
    </div>
  </div>);

export default WeatherStatus;
