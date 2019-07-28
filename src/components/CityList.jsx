import React from 'react';
import { CityListContainer } from '../styles/cityList.styles';

export default function CityList({cities, activeCity, fetchWeatherData, loading, editing, deleteCity, handleDragStart, handleDragOver}) {
  return (
    <CityListContainer>
      {
        cities.map(({woeid, title}, i) => (
          <div
            key={i}
            className={(activeCity === woeid ? "active " : " ") + (loading ? "loading" : "")}
            onClick={() => (!editing && fetchWeatherData(woeid))}
            draggable={editing ? true : false}
            onDragStart={() => handleDragStart(i)}
            onDragOver={(event) => handleDragOver(event, i)}
          >
            {title}
            {editing && <p className="close" onClick={() => deleteCity(i)}>X</p> }
          </div>

        ))
      }
    </CityListContainer>
  )
}