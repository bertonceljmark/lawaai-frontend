import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem";
import MobileMenuItem from "./mobileMenuItem";

const Navbar = ({ isMobile = false }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = router.pathname.replace("/", "");

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [active]);

  if (!isMobile) {
    return (
      <nav className="right-0 left-0 m-auto p-0 w-ful pt-5 text-lg text-white top-0 gap-0 rounded-br-md rounded-bl-md backdrop-blur-md flex justify-between item-center absolute z-30">
        <div className="flex lg:min-w-0 flex-1 m-auto ml-20">
          <Link className="mx-5 h-20 w-20 relative" href={"/"}>
            <Image fill src="/media/lawaai-logo.png" alt="" />
          </Link>
        </div>
        <div className="right-0 left-0 m-auto pr-10 py-3text-lg text-white top-0 gap-0 flex justify-center item-center">
          <MenuItem name="home" active={active} />
          <MenuItem name="residents" active={active} />
          <MenuItem name="blog" active={active} />
          <MenuItem name="contact" active={active} />
          <MenuItem name="events" active={active} />
        </div>
      </nav>
    );
  }

  return (
    <nav className="backdrop-blur-md px-2 py-2.5 z-10 absolute w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <div className="h-10 w-10 relative">
            <Image
              src="/media/lawaai-logo.png"
              className="mr-3"
              alt="Lawaai Logo"
              fill
            />
          </div>
          <span className="self-center text-xl ml-2 font-semibold whitespace-nowrap text-white relative">
            Lawaai
          </span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 ${
            mobileMenuOpen && " bg-[#f1852c]"
          } focus:ring-transparent`}
        >
          <svg
            className={"w-6 h-6"}
            aria-hidden="true"
            viewBox="0 0 20 20"
            id="logo-nav"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full ${mobileMenuOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4">
            <MobileMenuItem name={"home"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"residents"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"blog"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"contact"} active={active}></MobileMenuItem>
            <MobileMenuItem name={"events"} active={active}></MobileMenuItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
