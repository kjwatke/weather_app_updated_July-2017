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

  componentWillUpdate(nextProps: Props, nextState: WeatherState) {
    if (nextState.weather.description) {
      if (this.thunderstorms.includes(nextState.weather.description)) {
        this.imgSrc = 'img/tstorm.jpg';
      } else if (this.drizzles.includes(nextState.weather.description)) {
        this.imgSrc = 'img/drizzle.jpg';
      } else if (this.rains.includes(nextState.weather.description)) {
        this.imgSrc = 'img/rain.jpg';
      } else if (this.snows.includes(nextState.weather.description)) {
        this.imgSrc = 'img/snow.jpg';
      } else if (this.atmospheres.includes(nextState.weather.description)) {
        this.imgSrc = 'img/atmosphere.jpg';
      } else if (this.heavyClouds.includes(nextState.weather.description)) {
        this.imgSrc = 'img/overcast.jpg';
      } else {
        this.imgSrc = 'img/clear_skies.jpg';
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
      <div
        className="bg-img-wrapper-div"
        style={{
          backgroundImage: `url(${this.imgSrc})`,
        }}
      />
    );
  }
}
