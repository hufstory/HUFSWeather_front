// 현재 날씨
export default interface CurrentWeatherData {
  temp: number;
  temp_max: number;
  temp_min: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;
}
