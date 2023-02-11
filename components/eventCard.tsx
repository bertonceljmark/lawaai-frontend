import React from "react";
import Image from "next/image";

const EventCard = ({
  thumbnail = "",
  location = "",
  date = "",
  blurDataUrl = "",
  alt = "Event Thumbnail",
  onClick = () => {},
}) => {
  const reformattedDate = () => {
    const parsedDate = new Date(date);
    return (
      parsedDate.getDate() +
      "." +
      (Number(parsedDate.getMonth()) + 1) +
      "." +
      parsedDate.getFullYear()
    );
  };
  return (
    <div className="">
      <div className="cursor-pointer group">
        <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square">
          <Image
            onClick={onClick}
            style={{ objectFit: "cover" }}
            className="transition-all"
            src={thumbnail}
            sizes="80vw"
            fill
            alt={alt}
            placeholder="blur"
            blurDataURL={blurDataUrl}
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
            {location}
          </span>
        </h2>
        <div className="flex items-center mt-1 space-x-3 text-gray-500 dark:text-gray-400 justify-center">
          <time className="text-sm " dateTime={reformattedDate()}>
            {reformattedDate()}
          </time>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
