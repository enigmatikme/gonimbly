import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CityList from './components/CityList';
import Card from './components/Card';
import axios from 'axios';
import { AppContainer, SideBar, ContentWrapper } from './styles/app.styles';

function App() {
  //default city
  const [cities, setCities] = useState([
    {
      "title": "San Francisco",
      "location_type": "City",
      "woeid": 2487956,
      "latt_long": "37.777119, -122.41964"
    },
  ]);
  const [cityData, setCityData] = useState();
  const [activeCity, setActiveCity] = useState('');
  const [tempScale, setTempScale] = useState('C');
  const [loading, setLoading] = useState(false);

  //* updates list of cities searched for
  const addCity = (city) => {
      setCities([...cities, city])
      fetchWeatherData(city.woeid)
  }

  const fetchWeatherData = async (cityID) => {
    setLoading(true);
    let res = await axios.get(`https://www.metaweather.com/api/location/${cityID}/`).catch(err => console.log(err));
    if (res && res.data) {
      setCityData(res.data);
      setActiveCity(cityID)
      setLoading(false);
    } else {
      alert("Error fetching data")
    }
  }

  const closeCard = () => {
    setActiveCity('');
    setCityData({});
  }

  const handleScaleChange = () => {
    if (tempScale === 'C') {
      setTempScale('F');
    } else {
      setTempScale('C');
    }
  }

    return (
      <AppContainer>
        <ContentWrapper>
          <SideBar>
            <CityList
              loading={loading}
              cities={cities}
              activeCity={activeCity}
              fetchWeatherData={fetchWeatherData}
            />
            <Search setLoading={setLoading} addCity={addCity}/>
            <div className="conversion" onClick={handleScaleChange}>C/F</div>
          </SideBar>
          <Card
            {...cityData}
            loading={loading}
            closeCard={closeCard}
            tempScale={tempScale}
          />
        </ContentWrapper>
      </AppContainer>
    );
  } 

export default App;
