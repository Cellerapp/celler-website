'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SIGNUP_URL } from '@/constants';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export default function Navbar2() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="ht-navbar">
      <div className="ht-navbar-inner">
        {/* Logo */}
        <Link href="/landing" aria-label="Celler home">
          <img
            src="/home-two/figma-logo.svg"
            alt="Celler"
            width={61}
            height={42}
            className="h-[42px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lgss:flex items-center gap-10"
          aria-label="Main navigation"
          style={{ gap: 16 }}
        >
          <Link
            href="#features"
            className="text-[16px] font-medium hover:text-[#3a66ff] transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#000000' }}
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-[16px] font-medium hover:text-[#3a66ff] transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#000000' }}
          >
            FAQ
          </Link>
          <Link
            href="#how-it-works"
            className="text-[16px] font-medium hover:text-[#3a66ff] transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#000000' }}
          >
            How it works
          </Link>
        </nav>

        {/* CTA Button */}
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden lgss:inline-flex items-center justify-center bg-[#09244b] text-white text-[14px] font-medium px-6 py-[10px] rounded-full hover:bg-[#0a2f63] transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Get Started
        </a>

        {/* Mobile burger */}
        <button
          className="lgss:hidden text-[#1d2739] text-[28px]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lgss:hidden bg-white border-t border-[#f0f2f5] px-6 py-6 flex flex-col gap-5">
          <Link
            href="#features"
            className="text-[16px] font-medium text-[#1d2739]"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-[16px] font-medium text-[#1d2739]"
            onClick={() => setMobileOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="#how-it-works"
            className="text-[16px] font-medium text-[#1d2739]"
            onClick={() => setMobileOpen(false)}
          >
            How it works
          </Link>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-[#09244b] text-white text-[14px] font-medium px-6 py-3 rounded-full w-fit"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
