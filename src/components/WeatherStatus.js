import React from 'react';
import type { WSProps } from '../flow-types';

// const title = <h1>Status</h1>;
const WeatherStatus = ({ desc }: WSProps) =>
  (<div className="weather-status-container" style={{ position: 'relative', top: '50px' }}>
    <div className="row">
      <div className="col s12 m6">
        <div className="card transparent darken-1 z-depth-5">
          <div className="card-content white-text">
            <span className="card-title center">
              <h2
                style={{
                  boxShadow: '2px 8px 6px -6px #1565c0',
                  width: '60%',
                  margin: '0 auto',
                }}
              >
                Weather Status
              </h2>
            </span>
            <p>
              <h3
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  bottom: '.5rem',
                  left: '2rem',
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {desc}
              </h3>
              <img className="weather-icon" src="img/animated/cloudy.svg" alt="weather icon" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default WeatherStatus;
