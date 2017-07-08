import React from 'react';
import type { WSProps } from '../flow-types';

// const title = <h1>Status</h1>;
const WeatherStatus = (props: WSProps) =>
  (<div className="weather-status-container" style={{ position: 'relative', top: '50px' }}>
    {/* <Panel header={title} className="status-panel" bsStyle="success">
      <p className="panel-content">
        {props.desc}
      </p>
    </Panel> */}
    {props.desc}
  </div>);

export default WeatherStatus;
