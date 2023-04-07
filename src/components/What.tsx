import React from "react";
import logo1 from "../assets/images/logo1.png";

const What = () => {
  return (
    <div className="container mx-auto mt-[27px]">
      <div className="bg-white shadow-default rounded-today mx-5 text-[16px] leading-6 text-black justify-start items-center">
        <div className="flex py-2 pl-4">
          <img src={logo1} className="h-[20px]" />
          <div className="pl-2">What?</div>
        </div>

        <div className="pb-4 pl-4">
          <span className="text-rose-600 font-GmarketMedium">외상청</span>은
          "한국
          <span className="text-rose-600 font-GmarketMedium">외</span>
          국어대학교 기
          <span className="text-rose-600 font-GmarketMedium">상청</span>"의
          준말로,
          <br></br>
          서울 캠퍼스와 글로벌 캠퍼스의 날씨 정보를 간단명료하게 전달해드려요.
          <br></br>
          외상청에서 오늘의 추천코디를 통해 여러분들의 준비시간을
          단축시켜보세요!
        </div>
      </div>
    </div>
  );
};
export default What;
