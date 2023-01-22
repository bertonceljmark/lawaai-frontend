import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem";
import MobileMenuItem from "./mobileMenuItem";

const Navbar = ({ isMobile }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = router.pathname.replace("/", "");

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [active]);

  if (!isMobile) {
    return (
      <nav className="right-0 left-0 m-auto p-0 w-ful pt-5 text-lg fixed text-white top-0 gap-0 rounded-br-md rounded-bl-md backdrop-blur-md flex justify-between item-center">
        <div
          className="flex lg:min-w-0 lg:flex-1 flex-1 m-auto ml-20"
          aria-label="Global"
        >
          <Link className="mx-5" href={"/"}>
            <img className="h-20" src="media/lawaai-logo.png" alt="" />
          </Link>
        </div>
        <div className="right-0 left-0 m-auto pr-10 py-3text-lg text-white top-0 gap-0 flex justify-center item-center">
          <MenuItem name="home" active={active} />
          <MenuItem name="about" active={active} />
          <MenuItem name="residents" active={active} />
          <MenuItem name="blog" active={active} />
          <MenuItem name="contact" active={active} />
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-primary px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="media/lawaai-logo.png"
            className="h-10 mr-3 sm:h-9"
            alt="Lawaai Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Lawaai
          </span>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:bg-[#852cf1] focus:ring-transparent"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 fill-primary hover:fill-secondary"
            aria-hidden="true"
            viewBox="0 0 20 20"
            id="logo-nav"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            mobileMenuOpen ? "" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <MobileMenuItem name={"home"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"about"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"residents"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"blog"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"contact"} active={active}></MobileMenuItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
