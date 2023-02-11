import Head from "next/head";
import HeroSection from "../components/heroSection";
import TeamSection from "../components/teamSection";

export default function Home() {
  return (
    <div className="relative max-w-screen h-full overflow-x-hidden scrollbar-hide">
      <Head>
        <title>Lawaai | Home</title>
      </Head>
      <HeroSection></HeroSection>
      <TeamSection></TeamSection>
    </div>
  );
}
