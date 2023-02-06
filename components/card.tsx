import React from "react";
import { coolFont } from "./utils/fonts";
import Image from "next/image";

const Card = ({
  label,
  info,
  imgPath,
}: {
  label: any;
  info: any;
  imgPath: any;
}) => {
  return (
    <div className="flex justify-center m-5">
      <div className="rounded-lg shadow-lg max-w-sm bg-white/30 backdrop-opacity-5">
        <div className="flex justify-center items-center p-5">
          <Image
            width={384}
            height={384}
            className="rounded-t-lg h-36"
            src={imgPath}
            alt=""
          />
        </div>
        <div className="p-6 bg-white/50 backdrop-opacity-5 min-h-[250px] rounded-lg">
          <h3 className="text-gray-900 text-3xl font-medium mb-2 text-center">
            <span className={coolFont.className}>{label}</span>
          </h3>
          <br></br>
          <p className="text-gray-700 text-base mb-4">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
