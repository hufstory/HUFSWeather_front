import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created by{" "}
        <a
          href="https://hufstory.github.io/"
          title=""
          target="_blank"
          rel="noreferrer"
        >
          © HUFSTORY
        </a>{" "}
        <br />
        Weather data from{" "}
        <a
          href="https://openweathermap.org/"
          title=""
          target="_blank"
          rel="noreferrer"
        >
          OpenWeather
        </a>
      </p>
    </div>
  );
};
