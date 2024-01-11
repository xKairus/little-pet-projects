import { useState, useEffect, useCallback } from "react";
import "./../../styles/WeatherApp/WeatherApp.css";

import search_icon from "./../../assets/WeatherApp/search.png";
import clear_icon from "./../../assets/WeatherApp/clear.png";
import cloud_icon from "./../../assets/WeatherApp/cloud.png";
import drizzle_icon from "./../../assets/WeatherApp/drizzle.png";
import humidity_icon from "./../../assets/WeatherApp/humidity.png";
import rain_icon from "./../../assets/WeatherApp/rain.png";
import snow_icon from "./../../assets/WeatherApp/snow.png";
import wind_icon from "./../../assets/WeatherApp/wind.png";

const WeatherApp = () => {
  let api_key = "3aea4bc503f6fcdef15ed3739c2c8c4f";

  const [wethIcon, setWethIcon] = useState(cloud_icon);

  // Object to map weather icon codes to corresponding images
  const weatherIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": drizzle_icon,
    "03n": drizzle_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  // Function to set weather data and icon based on API response
  const setWeatherData = useCallback(
    (data) => {
      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temp = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
      temp[0].innerHTML = Math.floor(data.main.temp) + " C";
      location[0].innerHTML = data.name;

      // Set weather icon based on the received code
      const iconCode = data.weather[0].icon;
      setWethIcon(weatherIcons[iconCode] || clear_icon);
    },
    [setWethIcon]
  );

  // Fetch data for the default city (London) on component mount
  useEffect(() => {
    const fetchDataForDefaultCity = async () => {
      let defaultCity = "Moscow";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=Metric&appid=${api_key}`;

      try {
        let response = await fetch(url);
        let data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataForDefaultCity();
  }, [api_key, setWeatherData]);

  // Function to handle user-initiated search
  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container weather-app">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wethIcon} alt="" />
      </div>
      <div className="weather-temp">24</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
