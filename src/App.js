import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import CityList from './components/CityList';
import Card from './components/Card';
import moment from 'moment';
import axios from 'axios';
import { AppContainer, SideBar, ContentWrapper } from './styles/app.styles';

function App() {
  //default cities 
  const [cities, setCities] = useState([
    {
      title: "San Francisco",
      location_type: "City",
      woeid: 2487956,
      latt_long: "37.777119, -122.41964"
    },
    {
      title: 'Taipei',
      location_type: 'City',
      woeid: 2306179,
      latt_long: '25.085960,121.561478',
    },
    {
      title: 'Dubai',
      location_type: 'City',
      woeid: 1940345,
      latt_long: '25.269440,55.308651',
    },
  ]);
  const [cityData, setCityData] = useState();
  const [activeCity, setActiveCity] = useState('');
  const [tempScale, setTempScale] = useState('C');
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedItem, setItem] = useState(null);

  //* updates list of cities searched for
  const addCity = (city) => {
      setCities([...cities, city])
      fetchWeatherData(city.woeid)
  }

  const deleteCity = (index) => {
    var newList = cities;
    newList.splice(index, 1);
    setCities(newList);
  }

  const fetchWeatherData = async (cityID) => {
    setLoading(true);
    const cachedObj = localStorage.getItem(cityID);
    if (cachedObj) {
      const parsedData = JSON.parse(cachedObj);
      const { requestTime } = parsedData;
      const diff = moment().unix() - requestTime;
      if (diff <= 60) {
        setCityData(parsedData);
        setActiveCity(cityID);
        setLoading(false);
        return;
      }
    } 
      let res = await axios.get(`/location/${cityID}/`).catch(err => console.log(err));
      res.data.requestTime = moment().unix();
      if (res && res.data) {
        setCityData(res.data);
        setActiveCity(cityID);
        localStorage.setItem(cityID, JSON.stringify(res.data))
        setLoading(false);
      } else {
        alert("Error fetching data");
      }
  }

  const closeCard = () => {
    setActiveCity('');
    setCityData({});
  }
  
  const deleteCity = (index) => {
    const newList = [...cities].filter((city, i) => i !== index);
    setCities(newList)
  }

  const handleScaleChange = () => {
    if (tempScale === 'C') {
      setTempScale('F');
    } else {
      setTempScale('C');
    }
  }

  const handleDragStart = (index) => {
    setItem(cities[index]);
  }

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (selectedItem === cities[index]) return;
    const newOrder = [...cities].filter(city => city !== selectedItem);
    newOrder.splice(index, 0, selectedItem);
    setCities(newOrder);
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
              editing={editing}
              deleteCity={deleteCity}
              handleDragStart={ handleDragStart}
              handleDragOver={ handleDragOver}
              onDragEnd={() => setItem(null)}
            />
            <Search setLoading={setLoading} addCity={addCity}/>
            <div className="features">
              <div className="conversion" onClick={handleScaleChange}>C/F</div>
              <div className="edit" onClick={()=> setEditing(!editing)}>{editing ? "Editing..." : "Edit"}</div>
            </div>
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
