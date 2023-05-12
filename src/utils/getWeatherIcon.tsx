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

export const getWeatherIcon = (icon: string, isDay: boolean) => {
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
