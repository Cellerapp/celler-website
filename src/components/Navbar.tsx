"use client"; // Add this at the top to make this a client-side component

import { logo } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname(); // Get router object
  return (
    <div className=" justify-between items-center w-full flex">
      <Link href="/">
        <div>
          <Image src={logo} alt="logo" />
        </div>
      </Link>
      <div className="hidden lgss:flex  gap-12 justify-center items-center">
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
        {/* <Link href="" className="text-secondary text-[16px] py-3 ">
          Features
        </Link> */}
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
        <button className="w-1/2 hidden lgss:flex justify-center items-center  h-[46px] rounded-lg border border-secondary text-secondary text-[16px]">
          Sign In
        </button>
        <button className="w-1/2  h-[46px] rounded-lg bg-primary text-white text-[16px]">
          Sign Up
        </button>
      </div>
    </div>
  );
}
