import React from "react";
import AboutHeader from "../components/AboutHeader";
import Footer from "../components/Footer";
import What from "../components/What";
import Why from "../components/Why";
import Who from "../components/Who";

const AboutPage = () => {
  return (
    <div>
      <AboutHeader />
      <What />
      <Why />
      <Who />
      <Footer />
    </div>
  );
};

export default AboutPage;
