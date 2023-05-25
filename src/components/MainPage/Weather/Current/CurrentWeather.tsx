import React, { useEffect, useState } from "react";
import "./CurrentWeather.scss";

import { useAxios } from "../../../../hooks/useAxios";
import { getWeatherIcon } from "../../../../utils/getWeatherIcon";
import { getCurrentDay } from "../../../../utils/getCurrentDay";
import WeatherData from "../../../../data/WeatherData";

export const CurrentWeather = () => {
  const [data, setData] = useState<WeatherData>();
  const value: WeatherData = useAxios("/weather");
  useEffect(() => {
    setData(value);
  }, [value]);

  const currentDay = getCurrentDay();

  return (
    <div id="current" className="wrapper">
      <h1 className="location">오늘의 모현</h1>
      <h2 className="date">
        {currentDay.day}요일, {currentDay.month}월 {currentDay.date}일,{" "}
        {currentDay.year}
      </h2>
      {data?.weather_current ? (
        <div className="weatherIcon">
          <img
            src={getWeatherIcon(
              data.weather_current.weather_icon.slice(0, 2),
              true
            )}
            alt="weather icon"
            className="icon"
          />
        </div>
      ) : (
        <div>Loading</div>
      )}
      {data?.weather_current && (
        <>
          <p className="temp">{data.weather_current.temp}</p>
          <p className="conditions">{data.weather_current.weather_main}</p>
        </>
      )}
    </div>
  );
};
