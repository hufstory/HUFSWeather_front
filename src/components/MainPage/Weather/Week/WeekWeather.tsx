import icon from "../../../../assets/icons/cloudy.png";
import icon2 from "../../../../assets/icons/cloudy.png";
import icon3 from "../../../../assets/icons/rainy.png";
import "./WeekWeather.scss";

export const WeekWeather = () => {
  return (
    <div id="future" className="wrapper">
      <div className="container">
        <h3 className="day">Mon</h3>
        <div className="weatherIcon">
          <img src={icon2} />

          <div className="partlycloudy">
            <div className="inner"></div>
          </div>
        </div>
        <p className="conditions">Partly Cloudy</p>
        <p className="tem`pRange">
          <span className="high">64</span> | <span className="low">48</span>
        </p>
      </div>
      <div className="container">
        <h3 className="day">Tue</h3>
        <div className="weatherIcon">
          <img src={icon2} />

          <div className="mostlycloudy">
            <div className="inner"></div>
          </div>
        </div>
        <p className="conditions">Mostly Cloudy</p>
        <p className="tempRange">
          <span className="high">57</span> | <span className="low">45</span>
        </p>
      </div>
      <div className="container">
        <h3 className="day">Wed</h3>
        <div className="weatherIcon">
          <img src={icon2} />

          <div className="rain">
            <div className="inner"></div>
          </div>
        </div>
        <p className="conditions">Chance of Rain</p>
        <p className="tempRange">
          <span className="high">63</span> | <span className="low">59</span>
        </p>
      </div>
    </div>
  );
};
