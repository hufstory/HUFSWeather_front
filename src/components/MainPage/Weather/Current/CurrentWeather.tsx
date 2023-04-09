import icon from "../../../../assets/icons/cloudy.png";
import icon2 from "../../../../assets/icons/cloudy.png";
import icon3 from "../../../../assets/icons/rainy.png";
import "./CurrentWeather.scss";

export const CurrentWeather = () => {
  return (
    <div id="current" className="wrapper">
      <h1 className="location">오늘의 모현</h1>
      <h2 className="date">일요일, 4월 8일, 2023</h2>

      <div className="weatherIcon">
        <img src={icon3} className="icon" />
        <div className="sunny">
          <div className="inner"></div>
        </div>
      </div>
      <p className="temp">14</p>
      <p className="conditions">Sunny</p>
    </div>
  );
};
