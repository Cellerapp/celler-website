'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Is Celler safe?',
    a: 'Yes, we use secure systems to protect your funds and transactions.',
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

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="ht-section py-20 bg-white">
      <div className="ht-container">
        {/* Heading */}
        <h2 className="font-bold text-[#101828] text-center leading-[52px] tracking-[-2.08px] text-[36px] mds:text-[44px] lgss:text-[52px] mb-14">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="max-w-[800px] mx-auto border border-[#e4e7ec] rounded-2xl overflow-hidden divide-y divide-[#e4e7ec]">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="ht-faq-item px-7" role="region">
              <button
                className="w-full flex items-center justify-between gap-4 py-1"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="text-left font-medium text-[18px] text-[#101828]">{faq.q}</span>
                {/* Chevron */}
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="w-7 h-7 rounded-full bg-[#09244b] flex items-center justify-center">
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" aria-hidden="true">
                      <path
                        d="M1 1L6.5 6.5L12 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#475467] text-[16px] font-normal pb-4 pt-1 leading-relaxed">
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
