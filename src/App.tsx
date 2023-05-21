import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MainPage } from "./pages/MainPage/MainPage";
import { Reset } from "styled-reset";


function App() {
  return (
    <div>
      <Reset />
      <Helmet>
        <title>외상청 | 한국외대 기상청</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
