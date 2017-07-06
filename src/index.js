// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Import components.
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundWeather from './components/BackgroundWeather';

// Import flow types.
import type { UserInfo, IpAPIData, AppState } from './flow-types';

class App extends Component {
  state: AppState = {
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
    axios
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
          main content...
          <BackgroundWeather userInfo={this.state.userInfo} />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
