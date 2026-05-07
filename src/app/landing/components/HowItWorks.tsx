import Image from 'next/image';

const steps = [
  {
    num: '1',
    title: 'Create Your Account',
    desc: 'Sign up and verify in 5 minutes',
  },
  {
    num: '2',
    title: 'Send Your Digital Assets',
    desc: 'Deposit your digital assets safely.',
  },
  {
    num: '3',
    title: 'Convert & Withdraw',
    desc: 'Get paid directly to your bank.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="ht-section py-20"
      style={{ borderTop: '2px dashed #e8e8e8' }}
    >
      <div className="ht-container">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-bold text-[#000000] leading-[52px] tracking-[-2.08px] text-[36px] mds:text-[44px] lgss:text-[52px]">
            Get started in 60 seconds.
          </h2>
          <p className="mt-2 text-[#475367] text-[18px]">No middleman. No unnecessary talk.</p>
        </div>

        {/* Blue rounded container — phone bottom clipped by overflow (figma) */}
        <div
          className="bg-[#3a66ff] rounded-[40px] overflow-hidden flex flex-col lgss:flex-row items-stretch relative"
          style={{ minHeight: 600 }}
        >
          <div className="ht-chevron-overlay rounded-[40px]" aria-hidden />
          {/* Steps — left */}
          <div className="relative z-10 flex-1 px-12 lgss:px-16 py-14 flex flex-col justify-center gap-16">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col gap-2">
                {/* Number circle */}
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-1">
                  <span className="text-[#000000] font-bold text-[24px] leading-none tracking-[-0.48px]">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-white font-bold text-[24px] tracking-[-0.48px] leading-[28.8px]">
                  {step.title}
                </h3>
                <p className="text-white text-[16px] font-normal">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Phone — sits on bottom edge, lower part clipped by container */}
          <div className="hidden lgss:block relative z-10 flex-shrink-0 w-[min(42%,400px)] min-h-[600px] overflow-hidden">
            <div
              className="absolute bottom-0 w-[min(380px,90%)] h-[min(620px,92%)] max-h-[640px]"
              style={{ right: 'max(-4rem, -8vw)' }}
            >
              <Image
                src="/home-two/steps-phone.png"
                alt="Celler app create account screen"
                fill
                sizes="380px"
                className="object-cover object-[center_28%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
