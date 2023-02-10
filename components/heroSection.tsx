import Link from "next/link";
import React from "react";
import Button from "./button";
import { coolFont } from "./utils/fonts";

const HeroSection = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center lg:-translate-y-10">
      <ul className="w-full top-0 bottom-0 m-8 lg:max-w-3xlp-20 rounded-xl">
        <li className="text-center text-3xl  md:text-6xl mb-9 text-white">
          Hi, they call us
        </li>
        <li
          className={`text-center text-7xl md:text-[170px] mb-9 md:my-12 text-[#f1852c] ${coolFont.className}`}
        >
          <h1>Lawaai</h1>
        </li>
        <li className="text-center text-2xl md:text-4xl mb-3 text-white">
          <i>We design and organize intimate techno events</i>
        </li>
        <li className="text-center mt-20">
          <Button label="Get in touch"></Button>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
