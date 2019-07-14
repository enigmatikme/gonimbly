import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CityList from './components/CityList';
import Card from './components/Card';
import axios from 'axios';
import Rain from './components/Rain';
import { AppContainer, SideBar, ContentWrapper } from './styles/app.styles';

// const tempData = {"consolidated_weather":[{"id":6289847541039104,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"W","created":"2019-07-13T06:03:18.874930Z","applicable_date":"2019-07-13","min_temp":10.245,"max_temp":14.010000000000002,"the_temp":15.684999999999999,"wind_speed":7.667793148582942,"wind_direction":271.8370997525488,"air_pressure":1014.235,"humidity":78,"visibility":14.090523840769903,"predictability":71},{"id":6104096916373504,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"WSW","created":"2019-07-13T06:03:21.966923Z","applicable_date":"2019-07-14","min_temp":11.17,"max_temp":16.435,"the_temp":18.345,"wind_speed":9.253537295718338,"wind_direction":244.4982321082874,"air_pressure":1014.145,"humidity":76,"visibility":11.038037858904001,"predictability":71},{"id":5722936017158144,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"WSW","created":"2019-07-13T06:03:24.883291Z","applicable_date":"2019-07-15","min_temp":12.3,"max_temp":15.915,"the_temp":16.67,"wind_speed":8.709097788570746,"wind_direction":256.20084344942194,"air_pressure":1013.05,"humidity":79,"visibility":11.325732720909887,"predictability":71},{"id":5268938243964928,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SW","created":"2019-07-13T06:03:27.951576Z","applicable_date":"2019-07-16","min_temp":11.365,"max_temp":16.33,"the_temp":17.275,"wind_speed":6.288051753697076,"wind_direction":230.6910457300014,"air_pressure":1012.89,"humidity":79,"visibility":12.860208880139982,"predictability":73},{"id":6113796764467200,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"S","created":"2019-07-13T06:03:30.880731Z","applicable_date":"2019-07-17","min_temp":11.19,"max_temp":14.044999999999998,"the_temp":10.25,"wind_speed":4.807875208780721,"wind_direction":185.5,"air_pressure":1014.94,"humidity":91,"visibility":9.999726596675416,"predictability":73},{"id":5794330977501184,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"S","created":"2019-07-13T06:03:33.957828Z","applicable_date":"2019-07-18","min_temp":10.485,"max_temp":15.594999999999999,"the_temp":10.55,"wind_speed":5.12738725841088,"wind_direction":178,"air_pressure":1015.25,"humidity":91,"visibility":9.999726596675416,"predictability":73}],"time":"2019-07-13T00:22:58.793627-07:00","sun_rise":"2019-07-13T05:58:20.125044-07:00","sun_set":"2019-07-13T20:32:41.724476-07:00","timezone_name":"LMT","parent":{"title":"California","location_type":"Region / State / Province","woeid":2347563,"latt_long":"37.271881,-119.270233"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964","timezone":"US/Pacific"}

// TODO: handle duplicate queries case and invalid search case
function App() {
  //default city
  const [cities, setCities] = useState([{
    "title": "San Francisco",
    "location_type": "City",
    "woeid": 2487956,
    "latt_long": "37.777119, -122.41964"
  }])

  const [cityData, setCityData] = useState();
  const [activeCity, setActiveCity] = useState('');

  //* updates list of cities searched for
  const fetchCity = async (searchquery) => {
    console.log("searchQuery", searchquery)
    let encodedQuery = searchquery.split(' ').join('%20');
    let res = await axios.get(`api/location/search/?query=${encodedQuery}`).catch(err => console.log(err));

    if (res.data.length) {
      console.log("res.data", res.data)
      setCities([...cities, res.data[0]])
    }
  }

  const fetchWeatherData = async (cityID) => {
    let res = await axios.get(`api/location/${cityID}/`).catch(err => console.log(err));
    setCityData(res.data);
    setActiveCity(cityID)
    // setCityData(tempData);
  }

  const closeCard = () => {
    setActiveCity('');
    setCityData({});
  }


    return (
      <AppContainer>
        <ContentWrapper>
          <SideBar>
            <CityList cities={cities} activeCity={activeCity} fetchWeatherData={fetchWeatherData}/>
            <Search fetchCity={fetchCity}/>
          </SideBar>
          <Card {...cityData} closeCard={closeCard}/>
        </ContentWrapper>
      </AppContainer>
    );
  } 

export default App;
