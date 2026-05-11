import Image from "next/image";

export default function CTABottom() {
  return (
    <section className="ht-section bg-[#3a66ff] relative overflow-hidden">
      <div className="ht-chevron-overlay" aria-hidden />
      <div className="ht-container relative z-[2] flex flex-col items-center gap-10 py-12 lgss:min-h-[560px] lgss:flex-row lgss:items-end lgss:gap-0 lgss:py-0">
        {/* Left — text */}
        <div className="z-10 w-full flex-1 py-0 text-center lgss:py-20 lgss:text-left">
          <h2 className="mx-auto max-w-[680px] text-[32px] font-bold leading-[1.05] tracking-[-0.02em] text-white mds:text-[44px] lgss:mx-0 lgss:text-[64px]">
            Take control of your money, your way.
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-[17px] leading-[1.35] text-white opacity-90 lgss:mx-0 lgss:mt-6 lgss:text-[20px]">
            Built for beginners, trusted by professionals.
            <br />
            Everything you need to manage your digital assets in one place
          </p>
          <div className="mt-8 flex justify-center lgss:mt-10 lgss:justify-start">
            <img
              src="/landing/app-badges-footer.svg"
              alt="Download on Google Play and App Store"
              className="h-10 w-auto lgss:h-14"
            />
          </div>
        </div>

        {/* mobile — hand + phone */}
        <div className="relative h-[280px] w-full max-w-[380px] lgss:hidden">
          <Image
            src="/landing/take-control.png"
            alt="Hand holding phone with Celler app"
            fill
            sizes="380px"
            className="object-contain object-bottom"
          />
        </div>

        {/* desktop — hand + phone bleeds bottom/right */}
        <div
          className="relative hidden flex-shrink-0 items-end self-stretch lgss:flex"
          style={{ width: "min(620px, 46vw)" }}
        >
          <div
            className="absolute bottom-0"
            style={{
              right: "max(-24px, -2vw)",
              width: "min(700px, 54vw)",
              height: "min(760px, 135%)",
            }}
          >
            <Image
              src="/landing/take-control.png"
              alt="Hand holding phone with Celler app"
              fill
              sizes="700px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Decorative radial */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
    </section>
  );
}
