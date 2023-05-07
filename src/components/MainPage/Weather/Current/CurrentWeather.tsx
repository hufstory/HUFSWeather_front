import icon from "../../../../assets/icons/cloudy.png";
import icon2 from "../../../../assets/icons/cloudy.png";
import icon3 from "../../../../assets/icons/rainy.png";
import "./CurrentWeather.scss";

export const CurrentWeather = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const dayOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();
  const day: string = dayOfWeek[today.getDay()];

  return (
    <div id="current" className="wrapper">
      <h1 className="location">오늘의 모현</h1>
      <h2 className="date">{day}요일, {month}월 {date}일, {year}</h2>
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
