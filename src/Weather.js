import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-7">
            <h1>London</h1>
          </div>
          <div className="col-5 temperature">
            <span className="units"> 18°C </span>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt=""
              id="icon"
            />
          </div>
          <br />
          <div className="col-5 description">
            {" "}
            <span>Cloudy</span>
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
                Humidity <span>85</span>%
              </li>
              <li>
                Wind <span>8</span> km/h
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
}
