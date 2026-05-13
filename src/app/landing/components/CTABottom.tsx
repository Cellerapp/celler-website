import Image from "next/image";

export default function CTABottom() {
  return (
    <section id="cta" className="ht-section bg-[#3a66ff] relative overflow-hidden">
      <div className="ht-chevron-overlay" aria-hidden />

      {/* ===== Desktop ===== */}
      <div
        className="relative z-[2] hidden lgss:flex ht-container"
        style={{ minHeight: 666 }}
      >
        {/* Left — text, vertically centred */}
        <div
          className="flex flex-1 flex-col justify-center"
          style={{ paddingTop: 80, paddingBottom: 80, maxWidth: 580 }}
        >
          <h2
            className="text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Take control of your money, your way.
          </h2>
          <p
            className="mt-5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 460,
            }}
          >
            Built for beginners, trusted by professionals. Everything you need
            to manage your money is right here, right now
          </p>
          <div className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing/app-badges-footer.svg"
              alt="Download on Google Play and App Store"
              style={{ height: 52, width: "auto" }}
            />
          </div>
        </div>

        {/* Right — phone, fills full section height, anchored to top so status bar is visible */}
        <div
          className="relative flex-shrink-0"
          style={{ width: 537, alignSelf: "stretch" }}
        >
          <Image
            src="/landing/take-control.png"
            alt="Hand holding phone with Celler app"
            fill
            sizes="537px"
            style={{ objectFit: "contain", objectPosition: "right top" }}
            priority={false}
          />
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <div className="relative z-[2] lgss:hidden ht-container flex flex-col items-center gap-8 py-14">
        <div className="flex flex-col items-center text-center gap-5">
          <h2
            className="text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 32,
              fontWeight: 700,
              lineHeight: "38.40px",
              letterSpacing: "-0.64px",
            }}
          >
            Take control of your money, your way.
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "20.30px",
              color: "rgba(255,255,255,0.9)",
              maxWidth: 380,
            }}
          >
            Built for beginners, trusted by professionals. Everything you need
            to manage your money is right here, right now
          </p>
          <div className="mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing/app-badges-footer.svg"
              alt="Download on Google Play and App Store"
              style={{ height: 40, width: "auto" }}
            />
          </div>
        </div>
        <div className="relative w-full max-w-[220px]" style={{ height: 300 }}>
          <Image
            src="/landing/take-control.png"
            alt="Hand holding phone with Celler app"
            fill
            sizes="220px"
            style={{ objectFit: "contain", objectPosition: "top" }}
          />
        </div>
      </div>

      {/* Decorative radial */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
    </section>
  );
}
