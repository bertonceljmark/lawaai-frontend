import Head from "next/head";
import React from "react";

import DjCardSection from "../components/djCardSection";

const Residents = () => {
  return (
    <div className="mt-[3.5rem] md:mt-0 min-h-screen">
      <Head>
        <title>Lawaai | Residents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg text-white">
        <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Lawaai residents
        </h1>
        <div className="text-justify">
          <p className="mt-2 text-lg">
            By definiton, DJ residents are DJs who have a regular, recurring gig
            at a specific venue or club. They are typically responsible for
            setting the tone and atmosphere of the venue on their designated
            nights. From an artistic standpoint, DJ residents can be seen as
            curators of sound, carefully selecting and mixing tracks to create a
            unique and engaging listening experience for their audience. All of
            our residents are carefully handpicked. Their main mission is
            upholding the event's musical standards to our guest's expectations.
          </p>
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2">
          <DjCardSection />
        </div>
      </div>
    </div>
  );
};

export default Residents;
