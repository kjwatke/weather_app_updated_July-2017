import React from 'react';
import type { WSProps } from '../flow-types';

// const title = <h1>Status</h1>;
const WeatherStatus = ({ desc }: WSProps) =>
  (<div className="weather-status-container" style={{ position: 'relative', top: '50px' }}>
    {/* <Panel header={title} className="status-panel" bsStyle="success">
      <p className="panel-content">
        {props.desc}
      </p>
    </Panel> */}

    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title center">
              <h2>Weather Status</h2>
            </span>
            <p>
              <h3
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  bottom: '1rem',
                  left: '.5rem',
                }}
              >
                Current Status: {desc}
              </h3>
              <img className="weather-icon" src="img/animated/cloudy.svg" alt="weather icon" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>);

export default WeatherStatus;
