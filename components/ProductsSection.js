'use client';
import Link from 'next/link';

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="sl-product w-full flex flex-col justify-between items-center pt-28 gap-16 mb-20 xxxs:pt-20 xxxs:gap-14 xxxs:mb-14 xxs:pt-24 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-28 sm:mb-14 sm:pt-24 lg:gap-16 lg:pt-28 xl:pt-36 xl:gap-20 xl:mb-24 2xl:gap-24"
    >
      {/* Header Block */}
      <div className="scroll-reveal w-full flex flex-col items-center">
        <div className="w-full max-w-[780px] flex flex-col justify-between items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12">
          {/* Badge */}
          <div className="sl-product-headBlock-head-badge badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px]">
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0">
                <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                <path d="m7 16.5-4.74-2.85"></path>
                <path d="m7 16.5 5-3"></path>
                <path d="M7 16.5v5.17"></path>
                <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                <path d="m17 16.5-5-3"></path>
                <path d="m17 16.5 4.74-2.85"></path>
                <path d="M17 16.5v5.17"></path>
                <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                <path d="M12 8 7.26 5.15"></path>
                <path d="m12 8 4.74-2.85"></path>
                <path d="M12 13.5V8"></path>
              </svg>
            </div>
            <p className="font-bold tracking-wide">BUILT BY US</p>
          </div>

          <h2
            id="products-heading"
            className="sl-product-headBlock-head-heading text-left sm:text-center text-3xl xxs:text-3xl xs:text-4xl sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl 2xl:text-[52px] font-bold 2xl:leading-tight tracking-tight text-textHeading"
          >
            Here’s What We’ve Been{' '}
            <span className="block bg-headingGradient text-transparent bg-clip-text font-semibold">
              Building
            </span>
          </h2>

          <p className="sl-product-headBlock-head-description text-left sm:text-center w-full md:w-10/12 xl:max-w-[630px] text-sm xs:text-base sm:text-base lg:text-lg font-bodyfont text-textDescription 2xl:text-xl leading-relaxed">
            We build products around real problems and turn them into simple, thoughtful experiences people enjoy using.
          </p>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="w-full flex flex-col items-center gap-12 xxxs:gap-8 sm:gap-10 lg:gap-12">
        <div className="sl-product-grid w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-6 xl:max-w-[1200px] 2xl:max-w-[1440px] 2xl:gap-8">
          {/* Rentlyf */}
          <div className="h-full">
            <div className="border border-border bg-cardBg group relative h-full rounded-[16px] xs:rounded-[18px] sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 xl:p-5 flex flex-col justify-between overflow-hidden gap-3 xs:gap-4 sm:flex-row md:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-[#8356FB]/60 transition-all duration-300">
              <div className="relative w-full aspect-[16/10] rounded-[12px] xs:rounded-[14px] sm:rounded-2xl sm:w-1/2 sm:aspect-[16/10] md:w-full md:aspect-[16/9.5] flex-shrink-0 overflow-hidden flex items-center justify-center bg-black/5 dark:bg-white/5">
                <img
                  alt="Rentlyf"
                  src="/images/rentlyf.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-white text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span>
                  <span>PropTech SaaS</span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3.5 xs:gap-4 px-1 xs:px-1.5 pb-1 sm:pb-2 sm:w-1/2 md:w-full flex-1">
                <div className="flex flex-col gap-1.5 xs:gap-2">
                  <h3 className="text-lg xs:text-xl font-bold font-headingfont text-textHeading capitalize xxxs:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    Rentlyf
                  </h3>
                  <p className="font-bodyfont text-textDescription text-xs xxs:text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base line-clamp-3">
                    Rentlyf is a mobile-first SaaS platform built for professional landlords to manage properties, tenants, rent, maintenance, and more from one simple place.
                  </p>
                </div>

                <div className="w-full pt-1.5 xs:pt-2 mt-auto">
                  <a
                    href="https://www.rentlyf.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full block"
                    aria-label="Visit Rentlyf (opens in a new tab)"
                  >
                    <div className="h-10 xs:h-11 sm:h-12 w-full flex items-center justify-between p-1.5 xs:p-1.5 sm:p-2 pl-3 xs:pl-4 sm:pl-5 rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                      <p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                        Open Rentlyf
                      </p>
                      <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-md xs:rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 xs:w-4 xs:h-4 -rotate-45">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grocery Platform */}
          <div className="h-full">
            <div className="border border-border bg-cardBg group relative h-full rounded-[16px] xs:rounded-[18px] sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 xl:p-5 flex flex-col justify-between overflow-hidden gap-3 xs:gap-4 sm:flex-row md:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-[#8356FB]/60 transition-all duration-300">
              <div className="relative w-full aspect-[16/10] rounded-[12px] xs:rounded-[14px] sm:rounded-2xl sm:w-1/2 sm:aspect-[16/10] md:w-full md:aspect-[16/9.5] flex-shrink-0 overflow-hidden flex items-center justify-center bg-black/5 dark:bg-white/5">
                <img
                  alt="Grocery Platform"
                  src="/images/grocery.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-white text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span>
                  <span>Turnkey Commerce Platform</span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3.5 xs:gap-4 px-1 xs:px-1.5 pb-1 sm:pb-2 sm:w-1/2 md:w-full flex-1">
                <div className="flex flex-col gap-1.5 xs:gap-2">
                  <h3 className="text-lg xs:text-xl font-bold font-headingfont text-textHeading capitalize xxxs:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    Grocery Platform
                  </h3>
                  <p className="font-bodyfont text-textDescription text-xs xxs:text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base line-clamp-3">
                    Our grocery platform helps stores manage products, orders, deliveries, and customers while giving shoppers a simple way to shop online.
                  </p>
                </div>

                <div className="w-full pt-1.5 xs:pt-2 mt-auto">
                  <Link
                    href="#projects"
                    className="group/btn w-full block"
                    aria-label="View details for Grocery Platform"
                  >
                    <div className="h-10 xs:h-11 sm:h-12 w-full flex items-center justify-between p-1.5 xs:p-1.5 sm:p-2 pl-3 xs:pl-4 sm:pl-5 rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                      <p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                        See What&apos;s Included
                      </p>
                      <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-md xs:rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 xs:w-4 xs:h-4 -rotate-45">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="scroll-reveal flex justify-center items-center">
          <div className="w-full flex justify-center items-center lg:text-sm xl:text-lg xl:h-12">
            <Link className="h-full w-full" href="#projects">
              <div className="CTA-Button h-full w-full flex justify-center items-center whitespace-nowrap font-semibold transition-all duration-300 text-white px-6 py-3 rounded-lg xl:px-6 xl:py-2 xxxs:py-2 sm:py-2 lg:px-4 lg:py-2">
                <div className="flex justify-between items-center gap-2 text-lg px-4 sm:px-8 md:px-12 lg:px-20 xxxs:text-sm xxs:text-[16px] xs:text-lg sm:text-lg md:text-base lg:text-lg lg:px-2 2xl:text-xl">
                  <p className="mb-0.5">See Our Products</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
