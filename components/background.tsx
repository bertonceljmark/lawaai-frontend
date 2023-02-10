import React, { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const Background = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
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
        className="wrapper h-screen w-screen border text-white p-2 text-lg z-5 fixed blur-2xl"
      ></div>
    </>
  );
};

export default Background;
