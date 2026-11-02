'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

export default function ServiceDetailTemplate({ serviceKey }) {
  const service = servicesData[serviceKey];
  const [activeSection, setActiveSection] = useState('overview');

  // Find other services for the bottom grid
  const otherServices = Object.values(servicesData).filter((s) => s.slug !== service.slug);

  useEffect(() => {
    const handleScroll = () => {
      const allIds = [];
      service.toc.forEach((item) => {
        allIds.push(item.id);
        if (item.sub) {
          item.sub.forEach((subItem) => allIds.push(subItem.id));
        }
      });

      const scrollPosition = window.scrollY + 200;
      for (let i = allIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(allIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(allIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [service]);

  if (!service) return null;

  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200">
      {/* Hero Corner Art */}
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
        <div className="w-full flex flex-col items-center mt-28 xxxs:mt-24 xxs:mt-24 xs:mt-28 sm:mt-32 md:mt-32 lg:mt-36 xl:mt-40 mb-20 z-10">
          <div className="w-full flex flex-col items-center relative">
            
            {/* Top Back Row */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-y">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-3">
                <div className="shrink flex">
                  <Link
                    className="flex gap-2 items-center text-textDescription hover:text-navTextHover transition-colors duration-200 group font-headingfont"
                    href="/services"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-left w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <p className="font-bold text-lg sm:text-xl">Services</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Header Block */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-8 pt-8 pb-6">
                <div className="w-full flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-border bg-cardBg py-1 px-3.5 text-xs font-semibold text-textDescription font-bodyfont shadow-sm">
                        {service.category}
                      </span>
                    </div>
                    <Link
                      href={service.ctaHref}
                      className="h-11 sm:h-12 flex items-center justify-between pl-4 sm:pl-5 pr-2 gap-3 sm:gap-4 rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200 group/live shadow-sm"
                    >
                      <span className="font-semibold text-xs sm:text-sm font-headingfont whitespace-nowrap">
                        {service.ctaText}
                      </span>
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/live:bg-white group-hover/live:text-navTextHover transition-all duration-200 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right w-3.5 h-3.5 -rotate-45"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-textHeading font-headingfont">
                    {service.title}
                  </h1>

                  <p className="font-bodyfont text-base sm:text-xl leading-relaxed text-textDescription max-w-[52rem]">
                    {service.tagline}
                  </p>

                  <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 pt-5 spotlight-line border-t font-bodyfont">
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Timeline</dt>
                      <dd className="text-sm sm:text-base font-semibold text-textHeading">{service.timeline}</dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Engagement</dt>
                      <dd className="text-sm sm:text-base font-semibold text-textHeading">{service.engagement}</dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Deliverables</dt>
                      <dd className="text-sm sm:text-base font-semibold text-textHeading">{service.deliverables}</dd>
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <dt className="text-[11px] uppercase tracking-wider text-textDescription font-semibold">Outcome</dt>
                      <dd className="text-sm sm:text-base font-semibold text-navTextHover">{service.outcome}</dd>
                    </div>
                  </dl>

                  <ul className="flex flex-wrap gap-2 pt-1 list-none p-0 m-0">
                    {service.tags.map((tag, idx) => (
                      <li
                        key={idx}
                        className="font-bodyfont text-xs font-medium px-2.5 py-1 rounded-md border border-border bg-cardBg text-textDescription"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hero Banner Section */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-3 sm:p-6">
                <div className="border border-border bg-cardBg w-full aspect-[21/9] sm:aspect-[2/1] max-h-[560px] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 overflow-hidden relative shadow-sm">
                  <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                    <img
                      alt={`${service.title} — Zentrix Infotech`}
                      src={service.image}
                      className="object-cover w-full h-full"
                      style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Table of Contents Section */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-8 py-8 sm:py-14">
                <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-14 xl:gap-20">
                  
                  {/* Sticky Table of Contents (Desktop) */}
                  <aside className="hidden lg:block w-60 xl:w-72 shrink-0 sticky top-32 self-start pr-4">
                    <nav aria-label="Table of Contents" className="w-full">
                      <p className="font-headingfont text-xl sm:text-2xl font-bold text-textHeading mb-4 tracking-tight">
                        Table of Content
                      </p>
                      <ul className="space-y-1 spotlight-line border-l pl-0 list-none m-0 p-0 font-bodyfont text-sm">
                        {service.toc.map((item) => (
                          <li key={item.id} className="relative">
                            {activeSection === item.id && (
                              <span className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-navTextHover rounded-full"></span>
                            )}
                            <a
                              href={`#${item.id}`}
                              className={`block py-1.5 transition-colors duration-200 leading-snug pl-4 ${
                                activeSection === item.id
                                  ? 'text-navTextHover font-semibold'
                                  : 'text-textDescription hover:text-textHeading'
                              }`}
                            >
                              {item.title}
                            </a>
                            {item.sub && (
                              <ul className="space-y-1 pl-3 list-none m-0">
                                {item.sub.map((subItem) => (
                                  <li key={subItem.id} className="relative">
                                    {activeSection === subItem.id && (
                                      <span className="absolute -left-[13px] top-0 bottom-0 w-[2px] bg-navTextHover rounded-full"></span>
                                    )}
                                    <a
                                      href={`#${subItem.id}`}
                                      className={`block py-1 transition-colors duration-200 leading-snug pl-4 text-xs ${
                                        activeSection === subItem.id
                                          ? 'text-navTextHover font-semibold'
                                          : 'text-textDescription hover:text-textHeading'
                                      }`}
                                    >
                                      {subItem.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </aside>

                  {/* Main Content Area */}
                  <div className="flex-1 min-w-0 w-full pr-2 sm:pr-6 lg:pr-12 xl:pr-16">
                    
                    {/* Mobile Table of Contents */}
                    <div className="lg:hidden mb-8 p-4 rounded-xl border border-border bg-cardBg/50">
                      <nav aria-label="Table of Contents" className="w-full">
                        <p className="font-headingfont text-xl sm:text-2xl font-bold text-textHeading mb-4 tracking-tight">
                          Table of Content
                        </p>
                        <ul className="space-y-1 spotlight-line border-l pl-0 list-none m-0 p-0 font-bodyfont text-sm">
                          {service.toc.map((item) => (
                            <li key={item.id} className="relative">
                              {activeSection === item.id && (
                                <span className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-navTextHover rounded-full"></span>
                              )}
                              <a
                                href={`#${item.id}`}
                                className={`block py-1.5 transition-colors duration-200 leading-snug pl-4 ${
                                  activeSection === item.id
                                    ? 'text-navTextHover font-semibold'
                                    : 'text-textDescription hover:text-textHeading'
                                }`}
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>

                    <article className="w-full font-bodyfont">
                      <div className="prose prose-lg dark:prose-invert max-w-none text-textHeading font-bodyfont">
                        
                        {/* Overview Section */}
                        <div id="overview" className="scroll-mt-36">
                          {service.sections.intro}
                        </div>

                        {/* The Challenge Section */}
                        <h2
                          id="the-challenge"
                          className="font-headingfont text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-12 mb-4 text-textHeading tracking-tight scroll-mt-36"
                        >
                          The Challenge
                        </h2>
                        {service.sections.theChallenge}

                        {/* What We Deliver Section */}
                        <h2
                          id="what-we-deliver"
                          className="font-headingfont text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-12 mb-4 text-textHeading tracking-tight scroll-mt-36"
                        >
                          What We Deliver
                        </h2>
                        <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
                          Our end-to-end service package covers every critical phase of delivery:
                        </p>

                        {service.sections.whatWeDeliver.map((deliv) => (
                          <div key={deliv.id}>
                            <h3
                              id={deliv.id}
                              className="font-headingfont text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-8 mb-3 text-textHeading tracking-tight scroll-mt-36"
                            >
                              {deliv.title}
                            </h3>
                            <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
                              {deliv.desc}
                            </p>
                          </div>
                        ))}

                        {/* Technology Section */}
                        <h2
                          id="technology"
                          className="font-headingfont text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-12 mb-4 text-textHeading tracking-tight scroll-mt-36"
                        >
                          Technology
                        </h2>
                        {service.sections.technology}

                        {/* Our Process Section */}
                        <h2
                          id="our-process"
                          className="font-headingfont text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-12 mb-4 text-textHeading tracking-tight scroll-mt-36"
                        >
                          Our Process
                        </h2>
                        <ol className="font-bodyfont list-decimal pl-6 my-4 space-y-3 text-base sm:text-lg text-textDescription marker:text-navTextHover">
                          {service.sections.ourProcess.map((proc, idx) => (
                            <li key={idx} className="leading-relaxed">
                              <strong className="font-bold text-textHeading">{proc.step}: </strong>
                              {proc.desc}
                            </li>
                          ))}
                        </ol>

                        {/* Quote Block */}
                        <blockquote className="font-bodyfont text-lg sm:text-xl pl-5 py-3 font-normal border-l-4 border-navTextHover italic my-8 text-textHeading bg-cardBg/60 border-y border-r border-border rounded-r-2xl shadow-sm">
                          &ldquo;{service.quote}&rdquo;
                        </blockquote>

                        {/* Standards & Support Section */}
                        <h2
                          id="standards-support"
                          className="font-headingfont text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-12 mb-4 text-textHeading tracking-tight scroll-mt-36"
                        >
                          Standards &amp; Support
                        </h2>
                        {service.sections.standards}
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Other Services Header */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-4">
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-textHeading font-headingfont">
                  Explore Other Services
                </p>
              </div>
            </div>

            {/* Mobile Other Services */}
            <div className="flex sm:hidden flex-col w-full">
              {otherServices.slice(0, 4).map((item) => (
                <div key={item.slug} className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                  <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                    <div className="PostCard group relative list-none h-full bg-cardBg border border-border rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none">
                      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                      <Link
                        className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between"
                        href={`/services/${item.slug}`}
                      >
                        <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                          <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                            <img
                              alt={item.title}
                              src={item.image}
                              className="object-cover w-full h-full"
                              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                          <div className="flex flex-col gap-1">
                            <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">
                              {item.timeline}
                            </small>
                            <h3 className="font-headingfont text-xl sm:text-3xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">
                              {item.shortDesc}
                            </p>
                          </div>
                          <div className="pt-2 flex items-center justify-between gap-2 font-bodyfont">
                            <span className="min-w-0 truncate text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">
                              {item.category}
                            </span>
                            <span className="text-xs text-navTextHover font-semibold whitespace-nowrap flex-shrink-0">
                              Explore Service →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Other Services Grid */}
            <div className="hidden sm:flex flex-col w-full">
              <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                    {otherServices.slice(0, 4).map((item, idx) => (
                      <div
                        key={item.slug}
                        className={`h-full spotlight-line border-r ${
                          idx === 3 ? 'lg:border-r-0' : ''
                        }`}
                      >
                        <div className="PostCard group relative list-none h-full bg-cardBg border border-border rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none">
                          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                          <Link
                            className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between"
                            href={`/services/${item.slug}`}
                          >
                            <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                              <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                                <img
                                  alt={item.title}
                                  src={item.image}
                                  className="object-cover w-full h-full"
                                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                              <div className="flex flex-col gap-1">
                                <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">
                                  {item.timeline}
                                </small>
                                <h3 className="font-headingfont text-xl sm:text-3xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">
                                  {item.title}
                                </h3>
                                <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">
                                  {item.shortDesc}
                                </p>
                              </div>
                              <div className="pt-2 flex items-center justify-between gap-2 font-bodyfont">
                                <span className="min-w-0 truncate text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">
                                  {item.category}
                                </span>
                                <span className="text-xs text-navTextHover font-semibold whitespace-nowrap flex-shrink-0">
                                  Explore Service →
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

