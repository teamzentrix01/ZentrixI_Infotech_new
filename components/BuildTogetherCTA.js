'use client';
import Link from 'next/link';

export default function BuildTogetherCTA() {
  return (
    <section aria-label="Grocery Platform CTA" className="w-full flex justify-center xxxs:my-14 sm:my-16 lg:my-20">
      <div className="w-10/12 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px]">
        <div className="scroll-reveal border border-border bg-cardBg w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center p-6 sm:p-12 md:p-16 text-center shadow-2xl">
          {/* Background Image */}
          <img
            src="/assets/grocery-cta-bg.png"
            alt="Your Business Platform"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-5 sm:gap-6 max-w-[880px]">
            <h2 className="font-headingfont font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] capitalize max-w-[820px]">
              So, What Should We Build Together?
            </h2>

            <p className="font-bodyfont text-gray-200 text-sm sm:text-base md:text-lg max-w-[700px] leading-relaxed">
              Whether you have a clear plan or just an idea, tell us what you’re thinking. We’ll help you figure out the right way to bring it to life.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:pt-3">
              <Link
                href="/contact"
                className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-white hover:bg-gray-100 text-black font-headingfont font-bold text-base sm:text-lg transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
              >
                Book A Consultation Call
              </Link>
              <a
                href="https://wa.me/917815043780?text=Hi%20Zentrix%20Infotech,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-headingfont font-bold text-base sm:text-lg transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
