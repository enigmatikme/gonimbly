import React from 'react';
import { CityListContainer } from '../styles/cityList.styles';

export default function CityList({cities, activeCity, fetchWeatherData, loading, deleteCity}) {
  return (
    <CityListContainer>
      {
        cities.map(({woeid, title}, i) => (
          <div
            key={i}
            className={(activeCity === woeid ? "active " : " ") + (loading ? "loading" : "")}
            onClick={() => fetchWeatherData(woeid)}
          >
            {title}
            <div className="edit" onClick={() => deleteCity(i)}>X</div>
          </div>

        ))
      }
    </CityListContainer>
  )
}