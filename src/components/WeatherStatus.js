import React from 'react';
import {
  checkThunderstorms,
  checkDrizzles,
  checkRains,
  checkSnows,
  checkHeavyClouds,
} from '../checkWeatherDesc';
import type { WSProps } from '../flow-types';

const getWeatherIcon = (weatherDesc: string) => {
  if (weatherDesc) {
    if (checkThunderstorms(weatherDesc)) {
      return 'img/animated/thunder.svg';
    } else if (checkDrizzles(weatherDesc)) {
      return 'img/animated/rainy-1.svg';
    } else if (checkRains(weatherDesc)) {
      return 'img/animated/rainy-5.svg';
    } else if (checkSnows(weatherDesc)) {
      return 'img/animated/snowy-5.svg';
    } else if (checkHeavyClouds(weatherDesc)) {
      return 'img/animated/cloudy-day-1.svg';
    }
    return 'img/animated/day.svg';
  }
};
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
          background: `url(${getWeatherIcon(desc)}) center center no-repeat`,
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
