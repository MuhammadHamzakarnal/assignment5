import React from "react";
import { Rye } from "next/font/google";

const rye = Rye({
  weight: '400',
  subsets: ["latin"]
});

const Header = () => {
  return (
    <div style={{ height: '134px' }} className="bg-[#A29875]">
      <h1
        className={`${rye.className} text-[#FFFFFF] font-normal`}
        style={{ fontSize: '75px' }} 
      >
        MANZZARI
      </h1>
    </div>
  );
};

export default Header;
