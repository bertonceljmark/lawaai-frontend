import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <nav className="relative px-4 py-4 flex justify-between items-center backdrop-blur-md z-50">
        <Link className="h-10 w-10 relative" href={"/"}>
          <Image fill src="/media/lawaai-logo.png" alt="logo" />
        </Link>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <MenuItem name="home" active={active} />
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <MenuItem name="residents" active={active} />
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <MenuItem name="blog" active={active} />
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <MenuItem name="events" active={active} />
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <MenuItem name="contact" active={active} />
        </ul>

        <div className="py-2 px-6 w-full flex items-end justify-end">
          <Link className="ml-9" href="https://www.youtube.com/Lawaai">
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: "1.25rem", color: "white" }}
            />
          </Link>
          <Link className="ml-9" href="https://www.facebook.com/LawaaiEvents">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ fontSize: "1.25rem", color: "white" }}
            />
          </Link>
          <Link
            className="ml-9"
            href="https://www.instagram.com/lawaai.events/"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "1.25rem", color: "white" }}
            />
          </Link>
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
