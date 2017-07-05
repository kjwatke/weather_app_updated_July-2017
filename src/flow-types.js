/* @flow*/
export type UserInfo = {
  city: string,
  state: string,
  countryCode: string,
  zip: number,
  lat: string,
  lon: string,
};

export type WeatherState = {
  userInfo: UserInfo,
  weather: {},
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
