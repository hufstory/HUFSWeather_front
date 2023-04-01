import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import "./styles/tailwind.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App;
