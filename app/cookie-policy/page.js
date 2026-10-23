'use client';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200">
      {/* Hero Corner Art & Backgrounds */}
      <div className="absolute top-0 w-full h-[400px] z-0 xxxs:h-[220px] sm:h-[350px] lg:h-[320px] xl:h-[400px]">
        <img src="/HeroBG1.svg" alt="" role="presentation" className="w-full h-full object-cover" />
      </div>
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

      <div className="w-full relative z-10 flex flex-col items-center">
        <section className="w-full flex flex-col items-center pt-28 xxs:pt-32 sm:pt-36 md:pt-40 lg:pt-44 mb-16 sm:mb-20">
          <div className="w-10/12 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1200px] flex flex-col items-center text-center gap-5 sm:gap-7">
            <div className="badge-glow flex flex-row justify-center gap-1.5 items-center py-2 px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm">
              <span className="font-bodyfont uppercase tracking-wider">LEGAL</span>
            </div>
            <h1 className="font-headingfont font-bold text-3xl xxs:text-4xl sm:text-5xl md:text-6xl text-textHeading max-w-[900px] leading-tight tracking-tight">
              Cookie <span className="bg-headingGradient bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="font-bodyfont text-textDescription text-sm sm:text-base md:text-lg max-w-[680px] leading-relaxed">
              Last updated: January 2026. How we use cookies and similar technologies to improve your experience.
            </p>
          </div>
        </section>

        <section className="w-10/12 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1100px] mb-24">
          <div className="bg-cardBg border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col gap-8 shadow-sm">
            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">1. What Are Cookies?</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                Cookies are small text files stored on your computer or mobile device when you browse websites. They are widely used to make websites function properly, enhance user experience, and provide aggregated analytics to site owners.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">2. How Zentrix Infotech Uses Cookies</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed space-y-2">
                <li>Remember your preferences such as theme selection (Light Mode / Dark Mode).</li>
                <li>Understand website traffic and visitor interactions to improve site performance.</li>
                <li>Ensure seamless navigation across pages without session disruption.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">3. Managing Your Cookies</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                Most web browsers allow you to control cookies through browser settings. You can choose to accept, refuse, or delete cookies at any time. However, disabling certain essential cookies may affect some features of our website.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">4. Questions &amp; Support</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                If you have questions about our Cookie Policy, feel free to contact us at{' '}
                <a href="mailto:connect@zentrixinfotech.com" className="text-[#8356FB] hover:underline">
                  connect@zentrixinfotech.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
