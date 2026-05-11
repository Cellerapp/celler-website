"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RiShieldFill } from "react-icons/ri";

const topCards = [
  {
    title: "Network delay.",
    desc: "Transactions that take longer than they should, leaving you in the dark.",
  },
  {
    title: "Buyer disappeared.",
    desc: "You did everything right, but the other side\njust wasn\u2019t reliable.",
  },
  {
    title: "P2P stories.",
    desc: "Too many back-and-forth, and never quite knowing if things will work out.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function ShieldIconWrap() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(58, 102, 255, 0.1)",
      }}
    >
      <RiShieldFill size={20} color="#3a66ff" />
    </div>
  );
}

export default function PainPoints() {
  return (
    <section
      id="features"
      className="ht-section py-12 lgss:py-20"
      style={{ background: "#f9fafb" }}
    >
      <div className="ht-container">
        {/* Heading */}
        <div className="text-center lgss:mb-10" style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(26px, 6vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2.08px",
              lineHeight: 1.15,
              color: "#1d2739",
            }}
          >
            Tired of Hearing &ldquo;It&rsquo;s Still Pending&rdquo;?
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              color: "#475367",
              marginTop: 8,
            }}
          >
            We know how frustrating the wait can be.
          </p>
        </div>

        {/* Row 1 — 3 equal cards */}
        <div
          className="grid grid-cols-1 mds:grid-cols-3"
          style={{ gap: 24, marginBottom: 24 }}
        >
          {topCards.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-8 bg-white mds:gap-[60px] mds:px-7 mds:py-7"
              style={{
                borderRadius: 16,
                padding: "24px",
                boxShadow: "0px 1.5px 4px rgba(16, 25, 40, 0.07)",
              }}
            >
              <ShieldIconWrap />
              <div className="flex flex-col" style={{ gap: 6 }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    letterSpacing: "-0.48px",
                    color: "#161616",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    lineHeight: "23.68px",
                    color: "#484848",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 — funds card + you need control card */}
        <div className="grid grid-cols-1 mds:grid-cols-2" style={{ gap: 24 }}>
          {/* Funds on hold */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white flex flex-col"
            style={{
              borderRadius: 16,
              padding: "28px",
              border: "1px solid #f0f2f5",
              boxShadow: "0px 1.5px 4px rgba(16, 25, 40, 0.07)",
              gap: 44,
            }}
          >
            <ShieldIconWrap />
            <div className="flex flex-col" style={{ gap: 6 }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "-0.48px",
                  color: "#161616",
                }}
              >
                Funds on hold for 3 days.
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "23.68px",
                  color: "#484848",
                }}
              >
                Waiting days to access money that&rsquo;s already yours can be
                really unsettling.
              </p>
            </div>
          </motion.div>

          {/* You need control — blue promo card */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[16px] bg-[#3a66ff] mds:min-h-[280px] mds:flex-row mds:items-center"
          >
            <div
              className="z-10 flex w-full max-w-none flex-col px-6 pb-4 pt-8 mds:max-w-[55%] mds:py-10 mds:pl-10 mds:pr-0"
              style={{ gap: 8 }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.64px",
                  lineHeight: "38.40px",
                  color: "#ffffff",
                }}
              >
                You need control.
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: "23.68px",
                }}
              >
                And you deserve a platform that gives it to you simply and
                reliably.
              </p>
            </div>
            {/* Phone — below copy on narrow screens, absolute on mds+ */}
            <div
              className="pointer-events-none relative mx-auto mt-2 h-[240px] w-[200px] flex-shrink-0 mds:absolute mds:right-[-8px] mds:top-2 mds:mx-0 mds:mt-0 mds:h-[350px] mds:w-[230px]"
            >
              <Image
                src="/landing/figma-pain-phone.png"
                alt="Celler app"
                fill
                sizes="230px"
                className="object-contain object-right-top"
                style={{
                  transform: "rotate(8deg)",
                  transformOrigin: "center top",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
