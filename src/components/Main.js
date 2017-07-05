// @flow
import React, { Component } from 'react';
import axios from 'axios';
// import { PageHeader } from 'react-bootstrap';

// Import BackgroundWeather component.
// import BackgroundWeather from './BackgroundWeather';

interface UserInfo {
  city: string,
  state: string,
  countryCode: string,
  ip: string,
  zip: number,
  lattitude: string,
  longitude: string,
}

interface IpInfo {
  data: {
    city: string,
    state: string,
    countryCode: string,
    query: string,
    zip: number,
    lat: string,
    lon: string,
  },
}

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
        {/* <BackgroundWeather weather={{ status: 'overcast' }} style={{ background: 'red' }} /> */}
        <p>
          City: {this.state.userInfo.city}
        </p>
        <p>
          State: {this.state.userInfo.state}
        </p>
        <p>
          Country Code: {this.state.userInfo.countryCode}
        </p>
        <p>
          IP: {this.state.userInfo.ip}
        </p>
        <p>
          Zip: {this.state.userInfo.zip}
        </p>
        <p>
          Lattitude: {this.state.userInfo.lattitude}, Longitude: {this.state.userInfo.longitude}
        </p>
      </div>
    );
  }
}

export default Main;
