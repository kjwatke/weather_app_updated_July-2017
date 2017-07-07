import React from 'react';
import { Panel } from 'react-bootstrap';
import type { TempsProps } from '../flow-types';

const kelvinTitle = <h1 className="panel-title">Kelvin</h1>;
const FahrTitle = <h1 className="panel-title">Fahrenheit</h1>;
const CelcTitle = <h1 className="panel-title">Celcius</h1>;

const convertTemp = (temp: number, desOutput: string) => {
  if (desOutput === 'c') {
    return (temp - 273.15).toFixed(1);
  }
  let f = temp * 9;
  f /= 5;
  f -= 459.67;
  return f.toFixed(1);
};

const Temps = (props: TempsProps) =>
  (<div className="temps-container">
    <Panel bsStyle="danger" className="temp-panel" header={kelvinTitle}>
      <div>
        {props.tempInK}&#x002DA;
      </div>
    </Panel>
    <Panel bsStyle="danger" className="temp-panel" header={FahrTitle}>
      <div>
        {convertTemp(props.tempInK, 'f')}&#x002DA;
      </div>
    </Panel>
    <Panel bsStyle="danger" className="temp-panel" header={CelcTitle}>
      <div>
        {convertTemp(props.tempInK, 'c')}&#x002DA;
      </div>
    </Panel>
  </div>);

export default Temps;
