"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SIGNUP_URL } from "@/constants";

const steps = [
  {
    n: 1,
    title: "Create Your Account",
    desc: "Sign up and verify in 5 minutes",
  },
  {
    n: 2,
    title: "Send Your Digital Assets",
    desc: "Deposit your digital assets safely.",
  },
  {
    n: 3,
    title: "Convert & Withdraw",
    desc: "Get paid directly to your bank.",
  },
];

const phoneImages = [
  {
    src: "/landing/how-it-works-1.png",
    alt: "Create your Celler account",
  },
  {
    src: "/landing/how-it-works-2.png",
    alt: "Deposit to your NGN wallet",
  },
  {
    src: "/landing/how-it-works-3.png",
    alt: "Successful USDT transfer",
  },
];

const imgVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "70%" : "-70%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-70%" : "70%", opacity: 0 }),
};

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const next = () => current < phoneImages.length - 1 && goTo(current + 1);
  const prev = () => current > 0 && goTo(current - 1);

  return (
    <section
      id="how-it-works"
      className="ht-section py-12 lgss:py-20"
      style={{ borderTop: "2px dashed #e8e8e8" }}
    >
      <div className="ht-container">
        <div className="mb-10 text-center lgss:mb-14">
          <h2
            className="font-bold text-[#000000]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2.08px",
              lineHeight: 1.12,
            }}
          >
            Get started
            <br />
            in 60 seconds.
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: "27.72px",
              color: "#475367",
            }}
          >
            No middleman. No unnecessary talk.
          </p>
        </div>

        {/* mobile — blue panel, stacked steps each with phone mock */}
        <div
          className="relative overflow-hidden rounded-[28px] px-5 pb-8 pt-8 lgss:hidden"
          style={{ background: "#3a66ff" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden
            style={{
              backgroundImage: "url('/landing/wave-bg.svg')",
              backgroundSize: "100px auto",
            }}
          />
          <div className="relative z-[1]">
          {steps.map((step, i) => (
            <div key={step.n} className={i > 0 ? "mt-10" : ""}>
              <div
                className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold"
                style={{ fontSize: 14, color: "#111" }}
              >
                {step.n}
              </div>
              <h3
                className="font-bold text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 18,
                  letterSpacing: "-0.3px",
                }}
              >
                {step.title}
              </h3>
              <p
                className="mt-1"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                {step.desc}
              </p>
              <div
                className="mt-4 rounded-[22px] p-3"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={phoneImages[i].src}
                  alt={phoneImages[i].alt}
                  className="mx-auto block h-auto w-full max-h-[min(48vh,380px)] object-contain object-bottom"
                  draggable={false}
                />
              </div>
            </div>
          ))}
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-xl font-bold text-white"
            aria-label="Get started with Celler"
          >
            →
          </a>
          </div>
        </div>

        {/* desktop — steps column + swipeable phone */}
        <div className="hidden lgss:block">
          <div
            className="flex flex-row overflow-hidden rounded-[40px]"
            style={{ background: "#3a66ff" }}
          >
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-10 p-10 lgss:p-16">
              {steps.map((step) => (
                <div key={step.n} className="flex flex-col gap-1">
                  <div
                    className="mb-1.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white font-bold"
                    style={{
                      width: 32,
                      height: 32,
                      fontSize: 14,
                      color: "#111",
                    }}
                  >
                    {step.n}
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 17,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.68)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Get started with Celler"
                className="mt-1 w-fit text-xl font-bold text-white"
              >
                →
              </a>
            </div>

            <div className="flex flex-shrink-0 items-center justify-center p-6 lgss:p-8">
              <div
                className="relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  borderRadius: 28,
                  width: 360,
                  height: 520,
                }}
              >
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={imgVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.38,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -60) next();
                      else if (info.offset.x > 60) prev();
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      userSelect: "none",
                      cursor: "grab",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={phoneImages[current].src}
                      alt={phoneImages[current].alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "bottom",
                        pointerEvents: "none",
                        display: "block",
                      }}
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
