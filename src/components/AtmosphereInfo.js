import React from 'react';
import { Panel } from 'react-bootstrap';
import type { AtmosphereInfoProps } from '../flow-types';

const AtmosphereInfo = (props: AtmosphereInfoProps) =>
  (<div className="atmosphere-info-container">
    <Panel className="atmosphere-panel" header={<h1 className="panel-title">Air Pressure</h1>}>
      <p>
        {props.pressure} hPa
      </p>
    </Panel>
    <Panel className="atmosphere-panel" header={<h1 className="panel-title">Humidity</h1>}>
      <p>
        {props.humidity}&#x00025;
      </p>
    </Panel>
    <Panel className="atmosphere-panel" header={<h1 className="panel-title">Wind Speed</h1>}>
      <p>
        {props.windSpeed} m/s
      </p>
    </Panel>
  </div>);
export default AtmosphereInfo;