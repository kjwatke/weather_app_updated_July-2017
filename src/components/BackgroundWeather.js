/* @flow*/
import React from 'react';
import axios from 'axios';

// The sole purpose of this component is to choose what image to render
// to the Main component. It is entirely dependent on the weather prop passed
// in.
// const BackgroundWeather = (props) => {
//   let imgSrc: string;

//   switch (props.weather.status) {
//   case 'raining':
//     imgSrc = 'string';
//     break;
//   case 'snowing':
//     imgSrc = 'img/snowy.png';
//     break;
//   case 'clear sky':
//     imgSrc = 'all clear';
//     break;
//   case 'overcast':
//     imgSrc = 'img/overcast.jpg';
//     break;
//   default:
//     imgSrc = 'no weather';
//     break;
//   }
//

// };

import type { Props, WeatherState, WeatherAPIData } from '../flow-types';

export default class extends React.Component {
  state: WeatherState;
  state = {
    userInfo: this.props.userInfo,
    weather: {
      tempInKelvin: 0,
      humidity: 0,
      pressure: 0,
      description: '',
      windSpeed: 0,
    },
  };

  componentWillReceiveProps(props: Props) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather';
    const KEY = 'cebe11b709d7997fb9e3ced5d768b27d';
    axios
      .get(`${URL}?q=${props.userInfo.city}&APPID=${KEY}`)
      .then((resp: WeatherAPIData) => {
        this.setState({
          userInfo: props.userInfo,
          weather: {
            tempInKelvin: resp.data.main.temp,
            humidity: resp.data.main.humidity,
            pressure: resp.data.main.pressure,
            description: resp.data.weather[0].description,
            windSpeed: resp.data.wind.speed,
          },
        });
      })
      .catch((err: Error) => err);
  }

  props: Props;
  imgSrc: string;

  render() {
    return (
      <div
        style={{
          background: `url(${this.imgSrc})`,
          width: '100%',
          height: '100vh',
        }}
      >
        content...
      </div>
    );
  }
}
