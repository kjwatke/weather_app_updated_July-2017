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

export type Thunderstorms = [
  'thunderstorm with light rain',
  'thunderstorm with rain',
  'thunderstorm with heavy rain',
  'light thunderstorm',
  'thunderstorm',
  'heavy thunderstorm',
  'ragged thunderstorm',
  'thunderstorm with light drizzle',
  'thunderstorm with drizzle',
  'thunderstorm with heavy drizzle',
];

export type Drizzles = [
  'light intensity drizzle',
  'drizzle',
  'heavy intensity drizzle',
  'light intensity drizzle rain',
  'drizzle rain',
  'heavy intensity drizzle rain',
  'shower rain and drizzle',
  'heavy shower rain and drizzle',
  'shower drizzle',
];

export type Rains = [
  'light rain',
  'moderate rain',
  'heavy intensity rain',
  'very heavy rain',
  'extreme rain',
  'freezing rain',
  'light intensity shower rain',
  'shower rain',
  'high intensity shower rain',
  'ragged shower rain',
];

export type Snows = [
  'light snow',
  'snow',
  'heavy snow',
  'sleet',
  'shower sleet',
  'light rain and snow',
  'rain and snow',
  'light shower snow',
  'shower snow',
  'heavy shower snow',
];

export type Atmospheres = [
  'mist',
  'smoke',
  'haze',
  'sand, dust whirls',
  'fog',
  'sand',
  'dust',
  'volcanic ash',
  'squalls',
  'tornado',
];

export type HeavyClouds = ['scattered clouds', 'broken clouds', 'overcast clouds'];

export type Descriptions = {
  thunderstorms: Thunderstorms,

  drizzles: Drizzles,

  rains: Rains,

  snows: Snows,

  atmospheres: Atmospheres,

  heavyClouds: HeavyClouds,
};
