import Head from "next/head";
import HeroSection from "../components/heroSection";
import TeamSection from "../components/teamSection";

export default function Home() {
  return (
    <div className="relative max-w-screen h-full overflow-x-hidden scrollbar-hide">
      <Head>
        <title>Lawaai | Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"
        />
      </Head>
      <HeroSection></HeroSection>
      <TeamSection></TeamSection>
    </div>
  );
}
