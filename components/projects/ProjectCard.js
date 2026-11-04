'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-border bg-cardBg group relative h-full rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between overflow-hidden transition-all duration-300 gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-navTextHover hover:shadow-[0_0_25px_rgba(131,86,251,0.2)]"
    >
      {/* Scroll Mockup Window */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-[#0d0d0d] border border-border/60">
        <div className="w-full h-full overflow-hidden relative">
          {project.cover && (
            <img
              alt={`${project.title} — Portfolio project by Zentrix Infotech`}
              loading="lazy"
              src={project.cover}
              className={`w-full h-auto min-h-full object-cover object-top transition-all duration-[3500ms] ease-in-out ${
                isHovered
                  ? 'transform translate-y-[calc(-100%+12rem)] sm:translate-y-[calc(-100%+13rem)] md:translate-y-[calc(-100%+14rem)] lg:translate-y-[calc(-100%+16rem)]'
                  : 'transform translate-y-0'
              }`}
              style={{ minHeight: '100%' }}
            />
          )}
        </div>

        {/* Badge Pill */}
        <div
          className={`absolute top-2.5 left-2.5 px-3 py-1 rounded-full text-xs font-semibold text-white transition-all duration-300 z-10 backdrop-blur-md ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
          style={{ backgroundColor: 'rgba(131, 86, 251, 0.85)' }}
        >
          <span className="truncate max-w-[200px] inline-block">{project.category}</span>
        </div>

        {/* Subtle static badge if not hovered */}
        <div
          className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md sm:rounded-lg bg-white/95 dark:bg-[#1a1a1a]/95 text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5 border border-[#8356FB]/25 backdrop-blur-md transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
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
          <h3 className="text-lg sm:text-xl font-bold font-headingfont text-textHeading group-hover/case:text-navTextHover transition-colors duration-200">
            {project.title}
          </h3>
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
                  className="lucide lucide-arrow-right w-3 h-3 -rotate-45"
                >
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
                className="lucide lucide-external-link w-3.5 h-3.5"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

