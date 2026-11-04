'use client';
import Link from 'next/link';
import { ALL_PROJECTS } from '@/lib/projectsData';
import ProjectCard from '@/components/projects/ProjectCard';

export default function PortfolioSection() {
  // Show top 6 featured projects on the home page
  const featuredProjects = ALL_PROJECTS.slice(0, 6);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="sl-portfolio w-full flex flex-col justify-between items-center gap-12 sm:gap-16 mb-20 pt-28 xxxs:pt-20 xxxs:gap-12 xxxs:mb-14 xxs:pt-24 xs:mb-20 xs:pt-28 sm:mb-14 sm:pt-24 lg:pt-28 xl:gap-20 xl:mb-24 xl:pt-36 2xl:gap-24"
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

      {/* Projects Grid with Hover Scroll Animation */}
      <div className="w-full flex flex-col items-center gap-6 xl:gap-8">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:max-w-[1280px] 2xl:max-w-[1440px]">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* See All Our Work CTA */}
        <div className="scroll-reveal flex justify-center items-center pt-6">
          <div className="w-full flex justify-center items-center lg:text-sm xl:text-lg xl:h-12">
            <Link className="h-full w-full" href="/projects">
              <div className="CTA-Button h-full w-full flex justify-center items-center whitespace-nowrap font-semibold transition-all duration-300 text-white px-6 py-3 rounded-lg xl:px-8 xl:py-3 xxxs:py-2 sm:py-2.5">
                <div className="flex justify-between items-center gap-2 text-base sm:text-lg px-4 sm:px-6">
                  <p className="mb-0.5 font-headingfont font-bold">See All Our Work</p>
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
