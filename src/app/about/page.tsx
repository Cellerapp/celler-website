"use client"; // Add this at the very top of the file

import {
  aboutBg,
  darkAppStore,
  darkPlayStore,
  dPhone,
  mission,
  transformBg,
  vision,
} from "@/assets/images";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function AboutUs() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (questionNumber: number) => {
    setActiveQuestion((prevActiveQuestion) =>
      prevActiveQuestion === questionNumber ? null : questionNumber
    );
  };
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="w-full pt-8 px-4 xs:px-6 pb-16 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]"
      >
        <Navbar />
        <div className="mt-12 lgss:mt-32 w-full flex flex-col lgss:flex-row lgss:justify-between gap-16 lgss:gap-6">
          <div className="w-full lgss:w-[75%] mx-auto">
            <h2 className="text-center text-[28px] md:text-[30px] lgss:text-[48px] font-bold text-white">
              Your Gateway to Crypto with Easy, Fast, and Secure Transactions
            </h2>
            <h4 className="text-center  mt-6 text-[15px] xs:text-[16px] lgss:text-[18px] text-secondary lgss:w-10/12 lgss:mx-auto">
              CryptPay is a cutting-edge financial technology platform that
              provides advanced payment solutions for the cryptocurrency
              ecosystem. Our comprehensive suite of products offers a seamless
              experience for buying, selling, and managing cryptocurrencies,
              supporting a wide range of payment methods including debit and
              credit cards, bank transfers, and digital wallets
            </h4>
            <div className="w-full border border-[#2D2D2D] bg-gradient-to-tl p-6 lgss:p-8  from-[#0F2B63] via-[#1845A3]   to-[#101226] mt-16 gap-5 lgss:gap-4 rounded-xl grid grid-cols-2 lgss:grid-cols-4">
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-bold text-[30px] lgss:text-[40px] text-white">
                  10
                </h4>
                <h4 className=" text-[14px]  text-white mt-2">Countries</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-bold text-[30px] lgss:text-[40px] text-white">
                  200+
                </h4>
                <h4 className=" text-[14px]  text-white mt-2">Crypto Assets</h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-bold text-[30px] lgss:text-[40px] text-white">
                  $10B+
                </h4>
                <h4 className=" text-[14px]  text-white mt-2">
                  Crypto worth Delivered
                </h4>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="font-bold text-[30px] lgss:text-[40px] text-white">
                  600k+
                </h4>
                <h4 className=" text-[14px] text-white mt-2">
                  Registered Users
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 pt-8 px-4 xs:px-6 pb-16 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px] flex flex-col gap-6 lgss:gap-10 lgss:flex-row">
        <div className="w-full lgss:w-1/2 bg-[#191B29] rounded-xl ">
          <div className="pt-4 px-4 mds:px-6 lgss:px-8 mds:pt-6 md:pt-8">
            <h4 className="text-[20px] lgss:text-[24px] text-white font-bold ">
              Our Mission
            </h4>
            <h4 className="text-[13px] mds:text-[15px] leading-[28px] tracking-wide lgss:text-[16px] text-white mt-4 text-left w-11/12 md:w-10/12 ">
              Our mission at CryptPay is to simplify the world of cryptocurrency
              by providing an intuitive, secure, and efficient platform for
              users to manage their digital assets. We strive to make
              cryptocurrency accessible to everyone, ensuring a seamless
              experience through innovative technology and exceptional customer
              service.{" "}
            </h4>
          </div>
          <div className="w-full flex justify-end ">
            <Image src={mission} alt="" className="w-2/3 rounded-br-xl" />
          </div>
        </div>
        <div className="w-full lgss:w-1/2 bg-[#191B29] rounded-xl ">
          <div className="pt-4 px-4 mds:px-6 lgss:px-8 mds:pt-6 md:pt-8">
            <h4 className="text-[20px] lgss:text-[24px] text-white font-bold ">
              Our Vision
            </h4>
            <h4 className="text-[13px] mds:text-[15px] leading-[28px] tracking-wide lgss:text-[16px] text-white mt-4 text-left w-11/12 md:w-10/12 ">
              Our vision is to become the leading global gateway for
              cryptocurrency transactions, empowering individuals and businesses
              with the tools they need to thrive in the digital economy. We aim
              to drive the mainstream adoption of cryptocurrencies by fostering
              trust, enhancing security, and delivering unparalleled
              convenience.
            </h4>
          </div>
          <div className="w-full flex justify-end pt-4">
            <Image src={vision} alt="" className="w-2/3 rounded-br-xl" />
          </div>
        </div>
      </div>
      <div className="w-full mt-10 pt-8 lgss:pt-16 px-4 xs:px-6 pb-16 bg-[#3A66FF] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]  flex flex-col gap-6 lgss:gap-10 lgss:justify-between lgss:flex-row">
        <div className="w-full lgss:w-1/2">
          <h4 className="text-[24px] lgss:text-[36px] text-white font-bold ">
            Our Core Values
          </h4>
          <h4 className="text-[14px] mds:text-[16px] leading-[27px]  lgss:text-[18px] text-white mt-2 text-left w-11/12 md:w-10/12 ">
            Our core values shape every aspect of our operations, ensuring
            transparency, excellence, and trust in all our interactions.
          </h4>
        </div>
        <div className="w-full lgss:w-2/5">
          <div
            onClick={() => toggleQuestion(1)}
            className={
              activeQuestion === 1
                ? "py-6   rounded-xl "
                : "py-6 border-b border-[#84A6FF] "
            }
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-bold text-[20px]">Innovation</h4>
              {activeQuestion === 1 ? (
                <SlArrowUp className="text-white text-[16px]" />
              ) : (
                <SlArrowDown className="text-white text-[16px]" />
              )}
            </div>
            {activeQuestion === 1 && (
              <h4 className="text-left text-white mt-4 text-[14px]">
                We continuously adopt cutting-edge technologies to provide a
                seamless and efficient crypto experience, ensuring we stay ahead
                in the ever-evolving digital finance world.
              </h4>
            )}
          </div>

          <div
            onClick={() => toggleQuestion(2)}
            className={
              activeQuestion === 2
                ? "py-6   "
                : "py-6  border-b border-secondary "
            }
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-bold text-[20px]">Security</h4>
              {activeQuestion === 2 ? (
                <SlArrowUp className="text-white text-[16px]" />
              ) : (
                <SlArrowDown className="text-white text-[16px]" />
              )}
            </div>
            {activeQuestion === 2 && (
              <h4 className="text-left text-white mt-4 text-[14px]">
                Your safety is paramount. CryptPay uses advanced encryption and
                multi-layered protection to keep your transactions and assets
                secure.
              </h4>
            )}
          </div>

          <div
            onClick={() => toggleQuestion(3)}
            className={
              activeQuestion === 3
                ? "py-6  "
                : "py-6  border-b border-secondary "
            }
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-bold text-[20px]">
                Accessibility
              </h4>
              {activeQuestion === 3 ? (
                <SlArrowUp className="text-white text-[16px]" />
              ) : (
                <SlArrowDown className="text-white text-[16px]" />
              )}
            </div>
            {activeQuestion === 3 && (
              <h4 className="text-left text-white mt-4 text-[14px]">
                CryptPay is designed to be easy to use and accessible to
                everyone, regardless of where you are or your level of crypto
                expertise.
              </h4>
            )}
          </div>

          <div
            onClick={() => toggleQuestion(4)}
            className={
              activeQuestion === 4
                ? "py-6   "
                : "py-6  border-b border-secondary "
            }
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-bold text-[20px]">Integrity</h4>
              {activeQuestion === 4 ? (
                <SlArrowUp className="text-white text-[16px]" />
              ) : (
                <SlArrowDown className="text-white text-[16px]" />
              )}
            </div>
            {activeQuestion === 4 && (
              <h4 className="text-left text-white mt-4 text-[14px]">
                We operate with transparency and ethical standards, ensuring
                trustworthy transactions and a reliable platform that you can
                count on.
              </h4>
            )}
          </div>

          <div
            onClick={() => toggleQuestion(5)}
            className={
              activeQuestion === 5
                ? "py-6  "
                : "py-6  border-b border-secondary "
            }
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-bold text-[20px]">
                Customer-Centricity
              </h4>
              {activeQuestion === 5 ? (
                <SlArrowUp className="text-white text-[16px]" />
              ) : (
                <SlArrowDown className="text-white text-[16px]" />
              )}
            </div>
            {activeQuestion === 5 && (
              <h4 className="text-left text-white mt-4 text-[14px]">
                Your experience matters to us. We offer 24/7 support and tailor
                our services to meet your needs, ensuring a smooth and
                satisfying crypto journey.
              </h4>
            )}
          </div>
        </div>
      </div>
      <div className="w-full mt-10 pt-4 px-4 xs:px-6 pb-16 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <div
          style={{
            backgroundImage: `url(${transformBg.src})`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="w-full rounded-xl bg-[#3A66FF] mt-24 flex flex-col pt-8 lgss:pt-0 justify-center lgss:flex-row items-center px-6 lgss:px-10 lgss:justify-between"
        >
          <div className="w-full lgss:w-[55%] ">
            <h2 className="text-left text-[24px] md:text-[28px] lgss:text-[35px] w-10/12 lgss:w- font-bold text-white">
              Transform your cryptocurrency transactions with ease at CryptPay.
            </h2>

            <div className="w-full mds:w-1/2 gap-4 mt-8 flex items-center lgss:mx-0 mx-auto justify-start lgss:justify-start">
              <Image src={darkAppStore} className=" w-2/5 lgss:w-1/2" alt="" />
              <Image src={darkPlayStore} className=" w-2/5 lgss:w-1/2" alt="" />
            </div>
          </div>
          <div className="w-full lgss:w-[45%] pt-8 px-6 lgss:px-0">
            <Image src={dPhone} className=" " alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
