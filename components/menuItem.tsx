import Link from "next/link";
import React from "react";

const MenuItem = ({ name = "", active = "" }) => {
  return (
    <div
      className={`m-1 px-3 rounded-md bg-transparent flex justify-center item-center ${
        active == name || (active === "" && name === "home")
          ? "text-[#f1852c]"
          : "text-white"
      }`}
    >
      <Link className="" href={`/${name !== "home" ? name : ""}`}>
        <span className="text-3xl">{name.toUpperCase()}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
