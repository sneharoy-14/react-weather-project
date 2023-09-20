import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form className="mb-2">
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Search a city..."
                  autocomplete="off"
                  autoFocus="on"
                  class="form-control"
                />
              </div>
              <div className="col-5">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-7">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-5 temperature">
              <span>{Math.round(weatherData.temperature)}°C</span>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
              />
            </div>
            <br />
            <div className="col-5 description">
              {" "}
              <span>{weatherData.description}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-7"></div>
            <div className="col-5 information">
              <ul>
                <li className="date">
                  Last updated: <strong>Tuesday 11:11</strong>
                </li>
                <li>
                  Humidity <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind <span>{Math.round(weatherData.wind)}</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Tue</div>
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-min">11°</span>
                  <span className="weather-forecast-temp-max">15°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "babc1213f11b9atf604b57efa38oa64c";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
