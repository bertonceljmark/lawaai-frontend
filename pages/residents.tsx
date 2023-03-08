import Head from "next/head";
import React from "react";

import DjCardSection from "../components/djCardSection";

const Residents = () => {
  return (
    <div className="mt-[3.5rem] lg:mt-0 min-h-screen">
      <Head>
        <title>Residents | Lawaai</title>
        <meta name="title" content="Residents" />
        <meta
          name="description"
          content="This page showcases the talented DJ residents who perform at Lawaai's techno events. Learn more about the role of a DJ resident and explore our impressive lineup of resident DJs, each with their unique style and flair. Connect with your favorite resident DJs on social media and stay up-to-date with the latest techno sounds at Lawaai."
        />
        <meta
          name="keywords"
          content="lawaai residents, lawaai djs, lawaai dj residents, lawaai dj"
        />
        <meta property="og:url" content="https://lawaai.club/residents" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Residents" />
        <meta
          property="og:description"
          content="This page showcases the talented DJ residents who perform at Lawaai's techno events. Learn more about the role of a DJ resident and explore our impressive lineup of resident DJs, each with their unique style and flair. Connect with your favorite resident DJs on social media and stay up-to-date with the latest techno sounds at Lawaai."
        />
        <meta property="og:site_name" content="Lawaai" />
        <meta name="twitter:title" content="Residents" />
        <meta
          name="twitter:description"
          content="This page showcases the talented DJ residents who perform at Lawaai&#x27s techno events. Learn more about the role of a DJ resident and explore our impressive lineup of resident DJs, each with their unique style and flair. Connect with your favorite resident DJs on social media and stay up-to-date with the latest techno sounds at Lawaai."
        />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:alt" content="Residents" />
        {/* <script type="application/ld+json">
          {`&#x27@context&#x27: &#x27https://schema.org&#x27,
          &#x27@type&#x27: &#x27WebPage&#x27,
          &#x27name&#x27: &#x27Residents&#x27,
          &#x27description&#x27: &#x27This page showcases the talented DJ residents who perform at Lawaai&#x27s techno events. Learn more about the role of a DJ resident and explore our impressive lineup of resident DJs, each with their unique style and flair. Connect with your favorite resident DJs on social media and stay up-to-date with the latest techno sounds at Lawaai.&#x27,
          &#x27url&#x27: "https://lawaai.club/residents&#x27,
          &#x27mainEntityOfPage&#x27: {
            &#x27@type&#x27: &#x27WebPage&#x27,
            &#x27@id&#x27: &#x27https://lawaai.club/residents&#x27
          }`}
        </script> */}
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
