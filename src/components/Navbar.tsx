"use client"; // Add this at the top to make this a client-side component

import { bagg, logo, sellHand } from "@/assets/images";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGIN_URL, SIGNUP_URL } from "@/constants";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { fadeInDown } from "@/utils/animations";

export default function Navbar() {
  const currentPath = usePathname(); // Get router object
  const [openDrop, setOpenDrop] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState<boolean>(false);

  return (
    <div className="justify-start lgss:justify-center lgss:gap-24 xxxl:gap-44 items-center w-full flex relative pt-4 lgss:pt-0">
      <Link
        href="/"
        className="pr-[10px] lgss:p-[18px] rounded-full lgss:border-2 lgss:border-[#3D3D3D] lgss:bg-[#141414] w-1/3 lgss:w-1/6 flex justify-center items-center"
      >
        <div>
          <Image src={logo} alt="logo" width={148} height={42} />
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lgss:hidden absolute right-0"
      >
        {mobileMenuOpen ? (
          <IoClose className="text-white text-2xl" />
        ) : (
          <HiMenuAlt3 className="text-white text-[32px]" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lgss:flex lgss:border-2 lgss:border-[#3D3D3D] lgss:bg-[#141414] py-3 px-6 rounded-full gap-12 justify-center items-center">
        <Link
          href="/"
          className={
            currentPath === "/" && !openDrop
              ? "text-secondary text-[16px]"
              : "text-white text-[14px]"
          }
        >
          Home
        </Link>
        <div>
          <button
            onClick={() => setOpenDrop((prev) => !prev)}
            className={
              openDrop
                ? "text-secondary relative flex justify-center items-center gap-2 text-[16px]"
                : "text-white flex justify-center items-center gap-2 text-[14px]"
            }
          >
            Features
            <IoIosArrowDown />
          </button>
          {openDrop && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInDown}
              transition={{ duration: 1.5 }}
              className="absolute w-3/12"
            >
              <div className="w-full bg-[#111123] z-50 rounded-xl mt-4 py-4 px-3">
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
            </motion.div>
          )}
        </div>
        <Link
          href="/about"
          className={
            currentPath === "/about" && !openDrop
              ? "text-secondary text-[16px]"
              : "text-white text-[14px]"
          }
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={
            currentPath === "/contact" && !openDrop
              ? "text-secondary text-[16px]"
              : "text-white text-[14px]"
          }
        >
          Contact Us
        </Link>
        <div className="hidden px-4 lgss:flex bg-[#454545] rounded-full py-3 items-center justify-center gap-4">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden lgss:flex justify-center items-center font-semibold text-white text-[14px]"
          >
            Sign In
          </a>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center font-bold text-[#5995FF] text-[14px]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lgss:hidden absolute top-full left-0 right-0 bg-[#111123] border-2 border-[#3D3D3D] rounded-xl mt-4 py-6 px-4 z-50 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col gap-6">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={
                currentPath === "/"
                  ? "text-secondary text-[16px] font-semibold transition-colors duration-200"
                  : "text-white text-[16px] hover:text-secondary transition-colors duration-200"
              }
            >
              Home
            </Link>

            {/* Features Dropdown */}
            <div>
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="text-white flex justify-between items-center gap-2 text-[16px] w-full text-left hover:text-secondary transition-colors duration-200"
              >
                <span>Features</span>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    mobileFeaturesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileFeaturesOpen && (
                <div className="mt-4 space-y-3 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={SIGNUP_URL}
                      target="_blank"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-[#161836] bg-gradient-to-r from-[#101226] to-[#1a1a3a] hover:border-[#3A66FF] transition-all duration-300 group"
                    >
                      <div className="w-[50px] h-[40px] rounded-lg flex justify-center items-center border-2 border-[#161836] bg-[#101226] group-hover:border-[#3A66FF] transition-all duration-300">
                        <Image
                          src={bagg}
                          alt=""
                          width={20}
                          height={20}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-200 font-semibold text-[14px] group-hover:text-white transition-colors duration-200">
                          Buy Digital assets
                        </h4>
                        <h4 className="text-secondary mt-1 font-medium text-[12px] group-hover:text-[#9C9DCE] transition-colors duration-200">
                          Purchase your favorite digital assets in seconds.
                        </h4>
                      </div>
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <a
                      href={SIGNUP_URL}
                      target="_blank"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-[#161836] bg-gradient-to-r from-[#101226] to-[#1a1a3a] hover:border-[#3A66FF] transition-all duration-300 group"
                    >
                      <div className="w-[50px] h-[40px] rounded-lg flex justify-center items-center border-2 border-[#161836] bg-[#101226] group-hover:border-[#3A66FF] transition-all duration-300">
                        <Image
                          src={sellHand}
                          alt=""
                          width={20}
                          height={20}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-200 font-semibold text-[14px] group-hover:text-white transition-colors duration-200">
                          Sell Digital assets
                        </h4>
                        <h4 className="text-secondary mt-1 font-medium text-[12px] group-hover:text-[#9C9DCE] transition-colors duration-200">
                          Sell your digital assets quickly and receive funds
                          instantly.
                        </h4>
                      </div>
                    </a>
                  </motion.div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={
                currentPath === "/about"
                  ? "text-secondary text-[16px] font-semibold transition-colors duration-200"
                  : "text-white text-[16px] hover:text-secondary transition-colors duration-200"
              }
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={
                currentPath === "/contact"
                  ? "text-secondary text-[16px] font-semibold transition-colors duration-200"
                  : "text-white text-[16px] hover:text-secondary transition-colors duration-200"
              }
            >
              Contact Us
            </Link>

            {/* Sign In/Sign Up Buttons */}
            <div className="flex flex-col gap-3 pt-6 border-t border-[#3D3D3D]">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center items-center font-semibold text-white text-[14px] py-3 px-6 bg-gradient-to-r from-[#454545] to-[#555555] hover:from-[#555555] hover:to-[#666666] rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign In
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center items-center font-bold text-[#5995FF] text-[14px] py-3 px-6 bg-gradient-to-r from-[#454545] to-[#555555] hover:from-[#555555] hover:to-[#666666] rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
