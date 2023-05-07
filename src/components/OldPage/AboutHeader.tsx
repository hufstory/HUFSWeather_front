import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logoBlack.png"

const AboutHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-yellow-50 text-black font-GmarketSansMedium">
      <div className="container h-[100px] mx-auto grid place-items-center pt-6 md:flex-row items-center">
        <Link to="/" className="grid place-items-center leading-none flex-col w-[76px] h-[49px]">
          <img src={logo} className="h-[20px]" />
        {/*  <div className="text-[11px]">외상청</div> 
          <div className="text-[6px] text-[#505050]">외대 기상청</div> */}
        </Link>

        <nav className="flex items-center flex-col pb-10 pl-2 text-lg leading-none justify-center">
          <Link to="/aboutpage" className=" text-black hover:text-gray-600 ">
            외상청이란?
          </Link>
        </nav> 
      </div>
    </header>
  )
}

export default AboutHeader