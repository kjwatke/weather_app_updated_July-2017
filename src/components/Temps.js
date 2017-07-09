/* @flow*/
import React from 'react';
import type { TempsProps } from '../flow-types';

const getTemp = (temp: number, desOutput: string = 'k'): number => {
  if (desOutput === 'c') {
    return Math.floor(temp - 273.15);
  } else if (desOutput === 'f') {
    let f = temp * 9;
    f /= 5;
    f -= 459.67;
    return Math.floor(f);
  }
  return Math.floor(temp);
};

const Temps = ({ tempInK }: TempsProps) =>
  (<div className="card weather-temp-card z-depth-5">
    <div className="card-title center">
      <h2>
        Current Temperature
        <span>
          <img
            style={{ width: '25px', position: 'relative', top: '5px' }}
            src="img/thermometer.svg"
            alt="thermometer icon"
          />
        </span>
      </h2>
    </div>
    <div className="card-content">
      <div className="card-action center red-text">
        Kelvin: {getTemp(tempInK)}&#x002DA;
      </div>
      <div className="card-action center red-text">
        Fahrenheit: {getTemp(tempInK, 'f')}&#x002DA;
      </div>
      <div className="card-action center red-text">
        Celcius: {getTemp(tempInK, 'c')}&#x002DA;
      </div>
    </div>
  </div>);

export default Temps;
