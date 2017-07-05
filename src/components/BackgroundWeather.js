/* @flow*/
import React from 'react';

// The sole purpose of this component is to choose what image to render
// to the Main component. It is entirely dependent on the weather prop passed
// in.
// TODO: Remove this line. Props = {user: UserInfo...}
const BackgroundWeather = (props) => {
  let imgSrc: string;

  switch (props.weather.status) {
  case 'raining':
    imgSrc = 'string';
    break;
  case 'snowing':
    imgSrc = 'img/snowy.png';
    break;
  case 'clear sky':
    imgSrc = 'all clear';
    break;
  case 'overcast':
    imgSrc = 'img/overcast.jpg';
    break;
  default:
    imgSrc = 'no weather';
    break;
  }

  return (
    <div>
      <div
        style={{
          background: `url(${imgSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
          height: '60vh',
          margin: '0 auto',
          opacity: '.7',
        }}
      />
    </div>
  );
};

export default BackgroundWeather;
