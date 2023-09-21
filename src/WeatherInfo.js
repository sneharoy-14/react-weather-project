import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-5 temperature">
          <span>{Math.round(props.data.temperature)}°C</span>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="icon"
          />
        </div>
        <br />
        <div className="col-5 description">
          {" "}
          <span>{props.data.description}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-7"></div>
        <div className="col-5 information">
          <ul>
            <li className="date">
              Last updated:{" "}
              <strong>
                <FormattedDate date={props.data.date} />
              </strong>
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
