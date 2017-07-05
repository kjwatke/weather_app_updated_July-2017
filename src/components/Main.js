// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { PageHeader } from 'react-bootstrap';

// Import BackgroundWeather component.
import BackgroundWeather from './BackgroundWeather';
import WeatherInfo from './WeatherInfo';

// Import types.
import type { UserInfo, IpInfo } from '../types';

class Main extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInfo: {
        city: '',
        state: '',
        countryCode: '',
        ip: '',
        zip: 99999,
        lattitude: '',
        longitude: '',
      },
    };
  }

  state: {
    userInfo: UserInfo,
  };

  componentWillMount(): void {
    axios
      .get('http://ip-api.com/json')
      .then((resp: IpInfo) => {
        const userInfo = {
          city: resp.data.city,
          state: resp.data.state,
          countryCode: resp.data.countryCode,
          ip: resp.data.query,
          zip: resp.data.zip,
          lattitude: resp.data.lat,
          longitude: resp.data.lon,
        };
        this.setState({ userInfo });
      })
      .catch((err: Error | null) => err);
  }

  render() {
    return (
      <div>
        <PageHeader
          style={{
            fontSize: '40px',
          }}
        >
          <small>FreeCodeCamp</small> Weather App
        </PageHeader>
        <BackgroundWeather
          weather={{ status: 'snowing' }}
          user={this.state.userInfo}
          style={{ background: 'red' }}
        />
      </div>
    );
  }
}

export default Main;
