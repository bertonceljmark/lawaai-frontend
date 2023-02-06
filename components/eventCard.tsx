import React from "react";
import Image from "next/image";

const EventCard = ({
  thumbnail = "",
  location = "",
  date = "",
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
    <div className="flex justify-center m-5 relative">
      <div className="group rounded-t-lg shadow-lg max-w-md relative w-96">
        <div
          className={`w-full rounded-lg bg-black/40 absolute hidden group-hover:flex backdrop-blur-lg  justify-center items-center`}
        />
        <div className="flex justify-center items-center relative">
          <Image
            onClick={onClick}
            className="rounded-t-lg"
            src={thumbnail}
            alt=""
            placeholder="blur"
            blurDataURL="data:..."
            width={384}
            height={384}
          />
        </div>
      </div>
      <div className="absolute bg-black/40 rounded-b-lg w-full bottom-0 backdrop-blur-3xl flex justify-center py-2 translate-y-full">
        <span className={`text-4xl text-white ${""}`}>
          {
            <span className="text-center w-full flex justify-center flex-col">
              <span className="text-center w-full">{location}</span>
              <span className="text-center w-full text-sm">
                {reformattedDate()}
              </span>
            </span>
          }
        </span>
      </div>
    </div>
  );
};

export default EventCard;
