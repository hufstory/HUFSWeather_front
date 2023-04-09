import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <p id="lastUpdated">Last updated at 12:00pm</p>
      <p>
        Created by{" "}
        <a href="" title="" target="_blank">
          © HUFSTORY
        </a>{" "}
        <br />
        Weather data from{" "}
        <a href="https://openweathermap.org/" title="" target="_blank">
          OpenWeather
        </a>
      </p>
    </div>
  );
};
