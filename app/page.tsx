import React from "react";
import Header from "@/Components/Header";
import Image from "next/image";
import {Libre_Bodoni} from 'next/font/google'
const libre = Libre_Bodoni ({subsets:["latin"]})

const Homepage = () => {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12 mt-72">
          <h1 className={`${libre.className} text-[40px] font-bold`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className={`${libre.className} text-[30px] font-medium`}>
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className={`${libre.className} bg-[#A29875] rounded-[10px] p-[10px] gap[10px] font-medium text-3xl text-[#FFFFFF]`}>
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center mt-56">
          <Image
            src={"/Image/img.jpg"}
            alt="Jewellary image"
            width={442}
            height={611}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
