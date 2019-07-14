// https://www.metaweather.com/api/location/search/?query=london

// [
//   {
//       "title": "London",
//       "location_type": "City",
//       "woeid": 44418,
//       "latt_long": "51.506321,-0.12714"
//   }
// ]

// https://www.metaweather.com/api/location/search/?query=san&francisco
// [
//   {
//       "title": "San Francisco",
//       "location_type": "City",
//       "woeid": 2487956,
//       "latt_long": "37.777119, -122.41964"
//   },
//   {
//       "title": "San Diego",
//       "location_type": "City",
//       "woeid": 2487889,
//       "latt_long": "32.715691,-117.161720"
//   },
//   {
//       "title": "San Jose",
//       "location_type": "City",
//       "woeid": 2488042,
//       "latt_long": "37.338581,-121.885567"
//   },
//   {
//       "title": "San Antonio",
//       "location_type": "City",
//       "woeid": 2487796,
//       "latt_long": "29.424580,-98.494614"
//   },
//   {
//       "title": "Santa Cruz",
//       "location_type": "City",
//       "woeid": 2488853,
//       "latt_long": "36.974018,-122.030952"
//   },
//   {
//       "title": "Santiago",
//       "location_type": "City",
//       "woeid": 349859,
//       "latt_long": "-33.463039,-70.647942"
//   },
//   {
//       "title": "Santorini",
//       "location_type": "City",
//       "woeid": 56558361,
//       "latt_long": "36.406651,25.456530"
//   },
//   {
//       "title": "Santander",
//       "location_type": "City",
//       "woeid": 773964,
//       "latt_long": "43.461498,-3.810010"
//   },
//   {
//       "title": "Busan",
//       "location_type": "City",
//       "woeid": 1132447,
//       "latt_long": "35.170429,128.999481"
//   },
//   {
//       "title": "Santa Cruz de Tenerife",
//       "location_type": "City",
//       "woeid": 773692,
//       "latt_long": "28.46163,-16.267059"
//   },
//   {
//       "title": "Santa Fe",
//       "location_type": "City",
//       "woeid": 2488867,
//       "latt_long": "35.666431,-105.972572"
//   }
// ]


// https://www.metaweather.com/api/location/2487956/

const sfData = {
  "consolidated_weather": [
      {
          "id": 5084549123932160,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "SW",
          "created": "2019-07-06T09:00:16.506392Z",
          "applicable_date": "2019-07-06",
          "min_temp": 11.55,
          "max_temp": 15.065,
          "the_temp": 16.07,
          "wind_speed": 6.4530414258782045,
          "wind_direction": 225.97517405404022,
          "air_pressure": 1015.0899999999999,
          "humidity": 81,
          "visibility": 14.351499741509583,
          "predictability": 73
      },
      {
          "id": 6284765508403200,
          "weather_state_name": "Heavy Cloud",
          "weather_state_abbr": "hc",
          "wind_direction_compass": "WSW",
          "created": "2019-07-06T09:00:19.463867Z",
          "applicable_date": "2019-07-07",
          "min_temp": 10.829999999999998,
          "max_temp": 13.3,
          "the_temp": 14.765,
          "wind_speed": 8.886588902926906,
          "wind_direction": 243.03743998809188,
          "air_pressure": 1015.1700000000001,
          "humidity": 84,
          "visibility": 13.320955619183966,
          "predictability": 71
      },
      {
          "id": 4964391843790848,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "SW",
          "created": "2019-07-06T09:00:22.465537Z",
          "applicable_date": "2019-07-08",
          "min_temp": 10.754999999999999,
          "max_temp": 14.350000000000001,
          "the_temp": 16.35,
          "wind_speed": 7.708174519563085,
          "wind_direction": 226.16781710397728,
          "air_pressure": 1015.765,
          "humidity": 79,
          "visibility": 12.41810327686312,
          "predictability": 73
      },
      {
          "id": 6274459478523904,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "SW",
          "created": "2019-07-06T09:00:25.511054Z",
          "applicable_date": "2019-07-09",
          "min_temp": 10.989999999999998,
          "max_temp": 13.79,
          "the_temp": 15.395,
          "wind_speed": 6.77333959343832,
          "wind_direction": 229.65240473344863,
          "air_pressure": 1016.635,
          "humidity": 83,
          "visibility": 12.010794460351548,
          "predictability": 73
      },
      {
          "id": 6210449030774784,
          "weather_state_name": "Heavy Cloud",
          "weather_state_abbr": "hc",
          "wind_direction_compass": "WSW",
          "created": "2019-07-06T09:00:28.389744Z",
          "applicable_date": "2019-07-10",
          "min_temp": 11.719999999999999,
          "max_temp": 14.87,
          "the_temp": 15.59,
          "wind_speed": 7.491631019716853,
          "wind_direction": 244.38670997909225,
          "air_pressure": 1017.31,
          "humidity": 85,
          "visibility": 10.618922989739918,
          "predictability": 71
      },
      {
          "id": 4815972470882304,
          "weather_state_name": "Showers",
          "weather_state_abbr": "s",
          "wind_direction_compass": "SSW",
          "created": "2019-07-06T09:00:31.582506Z",
          "applicable_date": "2019-07-11",
          "min_temp": 11.190000000000001,
          "max_temp": 14.71,
          "the_temp": 10.15,
          "wind_speed": 4.7319981309154535,
          "wind_direction": 212.5,
          "air_pressure": 1015.95,
          "humidity": 91,
          "visibility": 9.999726596675416,
          "predictability": 73
      }
  ],
  "time": "2019-07-06T03:17:35.587662-07:00",
  "sun_rise": "2019-07-06T05:53:58.491318-07:00",
  "sun_set": "2019-07-06T20:34:56.975173-07:00",
  "timezone_name": "LMT",
  "parent": {
      "title": "California",
      "location_type": "Region / State / Province",
      "woeid": 2347563,
      "latt_long": "37.271881,-119.270233"
  },
  "sources": [
      {
          "title": "BBC",
          "slug": "bbc",
          "url": "http://www.bbc.co.uk/weather/",
          "crawl_rate": 360
      },
      {
          "title": "Forecast.io",
          "slug": "forecast-io",
          "url": "http://forecast.io/",
          "crawl_rate": 480
      },
      {
          "title": "HAMweather",
          "slug": "hamweather",
          "url": "http://www.hamweather.com/",
          "crawl_rate": 360
      },
      {
          "title": "Met Office",
          "slug": "met-office",
          "url": "http://www.metoffice.gov.uk/",
          "crawl_rate": 180
      },
      {
          "title": "OpenWeatherMap",
          "slug": "openweathermap",
          "url": "http://openweathermap.org/",
          "crawl_rate": 360
      },
      {
          "title": "Weather Underground",
          "slug": "wunderground",
          "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
          "crawl_rate": 720
      },
      {
          "title": "World Weather Online",
          "slug": "world-weather-online",
          "url": "http://www.worldweatheronline.com/",
          "crawl_rate": 360
      }
  ],
  "title": "San Francisco",
  "location_type": "City",
  "woeid": 2487956,
  "latt_long": "37.777119, -122.41964",
  "timezone": "US/Pacific"
}


// console.log(sfData.title)
export { sfData };