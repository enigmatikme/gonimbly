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
  // TODO: check consolidated weather for weather conditions cloudy/rain
  return (
    <WeatherContainer>
      <Rain drops={100} />
    </WeatherContainer>
  )
}

const Day = (props) => {
  let day = moment(props.applicable_date).format('dddd')
  return <div className="day-row"> 
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
    let hour = parseInt(cityTime.substring(11,13));
    if (hour >= 5 && hour <= 11) {
      return images["morning"];
    } else if (hour >= 12 && hour <= 18) {
      return images["afternoon"];
    } else {
      return images["evening"];
    }
  }

  if (consolidated_weather) {
    let popped = consolidated_weather.shift()
    today = (popped === undefined) ? "Not shown" : popped;
    let t = time.substring(0,19)
    currentTime = moment(t).format("LT")
    //* sets image based on city time of day
    img = image(time);
  }
  return(
    <CardContainer>
      <ImageContainer>
        <img alt={`${img}`} src={`/img/${img}.png`}/>
      </ImageContainer>
      {consolidated_weather ? (
        <>
          <Weather />
          <ContentContainer>
            <div className="city">
              <p >{title}</p>
              <p>{currentTime}</p>
            </div>
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
      ) : (
        <ContentContainer>
          <Today>
            <div>
              <h1 style={{fontSize: "20px"}}>Choose city</h1>
            </div>
          </Today>
        </ContentContainer>
      )}
    </CardContainer>

  )
}