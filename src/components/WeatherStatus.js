import React from 'react';
import { Panel } from 'react-bootstrap';
import type { WSProps } from '../flow-types';

const title = <h1 className="panel-title">Status</h1>;
const WeatherStatus = (props: WSProps) =>
  (<div className="weather-status-container" style={{ position: 'relative', top: '50px' }}>
    <Panel header={title} className="status-panel" bsStyle="success">
      <p className="panel-content">
        {props.desc}
      </p>
    </Panel>
  </div>);

export default WeatherStatus;
