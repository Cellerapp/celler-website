'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SIGNUP_URL } from '@/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Hero() {
  return (
    <section className="ht-hero ht-section">
      <div className="ht-chevron-overlay" aria-hidden />
      {/* subtle radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 80% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="ht-hero-inner relative z-[2]">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-0 pt-4 pb-12 lgss:pb-8 z-10">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white font-bold leading-[1.04] tracking-[-1.92px] text-[54px] mds:text-[72px] lgss:text-[96px] max-w-[680px]"
          >
            Convert Your Digital Assets to Cash in{' '}
            <span className="whitespace-nowrap">3 Minutes.</span>
          </motion.h1>

          <motion.p
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-white text-[18px] font-bold max-w-[500px]"
          >
            Buy, sell, swap and withdraw your digital assets instantly.
          </motion.p>

          <motion.div
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8"
          >
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#020513] text-[16px] font-bold px-7 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
            >
              Sign up now
            </a>
          </motion.div>

          {/* App store badges */}
          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8"
          >
            <img
              src="/home-two/app-badges-hero.svg"
              alt="Download on App Store and Google Play"
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={0.45}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-6"
          >
            {(['Fast approvals', 'Transparent rates', 'Built for Nigerians'] as const).map(
              (label) => (
                <div key={label} className="flex items-center gap-2">
                  <img
                    src="/home-two/icon-sad-1.svg"
                    alt=""
                    className="hidden"
                  />
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <circle cx="7" cy="7" r="6.5" stroke="white" strokeOpacity="0.6" />
                    <path
                      d="M4.5 7L6.5 9L9.5 5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[14px] font-bold">{label}</span>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Right — phone bleeds past bottom/right; section clips (figma) */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hidden lgss:block self-end flex-shrink-0 relative w-[min(44vw,520px)] h-[min(720px,78vh)] mt-4"
        >
          <div
            className="absolute bottom-0 w-[min(560px,48vw)] h-[min(900px,96vh)] max-h-[920px]"
            style={{ right: 'max(-7rem, -12vw)' }}
          >
            <Image
              src="/home-two/hero-phone.png"
              alt="Celler app on iPhone showing total wallet"
              fill
              sizes="560px"
              className="object-cover object-[18%_52%]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="w-full mt-4 lgss:mt-0 relative z-[2]">
        <img
          src="/home-two/wave-bg.svg"
          alt=""
          aria-hidden="true"
          className="w-full block"
          style={{ marginBottom: -4 }}
        />
      </div>
    </section>
  );
}
