import React from "react";
import Header from "../components/Header";
import StyleRecommend from "../components/StyleRecommend";
import Today from "../components/Today";
import Weather from "../components/Weather";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Today />
      <Weather />
      <StyleRecommend />
    </div>
  )
}

export default MainPage