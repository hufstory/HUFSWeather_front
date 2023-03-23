import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-sky-900 text-White">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="md:ml-5 text-2xl text-white">HUFSWeather</span>
      </div>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/aboutpage" className="mr-5 text-white hover:text-red-400">
          외상청이란?
        </Link>
      </nav>
    </header>
  );
};

export default Header;
