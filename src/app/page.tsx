"use client"; // Add this at the very top of the file

import {
  appSt,
  appStore,
  buyPhone,
  cellerC,
  cellerD,
  cellerT,
  customer,
  darkAppStore,
  darkPlayStore,
  dPhone,
  hero1,
  iphoneHand,
  kycPhone,
  lock,
  payoutPhone,
  playSt,
  playStore,
  rateSwap,
  sellPhone,
  thunder,
  transformBg,
} from "@/assets/images";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { messages, SIGNUP_URL } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoAdd, IoRemove } from "react-icons/io5";

import QRCode from "react-qr-code";
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // Delay each child for a smoother effect
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delays appearance of each child
      delayChildren: 0.5,
    },
  },
};

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const progressVariant = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const fadeInS = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const scaleUpS = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const progressVariantS = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Home() {
  // const []
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [message, setMessage] = useState<number>(1);
  const [howTo, setHowTo] = useState<number>(1);

  const toggleQuestion = (questionNumber: number) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === questionNumber ? null : questionNumber
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage((prevMessage) => (prevMessage % 4) + 1);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [setMessage]); //

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate the message
      setHowTo((prevMessage) => (prevMessage % 3) + 1);
    }, 7000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={`  w-full`}>
      <div
        style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
        className="w-full pt-4 mds:pt-8 px-4 xs:px-6 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
        </motion.div>

        <div className="mt-10 lgss:mt-24 w-full flex flex-col gap-16 lgss:gap-6">
          <div className="w-full lgss:px-44">
            <motion.h2
              className="text-center text-[32px] md:text-[38px] lgss:text-[40px] font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Trade and Manage Digital Assets That Coins Your Dreams.
            </motion.h2>

            <motion.h4
              className="text-center mt-3 text-[15px] mds:text-[17px] lgss:text-[18px] text-secondary mx-auto w-11/12 lgss:w-10/12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Buy, sell, swap, and manage your digital asset all in one app.
              Enjoy seamless transactions, create and secure your dream
              portfolio on Celler.
            </motion.h4>

            <motion.div
              className="w-10/12 mds:w-1/2 gap-6 mt-10 lgss:hidden flex items-center mx-auto justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image src={playStore} className="w-1/2" alt="" />
              <Image src={appStore} className="w-1/2" alt="" />
            </motion.div>

            <motion.div
              className="hidden lgss:flex w-1/2 gap-4 rounded-2xl p-4 mx-auto border border-dashed bg-[#04040D] border-[#F5B546] shadow-[#FFBC6C52] shadow-lg mt-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <QRCode value="" bgColor="#FFFFFF" fgColor="#000000" size={95} />
              <div>
                <h4 className="text-center lgss:text-left text-white text-[14px]">
                  Scan to download app. Available on Appstore and Playstore.
                </h4>
                <div className="flex mt-2 gap-2 justify-start items-center">
                  <Image src={appSt} alt="" />
                  <Image src={playSt} alt="" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-10/12 mx-auto mds:w-9/12 md:w-8/12 mt-12 lgss:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <Image src={iphoneHand} className="w-full" alt="" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-[#0C0D1D] py-16 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]"
      >
        {/* Title */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="w-4/5 lgss:w-2/5 mx-auto text-center"
        >
          <motion.h2 className="text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
            How It Works
          </motion.h2>
          <motion.h4
            variants={fadeIn("up", 0.4)}
            className="mt-3 text-[14px] lgss:text-[16px] text-secondary"
          >
            Discover how easy it is to start your digital assets journey in less
            than 10 minutes using these three simple steps.
          </motion.h4>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col-reverse lgss:flex-row justify-center items-end w-full mt-12 mx-auto lgss:gap-24 gap-6">
          {/* Left Section - Step Info */}
          <div className="w-10/12 mx-auto lgss:mx-0 lgss:w-1/2">
            <motion.h4
              variants={scaleUp}
              className="hidden lgss:flex font-bold text-[100px] text-white"
            >
              0{howTo}
            </motion.h4>

            {/* Progress Bars */}
            <div className="w-full px-4 lgss:px-0 mt-4 lgss:mt-0 flex justify-center items-center gap-4 lgss:gap-6">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  variants={progressVariant}
                  className={`h-[3px] w-1/3 rounded-full ${
                    howTo === step ? "bg-[#1B4CF5]" : "bg-[#3D4B59]"
                  }`}
                ></motion.div>
              ))}
            </div>

            {/* Step Title & Description */}
            <motion.div variants={fadeIn("up", 0.6)} className="mt-6">
              <h4 className="text-center lgss:text-left text-[20px] lgss:text-[24px] font-semibold text-white">
                {howTo === 1
                  ? "Download the Celler app"
                  : howTo === 2
                  ? "Create your Celler account"
                  : "Start Buying & Selling Crypto"}
              </h4>
              <h4 className="text-center lgss:text-left text-[16px] lgss:text-[18px] mt-2 text-[#D4DBE2]">
                {howTo === 1
                  ? "Get started by downloading the Celler app and begin your Trading with ease"
                  : howTo === 2
                  ? "Set up your Celler account effortlessly and get started in no time."
                  : "Easily buy and sell cryptocurrency in a secure and seamless way."}
              </h4>
            </motion.div>
          </div>

          {/* Right Section - Image */}
          <motion.div
            variants={scaleUp}
            className="w-10/12 mx-auto pt-10 lgss:pt-20 gap-6 lgss:gap-0 lgss:w-1/2 rounded-xl flex flex-col justify-center items-start bg-[#1B1E3E]"
          >
            <h4 className="lgss:hidden font-bold text-[40px] pl-4 text-white">
              0{howTo}
            </h4>
            <motion.div variants={fadeIn("up", 0.8)}>
              <Image
                src={howTo === 2 ? cellerC : howTo === 1 ? cellerD : cellerT}
                className="w-full"
                alt="Step illustration"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="bg-[#0C0D1D] py-10 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Title & Description */}
        <motion.div
          className="w-4/5 lgss:w-2/5 mx-auto"
          variants={fadeInS("up", 0.2)}
        >
          <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
            Features
          </h2>
          <h4 className="text-center mt-3 text-[14px] lgss:text-[16px] text-secondary">
            Celler simplifies your journey, providing all the tools you need to
            navigate digital assets with ease.
          </h4>
        </motion.div>

        {/* Main Content */}
        <div className="w-full flex flex-col lgss:flex-row justify-start items-center mt-20 lgss:mt-28 gap-6">
          {/* Sidebar Options */}
          <div className="hidden lgss:flex justify-center items-start lgss:w-1/2">
            <motion.div className="flex flex-col gap-16 justify-start items-start">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className="cursor-pointer lgss:w-4/5 "
                  onClick={() => setMessage(msg.id)}
                  variants={fadeInS("up", 0.2)}
                  whileHover={{ scale: 1.05 }} // Subtle hover effect
                >
                  <div
                    className={`transition-all duration-300 ${
                      message === msg.id
                        ? "bg-[#191A27] rounded-xl px-3 py-5 border-b border-primary"
                        : ""
                    }`}
                  >
                    <h4 className="text-left text-[20px] font-semibold text-white">
                      {msg.title}
                    </h4>
                    <h4 className="text-left text-[16px] mt-2 text-secondary pr-6">
                      {msg.description}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Animated Image Section */}
          <motion.div
            className="w-10/12 mx-auto py-10 lgss:py-20 lgss:w-[45%] rounded-xl flex justify-center items-center bg-[#101226]"
            variants={scaleUpS}
          >
            <motion.div key={message} variants={fadeInS("up", 0.5)}>
              <Image
                src={
                  message === 2
                    ? sellPhone
                    : message === 1
                    ? buyPhone
                    : message === 3
                    ? payoutPhone
                    : message === 4
                    ? kycPhone
                    : ""
                }
                className="w-full"
                alt="Feature Image"
              />
            </motion.div>
          </motion.div>

          {/* Mobile Progress Indicators */}
          <div className="w-10/12 lgss:hidden">
            <div className="w-full px-4 mt-4 flex justify-center items-center gap-4">
              {[1, 2, 3, 4].map((step) => (
                <motion.div
                  key={step}
                  className={`h-[3px] w-1/3 rounded-full ${
                    message === step ? "bg-[#1B4CF5]" : "bg-[#3D4B59]"
                  }`}
                  variants={progressVariantS}
                ></motion.div>
              ))}
            </div>

            {/* Animated Text */}
            <motion.div className="mt-6" variants={fadeInS("up", 0.5)}>
              <h4 className="text-white font-semibold text-center text-[16px]">
                {messages[message - 1]?.title || ""}
              </h4>
              <h4 className="text-[#9C9DCE] mt-2 text-center text-[14px] w-9/11 mds:w-2/3 md:w-1/2 mx-auto">
                {messages[message - 1]?.description || ""}
              </h4>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* <div
        style={{
          backgroundImage: `url(${gumBg.src})`,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="py-16 lgss:py-32 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16 w-full flex flex-col-reverse gap-6 lgss:justify-between lgss:flex-row   xxxl:px-[250px] bg-[#04050F] "
      >
        <div className="w-full lgss:w-[55%] mt-10 mx-auto lgss:mt-0">
          <Fade triggerOnce direction="left">
            <h2 className="text-center  text-[24px] md:text-[30px] lgss:text-[42px] font-bold text-white">
              Trade all your cryptocurrency seamlessly at competitive rates with
              Celler
            </h2>
          </Fade>
          <Fade triggerOnce direction="right">
            <h4 className="text-center  mt-4 text-[15px] lgss:text-[16px] text-secondary mx-auto  w-11/12 lgss:w-10/12">
              Enjoy fast, seamless transactions with low fees, so you can get
              the most out of every trade.
            </h4>
          </Fade>
          
        </div>
      </div> */}
      <div className="bg-[#0C0D1D] py-24 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-2/5 mx-auto">
          <Fade triggerOnce direction="up">
            <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
              Why Use Celler?
            </h2>
          </Fade>
          <Fade triggerOnce direction="up">
            <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary ">
              Celler was built to make your journey easier, safer, and more
              rewarding. Use Celler to enjoy the followimg
            </h4>
          </Fade>
        </div>
        <div
          // style={{
          //   backgroundImage: `url(${hero1.src})`,
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          // }}
          className="px-4 xs:px-6 mds:px-12  py-12 w-full md:px-16 lgss:px-12 xl:px-16 flex rounded-2xl flex-col lgss:flex-row gap-6 justify-center items-center lgss:justify-between  xxxl:px-[250px]  bg-gradient-to-br mt-16 from-[#11214A] via-[#101226] to-[#112555]"
        >
          <div className="w-full lgss:w-[50%] ">
            <Fade triggerOnce direction="left">
              <h2 className="text-center  lgss:text-left text-[20px] md:text-[28px] lgss:text-[32px] font-bold text-white">
                Complete and secure ownership of your digital assets.
              </h2>
            </Fade>
            <Fade triggerOnce direction="right">
              <h4 className="text-center  lgss:text-left mt-4 text-[15px] lgss:text-[16px] text-secondary mx-auto lgss:mx-0 w-11/12 ">
                Control your assets with confidence and peace of mind because
                they are locked in our multi layered security.
              </h4>
            </Fade>
            <div className="flex justify-center items-center lgss:justify-start w-full">
              <a
                href={SIGNUP_URL}
                className="mt-8 mx-auto lgss:mx-0 bg-primary px-6 py-4 rounded-lg text-white"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full lgss:w-[45%] mx-auto">
            <Zoom className=" mx-auto">
              <Image src={lock} className=" mx-auto" alt="" />
            </Zoom>
          </div>
        </div>
        <div className="grid grid-cols-1 lgss:grid-cols-3 w-full mt-12 mx-auto gap-6">
          <Fade triggerOnce direction="up">
            <div className="bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
              {/* <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">01</h4> */}
              <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
                <Image src={customer} alt="" />
                <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                  24/7 Customer Support
                </h4>
                <h4 className="text-center  text-[15px]  text-white px-4">
                  Get help whenever you need it. Our support team is available
                  around the clock to assist you.
                </h4>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="up">
            <div className=" bg-gradient-to-tr from-[#101226] px-4 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
              {/* <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">02</h4> */}
              <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
                <Image src={thunder} alt="" />
                <h4 className="text-center  text-[18px]  font-semibold text-white px-12">
                  Fast & Efficient Transactions
                </h4>
                <h4 className="text-center  text-[15px]  text-white px-4">
                  Experience lightning-fast transactions with zero delays. Your
                  crypto, when you need it.
                </h4>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce direction="up">
            <div className="bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
              {/* <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">03</h4> */}
              <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
                <Image src={rateSwap} alt="" />

                <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                  Competitive & Best Rates
                </h4>
                <h4 className="text-center  text-[15px]  text-white px-4">
                  Enjoy the best rates in the market. We offer competitive
                  pricing to maximize your value.
                </h4>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div
        id="faq"
        className="bg-[#0C0D1D] py-24 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]"
      >
        <div className="w-4/5 lgss:w-2/5 mx-auto">
          <Fade triggerOnce direction="up">
            <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
              Got any question?
            </h2>
          </Fade>
          <Fade triggerOnce direction="up">
            <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary ">
              Get answers to all the questions bothering you
            </h4>
          </Fade>
        </div>
        <div className="w-full mt-8 ">
          <div className="w-full lgss:w-1/2 xxxl:w-2/5 mx-auto ">
            <Fade triggerOnce direction="left" duration={1500}>
              <div
                onClick={() => toggleQuestion(1)}
                className={
                  activeQuestion === 1
                    ? "py-4  bg-[#191A27] px-4 rounded-xl"
                    : "py-4 border-b border-gray-200 dark:border-gray-600"
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-[14px]">
                    What is Celler?
                  </h4>
                  {activeQuestion === 1 ? (
                    <IoRemove className="text-white text-[24px]" />
                  ) : (
                    <IoAdd className="text-white text-[24px]" />
                  )}
                </div>
                {activeQuestion === 1 && (
                  <Fade triggerOnce direction="up">
                    <h4 className="text-center lgss:text-left text-secondary mt-4 text-[14px]">
                      Celler is a comprehensive cryptocurrency platform that
                      allows users to buy and sell various cryptocurrencies. It
                      also provides advanced features for managing and tracking
                      your digital assets.
                    </h4>
                  </Fade>
                )}
              </div>
            </Fade>
            <Fade triggerOnce direction="right" duration={1500}>
              <div
                onClick={() => toggleQuestion(2)}
                className={
                  activeQuestion === 2
                    ? "py-4 mt-4   bg-[#191A27] px-4 rounded-xl"
                    : "py-6 mt-4 border-b border-gray-200 dark:border-gray-600"
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-[14px]">
                    How do I create an account on Celler?
                  </h4>
                  {activeQuestion === 2 ? (
                    <IoRemove className="text-white text-[24px]" />
                  ) : (
                    <IoAdd className="text-white text-[24px]" />
                  )}
                </div>
                {activeQuestion === 2 && (
                  <Fade triggerOnce direction="up">
                    <h4 className="text-center lgss:text-left text-secondary mt-4 text-[14px]">
                      Visit our website or open the mobile app, then click
                      &apos;Sign Up&apos; and enter your email, phone number,
                      and password. Verify your email or phone through the
                      received verification link or code.
                    </h4>
                  </Fade>
                )}
              </div>
            </Fade>
            <Fade triggerOnce direction="left" duration={1500}>
              <div
                onClick={() => toggleQuestion(3)}
                className={
                  activeQuestion === 3
                    ? "py-4 mt-4   bg-[#191A27] px-4 rounded-xl"
                    : "py-4 mt-4 border-b border-gray-200 dark:border-gray-600"
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-[14px]">
                    What cryptocurrencies can I trade on Celler?
                  </h4>
                  {activeQuestion === 3 ? (
                    <IoRemove className="text-white text-[24px]" />
                  ) : (
                    <IoAdd className="text-white text-[24px]" />
                  )}
                </div>
                {activeQuestion === 3 && (
                  <Fade triggerOnce direction="up">
                    <h4 className="text-center lgss:text-left text-secondary mt-4 text-[14px]">
                      On Celler, you can trade a variety of popular
                      cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH),
                      Tether (USDT), and Solana (SOL), among others. We
                      continuously update our list to include new and emerging
                      cryptocurrencies.
                    </h4>
                  </Fade>
                )}
              </div>
            </Fade>
            <Fade triggerOnce direction="right" duration={1500}>
              <div
                onClick={() => toggleQuestion(4)}
                className={
                  activeQuestion === 4
                    ? "py-4 mt-4   bg-[#191A27] px-4 rounded-xl"
                    : "py-4 mt-4 border-b border-gray-200 dark:border-gray-600"
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-[14px]">
                    Are my funds safe with Celler?
                  </h4>
                  {activeQuestion === 4 ? (
                    <IoRemove className="text-white text-[24px]" />
                  ) : (
                    <IoAdd className="text-white text-[24px]" />
                  )}
                </div>
                {activeQuestion === 4 && (
                  <Fade triggerOnce direction="up">
                    <h4 className="text-center lgss:text-left text-secondary mt-4 text-[14px]">
                      Yes, your funds are safe with Celler. We prioritize the
                      security of your assets by employing advanced encryption
                      protocols, secure storage solutions, and regular security
                      audits. Additionally, we adhere to industry best practices
                      to protect your information and transactions. For added
                      security, we recommend enabling two-factor authentication
                      on your account.
                    </h4>
                  </Fade>
                )}
              </div>
            </Fade>
            <Fade triggerOnce direction="left" duration={1500}>
              <div
                onClick={() => toggleQuestion(5)}
                className={
                  activeQuestion === 5
                    ? "py-4 mt-4   bg-[#191A27] px-4 rounded-xl"
                    : "py-4 mt-4 border-b border-gray-200 dark:border-gray-600"
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-[14px]">
                    What are the fees associated with using Celler?
                  </h4>
                  {activeQuestion === 5 ? (
                    <IoRemove className="text-white text-[24px]" />
                  ) : (
                    <IoAdd className="text-white text-[24px]" />
                  )}
                </div>
                {activeQuestion === 5 && (
                  <Fade triggerOnce direction="up">
                    <h4 className="text-center lgss:text-left text-secondary mt-4 text-[14px]">
                      Celler charges fees for certain transactions and services.
                      These may include trading fees, withdrawal fees, and
                      deposit fees, which vary depending on the type of
                      transaction and the cryptocurrency involved.
                    </h4>
                  </Fade>
                )}
              </div>
            </Fade>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${transformBg.src})`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="w-full rounded-xl bg-[#3A66FF] mt-24 flex flex-col pt-8 lgss:pt-0 justify-center lgss:flex-row items-start px-6 lgss:px-10 lgss:justify-between"
        >
          <div className="w-full lgss:w-[55%] mt-8 lgss:mt-24">
            <Fade triggerOnce direction="left">
              <h2 className="text-center lgss:text-left text-[24px] md:text-[28px] lgss:text-[35px] w-10/12 lgss:w- font-bold text-white">
                Don’t Settle. Start Coining Your Dreams With Celler.
              </h2>
            </Fade>

            <div className="w-full md:w-2/3 gap-4 mt-8 flex items-center lgss:mx-0 mx-auto justify-center lgss:justify-start">
              <Fade triggerOnce direction="left" className="w-2/5">
                <Image src={darkAppStore} className=" w-full" alt="" />
                <Image src={darkPlayStore} className=" w-full" alt="" />
              </Fade>
            </div>
          </div>
          <div className="w-full lgss:w-[50%] pt-8 px-6 lgss:px-0 mt-12">
            <Fade triggerOnce direction="up">
              <Image src={dPhone} className=" " alt="" />
            </Fade>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#12132A] py-24 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-[55%] mx-auto">
          <Fade triggerOnce direction="up">
            <h2 className="text-center text-[28px] md:text-[38px] lgss:text-[52px] font-bold text-white">
              Celler is Global
            </h2>
          </Fade>
          <Fade triggerOnce direction="up">
            <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary  ">
              Experience seamless cryptocurrency transactions and management
              anywhere in the world, with CryptPay&apos;s extensive global reach
              and support.
            </h4>
          </Fade>
        </div>
        <div className="w-full mt-20">
          <Zoom triggerOnce duration={2500}>
            <Image src={map} alt="" />
          </Zoom>
        </div>
      </div> */}
      <Fade triggerOnce direction="up">
        <Footer />
      </Fade>
    </div>
  );
}
