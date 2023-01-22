import Link from "next/link";
import React from "react";
import Button from "./button";

const HeroSection = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center">
      <ul className="max-w-3xl top-0 bottom-0 m-8 md:ml-52">
        <li className="text-3xl md:text-6xl mb-3">Hi, they call us</li>
        <li className="text-6xl md:text-9xl mb-3 text-[#f1852c] font-gangsta">
          LAWAAI
        </li>
        <li className="text-xl md:text-4xl mb-3">
          We design and organize intimate techno events
        </li>
        <li className="mt-8">
          <Button label="Get in touch"></Button>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
