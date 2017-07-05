// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Import components.
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundWeather from './components/BackgroundWeather';

// Import flow types.
import type { UserInfo, IpAPIData } from './flow-types';

class App extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInfo: {
        city: '',
        state: '',
        countryCode: '',
        zip: 99999,
        lat: '',
        lon: '',
      },
    };
  }

  state: {
    userInfo: UserInfo,
  };

  componentDidMount() {
    return axios
      .get('http://ip-api.com/json')
      .then((resp: IpAPIData) => {
        const userData: UserInfo = {
          city: resp.data.city,
          state: resp.data.region,
          countryCode: resp.data.countryCode,
          zip: resp.data.zip,
          lat: resp.data.lat,
          lon: resp.data.lon,
        };
        this.setState({ userInfo: userData });
      })
      .catch((err: Error) => err);
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <main className="content">
          city: {this.state.userInfo.city}
          <br />
          state: {this.state.userInfo.state}
          <br />
          Country: {this.state.userInfo.countryCode}
          <br />
          zip: {this.state.userInfo.zip}
          <br />
          lattitude: {this.state.userInfo.lat}
          <br />
          longitude: {this.state.userInfo.lon}
          <BackgroundWeather userInfo={this.state.userInfo} />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
