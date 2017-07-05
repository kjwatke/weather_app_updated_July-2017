// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Import components.
import Header from './components/Header';
import Footer from './components/Footer';

// Import flow types.
import type { UserInfo, IpAPIReturn } from './types';

type State = {
  userInfo: UserInfo,
};

class App extends Component<{}, {}, State> {
  static defaultProps = {};
  state = {
    userInfo: {
      city: '',
      state: '',
      countryCode: '',
      zip: 99999,
      lat: '',
      lon: '',
    },
  };

  componentWillMount() {
    return axios
      .get('http://ip-api.com/json')
      .then((resp: IpAPIReturn) => {
        console.log(resp.data);
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
        <main style={{ marginTop: '100px', marginLeft: '50px' }}>
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
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
