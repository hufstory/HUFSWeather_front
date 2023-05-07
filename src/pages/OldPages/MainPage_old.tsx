import React from "react";
import Header from "../../components/OldPage/Header";
import Today from "../../components/OldPage/weather/Today";
import Weather from "../../components/OldPage/weather/Weather";
import Week from "../../components/OldPage/weather/Week";
import StyleRecommend from "../../components/OldPage/StyleRecommend";
import Footer from "../../components/OldPage/Footer";

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
