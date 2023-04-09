import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyleRecommend from "../components/StyleRecommend";

import Today from "../components/weather/Today";
import Weather from "../components/weather/Weather";
import Week from "../components/weather/Week";

const MainPageOld = () => {
  return (
    <div>
      <Header />
      <Today />
      <Weather />
      <Week />
      <StyleRecommend />
      <Footer />
    </div>
  );
};

export default MainPageOld;
