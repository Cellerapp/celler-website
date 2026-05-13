"use client";

import { motion } from "framer-motion";

const stories = [
  {
    quote: '"I converted my assets and got paid faster than my bank transfer"',
    name: "Femi, Lagos",
    photo: "/landing/testimonial-1.jpeg",
  },
  {
    quote: '"No more P2P stress. I just use Celler now"',
    name: "Chinedu, Abuja",
    photo: "/landing/testimonial-2.jpeg",
  },
  {
    quote: '"Rates are clear. I like that I don\u2019t have to argue"',
    name: "Amaka, Port Harcourt",
    photo: "/landing/testimonial-3.jpeg",
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
              style={{ aspectRatio: "3/4" }}
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.photo}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div
                  className="rounded-2xl px-4 py-4"
                  style={{
                    background: "rgba(30,20,10,0.52)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <p
                    className="text-[16px] font-bold leading-snug text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.quote}
                  </p>
                  <p
                    className="mt-2 text-[14px] font-bold text-white/90"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.name}
                  </p>
                </div>
              </div>
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
            src="/landing/figma-testimonials.svg"
            alt="Customer testimonials — Nigerians sharing their Celler experience"
            className="block h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
