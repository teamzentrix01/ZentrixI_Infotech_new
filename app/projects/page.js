'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import SubpageFAQ from '@/components/SubpageFAQ';
import { ALL_PROJECTS } from '@/lib/projectsData';

const projectsFaqs = [
  {
    "q": "How long does a typical custom web or app development project take?",
    "a": "Most landing pages and branding projects are delivered in 1 to 2 weeks, while full web platforms and mobile apps range between 4 to 8 weeks depending on the complexity of features, third-party integrations, and testing cycles."
  },
  {
    "q": "What technologies and frameworks do you use for client projects?",
    "a": "We specialize in React, Next.js, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL, MongoDB, Redis, and React Native/Flutter for cross-platform mobile apps. Every stack is tailored for blazing speed, SEO performance, and maintainability."
  },
  {
    "q": "Can you work with our existing brand guidelines and design system?",
    "a": "Yes, absolutely. We can seamlessly adapt to your existing design assets, Figma files, and brand guidelines, or refine and extend them into a modern, complete web-ready design system."
  },
  {
    "q": "Do you provide ongoing maintenance and feature updates after launch?",
    "a": "Yes! We offer flexible post-launch support and monthly retainer packages covering server monitoring, uptime alerts, security updates, feature additions, and ongoing SEO optimization."
  },
  {
    "q": "How do you ensure our website performs well in SEO and Core Web Vitals?",
    "a": "Every project is built with semantic HTML, automatic OpenGraph and Twitter cards, structured Schema.org markup, responsive image loading, next-gen WebP/AVIF formats, and clean CSS, routinely scoring 95+ on Google PageSpeed Insights."
  },
  {
    "q": "How do we get started on a project with Zentrix Infotech?",
    "a": "Simply book a free discovery call or reach out via our contact page. We will review your requirements, recommend the ideal architecture and tech stack, and deliver a transparent fixed-price proposal within 24 to 48 hours."
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All'];
    ALL_PROJECTS.forEach(p => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return ALL_PROJECTS;
    return ALL_PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

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
        {/* Header Hero Section */}
        <div className="w-full flex flex-col items-center mt-36 mb-16 xxxs:mt-20 xxxs:mb-8 xxs:mt-24 xxs:mb-10 sm:mt-28 sm:mb-12 lg:mt-32 xl:mt-36 xl:mb-16 2xl:mt-40 z-10">
          <div className="w-10/12 max-w-[860px] flex flex-col items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xxxs:gap-2.5">
            <div className="reveal-up" style={{ '--reveal-delay': '0s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <div className="badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px] 2xl:px-6 2xl:py-4">
                <div className="flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                </div>
                <p>SELECTED WORK</p>
              </div>
            </div>

            <div className="reveal-up" style={{ '--reveal-delay': '0.08s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <h1 className="text-3xl xxs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-left sm:text-center">
                See What We’ve <span className="bg-headingGradient text-transparent bg-clip-text font-semibold inline-block ml-1.5 sm:ml-2">Built</span>
              </h1>
            </div>

            <div className="reveal-up" style={{ '--reveal-delay': '0.23s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}>
              <p className="font-bodyfont text-textDescription text-sm sm:text-lg lg:text-xl text-left sm:text-center max-w-[640px]">
                Explore in-depth case studies of the websites, digital platforms, and solutions developed by Zentrix Infotech for businesses across different industries.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid Section */}
        <section aria-label="Our Projects" className="w-full flex flex-col items-center gap-5 xl:gap-6 2xl:gap-8 z-10 mb-28 xxxs:mb-16 sm:mb-20 lg:mb-24 xl:mb-28">
          <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:max-w-[1280px] 2xl:max-w-[1440px]">
            {filteredProjects.map((project) => (
              <div 
                key={project.slug} 
                className="border border-border bg-cardBg group relative h-full rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between overflow-hidden transition-all duration-300 gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-navTextHover hover:shadow-[0_0_25px_rgba(131,86,251,0.2)]"
              >
                {/* Image Box - Fitted 16:9 mockup frame */}
                <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl flex-shrink-0 overflow-hidden flex items-center justify-center bg-[#0d0d0d] border border-border/60">
                  {project.cover ? (
                    <img 
                      alt={`${project.title} — Portfolio project by Zentrix Infotech`} 
                      loading="lazy" 
                      className="object-contain w-full h-full p-1.5 transition-transform duration-500 group-hover:scale-[1.03]" 
                      src={project.cover} 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#8356FB]/10 to-transparent">
                      <span className="text-xl font-bold font-headingfont text-textHeading">{project.title}</span>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md sm:rounded-lg bg-white/95 dark:bg-[#1a1a1a]/95 text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5 border border-[#8356FB]/25 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span>
                    <span className="truncate max-w-[170px]">{project.category}</span>
                  </div>
                </div>

                {/* Content Info */}
                <div className="flex flex-col justify-between gap-3 px-1 pt-1 flex-1">
                  <Link 
                    className="flex flex-col gap-1 group/case" 
                    aria-label={`Read the ${project.title} case study`} 
                    href={`/projects/${project.slug}`}
                  >
                    <h2 className="text-lg sm:text-xl font-bold font-headingfont text-textHeading group-hover/case:text-navTextHover transition-colors duration-200">
                      {project.title}
                    </h2>
                    <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </Link>

                  {/* Action Buttons */}
                  <div className="w-full pt-1 mt-auto flex items-center gap-2">
                    <Link 
                      className="group/btn flex-1 min-w-0 block" 
                      aria-label={`Read the ${project.title} case study`} 
                      href={`/projects/${project.slug}`}
                    >
                      <div className="h-9 sm:h-10 w-full flex items-center justify-between p-1.5 pl-3.5 rounded-lg sm:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200">
                        <p className="font-semibold text-xs sm:text-sm mb-0.5 truncate font-headingfont">
                          View Case Study
                        </p>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 -rotate-45" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>

                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`Open the live ${project.title} site in a new tab`} 
                        title={`Visit ${project.title}`} 
                        className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 flex items-center justify-center rounded-lg sm:rounded-xl bg-serviceBtnBg border border-border text-textHeading hover:border-[#8356FB] hover:bg-[#8356FB] hover:text-white transition-all duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-3.5 h-3.5" aria-hidden="true">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <SubpageFAQ
          badgeText="Projects FAQ"
          headingWord1="Frequently Asked"
          headingWord2="Questions"
          description="Everything you need to know about our project delivery timelines, technology choices, SEO standards, and ongoing maintenance."
          faqs={projectsFaqs}
        />
      </div>
    </div>
  );
}
