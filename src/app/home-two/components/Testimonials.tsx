'use client';

import { motion } from 'framer-motion';
import { SIGNUP_URL } from '@/constants';

const testimonials = [
  {
    quote:
      '\u201cI converted my assets and got paid faster than my bank transfer\u201d',
    name: 'Femi, Lagos',
    photo:
      'https://pixabay.com/get/gb6ef2193a5ff2c681dd14db722590670d9ecfcea996dc327a8384ac7d51e32cbb79d32f7c23265277ba1d529c436a437.jpg',
    attribution: 'artsysolomon on Pixabay',
  },
  {
    quote: '\u201cNo more P2P stress. I just use Celler now\u201d',
    name: 'Abdul, Abuja',
    photo: 'https://images.pexels.com/photos/19518397/pexels-photo-19518397.jpeg',
    attribution: 'Abubakar Isa on Pexels',
  },
  {
    quote: '\u201cRates are clear. I like that I don\u2019t have to argue\u201d',
    name: 'Amaka, Port Harcourt',
    photo: 'https://images.pexels.com/photos/6497114/pexels-photo-6497114.jpeg',
    attribution: 'Tamra Creatives Agency on Pexels',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12 },
  }),
};

export default function Testimonials() {
  return (
    <section className="ht-section py-20 bg-white">
      <div className="ht-container">
        {/* Heading */}
        <h2 className="font-bold text-[#000000] leading-[1.1] tracking-[-2.08px] text-center text-[32px] mds:text-[44px] lgss:text-[52px] mb-12 max-w-[700px] mx-auto">
          Join Thousands of Smart Nigerians Managing Digital Assets Stress-Free
        </h2>

        {/* Photo testimonials */}
        <div className="flex flex-col mds:flex-row gap-4 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="ht-testimonial-card flex-1 min-h-[380px]"
            >
              {/* Photo */}
              <img
                src={t.photo}
                alt={t.attribution}
                className="w-full h-full object-cover object-center absolute inset-0"
                style={{ minHeight: 380 }}
              />
              {/* Make card itself relative + has min-height */}
              <div style={{ minHeight: 380, position: 'relative' }}>
                {/* Overlay quote */}
                <div className="ht-testimonial-overlay">
                  <p className="text-white text-[16px] mds:text-[18px] font-medium leading-[1.4] tracking-[-0.3px]">
                    {t.quote}
                  </p>
                  <p className="text-white font-bold text-[18px] tracking-[-0.4px] mt-2">
                    {t.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-[#3a66ff] text-white text-[16px] font-medium px-8 py-4 rounded-full hover:bg-[#2a56ef] transition-colors shadow-lg hover:shadow-xl"
          >
            Start Trading Now
          </a>
        </div>
      </div>
    </section>
  );
}
