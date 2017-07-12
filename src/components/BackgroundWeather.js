/* @flow*/
import React, { Component } from 'react';
import axios from 'axios';
import type { Props, WeatherState, WeatherAPIData } from '../flow-types';
import Temps from './Temps';
import WeatherStatus from './WeatherStatus';
import AtmosphereInfo from './AtmosphereInfo';
import LocationInfo from './LocationInfo';
import {
  checkThunderstorms,
  checkRains,
  checkDrizzles,
  checkSnows,
  checkAtmospheres,
  checkHeavyClouds,
} from '../checkWeatherDesc';

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

  // Get data from OpenWeatherAPI and add it to state.weather object;
  componentWillReceiveProps(props: Props) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather';
    const KEY = 'cebe11b709d7997fb9e3ced5d768b27d';
    axios
      .get(`${URL}?lat=${props.userInfo.lat}&lon=${props.userInfo.lon}&APPID=${KEY}`)
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

  // Choose which image to set as the background. Relies upon description
  // from OpenWeatherAPI.
  componentWillUpdate(nextProps: Props, nextState: WeatherState) {
    const desc = nextState.weather.description;
    if (desc) {
      if (checkThunderstorms(desc)) {
        this.imgSrc = 'img/tstorm.jpg';
      } else if (checkDrizzles(desc)) {
        this.imgSrc = 'img/drizzle/jpg';
      } else if (checkRains(desc)) {
        this.imgSrc = 'img/rain.jpg';
      } else if (checkSnows(desc)) {
        this.imgSrc = 'img/snow.jpg';
      } else if (checkAtmospheres(desc)) {
        this.imgSrc = 'img/atmosphere.jpg';
      } else if (checkHeavyClouds(desc)) {
        this.imgSrc = 'img/overcast.jpg';
      } else {
        this.imgSrc = 'img/clear_skies.jpg';
      }
    }
  }

  props: Props;
  imgSrc: string;

  render() {
    return (
      <div className="flex-container">
        <WeatherStatus desc={this.state.weather.description} img={this.imgSrc} />
        <Temps tempInK={this.state.weather.tempInKelvin} />
        <AtmosphereInfo
          pressure={this.state.weather.pressure}
          windSpeed={this.state.weather.windSpeed}
          humidity={this.state.weather.humidity}
        />
        <LocationInfo
          city={this.state.userInfo.city}
          country={this.state.userInfo.countryCode}
          lat={this.state.userInfo.lat}
          lon={this.state.userInfo.lon}
        />
      </div>
    );
  }
}
