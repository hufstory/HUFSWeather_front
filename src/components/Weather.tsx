import React, { useEffect, useState } from "react";
import axios from "axios";
import clearSkyDay from "../assets/images/01d.png";
import clearSkyNight from "../assets/images/01n.png";
import fewCloudsDay from "../assets/images/02d.png";
import fewCloudsNight from "../assets/images/02n.png";
import scatteredCloudsDay from "../assets/images/03d.png";
import scatteredCloudsNight from "../assets/images/03n.png";
import brokenCloudsDay from "../assets/images/04d.png";
import brokenCloudsNight from "../assets/images/04n.png";
import showerRainDay from "../assets/images/09d.png";
import showerRainNight from "../assets/images/09n.png";
import rainDay from "../assets/images/10d.png";
import rainNight from "../assets/images/10n.png";
import thunderstormDay from "../assets/images/11d.png";
import thunderstormNight from "../assets/images/11n.png";
import snowDay from "../assets/images/13d.png";
import snowNight from "../assets/images/13n.png";
import mistDay from "../assets/images/50d.png";
import mistNight from "../assets/images/50n.png";

// 현재 날씨
interface CurrentWeatherData {
  temp: number;
  temp_max: number;
  temp_min: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;
}

// 3시간 별 날씨
interface WeatherTime {
  temp: number;
  feel_temp: number;
  humidity: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;
  wind_speed: number;
  time: string;
}

// 앞으로의 5일동안 최고, 최저 기온
interface WeatherData {
  weather_current: CurrentWeatherData;
  weather_times: {
    list: WeatherTime[];
  };
  weather_whole: {
    firstday: {
      minTemp: number;
      maxTemp: number;
      day: string;
    };
    secondday: {
      minTemp: number;
      maxTemp: number;
      day: string;
    };
    thirdday: {
      minTemp: number;
      maxTemp: number;
      day: string;
    };
    fourthday: {
      minTemp: number;
      maxTemp: number;
      day: string;
    };
    fifthday: {
      minTemp: number;
      maxTemp: number;
      day: string;
    };
  };
}

const Weather = () => {
  const [data, setData] = useState<WeatherData>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get<WeatherData>("http://localhost:3001/");
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  // openweathermap 아이콘 이름에 해당하는 이미지 파일 가져오기
  const getWeatherIcon = (icon: string, isDay: boolean) => {
    switch (icon) {
      case "01":
        return isDay ? clearSkyDay : clearSkyNight;
      case "02":
        return isDay ? fewCloudsDay : fewCloudsNight;
      case "03":
        return isDay ? scatteredCloudsDay : scatteredCloudsNight;
      case "04":
        return isDay ? brokenCloudsDay : brokenCloudsNight;
      case "09":
        return isDay ? showerRainDay : showerRainNight;
      case "10":
        return isDay ? rainDay : rainNight;
      case "11":
        return isDay ? thunderstormDay : thunderstormNight;
      case "13":
        return isDay ? snowDay : snowNight;
      case "50":
        return isDay ? mistDay : mistNight;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-[27px]">
      <div className="bg-white shadow-default rounded-today mx-5 text-[16px] leading-6 text-black flex justify-start items-center">
        <div className="py-4 pl-9">
          <div>
            {data && (
              <div>
                <h2>Current Weather</h2>
                <p>현재 기온: {data.weather_current.temp}</p>
                <p>최고 기온: {data.weather_current.temp_max}</p>
                <p>최저 기온: {data.weather_current.temp_min}</p>
                <p>날씨 정보: {data.weather_current.weather_main}</p>
                <p>날씨 설명: {data.weather_current.weather_description}</p>
                {data.weather_current.weather_icon && (
                  <img
                    className="h-[100px]"
                    src={getWeatherIcon(
                      data.weather_current.weather_icon.slice(0, 2),
                      true
                    )}
                    alt="weather icon"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
