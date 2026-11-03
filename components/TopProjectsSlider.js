'use client';

const sliderImages = [
  { src: '/images/slider/buyzaar_mart.webp', alt: 'The Buyzaar Mart online grocery shopping platform designed by Zentrix Infotech' },
  { src: '/images/slider/ps_decor.webp', alt: 'PS Decor luxury wedding and event styling website designed by Zentrix Infotech' },
  { src: '/images/slider/mt_boss.webp', alt: 'MT BOSS on-demand home construction & worker booking app designed by Zentrix Infotech' },
  { src: '/images/slider/jigyasa_hospital.webp', alt: 'Jigyasa Hospital multi-specialty healthcare portal designed by Zentrix Infotech' },
  { src: '/images/slider/vasterior.webp', alt: 'Vasterior luxury interior & architectural design platform designed by Zentrix Infotech' },
  { src: '/images/slider/kairvi_resort.webp', alt: 'Kairvi Fort Resort regal heritage destination wedding estate designed by Zentrix Infotech' },
  { src: '/images/slider/herbsfox.webp', alt: 'HerbsFox organic Ayurvedic spices & herbs marketplace designed by Zentrix Infotech' },
  { src: '/images/slider/oracle_eye_hospital.webp', alt: 'Oracle Eye Hospital super specialty laser & retina care website designed by Zentrix Infotech' },
  { src: '/images/slider/alluring_glimpses.webp', alt: 'Alluring Glimpses spatial architecture and interior design portfolio designed by Zentrix Infotech' },
  { src: '/images/slider/kdedu.webp', alt: 'Kamla Devi Group of Institutions (KDEDU) campus admissions portal designed by Zentrix Infotech' },
];

export default function TopProjectsSlider() {
  return (
    <div className="imgSlider-4 w-full flex justify-center items-center mt-20 mb-12 sm:mt-24 sm:mb-16 md:mt-28 md:mb-20 lg:mt-28 lg:mb-20 xl:mt-32 xl:mb-24 overflow-x-hidden">
      <div className="w-full overflow-hidden mask-gradient-x py-2 flex select-none">
        {/* Infinite Loop Track (duplicated twice for seamless animation) */}
        <div className="flex shrink-0 items-center animate-marquee-left gap-4 pr-4 sm:gap-6 sm:pr-6 xl:gap-8 xl:pr-8">
          {sliderImages.map((img, i) => (
            <div
              key={`track1-${i}`}
              className="relative shrink-0 w-[240px] aspect-[16/9] xs:w-[270px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] 2xl:w-[480px] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] lg:border-4 border-border overflow-hidden bg-[#0A0A0A] flex items-center justify-center shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain p-1 sm:p-1.5 transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
          {sliderImages.map((img, i) => (
            <div
              key={`track2-${i}`}
              className="relative shrink-0 w-[240px] aspect-[16/9] xs:w-[270px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] 2xl:w-[480px] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] lg:border-4 border-border overflow-hidden bg-[#0A0A0A] flex items-center justify-center shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain p-1 sm:p-1.5 transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
