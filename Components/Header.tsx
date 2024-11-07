import React from "react";
import { Rye } from "next/font/google";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header>
      <nav className="bg-[#A29875] h-20">
        <div>
          <h1
            className={`${rye.className} text-[#FFFFFF] font-normal text-6xl`}
          >
            MANZZARI
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
