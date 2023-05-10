import { useEffect, useState } from "react";

import { getWeatherIcon } from "../../../../hooks/getWeatherIcon";
import { getCurrentDay } from "../../../../hooks/getCurrentDay";
import { useAxios } from "../../../../hooks/useAxios";
import WeatherData from "../../../../data/WeatherData";

import "./WeekWeather.scss";

export const WeekWeather = () => {
  const [data, setData] = useState<WeatherData>();
  const value: WeatherData = useAxios("/weather");
  useEffect(() => {
    setData(value);
  }, [value]);

  const currentDay = getCurrentDay();

  return (
    <div id="future" className="wrapper">
      <div className="container">
        <h3 className="day">{currentDay.nextDays[0]}</h3>
        <div className="weatherIcon">
          <img
            src={getWeatherIcon(
              data?.weather_whole?.secondday?.icon.slice(0, 2) ?? "",
              true
            )}
            alt="weather icon"
          />
          <div className="partlycloudy">
            <div className="inner"></div>
          </div>
        </div>
        <p className="conditions">{data?.weather_whole?.secondday?.main}</p>
        <p className="tempRange">
          <span className="high">
            {data?.weather_whole?.secondday?.maxTemp}
          </span>{" "}
          |{" "}
          <span className="low">{data?.weather_whole?.secondday?.minTemp}</span>
        </p>
      </div>

      <div className="container">
        <h3 className="day">{currentDay.nextDays[1]}</h3>
        <div className="weatherIcon">
          <img
            src={getWeatherIcon(
              data?.weather_whole?.thirdday?.icon.slice(0, 2) ?? "",
              true
            )}
            alt="weather icon"
          />
          <div className="mostlycloudy">
            <div className="inner"></div>
          </div>
        </div>
        <p className="conditions">{data?.weather_whole?.thirdday?.main}</p>
        <p className="tempRange">
          <span className="high">{data?.weather_whole?.thirdday?.maxTemp}</span>{" "}
          |{" "}
          <span className="low">{data?.weather_whole?.thirdday?.minTemp}</span>
        </p>
      </div>

      <div className="container">
        <h3 className="day">{currentDay.nextDays[2]}</h3>
        <div className="weatherIcon">
          <img
            src={getWeatherIcon(
              data?.weather_whole?.fourthday?.icon.slice(0, 2) ?? "",
              true
            )}
            alt="weather icon"
          />
          <div className="rain">
            <div className="inner"></div>
          </div>
        </div>
        <p className="conditions">{data?.weather_whole?.fourthday?.main}</p>
        <p className="tempRange">
          <span className="high">
            {data?.weather_whole?.fourthday?.maxTemp}
          </span>{" "}
          |{" "}
          <span className="low">{data?.weather_whole?.fourthday?.minTemp}</span>
        </p>
      </div>
    </div>
  );
};
