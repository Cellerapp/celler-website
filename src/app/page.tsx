"use client"; // Add this at the very top of the file

import {
  appStore,
  buyPhone,
  customer,
  darkAppStore,
  darkPlayStore,
  dashboardPhone,
  dPhone,
  gumBg,
  hero1,
  iphoneHand,
  lock,
  map,
  playStore,
  rateSwap,
  sellPhone,
  thunder,
  transacting,
  transformBg,
  userIcon,
  verify,
} from "@/assets/images";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SIGNUP_URL } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function Home() {
  // const []
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [message, setMessage] = useState<number>(1);

  const toggleQuestion = (questionNumber: number) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === questionNumber ? null : questionNumber
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate the message
      setMessage((prevMessage) => (prevMessage % 4) + 1);
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={`  w-full`}>
      <div
        style={{
          backgroundImage: `url(${hero1.src})`,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="w-full pt-8 px-4 xs:px-6 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]"
      >
        <Navbar />
        <div className="mt-12 lgss:mt-32 w-full flex flex-col lgss:flex-row lgss:justify-between gap-16 lgss:gap-6">
          <div className="w-full lgss:w-[55%]">
            <h2 className="text-center lgss:text-left text-[30px] md:text-[38px] lgss:text-[60px] font-bold text-white">
              Trade and Manage Digital Assets That Coins Your Dreams.
            </h2>
            <h4 className="text-center lgss:text-left mt-3 text-[15px] mds:text-[17px] lgss:text-[18px] text-secondary mx-auto lgss:mx-0 w-11/12 lgss:w-10/12">
              Buy, sell, swap, and manage your digital asset — all in one app.
              Enjoy seamless transactions, create and secure your dream
              portfolio on Cryptpay.
            </h4>
            <div className="w-10/12 mds:w-1/2 gap-6 mt-10 flex items-center lgss:mx-0 mx-auto justify-center lgss:justify-start">
              <Image src={appStore} className="w-1/2 " alt="" />
              <Image src={playStore} className=" w-1/2" alt="" />
            </div>
          </div>
          <div className="w-10/12 mx-auto mds:w-9/12 md:w-8/12 lgss:mx-0 lgss:w-2/5 mb-16">
            <Image src={iphoneHand} className="w-full " alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#0C0D1D] py-16 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-2/5 mx-auto">
          <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
            How It Works
          </h2>
          <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary ">
            Discover how easy it is to start your crypto journey in less than 10
            minutes using these three simple steps.
          </h4>
        </div>
        <div className="grid grid-cols-1 lgss:grid-cols-3 w-full mt-12 mx-auto gap-6">
          <div className="bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
            <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">01</h4>
            <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
              <Image src={userIcon} alt="" />
              <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                Sign In / Sign Up on Cryptpay
              </h4>
              <h4 className="text-center  text-[15px]  text-white px-4">
                Get started by signing up or loginning to explore Cryptpay
                incredible benefits.
              </h4>
            </div>
          </div>
          <div className=" bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
            <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">02</h4>
            <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
              <Image src={verify} alt="" />
              <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                Verify Your Identity
              </h4>
              <h4 className="text-center  text-[15px]  text-white px-4">
                Secure your account with a quick and easy verification. This
                helps to keep intrudes away from you account.
              </h4>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
            <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">03</h4>
            <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
              <Image src={transacting} alt="" />
              <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                Start Transacting on Cryptpay
              </h4>
              <h4 className="text-center  text-[15px]  text-white px-4">
                Begin trading instantly. Buy, sell, and swap digital assets with
                confidence and ease.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0C0D1D] py-10 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-2/5 mx-auto">
          <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
            Features
          </h2>
          <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary ">
            Cryptpay simplifies your journey, providing all the tools you need
            to navigate digital assets with ease.
          </h4>
        </div>
        <div className="w-full flex-col lgss:flex-row flex justify-start items-center mt-20 lgss:mt-28  gap-6">
          <div className="hidden lgss:flex justify-center items-start gap-6  lgss:w-1/2">
            <div className="w-[8px] rounded-full bg-white h-[700px] flex flex-col">
              <div
                className={
                  message === 1
                    ? "bg-primary w-full h-1/4"
                    : "bg-white w-full h-1/4"
                }
              />
              <div
                className={
                  message === 2
                    ? "bg-primary w-full h-1/4"
                    : "bg-white w-full h-1/4"
                }
              />
              <div
                className={
                  message === 3
                    ? "bg-primary w-full h-1/4"
                    : "bg-white w-full h-1/4"
                }
              />
              <div
                className={
                  message === 4
                    ? "bg-primary w-full h-1/4"
                    : "bg-white w-full h-1/4"
                }
              />
            </div>
            <div className="flex flex-col gap-20 justify-start mt-8 items-start">
              <div>
                <h4 className="text-left  text-[20px] font-semibold text-white ">
                  Buy Cryptocurrency
                </h4>
                <h4 className="text-left  text-[16px] mt-2 text-secondary pr-6 ">
                  Purchase digital assets in just a few clicks. Enjoy secure
                  transactions and real-time pricing for a smooth experience.
                </h4>
              </div>
              <div>
                <h4 className="text-left  text-[20px] font-semibold text-white ">
                  Sell Cryptocurrency
                </h4>
                <h4 className="text-left  text-[16px] mt-2 text-secondary pr-6 ">
                  Quickly convert your digital assets into cash or other
                  currencies. Enjoy competitive rates and a straightforward
                  selling process.
                </h4>
              </div>
              <div>
                <h4 className="text-left  text-[20px] font-semibold text-white ">
                  Swap Cryptocurrency (Coming Soon)
                </h4>
                <h4 className="text-left  text-[16px] mt-2 text-secondary pr-6 ">
                  Exchange cryptocurrency or fiat seamlessly with the best rates
                  and the lowest fees.
                </h4>
              </div>
              <div>
                <h4 className="text-left  text-[20px] font-semibold text-white ">
                  Deposit/Withdraw (Coming Soon)
                </h4>
                <h4 className="text-left  text-[16px] mt-2 text-secondary pr-6 ">
                  Top up or withdraw funds from your account with the best rates
                  and low fees.
                </h4>
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto py-10 lgss:py-20  lgss:w-[45%] rounded-xl flex justify-center items-center bg-[#101226]">
            <Image
              src={
                message === 3 || message === 4
                  ? dashboardPhone
                  : message === 2
                  ? sellPhone
                  : message === 1
                  ? buyPhone
                  : ""
              }
              className="w-1/2 "
              alt=""
            />
          </div>
          <div className="w-full lgss:hidden">
            <div className="flex justify-center gap-2 mt-4  items-center">
              <div
                className={
                  message === 1
                    ? "w-[10px] h-[10px] rounded-full bg-primary"
                    : "w-[10px] h-[10px] rounded-full bg-[#DDDDDD]"
                }
              />
              <div
                className={
                  message === 2
                    ? "w-[10px] h-[10px] rounded-full bg-primary"
                    : "w-[10px] h-[10px] rounded-full bg-[#DDDDDD]"
                }
              />
              <div
                className={
                  message === 3
                    ? "w-[10px] h-[10px] rounded-full bg-primary"
                    : "w-[10px] h-[10px] rounded-full bg-[#DDDDDD]"
                }
              />
              <div
                className={
                  message === 4
                    ? "w-[10px] h-[10px] rounded-full bg-primary"
                    : "w-[10px] h-[10px] rounded-full bg-[#DDDDDD]"
                }
              />
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold text-center text-[16px]">
                {message == 1
                  ? "Buy Cryptocurrency"
                  : message === 2
                  ? "Sell Cryptocurrency"
                  : message === 3
                  ? "Swap Cryptocurrency (Coming Soon)"
                  : message === 4
                  ? "Deposit/Withdraw (Coming Soon)"
                  : ""}
              </h4>
              <h4 className="text-white mt-2 text-center text-[14px] w-9/11 mds:w-2/3 md:w-1/2 mx-auto">
                {message == 1
                  ? "Purchase digital assets in just a few clicks. Enjoy secure transactions and real-time pricing for a smooth experience. "
                  : message === 2
                  ? "Quickly convert your digital assets into cash or other currencies. Enjoy competitive rates and a straightforward selling process."
                  : message === 3
                  ? "Exchange cryptocurrency or fiat seamlessly with the best rates and the lowest fees."
                  : message === 4
                  ? "Top up or withdraw funds from your account with the best rates and low fees."
                  : ""}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${gumBg.src})`,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="py-16 lgss:py-32 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16 w-full flex flex-col-reverse gap-6 lgss:justify-between lgss:flex-row   xxxl:px-[250px] bg-[#04050F] "
      >
        <div className="w-full lgss:w-[55%] mt-10 mx-auto lgss:mt-0">
          <h2 className="text-center  text-[24px] md:text-[30px] lgss:text-[42px] font-bold text-white">
            Trade all your cryptocurrency seamlessly at competitive rates with
            cryptpay
          </h2>
          <h4 className="text-center  mt-4 text-[15px] lgss:text-[16px] text-secondary mx-auto  w-11/12 lgss:w-10/12">
            Enjoy fast, seamless transactions with low fees, so you can get the
            most out of every trade.
          </h4>
          {/* <div className="w-11/12 mds:w-1/2 gap-12 mt-10 flex items-center  mx-auto justify-center lgss:justify-center">
            <div className="mt-4">
              <h4 className="text-secondary text-[14px]">Real Time Audit</h4>
              <Image src={gumLogo} className=" " alt="" />
              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-secondary text-[20px]" />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-secondary text-[14px]">Positive review on</h4>
              <Image src={hashLogo} className=" " alt="" />
              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-primary text-[20px]" />
                <FaStar className="text-secondary text-[20px]" />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="w-10/12 mx-auto lgss:w-[35%] bg-[#1D1E27] h-[500px] rounded-xl"></div> */}
      </div>
      <div className="bg-[#0C0D1D] py-24 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-2/5 mx-auto">
          <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
            Why Use Cryptpay?
          </h2>
          <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary ">
            Cryptpay was built to make your journey easier, safer, and more
            rewarding. Use Crytpay to enjoy the followimg
          </h4>
        </div>
        <div
          style={{
            backgroundImage: `url(${hero1.src})`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="px-4 xs:px-6 mds:px-12 h-[400px] py-12 md:px-16 lgss:px-12 xl:px-16 flex flex-col lgss:flex-row gap-6 justify-center items-center lgss:justify-between  xxxl:px-[250px]  bg-gradient-to-bl mt-16 from-red-800 to-[#101226]"
        >
          <div className="w-full lgss:w-[50%] ">
            <h2 className="text-center lgss:text-left text-[20px] md:text-[28px] lgss:text-[32px] font-bold text-white">
              Complete and secure ownership of your digital assets.
            </h2>
            <h4 className="text-center lgss:text-left mt-4 text-[15px] lgss:text-[16px] text-secondary mx-auto lgss:mx-0 w-11/12 lgss:w-10/12">
              Control your assets with confidence and peace of mind because they
              are locked in our multi layered security.
            </h4>
            <div className="flex justify-center items-center lgss:justify-start w-full">
              <a
                href={SIGNUP_URL}
                className="mt-8 mx-auto lgss:mx-0 bg-primary px-6 py-4 rounded-lg text-white"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full lgss:w-[45%]">
            <Image src={lock} className=" " alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lgss:grid-cols-3 w-full mt-12 mx-auto gap-6">
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
          <div className=" bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
            {/* <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">02</h4> */}
            <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
              <Image src={thunder} alt="" />
              <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                Fast & Efficient Transactions
              </h4>
              <h4 className="text-center  text-[15px]  text-white px-4">
                Experience lightning-fast transactions with zero delays. Your
                crypto, when you need it.
              </h4>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-[#101226] px-6 pt-6 pb-12 border border-[#2D2D2D] to-[#121F46] rounded-xl">
            {/* <h4 className="text-[28px] lgss:text-[40px] text-[#D9D9D9]">03</h4> */}
            <div className="flex flex-col items-center justify-center gap-4 mt-4 ">
              <Image src={rateSwap} alt="" />
              <h4 className="text-center  text-[20px] font-semibold text-white px-12">
                Competitive & Best Rates
              </h4>
              <h4 className="text-center  text-[15px]  text-white px-4">
                Enjoy the best rates in the market. We offer competitive pricing
                to maximize your value.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0C0D1D] py-24 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-2/5 mx-auto">
          <h2 className="text-center text-[20px] md:text-[38px] lgss:text-[32px] font-bold text-white">
            Got any question?
          </h2>
          <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary ">
            Get answers to all the questions bothering you
          </h4>
        </div>
        <div className="w-full mt-8 ">
          <div className="w-full lgss:w-1/2 xxxl:w-2/5 mx-auto ">
            <div
              onClick={() => toggleQuestion(1)}
              className={
                activeQuestion === 1
                  ? "py-4  bg-[#191A27] px-4"
                  : "py-4 border-b border-gray-200 dark:border-gray-600"
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-[14px]">
                  What is CryptPay?
                </h4>
                {activeQuestion === 1 ? (
                  <SlArrowUp className="text-white text-[16px]" />
                ) : (
                  <SlArrowDown className="text-white text-[16px]" />
                )}
              </div>
              {activeQuestion === 1 && (
                <h4 className="text-left text-secondary mt-4 text-[14px]">
                  CryptPay is a comprehensive cryptocurrency platform that
                  allows users to buy, sell, swap, and deposit various
                  cryptocurrencies. It also provides advanced features for
                  managing and tracking your digital assets.
                </h4>
              )}
            </div>

            <div
              onClick={() => toggleQuestion(2)}
              className={
                activeQuestion === 2
                  ? "py-4 mt-4   bg-[#191A27] px-4"
                  : "py-6 mt-4 border-b border-gray-200 dark:border-gray-600"
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-[14px]">
                  How do I create an account on CryptPay?
                </h4>
                {activeQuestion === 2 ? (
                  <SlArrowUp className="text-white text-[16px]" />
                ) : (
                  <SlArrowDown className="text-white text-[16px]" />
                )}
              </div>
              {activeQuestion === 2 && (
                <h4 className="text-left text-secondary mt-4 text-[14px]">
                  Visit our website or open the mobile app, then click
                  &apos;Sign Up&apos; and enter your email, phone number, and
                  password. Verify your email or phone through the received
                  verification link or code.
                </h4>
              )}
            </div>

            <div
              onClick={() => toggleQuestion(3)}
              className={
                activeQuestion === 3
                  ? "py-4 mt-4   bg-[#191A27] px-4"
                  : "py-4 mt-4 border-b border-gray-200 dark:border-gray-600"
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-[14px]">
                  What cryptocurrencies can I trade on CryptPay?
                </h4>
                {activeQuestion === 3 ? (
                  <SlArrowUp className="text-white text-[16px]" />
                ) : (
                  <SlArrowDown className="text-white text-[16px]" />
                )}
              </div>
              {activeQuestion === 3 && (
                <h4 className="text-left text-secondary mt-4 text-[14px]">
                  On CryptPay, you can trade a variety of popular
                  cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH),
                  Tether (USDT), and Solana (SOL), among others. We continuously
                  update our list to include new and emerging cryptocurrencies.
                </h4>
              )}
            </div>

            <div
              onClick={() => toggleQuestion(4)}
              className={
                activeQuestion === 4
                  ? "py-4 mt-4   bg-[#191A27] px-4"
                  : "py-4 mt-4 border-b border-gray-200 dark:border-gray-600"
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-[14px]">
                  Are my funds safe with CryptPay?
                </h4>
                {activeQuestion === 4 ? (
                  <SlArrowUp className="text-white text-[16px]" />
                ) : (
                  <SlArrowDown className="text-white text-[16px]" />
                )}
              </div>
              {activeQuestion === 4 && (
                <h4 className="text-left text-secondary mt-4 text-[14px]">
                  Yes, your funds are safe with CryptPay. We prioritize the
                  security of your assets by employing advanced encryption
                  protocols, secure storage solutions, and regular security
                  audits. Additionally, we adhere to industry best practices to
                  protect your information and transactions. For added security,
                  we recommend enabling two-factor authentication on your
                  account.
                </h4>
              )}
            </div>

            <div
              onClick={() => toggleQuestion(5)}
              className={
                activeQuestion === 5
                  ? "py-4 mt-4   bg-[#191A27] px-4"
                  : "py-4 mt-4 border-b border-gray-200 dark:border-gray-600"
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-[14px]">
                  What are the fees associated with using CryptPay?
                </h4>
                {activeQuestion === 5 ? (
                  <SlArrowUp className="text-white text-[16px]" />
                ) : (
                  <SlArrowDown className="text-white text-[16px]" />
                )}
              </div>
              {activeQuestion === 5 && (
                <h4 className="text-left text-secondary mt-4 text-[14px]">
                  CryptPay charges fees for certain transactions and services.
                  These may include trading fees, withdrawal fees, and deposit
                  fees, which vary depending on the type of transaction and the
                  cryptocurrency involved.
                </h4>
              )}
            </div>
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
            <h2 className="text-left text-[24px] md:text-[28px] lgss:text-[35px] w-10/12 lgss:w- font-bold text-white">
              Don’t Settle. Start Coining Your Dreams With Cryptpay.
            </h2>

            <div className="w-full md:w-2/3 gap-4 mt-8 flex items-center lgss:mx-0 mx-auto justify-center lgss:justify-start">
              <Image src={darkAppStore} className=" w-2/5 lgss:w-1/2" alt="" />
              <Image src={darkPlayStore} className=" w-2/5 lgss:w-1/2" alt="" />
            </div>
          </div>
          <div className="w-full lgss:w-[45%] pt-8 px-6 lgss:px-0 mt-12">
            <Image src={dPhone} className=" " alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#12132A] py-24 px-4 xs:px-6 mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div className="w-4/5 lgss:w-[55%] mx-auto">
          <h2 className="text-center text-[28px] md:text-[38px] lgss:text-[52px] font-bold text-white">
            Cryptpay is Global
          </h2>
          <h4 className="text-center  mt-3 text-[14px] lgss:text-[16px] text-secondary  ">
            Experience seamless cryptocurrency transactions and management
            anywhere in the world, with CryptPay&apos;s extensive global reach
            and support.
          </h4>
        </div>
        <div className="w-full mt-20">
          <Image src={map} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
