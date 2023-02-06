import React from "react";
import Card from "./card";
import DjCard from "./djCard";

const DjCardSection = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col lg:flex-row flex-wrap">
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
          label="Yenko_o"
          imgPath="/media/res-yenko_o.jpg"
          youtube="https://www.youtube.com/watch?v=uNvpaTwqXgU"
          instagram="https://www.instagram.com/jjenko_o/"
          soundcloud="https://soundcloud.com/jan-jenko-396631917"
        />
        <DjCard
          label="Zihi"
          imgPath="/media/res-zihi.jpg"
          instagram="https://www.instagram.com/lovro_ziherl/"
        />
      </div>
    </div>
  );
};

export default DjCardSection;
