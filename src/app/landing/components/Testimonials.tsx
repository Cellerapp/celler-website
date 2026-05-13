"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Femi, Lagos",
    photo: "/landing/femi-testimonial-mobile.png",
  },
  {
    name: "Chinedu, Abuja",
    photo: "/landing/chinedu-testimonial-mobile.png",
  },
  {
    name: "Amaka, Port Harcourt",
    photo: "/landing/amaka-testimonial-mobile.png",
  },
];

export default function Testimonials() {
  return (
    <section className="ht-section bg-white py-12 lgss:py-20">
      <div className="ht-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 text-center lgss:mb-12"
        >
          <h2
            className="mx-auto max-w-[800px] font-bold text-[#000000] px-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(26px, 6vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-2.08px",
              lineHeight: 1.12,
            }}
          >
            Join Thousands of Smart Nigerians Moving Their Digital Asset Without
            Stress.
          </h2>
          <p
            className="mx-auto mt-4 max-w-[680px] px-1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: "27.72px",
              color: "#475367",
            }}
          >
            Whether you&rsquo;re sending money to a friend, depositing funds, or
            swapping currencies we make every transaction fast, simple, and
            secure.
          </p>
        </motion.div>

        {/* mobile — full-width stacked portrait cards with real photos */}
        <div className="flex flex-col gap-5 lgss:hidden">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative w-full overflow-hidden rounded-[22px] shadow-md"
              style={{ aspectRatio: "7/10" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.photo}
                alt={s.name}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>

        {/* desktop — full figma art */}
        <motion.div
          className="hidden lgss:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/landing/testimonial.png"
            alt="Customer testimonials — Nigerians sharing their Celler experience"
            className="block h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
