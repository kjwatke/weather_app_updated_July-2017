import {
  checkThunderstorms,
  checkRains,
  checkDrizzles,
  checkSnows,
  checkAtmospheres,
  checkHeavyClouds,
} from './checkWeatherDesc';

test('should return true if the word "lightning" is present in string', () => {
  expect(checkThunderstorms('thunderstorm')).toBeTruthy();
  expect(checkThunderstorms('thunderstorm with heavy drizzle')).toBeTruthy();
  expect(checkThunderstorms('not included')).toBeFalsy();
});

test('should return true if the word "rain" is present in string', () => {
  expect(checkRains('very heavy rain')).toBeTruthy();
  expect(checkRains('heavy intensity rain')).toBeTruthy();
  expect(checkRains('fake string')).toBeFalsy();
});

test('should return true if the word drizzle is present in a string', () => {
  expect(checkDrizzles('drizzle')).toBeTruthy();
  expect(checkDrizzles('shower drizzle')).toBeTruthy();
  expect(checkDrizzles('no drizzle here')).toBeFalsy();
});

test('should return true if the word "snow" is present in a string', () => {
  expect(checkSnows('heavy snow')).toBeTruthy();
  expect(checkSnows('rain and snow')).toBeTruthy();
  expect(checkSnows('no snow today')).toBeFalsy();
});

test('should return true if the word for atmosphere is included, e.g: "wind", "dust", "tornado" etc ', () => {
  expect(checkAtmospheres('tornado')).toBeTruthy();
  expect(checkAtmospheres('dust')).toBeTruthy();
  expect(checkAtmospheres('strong winds')).toBeFalsy();
});

test('should return true if the word "cloud" is present in the string', () => {
  expect(checkHeavyClouds('broken clouds')).toBeTruthy();
  expect(checkHeavyClouds('scattered clouds')).toBeTruthy();
  expect(checkHeavyClouds('no clouds')).toBeFalsy();
});
