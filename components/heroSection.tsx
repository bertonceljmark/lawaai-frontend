import Link from "next/link";
import React from "react";
import Button from "./button";

const HeroSection = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center lg:-translate-y-20">
      <ul className="w-full top-0 bottom-0 m-8 lg:max-w-3xlp-20 rounded-xl">
        <li className="text-center text-3xl md:text-6xl mb-9 text-white drop-shadow-lg">
          Hi, they call us
        </li>
        <li
          className={`text-center drop-shadow-lg text-7xl md:text-[170px] mb-9 md:my-12 text-[#f1852c]`}
        >
          <h1 className="coolFont drop-shadow-2xl">Lawaai</h1>
        </li>
        <li className="text-center text-2xl md:text-4xl mb-3 text-white drop-shadow-lg">
          <i>We design and organize intimate techno events</i>
        </li>
        <li className="text-center mt-20">
          <Link href="/contact">
            <Button label="Get in touch"></Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
