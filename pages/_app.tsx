import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  const [windowDimension, setWindowDimension] = useState(0);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1024;

  return (
    <div className="relative max-w-screen h-full overflow-hidden">
      <Image
        className="absolute w-[70%] top-0 right-0 overflow-hidden z-0"
        src="/media/abstract-hero-art-1-cr.png"
        alt="abstrac art"
        priority
        width={2127}
        height={2894}
      />
      <Navbar isMobile={isMobile} />
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}
