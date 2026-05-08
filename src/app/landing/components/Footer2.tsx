import Link from 'next/link';

const socialLinks = [
  { href: 'https://instagram.com/useceller', icon: '/home-two/icon-instagram.svg', label: 'Instagram' },
  { href: 'https://twitter.com/useceller', icon: '/home-two/icon-twitter.svg', label: 'Twitter' },
  { href: '#', icon: '/home-two/icon-tiktok.svg', label: 'TikTok' },
  { href: '#', icon: '/home-two/icon-youtube.svg', label: 'YouTube' },
];

const navLinks = [
  { label: 'About Celler', href: '/about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact Support', href: 'mailto:support@celler.app' },
];

export default function Footer2() {
  return (
    <footer className="ht-section bg-black py-16">
      <div className="ht-container">
        {/* Top row */}
        <div className="flex flex-col lgss:flex-row gap-10 lgss:gap-16 justify-between">
          {/* Brand info */}
          <div className="max-w-[350px] flex flex-col gap-5">
            <Link href="/home-two" aria-label="Celler home">
              <img src="/home-two/celler-logo-white.svg" alt="Celler" className="h-10 w-auto" />
            </Link>
            <p className="text-white text-[14px] leading-[21px] opacity-80">
              Celler is a product of &ldquo;Tampay by CQ LTD&rdquo; with company number RC-7430244.
              Tampay by CQ LTD provides Nigerian financial and digital assets management services
              including &ldquo;Tampay Finance&rdquo;, a banking application made for your local and
              global needs
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-white text-[14px] leading-[21px] opacity-80">
                14A Alternative Route, Chevron Close, Lekki, Eti-Osa, Lagos State.
              </p>
              <div className="flex items-center gap-2">
                <img src="/home-two/icon-location.svg" alt="" width={9} height={13} className="opacity-70" />
                <span className="text-white text-[13px]">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 lgss:gap-16 items-start lgss:pt-0">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#cdc4c4] text-[16px] font-medium hover:text-white transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col mds:flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
              >
                <img src={s.icon} alt={s.label} width={18} height={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white text-[14px] opacity-70">
            &copy; 2024 - 2026 Tampay by CQ LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
