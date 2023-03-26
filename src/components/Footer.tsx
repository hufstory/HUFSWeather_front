import React from "react";

const Footer = () => {
  const CURRENT_DAY = new Date();
  const CURRENT_YEAR = CURRENT_DAY.getFullYear();

  return (
    <footer className=" text-white bottom-0 w-full font-GmarketLight ">
      <div className="bg-sky-900">
        <div className="container mx-auto pt-4 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm text-center sm:text-left font-GmarketMedium">
            © {CURRENT_YEAR} 외상청
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-sm font-GmarketLight">
            Come to HUFS, Meet the World!
          </span>
        </div>
        <div className="container mx-auto pb-4 flex flex-wrap flex-col sm:flex-row">
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-sm font-GmarketLight">
            외대를 만나면 세계가 보인다!
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
