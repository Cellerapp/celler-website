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
            className="text-white font-bold tracking-[-0.04em] px-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 6.2vw, 30px)",
              lineHeight: 1.18,
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
          <div className="mt-6 flex flex-row flex-wrap items-stretch justify-center gap-2">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] flex-1 min-w-[130px] max-w-[160px] items-center justify-center rounded-full bg-white px-4 text-[14px] font-semibold text-[#111] shadow-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Convert Now
            </a>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] flex-1 min-w-[160px] max-w-[220px] items-center justify-center rounded-full bg-black px-3 py-2"
              aria-label="Download the Celler app"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/app-badges-hero.svg"
                alt=""
                className="h-[26px] w-auto max-w-full"
              />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-1">
            {trustItems.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/95"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/icon-trust-check.svg"
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
              src="/landing/hero-phone.png"
              alt="Celler app on a phone"
              fill
              sizes="(max-width: 976px) 320px, 0px"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
        {/* subtle wave line at bottom of blue block */}
        <div className="relative -mt-2 h-6 w-full overflow-hidden" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/figma-wave.svg"
            alt=""
            className="absolute bottom-0 left-0 w-[200%] max-w-none opacity-30 -translate-x-1/4 object-cover"
            style={{ height: 48 }}
          />
        </div>
      </div>

      {/* desktop — full-width figma hero + hit targets */}
      <div className="relative mx-auto hidden w-full max-w-[1240px] lgss:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/landing/figma-hero-full.svg"
          alt="Convert Your Digital Assets to Cash in 3 Minutes — Celler"
          className="block h-auto w-full"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...({ fetchpriority: "high" } as any)}
        />
        {/*
          transparent interactive overlays (svg canvas 1440 × 997)
          convert now ≈ 80,518 — download ≈ 258,518
        */}
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Convert Now — sign up for Celler"
          className="absolute"
          style={{
            left: "5.55%",
            top: "51.95%",
            width: "11.1%",
            height: "4.81%",
            cursor: "pointer",
          }}
        />
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Download the Celler app"
          className="absolute"
          style={{
            left: "17.9%",
            top: "51.95%",
            width: "14.86%",
            height: "4.81%",
            cursor: "pointer",
          }}
        />
      </div>
    </section>
  );
}
