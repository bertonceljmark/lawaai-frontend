import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <Link href={instagram}>
              <Image
                width={64}
                height={64}
                alt="Instagram icon"
                className="m-3"
                src="/media/instagram-icon.png"
              />
            </Link>
          )}
          {soundcloud && (
            <Link href={soundcloud}>
              <Image
                width={64}
                height={64}
                alt="Soundcloud icon"
                className="m-3"
                src="/media/soundcloud-icon.png"
              />
            </Link>
          )}
          {website && (
            <Link href={website}>
              <Image
                width={64}
                height={64}
                alt="Website icon"
                className="m-3"
                src="/media/website-icon.png"
              />
            </Link>
          )}
          {youtube && (
            <Link href={youtube}>
              <Image
                width={64}
                height={64}
                alt="Youtube icon"
                className="m-3"
                src="/media/youtube-icon.png"
              />
            </Link>
          )}
        </div>
        <div className="flex justify-center items-center">
          <Image
            width={384}
            height={384}
            className="rounded-lg h-full"
            src={imgPath}
            alt="DJ cover"
          />
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
