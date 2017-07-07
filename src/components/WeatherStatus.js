import React from 'react';
import { Panel } from 'react-bootstrap';
import type { WSProps } from '../flow-types';

const title = <h1>Status</h1>;
const WeatherStatus = (props: WSProps) =>
  (<div className="weather-status-container" style={{ position: 'relative', top: '50px' }}>
    <Panel header={title} className="status-panel" bsStyle="primary">
      {props.desc}
    </Panel>
  </div>);

export default WeatherStatus;
