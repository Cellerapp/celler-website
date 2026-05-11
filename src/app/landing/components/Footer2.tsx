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
        <div className="flex flex-col lgss:flex-row gap-10 lgss:gap-14 justify-between items-start">
          <div className="max-w-[420px] flex flex-col gap-6">
            <Link href="/landing" aria-label="Celler home">
              <img
                src="/landing/celler-logo-white.svg"
                alt="Celler"
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-white text-[18px] leading-[1.55] opacity-80 max-w-[410px]">
              Celler is a product of &ldquo;Tampay by CQ LTD&rdquo; with company
              number RC-7430244. Tampay by CQ LTD provides Nigerian financial
              and digital assets management services including &ldquo;Tampay
              Finance&rdquo;, a banking application made for your local and
              global needs
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-white text-[18px] leading-[1.55] opacity-80 max-w-[380px]">
                14A Alternative Route, Chevron Close, Lekki, Eti-Osa, Lagos
                State.
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="/landing/icon-location.svg"
                  alt=""
                  width={12}
                  height={18}
                  className="opacity-70"
                />
                <span className="text-white text-[18px]">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lgss:flex-nowrap gap-x-10 gap-y-5 lgss:gap-x-14 items-start w-full lgss:w-auto lgss:pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#cdc4c4] text-[23px] font-medium hover:text-white transition-colors whitespace-nowrap"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:support@celler.app"
              className="text-[#cdc4c4] text-[23px] font-medium hover:text-white transition-colors whitespace-nowrap lgss:ml-[-6px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              support@celler.app
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 lgss:mt-12 mb-8 lgss:mb-10" />

        <div className="flex flex-col mds:flex-row items-start mds:items-center justify-between gap-7 lgss:gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
              >
                <img src={s.icon} alt={s.label} width={28} height={28} />
              </a>
            ))}
          </div>

          <p className="text-white text-[18px] opacity-70 whitespace-nowrap mds:mt-0 lgss:mr-1">
            &copy; 2024 - 2026 Tampay by CQ LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
