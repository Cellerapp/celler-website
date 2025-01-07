"use client"; // Add this at the very top of the file

import { hero3, logo } from "@/assets/images";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${hero3.src})`,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        className="w-full pt-8 px-4 bg-cover xs:px-6 flex min-h-screen flex-col items-center justify-center   mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]"
      >
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <h4 className="font-semibold text-white text-center text-[25px] xs:text-[30px]  mds:text-[45px] xxxl:text-[60px] mt-4">
          DOWNLOAD APK FILE
        </h4>
        <button className="px-4 rounded-xl  bg-[#3A66FF] text-white text-[14px] mt-4  py-2">
          Download Apk
        </button>
        <Link href="/">
          <button className=" text-gray-50 hover:text-primary text-[14px] mt-4 ">
            Visit Website
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
