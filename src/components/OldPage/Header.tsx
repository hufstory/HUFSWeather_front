import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoBlack.png";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-white text-black font-GmarketSansLight">
      <div className="container h-[100px] mx-auto flex flex-wrap px-2 py-10 md:flex-row items-center">
        <Link to="/" className="flex items-center flex-col w-[76px] h-[49px]">
          <img alt="" src={logo} className="h-[20px]" />
          <div className="text-[11px]">외상청</div>
          <div className="text-[6px] text-[#505050]">외대 기상청</div>
        </Link>
        <nav className="md:ml-auto ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/aboutpage" className="mr-5 text-black hover:text-gray-600 font-GmarketSansMedium">
            외상청이란?
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
