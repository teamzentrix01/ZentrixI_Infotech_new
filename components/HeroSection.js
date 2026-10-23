'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center w-full relative z-10">
      {/* Background Layer 1 */}
      <div
        className="absolute top-0 w-full h-[400px] z-0 xxxs:h-[220px] sm:h-[350px] lg:h-[320px] xl:h-[400px]"
        id="home"
      >
        <img
          src="/HeroBG1.svg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Layer 2 */}
      <div className="absolute w-full h-[300px] top-[500px] object-cover z-0 xxs:top-[580px] xxxs:h-[170px] xs:top-[680px] sm:h-[180px] sm:top-[620px] md:h-[220px] md:top-[580px] lg:top-[440px] xl:top-[480px] xl:h-[360px]">
        <img
          src="/HeroBG2.svg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Left and Right Corner Graphics */}
      <img
        alt=""
        role="presentation"
        className="corner-art hero-bg-img-1 absolute top-0 left-0 z-0 pointer-events-none h-auto w-[140px] xxs:w-[160px] xs:w-[190px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] min-[1440px]:w-[480px] 2xl:w-[540px]"
        style={{ '--corner-from-x': '-40px' }}
        src="/HeroLeftCornerBG.svg"
      />
      <img
        alt=""
        role="presentation"
        className="corner-art hero-bg-img-2 absolute top-0 right-0 z-0 pointer-events-none h-auto w-[140px] xxs:w-[160px] xs:w-[190px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[400px] min-[1440px]:w-[480px] 2xl:w-[540px]"
        style={{ '--corner-from-x': '40px' }}
        src="/HeroRightCornerBG.svg"
      />

      {/* Hero Content */}
      <div className="flex flex-col w-10/12 mt-28 z-10 xxxs:w-11/12 xxxs:mt-16 xxs:mt-20 xs:w-10/12 xs:mt-24 sm:w-11/12 sm:mt-24 md:w-10/12 lg:mt-28 xl:mt-32 2xl:max-w-[1440px] 2xl:mt-36">
        <div className="w-full flex flex-col justify-between items-start sm:items-center text-left sm:text-center gap-8 xs:gap-10 sm:gap-12 lg:gap-16 xl:gap-16 2xl:gap-20">
          <div className="w-full sm:w-10/12 lg:w-9/12 lg:max-w-[760px] xl:w-10/12 xl:max-w-full 2xl:w-10/12 2xl:max-w-[1100px] flex flex-col items-start sm:items-center text-left sm:text-center gap-4 xs:gap-5 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
            <div className="reveal-up" style={{ '--reveal-delay': '0s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <h1 className="text-3xl xxs:text-[34px] xs:text-[40px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[68px] 2xl:text-[72px] leading-[1.08] sm:leading-[0.98] tracking-tight text-textHeading text-left sm:text-center capitalize font-bold">
                <span>We Transform Your Ideas For</span>
                <span>
                  <br className="hidden sm:inline" />
                  <span className="sm:hidden"> </span>Websites And Apps Into Reality
                </span>
              </h1>
            </div>

            <div className="reveal-up" style={{ '--reveal-delay': '0.15s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <p className="w-full text-sm xxs:text-[16px] xs:text-[18px] sm:text-lg md:text-lg lg:text-lg max-w-[680px] 2xl:text-xl font-bodyfont text-textDescription text-left sm:text-center leading-relaxed">
                We specialize in crafting a unique digital presence that helps businesses grow and stand out in their industries
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="reveal-up flex flex-wrap justify-start sm:justify-center items-center gap-3.5 sm:gap-4 pt-1 sm:pt-2" style={{ '--reveal-delay': '0.3s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
            <Link
              href="/contact"
              className="h-11 sm:h-12 px-6 sm:px-8 rounded-lg bg-white text-black hover:bg-neutral-100 font-headingfont font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4 sm:w-4.5 sm:h-4.5 text-black">
                <path d="M8 2v3"></path>
                <path d="M16 2v3"></path>
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18"></path>
              </svg>
              <span>Book A Consultation Call</span>
            </Link>

            <Link
              href="#products"
              className="h-11 sm:h-12 px-6 sm:px-8 rounded-lg bg-[#8356FB] text-white hover:bg-[#7244e8] font-headingfont font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(131,86,251,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>See Our Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 sm:w-4.5 sm:h-4.5 text-white">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
