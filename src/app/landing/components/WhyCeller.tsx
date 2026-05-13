"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "3-Minute Conversions",
    body: "Execute trades in milliseconds with our high-performance matching engine built for speed.",
    icon: "/landing/icon-clock.svg",
  },
  {
    title: "Complete Privacy",
    body: "Non-custodial wallet with multi-layer encryption. Your keys, your assets — always.",
    icon: "/landing/icon-shield-privacy.svg",
  },
  {
    title: "Best Rates Always",
    body: "Save more with our competitive 0.5% trading fee and zero hidden charges.",
    icon: "/landing/icon-rates-chart.svg",
  },
  {
    title: "Instant Cash Out",
    body: "Cash out your assets to usable funds instantly. Straight to your bank.",
    icon: "/landing/icon-lightning-bolt.svg",
  },
  {
    title: "2-Minute Support",
    body: "Our support answers within 2 minutes. Real humans, real help.",
    icon: "/landing/icon-headphones-support.svg",
  },
];

export default function WhyCeller() {
  return (
    <section className="ht-section bg-[#fcfdfd] py-12 lgss:py-20">
      <div className="ht-container">
        <div className="mb-10 text-center lgss:mb-14" style={{ gap: 12 }}>
          <h2
            className="font-bold text-[#1d2739]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2.08px",
              lineHeight: 1.15,
            }}
          >
            Why Nigerians choose Celler
          </h2>
          <p
            className="mx-auto mt-3 max-w-[680px] px-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: "27.72px",
              color: "#475367",
            }}
          >
            We&rsquo;ve built Celler to be faster, simpler, and cheaper than
            anything you&rsquo;ve used before here&rsquo;s how we win every
            time.
          </p>
        </div>

        {/* responsive card grid: 1-col on mobile, 2-col on mds+ */}
        <div className="grid grid-cols-1 mds:grid-cols-2 gap-4 lgss:gap-5">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-4 rounded-2xl border border-[#f0f2f5] bg-white p-6 lgss:p-8"
              style={{ boxShadow: "0px 1.5px 4px rgba(16, 25, 40, 0.07)" }}
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(58, 102, 255, 0.1)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(35%) sepia(99%) saturate(1413%) hue-rotate(215deg) brightness(104%) contrast(101%)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bold text-[#161616]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    letterSpacing: "-0.48px",
                    lineHeight: "28.80px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[16px] leading-[23.68px] text-[#484848]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
