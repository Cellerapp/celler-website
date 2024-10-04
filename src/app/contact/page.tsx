"use client"; // Add this at the very top of the file

import {
  transformBg,
  darkAppStore,
  darkPlayStore,
  dPhone,
  contact,
} from "@/assets/images";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import toast from "react-hot-toast";
import { API_URL } from "@/constants";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Contact() {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (name: string, email: string, message: string) => {
    // check if email is empty
    if (!name) {
      toast.error("Name field cannot be empty");

      return false;
    }
    if (!email) {
      toast.error("Email field cannot be empty");

      return false;
    }
    if (!message) {
      toast.error("Message field cannot be empty");

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

    if (!validateEmail(fullName, email, message)) {
      return;
    }

    if (!loading) {
      setLoading(true);
      axios
        .post(`${API_URL}/api/contact`, {
          full_name: fullName,
          email,
          body: message,
        })
        .then((r) => {
          toast.success(r.data.message);
          setLoading(false);
          setEmail("");
          setFullName("");
          setMessage("");
        })
        .catch((e) => {
          toast.error(e.response.data.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="w-full">
      <div className="w-full pt-8 px-4 xs:px-6 pb-16 bg-[#0C0D1D] mds:px-12 md:px-16 lgss:px-12 xl:px-16  xxxl:px-[250px]">
        <Navbar />
        <div className="w-4/5 lgss:w-1/2 mx-auto mt-24">
          <h2 className="text-center text-[20px] md:text-[32px] lgss:text-[40px] font-bold text-white">
            Contact our Support Team
          </h2>
          <h4 className="text-center  mt-1 text-[16px] lgss:text-[18px] text-secondary ">
            Let us know how we can help
          </h4>
        </div>
        <div className="w-full flex mt-10 lgss:gap-4 justify-between items-start">
          <div className="w-2/5 hidden lgss:flex">
            <Image src={contact} alt="" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full lgss:w-2/5 mt-8 lgss:mt-24"
          >
            <h4 className="text-[20px] lgss:text-[24px] text-white font-bold ">
              Submit a Form
            </h4>
            <h4 className="text-left  mt-1 text-[14px] lgss:text-[15px] text-secondary ">
              Let us know how we can help
            </h4>
            <div className="w-full mt-8">
              <h4 className="text-left   text-[14px] lgss:text-[15px] text-white ">
                Full Name
              </h4>
              <input
                value={fullName}
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your Full Name"
                className="w-full text-white border-[#2E304A] bg-[#191A27] h-[52px]  mt-2 placeholder:text-[#929292]  outline-none text-[14px] border  px-4 spin-button-none rounded-xl "
              />
            </div>
            <div className="w-full mt-8">
              <h4 className="text-left   text-[14px] lgss:text-[15px] text-white ">
                Email Address
              </h4>
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Address"
                className="w-full text-white border-[#2E304A] bg-[#191A27] h-[52px]  mt-2 placeholder:text-[#929292]  outline-none text-[14px] border  px-4 spin-button-none rounded-xl "
              />
            </div>
            <div className="w-full mt-8">
              <h4 className="text-left   text-[14px] lgss:text-[15px] text-white ">
                Message
              </h4>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message"
                className="w-full text-white border-[#2E304A] bg-[#191A27] h-[180px] pt-2 mt-2 placeholder:text-[#929292]  outline-none text-[14px] border  px-4 spin-button-none rounded-xl "
              />
            </div>
            <button
              type="submit"
              className="w-full h-[52px] rounded-full mt-6 bg-primary text-[16px] text-white"
            >
              {loading ? <ClipLoader color="#FFFFFF" size={30} /> : "Send"}
            </button>
          </form>
        </div>
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
