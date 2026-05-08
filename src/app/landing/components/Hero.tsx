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

const trustBadges = [
  { icon: '/home-two/icon-trust-check.svg', label: 'Fast approvals' },
  { icon: '/home-two/icon-trust-check2.svg', label: 'Transparent rates' },
  { icon: '/home-two/icon-trust-check2.svg', label: 'Built for Nigerians' },
];

export default function Hero() {
  return (
    <section className="ht-hero ht-section">
      <div className="ht-hero-inner relative z-[2]">
        {/* Left column */}
        <div className="flex-1 flex flex-col pt-4 pb-12 lgss:pb-8 z-10" style={{ gap: 12 }}>
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: 700,
              letterSpacing: '-1.92px',
              lineHeight: '100px',
              maxWidth: 711,
            }}
          >
            Convert Your Digital Assets to Cash in{' '}
            <span className="whitespace-nowrap">3 Minutes.</span>
          </motion.h1>

          <motion.p
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '24px',
              maxWidth: 519,
              marginTop: 12,
            }}
          >
            Send, swap and withdraw your digital assets instantly. Built for Nigerians who are tired of &ldquo;network is holding it&rdquo;.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center"
            style={{ gap: 32, marginTop: 20 }}
          >
            {/* Convert Now */}
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-[#000000] hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                background: '#ffffff',
                borderRadius: 9999,
                padding: '12px 28px',
              }}
            >
              Convert Now
            </a>

            {/* Download button */}
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-white hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                background: '#000000',
                borderRadius: 12,
                padding: '18px 24px',
                gap: 8,
              }}
            >
              <span>Download</span>
              <img src="/home-two/icon-apple.svg" alt="Apple" width={17} height={20} className="invert" />
              {/* Divider */}
              <span style={{ width: 1, height: 29, background: '#ffffff', display: 'inline-block', margin: '0 2px' }} />
              <img src="/home-two/icon-playstore.svg" alt="Google Play" width={18} height={20} className="invert" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center"
            style={{ gap: 32, marginTop: 8 }}
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center" style={{ gap: 8 }}>
                <img src={badge.icon} alt="" width={13} height={13} aria-hidden="true" />
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#ffffff',
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — phone image */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hidden lgss:block self-end flex-shrink-0 relative"
          style={{ width: 448, height: 813 }}
        >
          <Image
            src="/home-two/figma-hero-phone.png"
            alt="Celler app on iPhone showing total wallet"
            fill
            sizes="448px"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="w-full relative z-[2]" style={{ marginTop: -2 }}>
        <img
          src="/home-two/figma-wave.svg"
          alt=""
          aria-hidden="true"
          className="w-full block"
        />
      </div>
    </section>
  );
}
