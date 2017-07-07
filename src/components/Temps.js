import React from 'react';
import { Panel } from 'react-bootstrap';
import type { TempsProps } from '../flow-types';

const kelvinTitle = <h1>Kelvin</h1>;
const FahrTitle = <h1>Fahrenheit</h1>;
const CelcTitle = <h1>Celcius</h1>;

const convertTemp = (temp: number, desOutput: string) => {
  if (desOutput === 'c') {
    return (temp - 273.15).toFixed(1);
  }
  let f = temp * 9;
  f /= 5;
  f -= 459.67;
  return f.toFixed(1);
};

const Temps = (props: TempsProps) => {
  const styles = {
    fontFamily: 'Roboto',
    fontSize: '2rem',
    width: '80%',
    background: 'rgba(255, 255, 255, .2)',
  };
  return (
    <div
      className="temps-container"
      style={{
        textAlign: 'center',
        width: '40%',
      }}
    >
      <Panel bsStyle="danger" header={kelvinTitle} style={styles}>
        <div>
          {props.tempInK}&#x002DA;
        </div>
      </Panel>
      <Panel bsStyle="danger" style={styles} header={FahrTitle}>
        <div>
          {convertTemp(props.tempInK, 'f')}&#x002DA;
        </div>
      </Panel>
      <Panel bsStyle="danger" style={styles} header={CelcTitle}>
        <div>
          {convertTemp(props.tempInK, 'c')}&#x002DA;
        </div>
      </Panel>
    </div>
  );
};

export default Temps;
