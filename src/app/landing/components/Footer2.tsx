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

const linkStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
  fontWeight: 500,
  color: "#cdc4c4",
};

export default function Footer2() {
  return (
    <footer className="ht-section" style={{ background: "#000000" }}>
      <div className="pt-24 pb-12 lgss:pt-32 lgss:pb-14">
        <div className="ht-container">
          {/* Top row: logo+desc+address | nav links */}
          <div className="flex flex-col gap-10 lgss:flex-row lgss:gap-[60px] lgss:items-start">
            {/* Left: Logo + description + address — on mobile shows BELOW nav (order-2) */}
            <div
              className="flex flex-col gap-5 flex-shrink-0 order-2 lgss:order-1"
              style={{ maxWidth: 342 }}
            >
              <Link href="/landing" aria-label="Celler home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/celler-logo-white.svg"
                  alt="Celler"
                  className="h-10 w-auto"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
              <p
                className="leading-[21px] opacity-80"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#ffffff",
                }}
              >
                Celler is a product of &ldquo;Tampay by CQ LTD&rdquo; with
                company number RC-7430244. Tampay by CQ LTD provides Nigerian
                financial and digital assets management services including
                &ldquo;Tampay Finance&rdquo;, a banking application made for
                your local and global needs
              </p>
              <div className="flex flex-col" style={{ gap: 9 }}>
                <p
                  className="leading-[21px] opacity-80"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#ffffff",
                  }}
                >
                  14A Alternative Route, Chevron Close, Lekki, Eti-Osa, Lagos
                  State.
                </p>
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/landing/icon-location.svg"
                    alt=""
                    width={9}
                    height={13}
                    className="opacity-70 flex-shrink-0"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <span
                    className="opacity-80"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 13,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Nav links — on mobile shows FIRST (order-1), spread row on desktop (order-2) */}
            <div className="flex-1 flex flex-col gap-4 lgss:flex-row lgss:justify-between lgss:items-start lgss:pt-1 order-1 lgss:order-2">
              <Link
                href="/about"
                className="hover:text-white transition-colors whitespace-nowrap"
                style={linkStyle}
              >
                About Celler
              </Link>
              <Link
                href="#how-it-works"
                className="hover:text-white transition-colors whitespace-nowrap"
                style={linkStyle}
              >
                How It Works
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors whitespace-nowrap"
                style={linkStyle}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors whitespace-nowrap"
                style={linkStyle}
              >
                Terms
              </Link>
              {/* Contact Support — 2-row column */}
              <div className="flex flex-col gap-[16px]">
                <Link
                  href="mailto:support@celler.app"
                  className="hover:text-white transition-colors whitespace-nowrap"
                  style={linkStyle}
                >
                  Contact Support
                </Link>
                {/* <a
                  href="mailto:support@celler.app"
                  className="hover:text-white transition-colors whitespace-nowrap"
                  style={linkStyle}
                >
                  support@celler.app
                </a> */}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-10 mb-8" />

          {/* Bottom row: social icons | copyright */}
          <div className="flex flex-col mds:flex-row items-start mds:items-center justify-between gap-5">
            <div className="flex items-center gap-10">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center hover:border-white/60 transition-colors flex-shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.icon}
                    alt={s.label}
                    width={18}
                    height={18}
                    className="opacity-90"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </a>
              ))}
            </div>

            <p
              className="opacity-70 whitespace-nowrap"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#ffffff",
              }}
            >
              &copy; 2024 - 2026 Tampay by CQ LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
