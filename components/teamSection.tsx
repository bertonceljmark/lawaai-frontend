import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamSection = ({ name = "", active = "" }) => {
  return (
    <div className="container  px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-4xl w-full text-center text-white font-bold mb-32">
          Meet the team
        </h2>

        <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3 mb-[100px] md:mb-0">
          <div className="mb-24 md:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <Image
                    width={150}
                    height={150}
                    src="/media/team/aljosa_nojic.jpg"
                    alt=""
                    className="rounded-full mx-auto shadow-lg w-[150px] relative"
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Aljoša Nojič</h5>
                <p className="mb-6">DJ / Finance</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <Link href="https://www.instagram.com/nojicaljosa/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: "1.25rem" }}
                      className="text-[#180432] hover:text-[#3b235a]"
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-24 md:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <Image
                    className="rounded-full mx-auto shadow-lg w-[150px] relative"
                    width={150}
                    height={150}
                    src="/media/team/ana_stebe.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Ana Štebe</h5>
                <p className="mb-6">Design / Marketing</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <Link href="https://www.instagram.com/anastebe/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: "1.25rem" }}
                      className="text-[#180432] hover:text-[#3b235a]"
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <Image
                    width={150}
                    height={150}
                    src="/media/team/sasa_barrile.jpg"
                    alt=""
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Saša Barrile</h5>
                <p className="mb-6">Design / Marketing</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <Link href="https://www.instagram.com/sasabarrile/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: "1.25rem" }}
                      className="text-[#180432] hover:text-[#3b235a]"
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-6 md:mt-[100px]">
          <div className="col-span-1"></div>
          <div className="mb-24 md:mb-0 col-span-2">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <Image
                    className="rounded-full mx-auto shadow-lg w-[150px] relative"
                    width={150}
                    height={150}
                    src="/media/res-berti.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Mark Bertoncelj</h5>
                <p className="mb-6">DJ / Tehnician</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <Link href="https://www.instagram.com/berti_x_/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: "1.25rem" }}
                      className="text-[#180432] hover:text-[#3b235a]"
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="flex justify-center mt-[-75px]">
                  <Image
                    width={150}
                    height={150}
                    src="/media/team/pero.jpg"
                    alt=""
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Peter Fojkar</h5>
                <p className="mb-6">Technician</p>
                <ul className="list-inside flex mx-auto justify-center"></ul>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
