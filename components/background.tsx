import React, { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import halo from "./vanta/halo";

const Background = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        halo({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: "#180432",
          THREE: THREE,
        })
      );
    }
    return () => {
      console.log(vantaEffect);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div
        ref={myRef}
        className="h-screen w-screen text-white p-2 text-lg z-5 blur-2xl absolute"
      ></div>
    </>
  );
};

export default Background;
