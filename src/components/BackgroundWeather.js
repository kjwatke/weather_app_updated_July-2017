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
//   return (
//     <div>
//       <div
//         style={{
//           background: `url(${imgSrc})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center center',
//           width: '100%',
//           height: '60vh',
//           margin: '0 auto',
//           opacity: '.7',
//         }}
//       />
//     </div>
//   );
// };

import type { Props, WeatherState } from '../flow-types';

// const API: string = 'http://api.openweathermap.org/data/2.5/weather';
// const KEY: string = 'cebe11b709d7997fb9e3ced5d768b27d';

export default class extends React.Component {
  state: WeatherState;
  state = {
    userInfo: this.props.userInfo,
    weather: {},
  };

  componentWillReceiveProps(props: Props) {
    this.setState({
      userInfo: props.userInfo,
      weather: {},
    });
  }

  componentDidUpdate() {
    const KEY: string = 'cebe11b709d7997fb9e3ced5d768b27d';
    const API: string = 'http://api.openweathermap.org/data/2.5/weather';
    const URL: string = `${API}?q=${this.state.userInfo.city}&APPID=${KEY}`;

    axios
      .get(URL)
      .then((resp) => {
        console.log('resp: ', resp);
      })
      .catch((err: Error) => err);
  }

  props: Props;

  render() {
    return (
      <div>
        backgroundWeather component:
        <ul>
          <li>
            CITY: {this.state.userInfo.city}
          </li>
          <li>
            STATE: {this.state.userInfo.state}
          </li>
          <li>
            COUNTRY: {this.state.userInfo.countryCode}
          </li>
          <li>
            ZIP: {this.state.userInfo.zip}
          </li>
          <li>
            LAT: {this.state.userInfo.lat}
          </li>
          <li>
            LON: {this.state.userInfo.lon}
          </li>
        </ul>
      </div>
    );
  }
}
