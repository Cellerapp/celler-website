import Image from "next/image";

export default function CTABottom() {
  return (
    <section
      id="cta"
      className="ht-section ht-cta-band relative overflow-hidden"
    >
      <div className="ht-chevron-overlay" aria-hidden />

      {/* ===== Desktop ===== */}
      <div className="relative z-[2] hidden lgss:block">
        <div className="ht-container grid min-h-[680px] grid-cols-[minmax(0,1fr)_minmax(440px,560px)] items-end gap-10 pt-8">
          <div className="max-w-[700px] pb-24 pt-16">
            <h2 className="max-w-[680px] text-[64px] font-bold leading-[0.98] tracking-[-1.8px] text-white">
              Take control of your money, your way.
            </h2>
            <p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] text-white/90">
              Built for beginners, trusted by professionals. Everything you need
              to manage your money is right here, right now
            </p>
            <div className="mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/app-badges-footer.svg"
                alt="Download on Google Play and App Store"
                className="h-auto w-[346px] max-w-full"
              />
            </div>
          </div>

          <div className="relative h-[640px] w-full self-end justify-self-end">
            <Image
              src="/landing/take-control.png"
              alt="Hand holding phone with Celler app"
              fill
              sizes="(min-width: 977px) 620px, 0px"
              className="object-contain object-right-bottom"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* ===== Mobile ===== */}
      <div className="relative z-[2] pt-20 lgss:hidden">
        <div className="ht-container flex flex-col items-center">
          <div className="flex max-w-[340px] flex-col items-center text-center">
            <h2 className="max-w-[320px] text-[32px] font-bold leading-[1.08] tracking-[-0.64px] text-white">
              Take control of your money, your way.
            </h2>
            <p className="mt-5 text-[14px] leading-[1.55] text-white/90">
              Built for beginners, trusted by professionals. Everything you need
              to manage your money is right here, right now
            </p>
            <div className="mt-6 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/app-badges-footer.svg"
                alt="Download on Google Play and App Store"
                className="h-auto w-[332px] max-w-full"
              />
            </div>
          </div>
          <div className="relative mt-7 -mb-5 h-[350px] w-full max-w-[250px]">
            <Image
              src="/landing/take-control.png"
              alt="Hand holding phone with Celler app"
              fill
              sizes="250px"
              className="object-contain object-center-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
