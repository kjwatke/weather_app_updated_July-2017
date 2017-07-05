// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { PageHeader } from 'react-bootstrap';

// Import BackgroundWeather component.
import BackgroundWeather from './BackgroundWeather';

type UserInfo = {
  city: string,
  state: string,
  countryCode: string,
  ip: string,
  zip: number,
  lattitude: string,
  longitude: string,
};

type IpInfo = {
  data: {
    city: string,
    state: string,
    countryCode: string,
    query: string,
    zip: number,
    lat: string,
    lon: string,
  },
};

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
        <BackgroundWeather weather={{ status: 'snowing' }} style={{ background: 'red' }} />
      </div>
    );
  }
}

export default Main;
