'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Is Celler safe?',
    a: 'Celler is a comprehensive digital assets platform that allows users to buy, sell, swap, and deposit various digital assets. It also provides advanced features for managing and tracking your digital assets.',
  },
  {
    q: 'How fast will I receive my payment?',
    a: 'Payments are processed instantly — most users receive funds within 3 minutes.',
  },
  {
    q: 'Are there hidden charges?',
    a: 'No. All fees are displayed upfront before you confirm any transaction.',
  },
  {
    q: 'Do I need trading experience?',
    a: 'Not at all! Celler is designed for beginners and professionals alike.',
  },
  {
    q: 'Can I withdraw to my Nigerian bank?',
    a: 'Yes, you can withdraw directly to any Nigerian bank account.',
  },
];

function ChevronIcon() {
  return (
    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
      <path
        d="M1 1L6.5 6.5L12 1"
        stroke="#09244b"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="ht-section py-20 bg-white">
      <div className="ht-container">
        {/* Heading */}
        <div className="text-center" style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-2.08px',
              lineHeight: '52px',
              color: '#101828',
            }}
          >
            Frequently asked questions
          </h2>
          <p
            className="mt-5"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: '-0.40px',
              lineHeight: '24px',
              color: '#475467',
            }}
          >
            Everything you need to know about{' '}
            <span style={{ fontWeight: 700, color: '#101828' }}>CELLER</span>
          </p>
        </div>

        {/* Accordion — no outer border, just dividers between items */}
        <div className="max-w-[700px] mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="border-b border-[#e4e7ec]"
              role="region"
              aria-labelledby={`faq-q-${i}`}
            >
              <button
                id={`faq-q-${i}`}
                className="w-full flex items-center justify-between py-6"
                style={{ gap: 24 }}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-left"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#101828',
                  }}
                >
                  {faq.q}
                </span>

                {/* Rotating chevron */}
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <ChevronIcon />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-6 pt-0"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 16,
                        fontWeight: 400,
                        lineHeight: '23.68px',
                        color: '#475467',
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
