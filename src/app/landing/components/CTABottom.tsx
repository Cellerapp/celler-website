import Image from "next/image";

export default function CTABottom() {
  return (
    <section className="ht-section bg-[#3a66ff] relative overflow-hidden">
      <div className="ht-chevron-overlay" aria-hidden />
      <div className="ht-container flex flex-col lgss:flex-row items-center lgss:items-end gap-10 lgss:gap-0 py-16 lgss:py-0 lgss:min-h-[560px] relative z-[2]">
        {/* Left — text */}
        <div className="flex-1 z-10 py-0 lgss:py-20">
          <h2 className="text-white font-bold leading-[1.05] tracking-[-0.02em] text-[36px] mds:text-[52px] lgss:text-[64px] max-w-[680px]">
            Take control of your money, your way.
          </h2>
          <p className="mt-6 text-white text-[18px] lgss:text-[20px] leading-[1.35] max-w-[700px] opacity-90">
            Built for beginners, trusted by professionals.
            <br />
            Everything you need to manage your digital assets in one place
          </p>
          <div className="mt-8 lgss:mt-10">
            <img
              src="/landing/app-badges-footer.svg"
              alt="Download on Google Play and App Store"
              className="h-10 lgss:h-14 w-auto"
            />
          </div>
        </div>

        {/* Right — hand + phone bleeds bottom/right */}
        <div
          className="hidden lgss:flex relative flex-shrink-0 items-end self-stretch"
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
              src="/landing/hand-phone.png"
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
