import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Transition from "../components/transition";
import Router from "next/router";
import PageLoader from "../components/pageLoader";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Background from "../components/background";
import Script from "next/script";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const [windowDimension, setWindowDimension] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

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
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XX542EXJDR"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XX542EXJDR', {
            page_path: window.location.pathname,
          });
           `,
        }}
      />
      {loading && <PageLoader></PageLoader>}
      <div className="relative max-w-screen h-full overflow-hidden">
        {!isMobile && <Background />}
        <Navbar isMobile={isMobile} />

        <Transition>{<Component {...pageProps} />}</Transition>
        <Footer></Footer>
      </div>
    </>
  );
}
