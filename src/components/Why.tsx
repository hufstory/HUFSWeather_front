import React from "react";
import logo2 from "../assets/images/logo2.png";

const Why = () => {
  return (
    <div className="container mx-auto mt-[27px]">
      <div className="bg-white shadow-default rounded-today mx-5 text-[16px] leading-6 text-black justify-start items-center">
        <div className="flex py-2 pl-4">
          <img src={logo2} className="h-[20px]" />
          <div className="pl-2">Why?</div>
        </div>

        <div className="pb-4 pl-4">
          기상청이나 날씨 앱으로는 대학교 캠퍼스의 실질적인 기온을 알기 어렵고,
          매일 날씨 검색하는거 번거로우시죠?
          <br></br>
          저희 외상청은{" "}
          <span className="text-rose-600 font-GmarketMedium">
            캠퍼스 내의 날씨
          </span>
          를 제공하고,{" "}
          <span className="text-rose-600 font-GmarketMedium">추천코디</span>를
          통해 아침 준비시간을 절약할 수 있도록 기획하였습니다.
        </div>
      </div>
    </div>
  );
};
export default Why;
