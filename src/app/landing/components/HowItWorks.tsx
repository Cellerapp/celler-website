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
          <h2
            className="font-bold text-[#000000]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-2.08px',
              lineHeight: '52px',
            }}
          >
            Get started
            <br />
            in 60 seconds.
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 18,
              fontWeight: 400,
              lineHeight: '27.72px',
              color: '#475367',
            }}
          >
            No middleman. No unnecessary talk.
          </p>
        </div>

        {/* Full section image from Figma */}
        <img
          src="/home-two/figma-how-it-works.svg"
          alt="Get started in 60 seconds: Create Your Account, Send Your Digital Assets, Convert & Withdraw"
          className="w-full h-auto block rounded-[40px]"
        />
      </div>
    </section>
  );
}
