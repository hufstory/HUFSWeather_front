import React from "react";
import logo3 from "../../assets/images/logo3.png";

const Who = () => {
  return (
    <div className="container mx-auto mt-[27px]">
      <div className="bg-white shadow-default rounded-today mx-5 text-[16px] leading-6 text-black justify-start items-center">
        <div className="flex py-2 pl-4">
          <img src={logo3} className="h-[20px]" />
          <div className="pl-2">Who?</div>
        </div>

        <div className="pb-4 pl-4">
          PM: 신웅비
          <br></br>
          FrontEnd: 김현아 & 이교은 & 임동혁
          <br></br>
          BackEnd: 노기연 & 전승재
          <br></br>
          Design: 김연주
        </div>
      </div>
    </div>
  );
};
export default Who;
