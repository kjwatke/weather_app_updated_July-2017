/* @flow*/
import React from 'react';

// Import types.
// import type { UserInfo } from '../types';
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

import type { Props, State } from '../flow-types';

export default class BackgroundWeather extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInfo: props.userInfo,
      weather: {},
    };
  }

  state: State;
  props: Props;
  render() {
    return (
      <div>
        backgroundWeather component:
        <ul>
          <li>
            CITY: {this.props.userInfo.city}
          </li>
          <li>
            STATE: {this.props.userInfo.state}
          </li>
          <li>
            COUNTRY: {this.props.userInfo.countryCode}
          </li>
          <li>
            ZIP: {this.props.userInfo.zip}
          </li>
          <li>
            LAT: {this.props.userInfo.lat}
          </li>
          <li>
            LON: {this.props.userInfo.lon}
          </li>
        </ul>
      </div>
    );
  }
}
