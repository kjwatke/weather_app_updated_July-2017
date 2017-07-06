/* @flow*/
import React, { Component } from 'react';
import axios from 'axios';
import type {
  Props,
  WeatherState,
  WeatherAPIData,
  Descriptions,
  Thunderstorms,
  Rains,
  Drizzles,
  Snows,
  Atmospheres,
  HeavyClouds,
} from '../flow-types';
import descriptions from '../descriptions';

// The sole purpose of this component is to choose what image to render
// to the Main component. It is entirely dependent on the weather prop passed
// in.

export default class extends Component {
  state: WeatherState = {
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

  componentWillUpdate(a: Props, b: WeatherState) {
    if (b.weather.description) {
      switch (b.weather.description) {
      case 'clear sky':
        this.imgSrc = 'img/snowy.png';
        break;
      default:
        this.imgSrc = 'overcast.png';
        break;
      }
    }
  }

  descriptions: Descriptions = descriptions;
  thunderstorms: Thunderstorms = this.descriptions.thunderstorms;
  drizzles: Drizzles = this.descriptions.drizzles;
  rains: Rains = this.descriptions.rains;
  snows: Snows = this.descriptions.snows;
  atmospheres: Atmospheres = this.descriptions.atmospheres;
  heavyClouds: HeavyClouds = this.descriptions.heavyClouds;
  props: Props;
  imgSrc: string;

  render() {
    return (
      <div>
        BackgroundWeather content...
        <img
          src={this.imgSrc}
          alt="test"
          style={{
            width: '500px',
          }}
        />
      </div>
    );
  }
}
