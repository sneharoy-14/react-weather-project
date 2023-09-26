import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function handleForecast() {
    let apiKey = "babc1213f11b9atf604b57efa38oa64c";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function day() {
    let date = new Date(forecast[0].time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col-2">
            <div className="WeatherForecast-day">{day()}</div>
            <img
              src={forecast[0].condition.icon_url}
              alt="forecast-icon"
              width="42"
            />

            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temperature.maximum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    handleForecast();
    return;
  }
}
