/* @flow*/
export type UserInfo = {
  city: string,
  state: string,
  countryCode: string,
  zip: number,
  lat: string,
  lon: string,
};

export type WeatherInfo = {
  tempInKelvin: number,
  humidity: number,
  pressure: number,
  description: string,
  windSpeed: number,
};

export type WeatherState = {
  userInfo: UserInfo,
  weather: WeatherInfo,
};

export type Props = {
  userInfo: UserInfo,
};

export type IpAPIData = {
  data: {
    city: string,
    region: string,
    countryCode: string,
    zip: number,
    lat: string,
    lon: string,
  },
};

export type WeatherAPIData = {
  data: {
    main: {
      temp: number,
      pressure: number,
      humidity: number,
    },
    weather: [
      {
        description: string,
      },
    ],
    wind: {
      speed: number,
    },
  },
};
