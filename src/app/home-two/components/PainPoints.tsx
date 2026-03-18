'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: '/home-two/icon-sad-1.svg',
    title: 'Network delay.',
    desc: 'Transactions that take longer than they should, leaving you hanging',
  },
  {
    icon: '/home-two/icon-sad-2.svg',
    title: 'Buyer disappeared.',
    desc: 'Your vendor ghosting you mid transaction',
  },
  {
    icon: '/home-two/icon-sad-3.svg',
    title: 'P2P stories.',
    desc: 'Unnecessary back and forth with unreliable apps and vendors',
  },
  {
    icon: '/home-two/icon-sad-4.svg',
    title: 'Funds on hold for days.',
    desc: 'Waiting days to access your money after a "successful" transaction',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function PainPoints() {
  return (
    <section id="features" className="ht-section bg-[#f9fafb] py-20">
      <div className="ht-container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="font-bold text-[#1d2739] leading-[62.4px] tracking-[-2.08px] text-[36px] mds:text-[44px] lgss:text-[52px]"
          >
            Tired of Hearing &ldquo;It&rsquo;s Still Pending&rdquo;?
          </h2>
          <p className="mt-3 text-[#475367] text-[18px] font-normal">
            We know how frustrating the wait can be.
          </p>
        </div>

        {/* Row 1 — 3 equal cards */}
        <div className="grid grid-cols-1 mds:grid-cols-3 gap-6 mb-6">
          {painPoints.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="ht-card p-7 flex flex-col gap-6 shadow-[0px_1.5px_4px_rgba(16,25,40,0.07)]"
            >
              <div className="w-10 h-10 rounded-full bg-[rgba(52,111,255,0.12)] flex items-center justify-center">
                <img src={item.icon} alt="" width={20} height={20} />
              </div>
              <div className="mt-auto flex flex-col gap-1.5">
                <h3 className="font-bold text-[24px] tracking-[-0.48px] text-[#161616]">
                  {item.title}
                </h3>
                <p className="text-[#484848] text-[16px] leading-[23.68px]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 — half card + promo card */}
        <div className="grid grid-cols-1 mds:grid-cols-2 gap-6">
          {/* Funds on hold */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="ht-card p-7 flex flex-col gap-6 border border-[#f0f2f5] shadow-[0px_1.5px_4px_rgba(16,25,40,0.07)]"
          >
            <div className="w-10 h-10 rounded-full bg-[rgba(52,111,255,0.12)] flex items-center justify-center">
              <img src={painPoints[3].icon} alt="" width={20} height={20} />
            </div>
            <div className="mt-auto flex flex-col gap-1.5">
              <h3 className="font-bold text-[24px] tracking-[-0.48px] text-[#161616]">
                {painPoints[3].title}
              </h3>
              <p className="text-[#484848] text-[16px] leading-[23.68px]">{painPoints[3].desc}</p>
            </div>
          </motion.div>

          {/* You need control — blue promo card */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl bg-[#3a66ff] p-8 flex items-center justify-between overflow-hidden relative min-h-[247px]"
          >
            <div className="flex flex-col gap-2 z-10">
              <h3 className="text-white font-bold text-[32px] tracking-[-0.64px] leading-[38.4px]">
                You need control.
              </h3>
              <p className="text-white text-[16px] font-normal">
                Celler gives you control, simply and reliably.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 h-full flex items-end">
              <Image
                src="/home-two/hero-phone.png"
                alt="Celler app"
                width={220}
                height={207}
                className="object-contain max-h-[207px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
