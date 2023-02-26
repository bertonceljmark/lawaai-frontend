import Head from "next/head";
import React from "react";

import DjCardSection from "../components/djCardSection";

const Residents = () => {
  return (
    <div className="mt-[3.5rem] lg:mt-0 min-h-screen">
      <Head>
        <title>Residents</title>
        <meta
          name="description"
          content={
            "Discover our talented DJ residents and the vibrant world of techno music through our residents page. Explore the work of our residents."
          }
        />

        {/* Schema.org metadata for Google */}
        <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://lawaai.vercel.app/residents"
        },
        "name": "Residents",
        "description": "Discover our talented DJ residents and the vibrant world of techno music through our residents page. Explore the work of our residents.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kranj",
          "addressRegion": "Gorenjska",
          "postalCode": "4000",
          "addressCountry": "Slovenia"
        },
        "sameAs": [
          "https://www.instagram.com/lawaai.events/",
          "https://www.youtube.com/Lawaai",
          "https://www.facebook.com/LawaaiEvents"
        ]
      }
    `}</script>

        {/* Open Graph metadata for Facebook and LinkedIn */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={"Residents"} />
        <meta
          property="og:description"
          content={
            "Discover our talented DJ residents and the vibrant world of techno music through our residents page. Explore the work of our residents."
          }
        />
        <meta
          property="og:url"
          content={"https://lawaai.vercel.app/residents"}
        />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={"Residents"} />
        <meta
          name="twitter:description"
          content={
            "Discover our talented DJ residents and the vibrant world of techno music through our residents page. Explore the work of our residents."
          }
        />
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
