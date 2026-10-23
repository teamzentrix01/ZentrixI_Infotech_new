'use client';
import Link from 'next/link';

const portfolioProjects = [
  {
    title: 'Sawasheri Direct',
    tag: 'Grocery & Retail Commerce',
    image: '/images/Sawaasheri.webp',
    desc: 'A complete digital grocery platform that brings Sawasheri Brothers’ trusted grocery business online with a simple shopping experience for customers.',
    liveUrl: 'https://www.sawasheribrothers.com',
  },
  {
    title: 'Lineage Corporation',
    tag: 'Manufacturing & Export',
    image: '/images/Portfolio_1.webp',
    desc: 'A premium furniture website built to showcase Lineage Corporation’s collections and make global furniture sourcing simple for retailers and buyers.',
    liveUrl: 'https://lineagecorporationlc.com/',
  },
  {
    title: 'FITLOC',
    tag: 'Industrial Manufacturing & Engineering',
    image: '/images/Fitloc.webp',
    desc: 'A clean digital presence for FitLoc, making hydraulic solutions easier to discover and helping customers quickly understand what they offer.',
    liveUrl: 'https://www.fitloc.co.in',
  },
  {
    title: 'Radiant Craft Creation',
    tag: 'Handcrafted E-Commerce',
    image: '/images/Portfolio_4.webp',
    desc: 'An online furniture store designed to bring Radiant Craft Creation’s curated collection of furniture and home décor to customers.',
    liveUrl: 'http://radiantcraftcreation.com',
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="sl-portfolio w-full flex flex-col justify-between items-center gap-16 mb-20 pt-28 xxxs:pt-20 xxxs:gap-14 xxxs:mb-14 xxs:pt-24 xxs:gap-16 xxs:mb-16 xs:mb-20 xs:pt-28 sm:mb-14 sm:pt-24 sm:gap-16 lg:gap-16 lg:pt-28 xl:gap-20 xl:mb-24 xl:pt-36 2xl:gap-24"
    >
      {/* Header Block */}
      <div className="scroll-reveal w-full flex flex-col items-center">
        <div className="w-full max-w-[780px] flex flex-col justify-between items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12">
          {/* Badge */}
          <div className="sl-pf-headBlock-1-head-badge badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px]">
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
            </div>
            <p className="font-bold tracking-wide">SELECTED WORK</p>
          </div>

          <h2
            id="projects-heading"
            className="sl-pf-headBlock-1-head-heading text-left sm:text-center text-3xl xxs:text-3xl xs:text-4xl sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl 2xl:text-[52px] font-bold 2xl:leading-tight tracking-tight text-textHeading"
          >
            See What We’ve{' '}
            <span className="block bg-headingGradient text-transparent bg-clip-text font-semibold">
              Built
            </span>
          </h2>

          <p className="sl-pf-headBlock-1-head-description text-left sm:text-center w-full md:w-10/12 xl:max-w-[630px] text-sm xs:text-base sm:text-base lg:text-lg font-bodyfont text-textDescription 2xl:text-xl leading-relaxed">
            Here are a few digital products we’ve built for real businesses, turning everyday challenges into simple software people can use.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex flex-col items-center gap-5 xl:gap-6 2xl:gap-8">
        <div className="sl-pf-card-2 w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-6 xl:max-w-[1200px] 2xl:max-w-[1440px] 2xl:gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="border border-border bg-cardBg group relative h-full rounded-[16px] xs:rounded-[18px] sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 xl:p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 gap-3 xs:gap-4 sm:flex-row md:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-[#8356FB]/60"
            >
              {/* Image Preview with Tag */}
              <div className="relative w-full aspect-[16/10] rounded-[12px] xs:rounded-[14px] sm:rounded-2xl sm:w-1/2 sm:aspect-[16/10] md:w-full md:aspect-[16/9.5] flex-shrink-0 overflow-hidden flex items-center justify-center">
                <img
                  alt={`${project.title} — Portfolio project by Zentrix Infotech`}
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-white text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span>
                  <span>{project.tag}</span>
                </div>
              </div>

              {/* Text and Actions */}
              <div className="flex flex-col justify-between gap-3.5 xs:gap-4 px-1 xs:px-1.5 pb-1 sm:pb-2 sm:w-1/2 md:w-full flex-1">
                <div className="flex flex-col gap-1.5 xs:gap-2">
                  <h3 className="text-lg xs:text-xl font-bold font-headingfont text-textHeading capitalize group-hover:text-navTextHover transition-colors duration-200 xxxs:text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    {project.title}
                  </h3>
                  <p className="font-bodyfont text-textDescription text-xs xxs:text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="w-full pt-1.5 xs:pt-2 mt-auto flex items-center gap-2">
                  <Link
                    className="group/btn flex-1 min-w-0 block"
                    aria-label={`Read the ${project.title} case study`}
                    href="/contact"
                  >
                    <div className="h-10 xs:h-11 sm:h-12 w-full flex items-center justify-between p-1.5 xs:p-1.5 sm:p-2 pl-3 xs:pl-4 sm:pl-5 rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                      <p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1 truncate">
                        View Case Study
                      </p>
                      <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-md xs:rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 xs:w-4 xs:h-4 -rotate-45">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open the live ${project.title} site in a new tab`}
                    title={`Visit ${project.title}`}
                    className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border text-textHeading hover:border-[#8356FB] hover:bg-[#8356FB] hover:text-white transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-3.5 h-3.5 xs:w-4 xs:h-4">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Our Work CTA */}
        <div className="scroll-reveal flex justify-center items-center pt-4">
          <div className="w-full flex justify-center items-center lg:text-sm xl:text-lg xl:h-12">
            <Link className="h-full w-full" href="/contact">
              <div className="CTA-Button h-full w-full flex justify-center items-center whitespace-nowrap font-semibold transition-all duration-300 text-white px-6 py-3 rounded-lg xl:px-6 xl:py-2 xxxs:py-2 sm:py-2 lg:px-4 lg:py-2">
                <div className="flex justify-between items-center gap-2 text-lg px-4 sm:px-8 md:px-12 lg:px-20 xxxs:text-sm xxs:text-[16px] xs:text-lg sm:text-lg md:text-base lg:text-lg lg:px-2 2xl:text-xl">
                  <p className="mb-0.5">See All Our Work</p>
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
