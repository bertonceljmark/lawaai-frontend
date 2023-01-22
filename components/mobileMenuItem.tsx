import Link from "next/link";
import React from "react";

const MobileMenuItem = ({ name, active }) => {
  return (
    <li>
      <Link className="" href={`/${name !== "home" ? name : ""}`}>
        <span
          className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent ${
            active == name || (active === "" && name === "home")
              ? "bg-secondary md:text-[#852cf1]"
              : "bg-primary"
          }`}
        >
          {name.toUpperCase()}
        </span>
      </Link>
    </li>
  );
};

export default MobileMenuItem;
