/* @flow*/
import React from 'react';

const LocationInfo = ({
  city,
  country,
  lat,
  lon,
}: {
  city: string,
  country: string,
  lat: string,
  lon: string,
}) =>
  (<div className="card weather-location-info-card z-depth-5">
    <div className="card-title center">
      <h4>Location Info</h4>
    </div>
    <div className="card-content center">
      <div className="card-action">
        City: {city}
      </div>
      <div className="card-action">
        Country: {country}
      </div>
      <div className="card-action">
        Lattitude: {lat}
      </div>
      <div className="card-action">
        Longitude: {lon}
      </div>
    </div>
  </div>);

export default LocationInfo;
