import React from "react";
import DjCard from "./djCard";

const DjCardSection = () => {
  return (
    <>
      <DjCard
        instagram="https://www.instagram.com/nojicaljosa/"
        youtube="https://www.youtube.com/watch?v=yph7PxxyS_U"
        label="Alcho"
        imgPath="/media/res-alcho.jpg"
      />
      <DjCard
        label="Berti"
        imgPath="/media/res-berti.jpg"
        instagram="https://www.instagram.com/berti_x_/"
        website="https://berti.vip/"
        youtube="https://www.youtube.com/watch?v=iaCqT3zI5Io"
      />
      <DjCard
        label="Zihi"
        imgPath="/media/res-zihi.jpg"
        instagram="https://www.instagram.com/lovro_ziherl/"
      />
    </>
  );
};

export default DjCardSection;
