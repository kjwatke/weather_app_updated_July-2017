// @flow;
import React, { Component } from 'react';
import axios from 'axios';

interface UserInfo {
  city: string,
  state: string,
  countryCode: string,
  ip: string,
  zip: number,
  lattitude: string,
  longitude: string,
}

class WeatherInfo extends Component {
  constructor(props: {}) {
    super(props);
    this.state = { userInfo: {} };
  }

  componentWillMount() {
    let userInfo: UserInfo;
    axios
      .get('http://ip-api.com/json')
      .then((resp: {}): Promise => {
        userInfo = {
          city: resp.data.city,
          state: resp.data.region,
          countryCode: resp.data.countryCode,
          ip: resp.data.query,
          lat: resp.data.lat,
          lon: resp.data.lon,
          zip: resp.data.zip,
        };
        this.setState({ userInfo });
      })
      .catch(err => Error(err));
  }

  render() {
    return (
      <div>
        <h1>Something goes here....</h1>
      </div>
    );
  }
}

export default WeatherInfo;
