"use client"; // Add this at the top to make this a client-side component

import { bagg, logo, sellHand } from "@/assets/images";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGIN_URL, SIGNUP_URL } from "@/constants";
import { MdArrowDropDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  const currentPath = usePathname(); // Get router object
  const [openDrop, setOpenDrop] = useState<boolean>(false);
  return (
    <div className=" justify-between items-center w-full flex">
      <Link href="/">
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <div className="hidden lgss:flex  gap-12 justify-center items-start">
        <Link
          href="/"
          className={
            currentPath === "/"
              ? "text-secondary border-b border-secondary text-[16px] py-3 "
              : "text-secondary text-[16px] py-3 "
          }
        >
          Home
        </Link>
        <div>
          <button
            onClick={() => setOpenDrop((prev) => !prev)}
            className={
              openDrop
                ? "text-secondary relative flex justify-center items-center gap-2 border-b border-secondary text-[16px] py-3 "
                : "text-secondary flex justify-center items-center gap-2 text-[16px] py-3 "
            }
          >
            Features
            <MdArrowDropDown />
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
                  <div className="w-[100px] h-[52px] rounded-lg flex justify-center items-center border-2 border-[#161836] bg-[#101226]">
                    <Image src={bagg} alt="" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[15px]">
                      Buy Crypto
                    </h4>
                    <h4 className="text-secondary mt-1 font-semibold text-[13px]">
                      Purchase your favorite cryptocurrencies in seconds.
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
                    <h4 className="text-white font-semibold text-[15px]">
                      Sell Crypto
                    </h4>
                    <h4 className="text-secondary mt-1 font-semibold text-[13px]">
                      Sell your crypto quickly and receive funds instantly.
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
            currentPath === "/about"
              ? "text-secondary border-b border-secondary text-[16px] py-3 "
              : "text-secondary text-[16px] py-3 "
          }
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={
            currentPath === "/contact"
              ? "text-secondary border-b border-secondary text-[16px] py-3 "
              : "text-secondary text-[16px] py-3 "
          }
        >
          Contact Us
        </Link>
      </div>
      <div className="flex w-1/2 items-center justify-end lgss:w-[22%] gap-4">
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 hidden lgss:flex justify-center items-center  h-[46px] rounded-lg border border-secondary text-secondary text-[16px]"
        >
          Sign In
        </a>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 flex justify-center items-center h-[46px] rounded-lg bg-primary text-white text-[16px]"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
