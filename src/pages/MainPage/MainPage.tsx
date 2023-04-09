import "./MainPage.scss";

import { Header } from "../../components/MainPage/Header/Header";
import { CurrentWeather } from "../../components/MainPage/Weather/Current/CurrentWeather";
import { WeekWeather } from "../../components/MainPage/Weather/Week/WeekWeather";
import { Footer } from "../../components/MainPage/Footer/Footer";
import { WaveContainer } from "../../components/MainPage/WaveContainer/WaveContainer";

export const MainPage = () => {
  return (
    <div className="weather-page">
      <Header />
      <CurrentWeather />
      <WeekWeather />
      <Footer />
      <WaveContainer />
    </div>
  );
};
