// 3시간 별 날씨
export default interface WeatherTime {
  temp: number;
  feel_temp: number;
  humidity: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;
  wind_speed: number;
  time: string;
}
