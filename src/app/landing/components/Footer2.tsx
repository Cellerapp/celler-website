import Link from "next/link";

const socialLinks = [
  {
    href: "https://instagram.com/useceller",
    icon: "/landing/icon-instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://twitter.com/useceller",
    icon: "/landing/icon-twitter.svg",
    label: "Twitter",
  },
  { href: "#", icon: "/landing/icon-tiktok.svg", label: "TikTok" },
  { href: "#", icon: "/landing/icon-youtube.svg", label: "YouTube" },
];

const navLinks = [
  { label: "About Celler", href: "/about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact Support", href: "#" },
];

export default function Footer2() {
  return (
    <footer className="ht-section bg-black pt-14 pb-12 lgss:pt-16 lgss:pb-14">
      <div className="ht-container">
        {/* Top row: logo+desc | nav links */}
        <div className="flex flex-col lgss:flex-row gap-10 lgss:gap-16 justify-between items-start">
          {/* Nav links — first on mobile via order, right column on desktop */}
          <div className="flex flex-col gap-5 lgss:pt-2 flex-1 order-first lgss:order-last">
            <div className="flex flex-col lgss:flex-wrap gap-y-4 lgss:flex-row lgss:gap-x-10 lgss:justify-between">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#cdc4c4] font-medium hover:text-white transition-colors whitespace-nowrap"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 15 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="mailto:support@celler.app"
              className="text-[#cdc4c4] font-medium hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 15 }}
            >
              support@celler.app
            </a>
          </div>

          {/* Logo + description + address — second on mobile, left on desktop */}
          <div className="flex flex-col gap-5 flex-shrink-0 order-last lgss:order-first" style={{ maxWidth: 320 }}>
            <Link href="/landing" aria-label="Celler home">
              <img
                src="/landing/celler-logo-white.svg"
                alt="Celler"
                className="h-9 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p
              className="text-white leading-relaxed opacity-80"
              style={{ fontSize: 14 }}
            >
              Celler is a product of &ldquo;Tampay by CQ LTD&rdquo; with
              company number RC-7430244. Tampay by CQ LTD provides Nigerian
              financial and digital assets management services including
              &ldquo;Tampay Finance&rdquo;, a banking application made for your
              local and global needs
            </p>
            <div className="flex flex-col gap-1">
              <p
                className="text-white opacity-80 leading-relaxed"
                style={{ fontSize: 14 }}
              >
                14A Alternative Route, Chevron Close, Lekki, Eti-Osa, Lagos
                State.
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="/landing/icon-location.svg"
                  alt=""
                  width={10}
                  height={14}
                  className="opacity-70 flex-shrink-0"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <span className="text-white opacity-80" style={{ fontSize: 14 }}>
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 mb-8" />

        {/* Bottom row: social icons | copyright */}
        <div className="flex flex-col mds:flex-row items-start mds:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <img src={s.icon} alt={s.label} width={18} height={18} />
              </a>
            ))}
          </div>

          <p
            className="text-white opacity-70 whitespace-nowrap"
            style={{ fontSize: 14 }}
          >
            &copy; 2024 - 2026 Tampay by CQ LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
