"use client";

import { SIGNUP_URL } from "@/constants";

export default function Hero() {
  return (
    <section className="ht-section relative" style={{ background: "#3a66ff" }}>
      {/* Full-fidelity Figma hero visual (includes background, text, phone, wave) */}
      <div className="relative w-full max-w-[1240px] mx-auto">
        <img
          src="/landing/figma-hero-full.svg"
          alt="Convert Your Digital Assets to Cash in 3 Minutes — Celler"
          className="w-full h-auto block"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...({ fetchpriority: "high" } as any)}
        />

        {/*
          Transparent interactive overlays positioned over the SVG button areas.
          SVG canvas: 1440 × 997px.
          "Convert Now" button ≈ x:80, y:518, w:160, h:48
          "Download"    button ≈ x:258, y:518, w:214, h:48
        */}
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Convert Now — sign up for Celler"
          className="absolute"
          style={{
            left: "5.55%" /* 80 / 1440 */,
            top: "51.95%" /* 518 / 997 */,
            width: "11.1%" /* 160 / 1440 */,
            height: "4.81%" /* 48 / 997  */,
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
            left: "17.9%" /* 258 / 1440 */,
            top: "51.95%",
            width: "14.86%" /* 214 / 1440 */,
            height: "4.81%",
            cursor: "pointer",
          }}
        />
      </div>
    </section>
  );
}
