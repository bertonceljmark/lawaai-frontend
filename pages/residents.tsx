import React from "react";

import DjCardSection from "../components/djCardSection";
import { coolFont } from "../components/utils/fonts";

const Residents = () => {
  return (
    <div className="w-full min-h-screen flex flex-col flex-wrap items-center mt-10 justify-center relative 2xl:grid 2xl:grid-cols-2">
      <div className="flex justify-center w-full items-center p-3 flex-col mt-24 left-0 right-0 margin-auto">
        <div className="max-w-xl flex flex-col justify-center items-center rounded-xl">
          <div>
            <h1
              className={`text-7xl ${coolFont.className} text-[#f1852c] ml-8 mr-8 md:mt-8 md:mb-8`}
            >
              Lawaai DJ residents
            </h1>
          </div>
          <span className="max-w-xl ml-8 mr-8 md:mt-8 md:mb-8">
            <i>
              By definiton, DJ residents are DJs who have a regular, recurring
              gig at a specific venue or club. They are typically responsible
              for setting the tone and atmosphere of the venue on their
              designated nights. From an artistic standpoint, DJ residents can
              be seen as curators of sound, carefully selecting and mixing
              tracks to create a unique and engaging listening experience for
              their audience. All of our residents are carefully handpicked.
              Their main mission is upholding the event's musical standards to
              our guest's expectations.
            </i>
          </span>
        </div>
      </div>
      <div className="flex justify-center flex-col mt-24 max-w-[80%]">
        <DjCardSection />
      </div>
    </div>
  );
};

export default Residents;
