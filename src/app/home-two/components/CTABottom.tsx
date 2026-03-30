import Image from 'next/image';

export default function CTABottom() {
  return (
    <section className="ht-section bg-[#3a66ff] relative overflow-hidden">
      <div className="ht-chevron-overlay" aria-hidden />
      <div className="ht-container flex flex-col lgss:flex-row items-center lgss:items-end gap-10 py-20 lgss:py-24 relative z-[2]">
        {/* Left — text */}
        <div className="flex-1 z-10">
          <h2 className="text-white font-bold leading-[52px] tracking-[-0.52px] text-[36px] mds:text-[44px] lgss:text-[52px] max-w-[560px]">
            Take control of your money, your way.
          </h2>
          <p className="mt-4 text-white text-[18px] leading-[27.72px] max-w-[480px] opacity-90">
            Built for beginners, trusted by professionals.
            <br />
            Everything you need to manage your digital assets in one place
          </p>
          <div className="mt-8">
            <img
              src="/home-two/app-badges-footer.svg"
              alt="Download on Google Play and App Store"
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Right — hand + phone bleeds bottom/right (figma) */}
        <div className="hidden lgss:block relative flex-shrink-0 h-[min(520px,55vh)] w-[min(44vw,480px)] overflow-hidden">
          <div
            className="absolute bottom-[-12px] w-[min(560px,50vw)] h-[min(620px,95vh)] max-h-[680px]"
            style={{ right: 'max(-6rem, -11vw)' }}
          >
            <Image
              src="/home-two/hand-phone.png"
              alt="Hand holding phone with Celler app"
              fill
              sizes="560px"
              className="object-cover object-[54%_52%]"
            />
          </div>
        </div>
      </div>

      {/* Decorative radial */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
    </section>
  );
}
