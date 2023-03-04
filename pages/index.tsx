import Head from "next/head";
import HeroSection from "../components/heroSection";
import TeamSection from "../components/teamSection";

export default function Home() {
  return (
    <div className="relative max-w-screen h-full overflow-x-hidden scrollbar-hide">
      <title>Lawaai | Home</title>
      <meta
        name="description"
        content="Lawaai is a techno music events platform that hosts events with top DJs and producers from around the world. Stay up-to-date with our latest events, book tickets, and get in touch with us."
      />
      <meta
        name="keywords"
        content="lawaai, techno events, music events, techno parties, music parties, electronic music events, techno festivals, techno concerts, techno DJs, techno producers"
      />
      <meta name="author" content="Lawaai" />
      <meta property="og:title" content="Lawaai | Home" />
      <meta
        property="og:description"
        content="Lawaai is a techno music events platform that hosts events with top DJs and producers from around the world. Stay up-to-date with our latest events, book tickets, and get in touch with us."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lawaai.club/" />
      <meta name="twitter:title" content="Lawaai | Home" />
      <meta
        name="twitter:description"
        content="Lawaai is a techno music events platform that hosts events with top DJs and producers from around the world. Stay up-to-date with our latest events, book tickets, and get in touch with us."
      />
      <script type="application/ld+json">
        {`
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lawaai",
          "url": "https://lawaai.club/",
          "description": "Lawaai is a techno music events platform that hosts events with top DJs and producers from around the world."
    `}
      </script>
      <HeroSection></HeroSection>
      <TeamSection></TeamSection>
    </div>
  );
}
