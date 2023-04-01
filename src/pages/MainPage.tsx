import React from "react";
import Header from "../components/Header";
import StyleRecommend from "../components/StyleRecommend";
import Today from "../components/Today";
import Weather from "../components/Weather";
import Footer from "../components/Footer";
import Week from "../components/Week";

const MainPage = () => {
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

export default MainPage;
