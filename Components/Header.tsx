import React from "react";
import {Rye} from "next/font/google"
const rye = Rye ({
  weight:'400',
  subsets:["latin"]},
  
)


const Header = () => {
  return (
    <div className="bg-[#A29875] h-[134px]">
      <h1 className={`${rye.className} text-[75px] text-[#FFFFFF] font-normal`}>MANZZARI</h1>
    </div>
  );
};

export default Header;
