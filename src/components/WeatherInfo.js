// @flow;
import React, { Component } from 'react';
import axios from 'axios';

class WeatherInfo extends Component {
  constructor(props: {}) {
    super(props);
    this.state = { userInfo: {} };
  }

  componentWillMount() {
    // const zip: number = 85142;
    // const api: string = 'cebe11b709d7997fb9e3ced5d768b27d';
    // let description: string;
    let userInfo: {
      city: string,
      state: string,
      countryCode: string,
      ip: string,
      zip: number,
      lattitude: string,
      longitude: string,
    };
    axios
      .get('http://ip-api.com/json')
      .then((resp) => {
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
      .catch(err => console.error(Error(err)));
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            city: {this.state.userInfo.city}
          </li>
          <li>
            state: {this.state.userInfo.state}
          </li>
          <li>
            Country: {this.state.userInfo.countryCode}
          </li>
          <li>
            IP Address: {this.state.userInfo.ip}
          </li>
          <li>
            Lattitude: {this.state.userInfo.lat}
          </li>
          <li>
            Longitude: {this.state.userInfo.lon}
          </li>
          <li>
            Zip Code: {this.state.userInfo.zip}
          </li>
        </ul>
      </div>
    );
  }
}

export default WeatherInfo;
