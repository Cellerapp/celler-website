"use client";

import { hero2 } from "@/assets/images";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Terms from "@/components/Terms";
import TermsTitle from "@/components/TermsTitle";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { termsContent } from "@/constants";

export default function Termss() {
  const [activeTitle, setActiveTitle] = useState("");
  const [scrollToSectionFn, setScrollToSectionFn] = useState<
    ((title: string) => void) | null
  >(null);
  const handleContentAtTop = (title: string) => {
    setActiveTitle(title);
  };

  const handleScrollToSection = (fn: (title: string) => void) => {
    setScrollToSectionFn(() => fn);
  };

  const allTitles = termsContent.map((section) => section.title);

  return (
    <div className="w-full lgss:min-h-screen">
      <div className="w-full pt-8 px-4 xs:px-6 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]">
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
              Terms of Service
            </h4>
          </Fade>
          <Fade triggerOnce direction="up">
            <h4 className="text-[15px] mds:text-[18px] text-[#141D57]">
              Last Updated: January 13th, 2025.
            </h4>
          </Fade>
        </div>
        <div className="w-full  lgss:w-full mx-auto mt-16">
          <div className="w-full pb-24 lgss:gap-12 flex gap-4 justify-center items-start mx-auto mt-8 text-white">
            <div className="hidden lgss:flex w-[23%] bg-[#191A27] border border-[#484848] rounded-xl p-4">
              <TermsTitle
                titles={allTitles}
                activeTitle={activeTitle}
                onTitleClick={scrollToSectionFn!} // Pass scroll function
              />
            </div>
            <div className="lgss:w-[75%]">
              <Terms
                onContentAtTop={handleContentAtTop}
                onScrollToSection={handleScrollToSection}
              />
            </div>
          </div>
        </div>
      </div>
      <Fade triggerOnce direction="up">
        <Footer />
      </Fade>
    </div>
  );
}
