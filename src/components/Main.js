// @flow
import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

// Import BackgroundWeather component.
import BackgroundWeather from './BackgroundWeather';

class Main extends Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{
            fontSize: '30px',
            marginTop: '100px',
          }}
        >
          <small>FreeCodeCamp</small> Weather App
        </PageHeader>
        <BackgroundWeather weather={{ status: 'overcast' }} style={{ background: 'red' }} />
      </div>
    );
  }
}

export default Main;
