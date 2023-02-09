import Link from "next/link";
import React from "react";

const MenuItem = ({ name = "", active = "" }) => {
  return (
    <li
      className={`${
        active == name || (active === "" && name === "home")
          ? `bg-gradient-to-r from-purple-800 to-purple-900
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          bg-[length:100%_3px]
          text `
          : `bg-gradient-to-r from-gray-400 to-gray-100
          bg-[length:0px_3px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]
          text `
      }`}
    >
      <Link
        className="text-lg text-white hover:text-gray-200"
        href={`/${name !== "home" ? name : ""}`}
      >
        {name.toUpperCase()}
      </Link>
    </li>
  );
};

export default MenuItem;
