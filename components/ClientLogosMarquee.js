'use client';

const clientLogos = [
  { src: '/images/clients/client_norm_02.png', alt: 'Alluring logo' },
  { src: '/images/clients/client_norm_03.png', alt: 'Balprada logo' },
  { src: '/images/clients/client_norm_04.png', alt: 'Buyzaar logo' },
  { src: '/images/clients/client_norm_05.png', alt: 'Kailash Fort Resort logo', className: 'scale-[1.3]' },
  { src: '/images/clients/client_norm_06.png', alt: 'Herbsfox logo' },
  { src: '/images/clients/client_norm_07.png', alt: 'IMA logo', className: 'scale-[1.3]' },
  { src: '/images/clients/client_norm_09.png', alt: 'Client logo 10' },
  { src: '/images/clients/client_norm_10.png', alt: 'Client logo 11' },
  { src: '/images/clients/client_norm_11.png', alt: 'Client logo 12' },
  { src: '/images/clients/client_norm_12.png', alt: 'MT Boss logo' },
  { src: '/images/clients/client_norm_13.png', alt: 'PS Decor & Weddings logo', className: 'scale-[1.3]' },
  { src: '/images/clients/client_norm_14.png', alt: 'Southern Palate logo' },
  { src: '/images/clients/client_norm_15.png', alt: 'Suzuki logo' },
  { src: '/images/clients/client_norm_16.png', alt: 'Vasterior logo' },
  { src: '/images/clients/client_norm_17.png', alt: 'Client logo 19' },
  { src: '/images/clients/client_norm_18.png', alt: 'Intirio Trade & Construction logo' },
  { src: '/images/clients/client_norm_19.png', alt: 'SS Metals logo', className: 'scale-[1.2]' },
  { src: '/images/clients/client_norm_20.png', alt: 'Indraprastha Gas Limited logo', className: 'scale-[1.15]' },
  { src: '/images/clients/client_norm_21.png', alt: 'Jyoti Hydraulic logo' },
];

export default function ClientLogosMarquee() {
  return (
    <div className="trustedSlider-5 w-full flex justify-center items-center my-6 sm:my-8 md:my-10 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:max-w-[860px] px-2 select-none">
        {/* Header with ornamental flourish SVGs */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-textDescription/70 dark:text-textDescription/60">
          {/* Left Wing Flourish SVG */}
          <svg
            viewBox="0 0 56 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-11 md:w-14 h-auto shrink-0"
            aria-hidden="true"
          >
            <path d="M14 3C7 3 2 7.5 2 13C2 17.5 6.5 18.5 9.5 16.5C12 14.8 11.5 12 8 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"></path>
            <path d="M14 3C22 3 32 11 54 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"></path>
            <path d="M16 6C23.5 6 32 13 50 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.85"></path>
            <path d="M18 9C25 9 33 15 46 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.7"></path>
            <path d="M21 12C27 12 34 17 41 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.55"></path>
            <path d="M24 15C29 15 34 18.5 37 18.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.4"></path>
          </svg>

          {/* Heading Text */}
          <p className="text-textDescription font-headingfont text-sm sm:text-lg md:text-xl font-semibold text-center tracking-[0.08em] uppercase whitespace-nowrap">
            TRUSTED BY AND BUILT FOR
          </p>

          {/* Right Wing Flourish SVG (mirrored via -scale-x-100) */}
          <svg
            viewBox="0 0 56 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-11 md:w-14 h-auto shrink-0 -scale-x-100"
            aria-hidden="true"
          >
            <path d="M14 3C7 3 2 7.5 2 13C2 17.5 6.5 18.5 9.5 16.5C12 14.8 11.5 12 8 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"></path>
            <path d="M14 3C22 3 32 11 54 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"></path>
            <path d="M16 6C23.5 6 32 13 50 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.85"></path>
            <path d="M18 9C25 9 33 15 46 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.7"></path>
            <path d="M21 12C27 12 34 17 41 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.55"></path>
            <path d="M24 15C29 15 34 18.5 37 18.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeOpacity="0.4"></path>
          </svg>
        </div>

        {/* Continuous reverse marquee (animated to right) */}
        <div className="group w-full overflow-hidden mask-gradient-x flex select-none py-2">
          <div className="flex shrink-0 items-center animate-marquee-right group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16">
            {clientLogos.map((logo, i) => (
              <div
                key={`logo1-${i}`}
                className="shrink-0 flex items-center justify-center h-9 sm:h-11 md:h-14 w-28 sm:w-36 md:w-44"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-full max-w-full w-auto h-auto object-contain brightness-[0.35] opacity-80 hover:opacity-100 hover:brightness-[0.2] dark:brightness-100 dark:opacity-75 dark:hover:opacity-100 dark:hover:brightness-110 transition-[opacity,filter,transform] duration-300 ${logo.className || ''}`}
                  loading="lazy"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="flex shrink-0 items-center animate-marquee-right group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16">
            {clientLogos.map((logo, i) => (
              <div
                key={`logo2-${i}`}
                className="shrink-0 flex items-center justify-center h-9 sm:h-11 md:h-14 w-28 sm:w-36 md:w-44"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-full max-w-full w-auto h-auto object-contain brightness-[0.35] opacity-80 hover:opacity-100 hover:brightness-[0.2] dark:brightness-100 dark:opacity-75 dark:hover:opacity-100 dark:hover:brightness-110 transition-[opacity,filter,transform] duration-300 ${logo.className || ''}`}
                  loading="lazy"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
