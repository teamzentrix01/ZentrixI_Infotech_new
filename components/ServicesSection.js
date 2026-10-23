'use client';
import Link from 'next/link';

const services = [
  {
    title: 'Web\nDevelopment',
    badgeParam: 'web-development',
    features: [
      'Fully responsive websites',
      'Optimized for speed and SEO',
      'Scalable solutions for future growth',
      'Website Maintenance',
    ],
  },
  {
    title: 'App\nDevelopment',
    badgeParam: 'app-development',
    features: [
      'Native & cross-platform apps',
      'Intuitive user interfaces',
      'Performance optimization',
      'Ongoing support & updates',
    ],
  },
  {
    title: 'UI/UX\nDesign',
    badgeParam: 'ui-ux-design',
    features: [
      'User research & wireframing',
      'High-fidelity prototypes',
      'Design system creation',
      'Usability testing',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="sl-services w-full flex flex-col justify-between items-center pt-28 gap-16 mb-20 xxxs:pt-20 xxxs:gap-12 xxxs:mb-14 xxs:pt-24 xxs:gap-14 xxs:mb-16 xs:mb-20 xs:pt-28 sm:mb-14 sm:pt-24 lg:gap-16 lg:pt-28 xl:pt-36 xl:gap-20 xl:mb-24 2xl:gap-24"
    >
      {/* Header Block */}
      <div className="scroll-reveal w-full flex flex-col items-center">
        <div className="w-full max-w-[780px] flex flex-col justify-between items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12">
          {/* Badge */}
          <div className="sl-headBlock-1-head-badge badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px]">
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0">
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
              </svg>
            </div>
            <p className="font-bold tracking-wide">OUR SERVICES</p>
          </div>

          <h2
            id="services-heading"
            className="sl-headBlock-1-head-heading text-left sm:text-center text-3xl xxs:text-3xl xs:text-4xl sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl 2xl:text-[52px] font-bold 2xl:leading-tight tracking-tight text-textHeading"
          >
            Here’s What We Can Do{' '}
            <span className="block bg-headingGradient text-transparent bg-clip-text font-semibold">
              For You.
            </span>
          </h2>

          <p className="sl-headBlock-1-head-description text-left sm:text-center w-full md:w-10/12 xl:max-w-[630px] text-sm xs:text-base sm:text-base lg:text-lg font-bodyfont text-textDescription 2xl:text-xl leading-relaxed">
            From websites and apps to custom software, we’re here to help you build a stronger digital presence and grow your business online.
          </p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="w-full flex flex-col items-center gap-12 xxxs:gap-8 sm:gap-10 lg:gap-12">
        <div className="scroll-reveal w-full flex justify-center">
          <div className="sl-service-cards w-10/12 grid grid-cols-1 gap-5 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 lg:w-10/12 lg:grid-cols-3 xl:gap-5 2xl:max-w-[1440px] 2xl:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="sl-serviceCard border border-border bg-cardBg group relative rounded-[16px] xs:rounded-[18px] sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 xl:p-5 flex flex-col overflow-hidden transition-all duration-300 gap-3 xs:gap-4 sm:gap-6 sm:flex-row lg:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-[#8356FB]/60"
              >
                {/* Visual Header with Background Art & Title */}
                <div className="relative w-full aspect-[3/2] rounded-[12px] xs:rounded-[14px] sm:rounded-2xl sm:aspect-auto sm:h-full sm:w-1/2 sm:basis-1/2 md:aspect-[4/3] lg:aspect-[3/2] lg:w-full lg:basis-auto lg:h-auto min-h-[140px] xs:min-h-[160px] sm:min-h-[180px] flex-shrink-0 overflow-hidden flex items-center justify-center">
                  <img
                    alt={service.title.replace('\n', ' ')}
                    src="/images/ServiceBGDark.webp"
                    className="hidden object-cover dark:block absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <img
                    alt={service.title.replace('\n', ' ')}
                    src="/images/ServiceBGLight.webp"
                    className="block object-cover dark:hidden absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3 z-10">
                    <h3 className="text-white font-clashdisplay font-semibold text-[32px] leading-tight text-center drop-shadow-lg xxxs:text-2xl xxs:text-3xl sm:text-3xl xs:text-4xl xl:text-4xl 2xl:text-5xl whitespace-pre-line">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content & What's Included */}
                <div className="flex flex-col justify-between gap-3.5 xs:gap-4 sm:gap-5 px-1 xs:px-1.5 pb-1 sm:pb-2 sm:w-1/2 sm:basis-1/2 flex-1 xl:gap-6 lg:w-full lg:basis-auto">
                  <div className="flex flex-col gap-2.5 xs:gap-3">
                    <p className="text-base xs:text-lg font-bold text-textHeading xxxs:text-sm xl:text-xl">
                      What&apos;s Included
                    </p>
                    <ul className="flex flex-col gap-2.5 xs:gap-3 lg:gap-4">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-1.5 xl:gap-2 text-xs sm:text-sm lg:text-[11.5px] xl:text-[13px] 2xl:text-sm text-textDescription font-bodyfont xxxs:text-xs"
                        >
                          <div className="flex justify-center items-center p-0.5 rounded-full bg-[#07C51A] text-white flex-shrink-0 w-3.5 h-3.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-2.5 h-2.5">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Service Action */}
                  <div className="w-full pt-1.5 xs:pt-2 mt-auto">
                    <Link
                      className="group/btn w-full block"
                      aria-label={`Book Our Service — ${service.title.replace('\n', ' ')}`}
                      href={`/contact?service=${service.badgeParam}&source=service-card`}
                    >
                      <div className="h-10 xs:h-11 sm:h-12 w-full flex items-center justify-between p-1.5 xs:p-1.5 sm:p-2 pl-3 xs:pl-4 sm:pl-5 rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                        <p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                          Book Our Service
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
            ))}
          </div>
        </div>

        {/* Explore All Services Button */}
        <div className="scroll-reveal flex justify-center items-center">
          <div className="w-full flex justify-center items-center lg:text-sm xl:text-lg xl:h-12">
            <Link className="h-full w-full" href="/services">
              <div className="CTA-Button h-full w-full flex justify-center items-center whitespace-nowrap font-semibold transition-all duration-300 text-white px-6 py-3 rounded-lg xl:px-6 xl:py-2 xxxs:py-2 sm:py-2 lg:px-4 lg:py-2">
                <div className="flex justify-between items-center gap-2 text-lg px-4 sm:px-8 md:px-12 lg:px-20 xxxs:text-sm xxs:text-[16px] xs:text-lg sm:text-lg md:text-base lg:text-lg lg:px-2 2xl:text-xl">
                  <p className="mb-0.5">Explore Our Services</p>
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
