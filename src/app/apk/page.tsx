"use client";

import { hero3, logo } from "@/assets/images";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadApk = async () => {
    setIsLoading(true);
    try {
      // The APK file is in the public folder
      const filePath = "/cryptpay-7th-Jan.apk"; // Replace with your APK file name
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error("Failed to download the APK file.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Cryptpay.apk"; // Replace with the desired file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the APK file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${hero3.src})`,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        className="w-full  px-4 bg-cover xs:px-6 flex min-h-screen flex-col items-center justify-center mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]"
      >
        {isLoading ? (
          <div className="w-full">
            <div className="flex justify-center items-center">
              <ClipLoader color="#3A66FF" size={60} />
            </div>
            <h4 className="font-semibold text-white text-center text-[15px] xs:text-[18px] mds:text-[24px] mt-4">
              Hold on while your Apk downloads
            </h4>
          </div>
        ) : (
          <>
            <div>
              <Image src={logo} alt="logo" />
            </div>
            <h4 className="font-semibold text-white text-center text-[25px] xs:text-[30px] mds:text-[45px] xxxl:text-[60px] mt-4">
              DOWNLOAD APK FILE
            </h4>
            <button
              className="px-4 rounded-xl bg-[#3A66FF] text-white text-[14px] mt-4 py-2"
              onClick={downloadApk}
            >
              Download Apk
            </button>
            <Link href="/">
              <button className="text-gray-50 hover:text-primary text-[14px] mt-4">
                Visit Website
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
