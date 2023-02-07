import Link from "next/link";
import React from "react";
import Button from "./button";
import { coolFont } from "./utils/fonts";

const HeroSection = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center">
      <ul className="w-full top-0 bottom-0 m-8 lg:ml-52 lg:max-w-3xl">
        <li className="text-center text-3xl lg:text-left md:text-6xl mb-9 md:mb-5 text-white">
          Hi, they call us
        </li>
        <li
          className={`text-center text-7xl lg:text-left md:text-9xl mb-9 md:mb-5 text-[#f1852c] ${coolFont.className}`}
        >
          <h1>Lawaai</h1>
        </li>
        <li className="text-center text-2xl lg:text-left md:text-4xl mb-3 text-white">
          <i>We design and organize intimate techno events</i>
        </li>
        <li className="text-center lg:text-left mt-20">
          <Button label="Get in touch"></Button>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
