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
  //           {getTemp(tempInK, 'c')}&#x002DA; C
  (<div className="card weather-temp-card">
    <div className="card-title center">
      <h2>
        Current Temperature{' '}
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
      <ul className="collection center red-text">
        <li className="collection-item">
          {getTemp(tempInK)}&#x002DA; K
        </li>
        <li className="collection-item">
          {getTemp(tempInK, 'f')}&#x002DA; F
        </li>
        <li className="collection-item">
          {getTemp(tempInK, 'c')}&#x002DA; C
        </li>
      </ul>
    </div>
  </div>);

export default Temps;
