"use client";

import { hero2 } from "@/assets/images";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { policyContent } from "@/constants";
import PolicyTitle from "@/components/PolicyTitle";
import Privacy from "@/components/Privacy";
import { fadeInDown, fadeInUp } from "@/utils/animations";

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

  const allTitles = policyContent.map((section) => section.title);

  return (
    <div className="w-full lgss:min-h-screen">
      <div className="w-full pt-8 px-4 xs:px-6 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          transition={{ duration: 2 }}
        >
          <Navbar />
        </motion.div>
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[36px] mds:text-[48px] text-[#141D57] text-center font-bold">
              Privacy Policy
            </h4>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-[15px] mds:text-[18px] text-[#141D57]">
              Last Updated: September 8th, 2025.
            </h4>
          </motion.div>
        </div>
        <div className="w-full  lgss:w-full mx-auto mt-16">
          <div className="w-full pb-24 lgss:gap-12 flex gap-4 justify-center items-start mx-auto mt-8 text-white">
            <div className="hidden lgss:flex w-[23%] bg-[#191A27] border border-[#484848] rounded-xl p-4">
              <PolicyTitle
                titles={allTitles}
                activeTitle={activeTitle}
                onTitleClick={scrollToSectionFn!} // Pass scroll function
              />
            </div>
            <div className="lgss:w-[75%]">
              <Privacy
                onContentAtTop={handleContentAtTop}
                onScrollToSection={handleScrollToSection}
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
