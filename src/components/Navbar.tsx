"use client"; // Add this at the top to make this a client-side component

import { bagg, logo, sellHand } from "@/assets/images";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGIN_URL, SIGNUP_URL } from "@/constants";
import { IoIosArrowDown } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  const currentPath = usePathname(); // Get router object
  const [openDrop, setOpenDrop] = useState<boolean>(false);
  return (
    <div className=" justify-start lgss:justify-center lgss:gap-24 xxxl:gap-44 items-center w-full flex">
      <Link
        href="/"
        className=" p-[18px] rounded-full lgss:border-2  lgss:border-[#3D3D3D] lgss:bg-[#141414] w-1/3 lgss:w-1/6 flex justify-center items-center"
      >
        <div>
          <Image src={logo} alt="logo" width={148} height={42} />
        </div>
      </Link>
      <div className="hidden lgss:flex lgss:border-2 lgss:border-[#3D3D3D] lgss:bg-[#141414] py-3 px-6 rounded-full  gap-12 justify-center items-center">
        <Link
          href="/"
          className={
            currentPath === "/" && !openDrop
              ? "text-secondary    text-[16px]  "
              : "text-white text-[14px]  "
          }
        >
          Home
        </Link>
        <div>
          <button
            onClick={() => setOpenDrop((prev) => !prev)}
            className={
              openDrop
                ? "text-secondary relative flex justify-center items-center gap-2  text-[16px]  "
                : "text-white flex justify-center items-center gap-2 text-[14px]  "
            }
          >
            Features
            <IoIosArrowDown />
          </button>
          {openDrop && (
            <Fade
              triggerOnce
              direction="down"
              className="absolute  w-3/12"
              duration={1500}
            >
              <div className="w-full  bg-[#111123] z-50 rounded-xl mt-4 py-4 px-3">
                <a
                  href={SIGNUP_URL}
                  target="_blank"
                  onClick={() => setOpenDrop((prev) => !prev)}
                  className="w-full flex justify-center items-center gap-4"
                >
                  <div className="w-[100px] h-[52px]  rounded-lg flex justify-center items-center border-2 border-[#161836] bg-[#101226]">
                    <Image src={bagg} alt="" />
                  </div>
                  <div>
                    <h4 className="text-gray-200 hover:text-white font-semibold text-[15px]">
                      Buy Digital assets
                    </h4>
                    <h4 className="text-secondary hover:text-gray-300 mt-1 font-semibold text-[13px]">
                      Purchase your favorite digital assets in seconds.
                    </h4>
                  </div>
                </a>
                <a
                  href={SIGNUP_URL}
                  target="_blank"
                  onClick={() => setOpenDrop((prev) => !prev)}
                  className="w-full flex justify-center mt-5 items-center gap-4"
                >
                  <div className="w-[100px] h-[52px] rounded-lg flex justify-center items-center border-2 border-[#161836] bg-[#101226]">
                    <Image src={sellHand} alt="" />
                  </div>
                  <div>
                    <h4 className="text-gray-200 hover:text-white font-semibold text-[15px]">
                      Sell Digital assets
                    </h4>
                    <h4 className="text-secondary hover:text-gray-300 mt-1 font-semibold text-[13px]">
                      Sell your digital assets quickly and receive funds
                      instantly.
                    </h4>
                  </div>
                </a>
              </div>
            </Fade>
          )}
        </div>
        <Link
          href="/about"
          className={
            currentPath === "/about" && !openDrop
              ? "text-secondary  text-[16px]  "
              : "text-white text-[14px]   "
          }
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={
            currentPath === "/contact" && !openDrop
              ? "text-secondary  text-[16px]  "
              : "text-white text-[14px]  "
          }
        >
          Contact Us
        </Link>
        <div className="hidden px-4 lgss:flex bg-[#454545] rounded-full py-3 items-center justify-center gap-4">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className=" hidden lgss:flex justify-center items-center  font-semibold     text-white text-[14px]"
          >
            Sign In
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            className=" flex justify-center items-center  font-bold text-[#5995FF] text-[14px]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
