"use client"; // Add this at the very top of the file

import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/assets/images";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { API_URL } from "@/constants";
import axios from "axios";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const validateEmail = (email: string) => {
    // check if email is empty
    if (!email) {
      toast.error("Email cannot be empty");

      return false;
    }

    // check if email is in the correct format using a regular expression
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      toast.error("Email is not in the correct format");

      return false;
    }

    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      return;
    }
    if (!loading) {
      setLoading(true);
      axios
        .post(`${API_URL}/api/subscribe`, {
          email,
        })
        .then((r) => {
          toast.success(r.data.message);
          setLoading(false);
          setEmail("");
        })
        .catch((e) => {
          toast.error(e.response.data.message);
          setLoading(false);
          setEmail("");
        });
    }
  };

  return (
    <div className="w-full bg-[#04050F] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px] pt-16 pb-8 px-4 xs:px-6">
      <div className="flex justify-start flex-col lgss:gap-20 lgss:flex-row items-center lgss:items-start  ">
        <div className="w-full lgss:w-[25%]">
          <Link href="/">
            <div>
              <Image src={logo} alt="logo" />
            </div>
          </Link>
          <h4 className="text-white text-[14px] mt-6">
            Wawa Municipal Office, 40 Broadway Avenue, Wawa, Ontario
          </h4>
          <div className="flex text-white mt-4 items-center">
            <MdLocationPin className="text-[15px]" />
            <h4 className="text-[13px]">Ontario, Canada </h4>
          </div>
          <h4 className="text-white text-[14px] mt-4">
            The Palms Shopping Mall, Lekki-Epe Expressway, Lekki, Lagos
          </h4>
          <div className="flex text-white mt-4 items-center">
            <MdLocationPin className="text-[15px]" />
            <h4 className="text-[13px]">Lagos, Nigeria </h4>
          </div>
        </div>
        <div className="w-full lgss:w-[75%] ">
          <div className="w-full grid-cols-2 md:grid-cols-3 grid gap-10 mt-16 lgss:mt-0 justify-between lgss:grid-cols-4">
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-white ">Feature</h4>
              <Link href={""} className="text-[16px] text-white ">
                Buy Cryptocurrency
              </Link>
              <Link href={""} className="text-[16px] text-white ">
                Sell Cryptocurrency
              </Link>
              <Link href={""} className="text-[16px] text-white ">
                Swap Cryptocurrency
              </Link>
              <Link href={""} className="text-[16px] text-white ">
                Deposit/Withdraw
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-white ">Company</h4>
              <Link href={"/about"} className="text-[16px] text-white ">
                About
              </Link>
              <Link href={"/contact"} className="text-[16px] text-white ">
                Contact Us
              </Link>
              <Link href={""} className="text-[16px] text-white ">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-white ">Legal</h4>
              <Link href={"/terms"} className="text-[16px] text-white ">
                Terms & conditions
              </Link>
              <Link href={"/privacy"} className="text-[16px] text-white ">
                Privacy policy
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[20px] font-bold text-white ">Contact</h4>
              <Link href={""} className="text-[16px] text-white ">
                help@crytpay.com
              </Link>
              <Link href={""} className="text-[16px] text-white ">
                +234 501-801 9595
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-start md:justify-end mt-12">
            <form
              onSubmit={handleSubmit}
              className="flex w-full md:w-2/3 lgss:w-1/2  bg-white gap-4  rounded-full justify-between items-center h-[56px] px-4 "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter mail"
                className="outline-none  w-full text-[#3A3A3A] placeholder:text-[#3A3A3A] text-[15px]"
              />
              <button
                type="submit"
                className={
                  loading
                    ? "w-[100px] py-2 rounded-full bg-[#477AFF] flex justify-center items-center font-medium text-[15px] text-white"
                    : "px-3 py-2 rounded-full bg-[#477AFF] flex justify-center items-center font-medium text-[15px] text-white"
                }
              >
                {loading ? (
                  <ClipLoader color="#FFFFFF" size={15} />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8  justify-center items-center md:justify-between mt-12">
        <div className="flex justify-center items-center md:justify-start gap-8">
          <a
            href="https://instagram.com/usecryptpay"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center h-[40px] w-[40px] rounded-full border border-white text-white text-[24px]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/usecryptpay"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center h-[40px] w-[40px] rounded-full border border-white text-white text-[24px]"
          >
            <FaTwitter />
          </a>
          {/* <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full border border-white text-white text-[24px]">
            <FaTiktok />
          </div>
          <div className="flex justify-center items-center h-[40px] w-[40px] rounded-full border border-white text-white text-[24px]">
            <FaYoutube />
          </div> */}
        </div>
        <h4 className="text-[14px] text-white">
          © 2024, Cryptpay All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
