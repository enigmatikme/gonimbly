import React from 'react';
import moment from 'moment';
import {  
  CardContainer,
  Today,
  DayContainer,
  ImageContainer,
  ContentContainer,
  WeatherContainer,
} from '../styles/card.styles';
import Rain from './Rain';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Weather = ({consolidated_weather}) => {
  return (
    <WeatherContainer>
      <Rain drops={400} />
    </WeatherContainer>
  )
}

const Day = (props) => {
  let day = moment(props.applicable_date).format('dddd')
  return <div className="day-row"> 
    {/* current weather state: {props.weather_state_name}
    date: {moment(props.applicable_date).format('dddd')}
    current temp: {Math.round(props.the_temp)}
    humidity: {props.humidity}
    highs: {Math.round(props.max_temp)}
    lows: {Math.round(props.min_temp)} */}
    <p>{day}</p>
    <div className="details">
      <p className="temp">{Math.round(props.the_temp)}&#176;</p>
      <p className="state">{props.weather_state_name}</p> 
    </div>
  </div>
}
export default function Card({consolidated_weather, closeCard, title, time}) {
  let today
    , images = {
      "morning": 'Moon',
      "afternoon": 'Sun',
      "evening": 'Blood'
    }
    , img = "Blood"
    , currentTime

  const image = (cityTime) => {
    //* morning = 5 - 12
    //* 12 - 6 
    //* 6 - 5
    let hour = parseInt("2019-07-14T05:40:04.042176+08:00".substring(11,13));
    // let hour = parseInt(cityTime.substring(11,13));
    if (hour >= 5 && hour <= 11) {
      return images["morning"];
    } else if (hour >= 12 && hour <= 18) {
      return images["afternoon"];
    } else {
      return images["evening"];
    }
  }

  if (consolidated_weather) {
    console.log("today", consolidated_weather[0]);
    let popped = consolidated_weather.shift()
    today = (popped === undefined) ? "Not shown" : popped;
    let t = "2019-07-14T13:40:04.042176+08:00".substring(0,19)
    console.log(t)
    currentTime = moment(t).format("LT")
    //* sets image based on city time of day
    img = image(time);
  }
  return(
    <CardContainer>
      <ImageContainer>
        <img alt={`${img}`} src={`/img/${img}.png`}/>
      </ImageContainer>
      {consolidated_weather && (
        <>
          <Weather />
          <ContentContainer>
            <div className="city">
              <p >{title}</p>
              <p>{currentTime}</p>
            </div>
            {/* <button onClick={closeCard}>X</button> */}
            <FontAwesomeIcon
              className="close"
              icon={["far", "times-circle"]}
              onClick={closeCard}
            />
            <Today>
              {(today !== '') && (
                <div> 
                  <h1>{Math.round(today.the_temp)}&#176;</h1>
                  <h3>{today.weather_state_name}</h3> 
                </div>
              )}
            </Today>
            <DayContainer style={{display: 'flex'}}>
              {consolidated_weather.map((day, i) => {
                return <Day key={i} {...day} index={i}/>
              })}

            </DayContainer>
          </ContentContainer>
        </>
      )}
    </CardContainer>

  )
}