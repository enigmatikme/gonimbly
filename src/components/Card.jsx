import React from 'react';
import moment from 'moment';
import { image, convertDegrees } from '../helpers';
import Loader from './Loader';
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
  let rainDropsCount = {
    "hr": 500,
    "lr": 200,
    "s": 100
  }
  , dropCount;
  let abbr = consolidated_weather[0].weather_state_abbr;

  if (rainDropsCount[abbr]) {
    dropCount = rainDropsCount[abbr];
    return (
      <WeatherContainer>
        <Rain drops={dropCount} />
      </WeatherContainer>
    )
  } 
  return null;
}

const Day = (props) => {
  let day = moment(props.applicable_date).format('dddd')
  return <div className="day-row"> 
    <p>{day}</p>
    <div className="details">
      <p className="temp">{Math.round(convertDegrees(props.the_temp, props.tempScale))}</p>
      <p className="state">{props.weather_state_name}</p> 
    </div>
  </div>
}

export default function Card({consolidated_weather, closeCard, title, time, tempScale, loading}) {
  let today
    , img = "Blood"
    , currentTime
    , imgToTimeOfDay = {
      "Moon": "morning",
      "Sun": "afternoon",
      "Blood": "evening",
    }
  if (consolidated_weather) {
    let popped = consolidated_weather[0]
    today = (popped === undefined) ? "Not shown" : popped;
    let t = time.substring(0,19)
    currentTime = moment(t).format("LT")
    img = image(time);
  }
  console.log(imgToTimeOfDay[img])
  return(
    <CardContainer>
      <ImageContainer>
        <img alt={`${img}`} src={`/img/${img}.png`}/>
      </ImageContainer>
      {consolidated_weather ? (
        <>
          {loading ? (
            <Loader timeOfDay={imgToTimeOfDay[img]} />
          ) : (
            <>
              <Weather consolidated_weather={consolidated_weather}/>
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
                      <h1 className="temp">{Math.round(convertDegrees(today.the_temp, tempScale))}</h1>
                      <h3>{today.weather_state_name}</h3> 
                    </div>
                  )}
                </Today>
                <DayContainer style={{display: 'flex'}}>
                  {consolidated_weather.map((day, i) => {
                    if (i !== 0) {
                      return <Day tempScale={tempScale} key={i} {...day} index={i}/>
                    }
                  })}
                </DayContainer>
              </ContentContainer>
            </>
          )}
        </>
      ) : (
        <>
          {loading ? (
            <Loader timeOfDay={imgToTimeOfDay[img]} />
          ) : (
          <ContentContainer>
              <Today>
                <div>
                  <h1 style={{fontSize: "20px"}}>Choose city</h1>
                </div>
              </Today>
          </ContentContainer>
          )}
        </>
      )}
    </CardContainer>
  )
}