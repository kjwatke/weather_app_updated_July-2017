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
      .get('https://ipapi.com/json')
      .then((resp: IpAPIData) => {
        console.log('resp: ', resp);
        const userData: UserInfo = {
          city: resp.city,
          state: resp.region,
          countryCode: resp.country,
          zip: resp.postal,
          lat: resp.latitude,
          lon: resp.longitude,
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
