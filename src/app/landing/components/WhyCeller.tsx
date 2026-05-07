'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '/home-two/icon-lightning.svg',
    title: 'Instant Cash Out',
    desc: 'Convert your assets to usable funds straight to your bank account instantly.',
  },
  {
    icon: '/home-two/icon-shield.svg',
    title: 'Complete Privacy',
    desc: 'Complete privacy every single time, we do not share your data.',
  },
  {
    icon: '/home-two/icon-chart.svg',
    title: 'Best Rates Always',
    desc: 'Our rates are always the best with full transparency and zero hidden charges.',
  },
  {
    icon: '/home-two/icon-headphones.svg',
    title: '2-Minute Support',
    desc: 'Our support answers within 2 minutes. Real humans, real help.',
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

export default function WhyCeller() {
  return (
    <section className="ht-section bg-[#fcfdfd] py-20">
      <div className="ht-container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-bold text-[#000000] leading-[52px] tracking-[-2.08px] text-[36px] mds:text-[44px] lgss:text-[52px]">
            Why Nigerians choose Celler
          </h2>
          <p className="mt-3 text-[#475367] text-[18px] leading-[27.72px] max-w-[600px] mx-auto">
            We have built Celler to be faster, simpler and better than anything you have used.
            Here&rsquo;s how we win every time.
          </p>
        </div>

        {/* Content: cards left + 3D graphic right */}
        <div className="flex flex-col lgss:flex-row items-start gap-12">
          {/* 2×2 feature card grid */}
          <div className="flex-1 grid grid-cols-1 mds:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="ht-card p-7 flex flex-col gap-6 shadow-[0px_1.5px_4px_rgba(16,25,40,0.07)] rounded-2xl border border-[#f0f2f5]"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(58,102,255,0.1)] flex items-center justify-center">
                  <img src={r.icon} alt="" width={18} height={20} />
                </div>
                <div className="mt-auto flex flex-col gap-1.5">
                  <h3 className="font-bold text-[24px] tracking-[-0.48px] text-[#161616]">
                    {r.title}
                  </h3>
                  <p className="text-[#484848] text-[16px] leading-[23.68px]">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D shield graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lgss:flex flex-shrink-0 items-center justify-center"
          >
            <img
              src="/home-two/shield-3d-graphic.svg"
              alt="Celler security graphic"
              className="w-[400px] xl:w-[463px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
