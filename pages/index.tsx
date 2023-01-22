import Head from "next/head";
import Image from "next/image";
import CardSection from "../components/cardSection";
import HeroSection from "../components/heroSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lawaai | Home</title>
      </Head>
      <HeroSection></HeroSection>
      <CardSection></CardSection>
    </>
  );
}
