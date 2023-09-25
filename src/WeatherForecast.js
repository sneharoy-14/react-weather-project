import React from "react";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Monday</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="forecast-icon"
            width="42"
          />

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">23° {"  "}</span>
            <span className="WeatherForecast-temperature-min">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
