import React from 'react';
import { CityListContainer } from '../styles/cityList.styles';

export default function CityList({cities, activeCity, fetchWeatherData}) {
  return (
    <CityListContainer>
      {
        cities.map(({woeid, title}, i) => (
          <div
            key={i}
            className={activeCity === woeid ? "active" : undefined}
            onClick={() => fetchWeatherData(woeid)}
          >
            {title}
          </div>
        ))
      }
    </CityListContainer>
  )
}