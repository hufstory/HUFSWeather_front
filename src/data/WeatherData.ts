import CurrentWeatherData from "./CurrentWeatherData";
import WeatherTime from "./WeatherTime";

// 앞으로의 5일동안 최고, 최저 기온
export default interface WeatherData {
  weather_current: CurrentWeatherData;
  weather_times: {
    list: WeatherTime[];
  };
  weather_whole?: {
    firstday: {
      minTemp: number;
      maxTemp: number;
      day: string;
      icon: string;
      main: string;
    };
    secondday: {
      minTemp: number;
      maxTemp: number;
      day: string;
      icon: string;
      main: string;
    };
    thirdday: {
      minTemp: number;
      maxTemp: number;
      day: string;
      icon: string;
      main: string;
    };
    fourthday: {
      minTemp: number;
      maxTemp: number;
      day: string;
      icon: string;
      main: string;
    };
    fifthday: {
      minTemp: number;
      maxTemp: number;
      day: string;
      icon: string;
      main: string;
    };
  };
}
