'use client';
import Link from 'next/link';

export default function TermsPage() {
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
              Terms of <span className="bg-headingGradient bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="font-bodyfont text-textDescription text-sm sm:text-base md:text-lg max-w-[680px] leading-relaxed">
              Last updated: January 2026. Please read these terms carefully before engaging our services.
            </p>
          </div>
        </section>

        <section className="w-10/12 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1100px] mb-24">
          <div className="bg-cardBg border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col gap-8 shadow-sm">
            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">1. Agreement to Terms</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                By accessing or using the services provided by Zentrix Infotech LLP (&quot;Zentrix Infotech&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">2. Services & Project Scope</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                We provide custom website development, mobile application engineering, UI/UX design, and ongoing technical maintenance. Detailed project deliverables, schedules, and milestones are outlined in individual project proposals or master services agreements signed with each client.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">3. Intellectual Property</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                Upon full settlement of agreed project payments, clients receive the intellectual property rights to the final deliverables created specifically for them, excluding proprietary tools, reusable components, and third-party software libraries licensed separately.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">4. Payment Terms</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                Invoices are issued based on agreed project milestones. Payments must be processed according to the terms stated on the invoice. Any delay in payments may cause corresponding delays in project delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-headingfont font-bold text-xl sm:text-2xl text-textHeading">5. Contact Information</h2>
              <p className="font-bodyfont text-textDescription text-sm sm:text-base leading-relaxed">
                For questions regarding these Terms, contact us at{' '}
                <a href="mailto:connect@zentrixinfotech.com" className="text-[#8356FB] hover:underline">
                  connect@zentrixinfotech.com
                </a>{' '}
                or call{' '}
                <a href="tel:+917815043780" className="text-[#8356FB] hover:underline">
                  +91 7815043780
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
