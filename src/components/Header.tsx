import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky mx-0 top-0 bg-sky-800 text-White">
      <div className="container h-[72px] mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <span className="text-2xl text-white ">외상청 | 한국외대 기상청</span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/aboutpage" className="mr-5 text-white hover:text-red-400">
            외상청이란?
          </Link>
        </nav>
      </div>
    </header>
  )
};

export default Header;
