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
        console.log('resp: ', resp);
        const userData: UserInfo = {
          city: resp.data.city,
          state: resp.data.region,
          countryCode: resp.data.countryCode,
          zip: resp.data.postal,
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
        <BackgroundWeather userInfo={this.state.userInfo} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
