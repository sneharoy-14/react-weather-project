import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "babc1213f11b9atf604b57efa38oa64c";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Mon</div>
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="forecast-icon"
            width="42"
          />

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">23°</span>
            <span className="WeatherForecast-temperature-min">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
