/* @flow*/
import desc from './descriptions';
// import type {
// Thunderstorms, Rains, Drizzles, Snows, Atmospheres, HeavyClouds } from './flow-types';

const checkThunderstorms = (weatherDesc: string) => {
  const thunderstorms: Array<string> = desc.thunderstorms;
  return thunderstorms.includes(weatherDesc);
};

const checkRains = (weatherDesc: string) => {
  const rains: Array<string> = desc.rains;
  return rains.includes(weatherDesc);
};

const checkDrizzles = (weatherDesc: string) => {
  const drizzles: Array<string> = desc.drizzles;
  return drizzles.includes(weatherDesc);
};

const checkSnows = (weatherDesc: string) => {
  const snows: Array<string> = desc.snows;
  return snows.includes(weatherDesc);
};

const checkAtmospheres = (weatherDesc: string) => {
  const atmospheres: Array<string> = desc.atmospheres;
  return atmospheres.includes(weatherDesc);
};

const checkHeavyClouds = (weatherDesc: string) => {
  const heavyClouds: Array<string> = desc.heavyClouds;
  return heavyClouds.includes(weatherDesc);
};

export {
  checkThunderstorms,
  checkRains,
  checkDrizzles,
  checkSnows,
  checkAtmospheres,
  checkHeavyClouds,
};
