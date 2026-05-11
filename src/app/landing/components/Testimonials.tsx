"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="ht-section py-20 bg-white">
      <div className="ht-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2
            className="font-bold text-[#000000] mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2.08px",
              lineHeight: "1.1",
              maxWidth: 800,
            }}
          >
            Join Thousands of Smart Nigerians Moving Their Digital Asset Without
            Stress.
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "27.72px",
              color: "#475367",
              maxWidth: 680,
            }}
          >
            Whether you&rsquo;re sending money to a friend, depositing funds, or
            swapping currencies we make every transaction fast, simple, and
            secure.
          </p>
        </motion.div>

        {/* Full testimonials image from Figma */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/landing/figma-testimonials.svg"
            alt="Customer testimonials — Nigerians sharing their Celler experience"
            className="w-full h-auto block"
          />
        </motion.div>
      </div>
    </section>
  );
}
