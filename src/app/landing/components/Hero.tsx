"use client";

import Image from "next/image";
import { SIGNUP_URL } from "@/constants";

const trustItems = [
  "Fast approvals",
  "Transparent rates",
  "Built for Nigerians",
];

export default function Hero() {
  return (
    <section className="ht-section relative" style={{ background: "#3a66ff" }}>
      {/* mobile — matches iphone-style layout: copy, ctas, trust row, phone */}
      <div className="lgss:hidden relative overflow-hidden px-4 pt-7 pb-0">
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/figma-wave.svg"
            alt=""
            className="w-full min-h-full object-cover object-top"
          />
        </div>
        <div className="relative z-[1] mx-auto max-w-[400px] text-center">
          <h1
            className="text-white font-bold px-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-1.44px",
              lineHeight: "43.20px",
            }}
          >
            Convert Your Digital Assets to Cash in 3 Minutes.
          </h1>
          <p
            className="mt-4 text-white/90 text-[14px] leading-[1.5] px-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Send, swap and withdraw your digital assets instantly. Built for
            Nigerians who are tired of &lsquo;network is holding it&rsquo;.
          </p>
          <div className="mt-6 flex flex-row flex-nowrap items-stretch justify-center gap-2">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[50px] w-[160px] items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/convert-mobile.png"
                alt="Convert Now"
                className="h-full w-auto"
              />
            </a>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[50px] w-[194px] items-center justify-center"
              aria-label="Download the Celler app"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/download-mobile.png"
                alt="Download"
                className="h-full w-auto"
              />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-1">
            {trustItems.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white/95"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.06px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/check-circle.png"
                  alt=""
                  width={14}
                  height={14}
                  className="flex-shrink-0 opacity-95"
                />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative z-[1] mx-auto mt-6 flex max-w-[320px] justify-center px-2">
          <div className="relative w-full aspect-[10/11] max-h-[340px]">
            <Image
              src="/landing/hero-phone-mobile.png"
              alt="Celler app on a phone"
              fill
              sizes="(max-width: 976px) 320px, 0px"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* desktop — left-aligned hero layout matching reference composition */}
      <div className="relative hidden w-full overflow-hidden px-[56px] pt-8 lgss:block">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage: "url('/landing/wave-bg.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "180px auto",
            opacity: 0.08,
          }}
        >
        </div>

        <div className="relative z-[1] mx-auto grid min-h-[660px] max-w-[1360px] grid-cols-[minmax(0,620px)_minmax(0,1fr)] items-center gap-8">
          <div className="max-w-[620px]">
            <h1
              className="text-white font-bold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 66,
                fontWeight: 700,
                letterSpacing: "-2px",
                lineHeight: "68px",
              }}
            >
              Convert Your Digital Assets to Cash in 3 Minutes.
            </h1>
            <p
              className="mt-5 max-w-[560px] text-white/90"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
                fontWeight: 400,
                lineHeight: "32px",
              }}
            >
              Send, swap and withdraw your digital assets instantly. Built for
              Nigerians who are tired of &lsquo;network is holding it&rsquo;.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[52px] w-[140px] items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/convert-mobile.png"
                  alt="Convert Now"
                  className="h-full w-auto"
                />
              </a>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[52px] w-[181px] items-center justify-center"
                aria-label="Download the Celler app"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/download-mobile.png"
                  alt="Download"
                  className="h-full w-auto"
                />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-6">
              {trustItems.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] font-bold text-white/95"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: "-0.08px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/landing/check-circle.png"
                    alt=""
                    width={14}
                    height={14}
                    className="flex-shrink-0 opacity-95"
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[760px] w-full max-w-[560px] justify-self-end self-end">
            <Image
              src="/landing/hero-phone-desktop.png"
              alt="Celler app on a phone"
              fill
              sizes="560px"
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
