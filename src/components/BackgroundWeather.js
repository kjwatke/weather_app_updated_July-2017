// @flow
import React from 'react';

// Import WeatherInfo component.
import WeatherInfo from './WeatherInfo';

const BackgroundWeather = (props: { weather: { status: string } }) => {
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
      >
        <WeatherInfo />
      </div>
    </div>
  );
};

export default BackgroundWeather;
