"use client"; // Add this at the very top of the file

import { hero2 } from "@/assets/images";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Privacy from "@/components/Privacy";
import Terms from "@/components/Terms";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Termss() {
  const [screen, setScreen] = useState<string>("terms");
  return (
    <div className="w-full">
      <div className="w-full pt-8 px-4 xs:px-6 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <Fade triggerOnce direction="down" duration={2000}>
          <Navbar />
        </Fade>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(183, 215, 255, 0.5), rgba(183, 215, 255, 0.5)), url(${hero2.src})`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full py-[170px] rounded-xl mt-6 lgss:mt-16 bg-[#B7D7FF] flex flex-col justify-center items-center"
        >
          <Fade triggerOnce direction="up">
            <h4 className="text-[36px] mds:text-[48px] text-[#141D57] text-center font-bold">
              {screen === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h4>
          </Fade>
          <Fade triggerOnce direction="up">
            <h4 className="text-[15px] mds:text-[18px] text-[#141D57] ">
              Last Updated: August 8th 2024
            </h4>
          </Fade>
        </div>
        <div className="w-full md:w-2/3 mx-auto mt-16">
          <div className="w-full lgss:w-3/5 lg:w1/2 mx-auto bg-[#1B1D3A] rounded-full h-[68px] px-4 flex justify-between gap-4 items-center">
            <button
              onClick={() => setScreen("privacy")}
              className={
                screen === "privacy"
                  ? "w-1/2 bg-[#3A66FF] py-2 rounded-full text-white font-semibold text-[15px] mds:text-[18px]"
                  : "w-1/2  py-2  text-white text-[15px] mds:text-[18px]"
              }
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setScreen("terms")}
              className={
                screen === "terms"
                  ? "w-1/2 bg-[#3A66FF] py-2 rounded-full text-white text-center font-semibold text-[15px] mds:text-[18px]"
                  : "w-1/2  py-2  text-white text-[15px] mds:text-[18px]"
              }
            >
              Terms of Service
            </button>
          </div>
          <div className="w-full lgss:w-4/5 pb-24 mx-auto mt-16 text-white">
            {screen === "privacy" ? <Privacy /> : <Terms />}
          </div>
        </div>
      </div>
      <Fade triggerOnce direction="up">
        <Footer />
      </Fade>
    </div>
  );
}
