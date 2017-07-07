import React from 'react';
import type { TempsProps } from '../flow-types';

const Temps = (props: TempsProps) =>
  (<div className="temps-container">
    <h1>
      Temp...{props.tempInK}
    </h1>
  </div>);
export default Temps;
