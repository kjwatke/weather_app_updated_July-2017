export type UserInfo = {
  city: string,
  state: string,
  countryCode: string,
  zip: number,
  lat: string,
  lon: string,
};

export type IpAPIReturn = {
  data: {
    city: string,
    state: string,
    countryCode: string,
    zip: number,
    lat: string,
    lon: string,
  },
};
