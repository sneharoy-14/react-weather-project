import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  return (
    <div>
      {" "}
      <div className="WeatherForecast-day">{day()}</div>
      <img src={props.data.condition.icon_url} alt="forecast-icon" width="42" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°{"  "}
        </span>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
      </div>
    </div>
  );
}
