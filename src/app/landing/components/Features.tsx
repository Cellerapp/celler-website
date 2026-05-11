"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12 },
  }),
};

/* ── Inner UI Mockups ── */
const walletCurrencies = [
  {
    flag: "/landing/flag-ng.svg",
    code: "NGN",
    name: "Nigerian Naira",
    amount: "₦5000.000",
  },
  {
    flag: "/landing/flag-us.svg",
    code: "USD",
    name: "United States Dollars",
    amount: "$5000.00",
  },
  {
    flag: "/landing/flag-gb.svg",
    code: "GBP",
    name: "Great Britain Pounds",
    amount: "£798.80",
  },
  {
    flag: "/landing/flag-de.svg",
    code: "Euros",
    name: "Euros",
    amount: "€179.07",
  },
];

function WalletMockup() {
  return (
    <div className="bg-white rounded-xl p-4 mt-4 shadow-sm border border-[#f0f2f5]">
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[#101928] font-medium text-[17px]"
          style={{ letterSpacing: "-0.40px" }}
        >
          Wallet
        </span>
        <div className="w-8 h-8 bg-[#3a66ff] rounded-full flex items-center justify-center">
          <span className="text-white text-xl leading-none font-light">+</span>
        </div>
      </div>
      {/* Currency rows */}
      {walletCurrencies.map((c, i) => (
        <div
          key={c.code}
          className={`flex items-center justify-between py-3 ${
            i < walletCurrencies.length - 1 ? "border-b border-[#f0f2f5]" : ""
          }`}
        >
          <div className="flex items-center gap-2.5">
            <img
              src={c.flag}
              alt={c.name}
              width={38}
              height={38}
              className="rounded-full flex-shrink-0 object-cover"
            />
            <div className="flex items-center gap-1.5">
              <span className="text-[#1d2739] text-[14px] font-semibold">
                {c.code}
              </span>
              <span className="text-[#667185] text-[9px] bg-[#f0f2f5] rounded px-1.5 py-0.5 leading-none">
                {c.name}
              </span>
            </div>
          </div>
          <span className="text-[#475367] text-[14px]">{c.amount}</span>
        </div>
      ))}
    </div>
  );
}

function SwapMockup() {
  return (
    <div className="mt-4 space-y-2">
      {/* Percentage buttons */}
      <div className="flex justify-end gap-1 text-[8px] text-[#98a2b3]">
        {["25%", "50%", "75%", "Max"].map((p) => (
          <span
            key={p}
            className={`px-1.5 py-0.5 rounded ${
              p === "Max" ? "text-[#3a66ff]" : ""
            }`}
          >
            {p}
          </span>
        ))}
      </div>

      {/* From box */}
      <div className="rounded-2xl border border-[#e4e7ec] bg-[#f9fafb] p-3">
        <div className="flex items-center justify-between text-[8px] text-[#98a2b3] mb-2">
          <span>From</span>
          <span>50000</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 bg-[#f0f2f5] rounded-xl px-2 py-1.5">
            <img
              src="/landing/flag-ng.svg"
              alt="NGN"
              width={20}
              height={20}
              className="rounded-full object-cover flex-shrink-0"
            />
            <span className="text-[#1d2739] text-[11px] font-medium">NGN</span>
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
              <path
                d="M1 1L4.5 4L8 1"
                stroke="#98A2B3"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-right">
            <p className="text-[#383838] text-[20px] font-bold leading-none">
              0.00
            </p>
            <p className="text-[#98a2b3] text-[8px]">≈ $1.96 USD</p>
          </div>
        </div>
      </div>

      {/* Swap icon */}
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-[#1d2739] flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 1V11M3 11L1 9M3 11L5 9"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11V1M9 1L7 3M9 1L11 3"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* To box */}
      <div className="rounded-2xl border border-[#e4e7ec] bg-[#f9fafb] p-3">
        <div className="flex items-center justify-between text-[8px] text-[#98a2b3] mb-2">
          <span>To</span>
          <span>1.975400</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 bg-[#f0f2f5] rounded-xl px-2 py-1.5">
            <img
              src="/landing/flag-us.svg"
              alt="USD"
              width={20}
              height={20}
              className="rounded-full object-cover flex-shrink-0"
            />
            <span className="text-[#1d2739] text-[11px] font-medium">USD</span>
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
              <path
                d="M1 1L4.5 4L8 1"
                stroke="#98A2B3"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-right">
            <p className="text-[#383838] text-[20px] font-bold leading-none">
              0.00
            </p>
            <p className="text-[#98a2b3] text-[8px]">≈ $1.96 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DepositMockup() {
  return (
    <div className="bg-white rounded-xl mt-4 p-5 shadow-sm border border-[#f0f2f5]">
      <div className="text-center">
        <p className="text-[#1d2739] text-[10px] font-medium uppercase tracking-[1.6px]">
          Total Wallet
        </p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-[#1d2739] font-bold text-[36px] leading-[48px] tracking-[-0.8px]">
            $7,524.08
          </span>
          <img
            src="/landing/icon-deposit.svg"
            alt=""
            width={18}
            height={18}
            className="opacity-50"
          />
        </div>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="text-[#98a2b3] text-[12px] uppercase">
            NGN 10,235,674.98
          </span>
          <div className="flex items-center gap-1">
            <img
              src="/landing/icon-arrow-up-green.svg"
              alt=""
              width={8}
              height={8}
            />
            <span className="text-[12px] text-[#98a2b3] uppercase">+0.98%</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-5">
        <div className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center">
            <HiArrowDown size={18} color="#1d2739" />
          </div>
          <span className="text-[#1d2739] text-[10px]">Deposit</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full border-2 border-[#f0f2f5] flex items-center justify-center">
            <HiArrowUp size={18} color="#1d2739" />
          </div>
          <span className="text-[#1d2739] text-[10px]">Withdraw</span>
        </div>
      </div>
    </div>
  );
}

function ReferMockup() {
  return (
    <div className="mt-4">
      {/* Inner earnings card — spacious vertical layout */}
      <div className="bg-[#f7f9fc] rounded-2xl px-5 pt-10 pb-5">
        <p className="text-[#98a2b3] text-[10px] font-bold uppercase tracking-[1.6px] text-center">
          Total Earned
        </p>
        <p className="text-[#3a66ff] font-bold text-[20px] tracking-[-0.4px] text-center mt-1">
          ₦60,000
        </p>
        <div className="mt-14">
          <div className="bg-white rounded-xl px-4 py-2.5 text-center cursor-pointer">
            <span className="text-[#3a66ff] text-[14px] font-bold underline">
              Withdraw Earning
            </span>
          </div>
        </div>
      </div>
      {/* Floating toast notification */}
      <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 mt-3 mx-2 border border-[#f0f2f5]"
        style={{ boxShadow: '0 4px 20px rgba(16, 25, 40, 0.10)' }}>
        <BsCheckCircleFill size={18} color="#3a66ff" />
        <p className="text-[#98a2b3] text-[12px] font-medium">
          Referral Earning has been deposited into your wallet
        </p>
      </div>
    </div>
  );
}

const featureCards = [
  {
    title: "Asset wallet",
    desc: "Buy, sell, and manage your digital assets in one place",
    mockup: <WalletMockup />,
  },
  {
    title: "Instant Swap",
    desc: "Swap between Digital Asset at the best rates no delays, no hidden fees",
    mockup: <SwapMockup />,
  },
  {
    title: "Deposit & Withdraw",
    desc: "Seamlessly move funds in and out of your wallet with multiple payment options.",
    mockup: <DepositMockup />,
  },
  {
    title: "Earn Rewards",
    desc: "Share your referral link, and earn rewards once your friend signs up and completes their first trade",
    mockup: <ReferMockup />,
  },
];

export default function Features() {
  return (
    <section id="trade" className="ht-section bg-white py-12 lgss:py-24">
      <div className="ht-container">
        <div className="w-full">
          {/* Heading */}
          <div className="text-center mb-12 lgss:mb-14 px-4">
            <h2 className="text-[28px] font-bold leading-tight tracking-[-2.08px] text-[#000000] mds:text-[40px] lgss:text-[52px] lgss:leading-[52px]">
              Everything you need to trade
            </h2>
            <p className="mx-auto mt-3 max-w-[420px] px-2 text-[16px] leading-relaxed text-[#475367] lgss:text-[18px] lgss:leading-[27.72px]">
              Powerful tools designed for both beginners and professional
              traders.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 mds:grid-cols-2 gap-6 px-1">
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="ht-card p-7 lgss:p-8 border border-[#f0f2f5] bg-[#fcfdfd]"
              >
                <h3 className="font-bold text-[#374151] text-[28px] lgss:text-[32px] leading-[40px] tracking-[-0.64px]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[#4b5563] text-[18px] leading-[28px]">
                  {card.desc}
                </p>
                {card.mockup}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
