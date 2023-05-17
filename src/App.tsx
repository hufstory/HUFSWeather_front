import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import { Helmet } from "react-helmet";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <div>
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
