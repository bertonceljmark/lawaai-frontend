import Head from "next/head";
import CardSection from "../components/cardSection";
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
      {/* <CardSection></CardSection> */}
    </div>
  );
}
