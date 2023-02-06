import React from "react";
import { coolFont } from "./utils/fonts";

const DjCard = ({
  label = "",
  imgPath = "",
  instagram = "",
  soundcloud = "",
  website = "",
  youtube = "",
}) => {
  return (
    <div className="flex justify-center m-5 aspect-square relative">
      <div className="group rounded-lg shadow-lg relative w-full lg:w-64">
        <div
          className={`w-full h-full rounded-lg bg-black/40 absolute hidden group-hover:flex backdrop-blur-lg  justify-center items-center`}
        >
          {instagram && (
            <a href={instagram}>
              <img className="m-3" src="media/instagram-icon.png" />
            </a>
          )}
          {soundcloud && (
            <a href={soundcloud}>
              <img className="m-3" src="media/soundcloud-icon.png" />
            </a>
          )}
          {website && (
            <a href={website}>
              <img className="m-3" src="media/website-icon.png" />
            </a>
          )}
          {youtube && (
            <a href={youtube}>
              <img className="m-3" src="media/youtube-icon.png" />
            </a>
          )}
        </div>
        <div className="flex justify-center items-center">
          <img className="rounded-lg h-full" src={imgPath} alt="DJ-cover" />
          <div className="absolute bg-black/40 rounded-b-lg w-full bottom-0 backdrop-blur-3xl flex justify-center py-2">
            <b>
              <span className={`text-4xl text-[#f1852c]`}>{label}</span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DjCard;
