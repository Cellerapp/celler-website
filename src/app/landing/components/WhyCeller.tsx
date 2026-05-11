"use client";

import { motion } from "framer-motion";

export default function WhyCeller() {
  return (
    <section className="ht-section bg-[#fcfdfd] py-20">
      <div className="ht-container">
        {/* Heading */}
        <div className="text-center mb-14" style={{ gap: 12 }}>
          <h2
            className="font-bold text-[#1d2739]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2.08px",
              lineHeight: "62.40px",
            }}
          >
            Why Nigerians choose Celler
          </h2>
          <p
            className="mt-3 mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "27.72px",
              color: "#475367",
              maxWidth: 680,
            }}
          >
            We&rsquo;ve built Celler to be faster, simpler, and cheaper than
            anything you&rsquo;ve used before here&rsquo;s how we win every
            time.
          </p>
        </div>

        {/* Full section image from Figma */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/landing/figma-why-nigerians.svg"
            alt="Why Nigerians choose Celler — 3-Minute Conversions, Complete Privacy, Best Rates Always, Instant Cash Out, 2-Minute Support"
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  );
}
