import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const DjCard = ({
  label = "",
  imgPath = "",
  instagram = "",
  soundcloud = "",
  website = "",
  youtube = "",
}) => {
  return (
    <div className="">
      <div className="group relative">
        <div
          className={`w-full h-full rounded-lg absolute hidden group-hover:flex z-20 justify-center items-center gap-10`}
        >
          {instagram && (
            <Link href={instagram}>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: "3rem", color: "white" }}
              />
            </Link>
          )}
          {soundcloud && (
            <Link href={soundcloud}>
              <FontAwesomeIcon
                icon={faSoundcloud}
                style={{ fontSize: "3rem", color: "white" }}
              />
            </Link>
          )}
          {website && (
            <Link href={website}>
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ fontSize: "3rem", color: "white" }}
              />
            </Link>
          )}
          {youtube && (
            <Link href={youtube}>
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: "3rem", color: "white" }}
              />
            </Link>
          )}
        </div>
        <div className="group-hover:blur-xl relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square">
          <Image
            width={500}
            height={500}
            className="rounded-lg h-full"
            src={imgPath}
            alt="DJ cover"
          />
        </div>
        <h2 className="mt-2 text-3xl font-semibold tracking-normal text-brand-primary text-white flex justify-center">
          <span
            className="bg-gradient-to-r from-purple-800 to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]
          text"
          >
            {label}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default DjCard;
