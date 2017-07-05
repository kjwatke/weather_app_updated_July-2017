/* @flow*/

export type UserInfo = {
  city: string,
  state: string,
  countryCode: string,
  ip: string,
  zip: number,
  lattitude: string,
  longitude: string,
};

export type IpInfo = {
  data: {
    city: string,
    state: string,
    countryCode: string,
    query: string,
    zip: number,
    lat: string,
    lon: string,
  },
};

export type WeatherProp = {
  weather: {
    status: string,
  },
  user: UserInfo,
};
