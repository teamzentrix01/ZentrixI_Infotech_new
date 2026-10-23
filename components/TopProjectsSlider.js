'use client';

const sliderImages = [
  { src: '/images/SliderImg_1.webp', alt: 'Lineage Corporation website designed by Zentrix Infotech' },
  { src: '/images/SliderImg_2.webp', alt: 'FITLOC precision hydraulic components website designed by Zentrix Infotech' },
  { src: '/images/SliderImg_3.webp', alt: 'Sawasheri Direct grocery platform designed by Zentrix Infotech' },
  { src: '/images/SliderImg_4.webp', alt: 'Radiant Craft Creation e-commerce platform by Zentrix Infotech' },
  { src: '/images/SliderImg_6.webp', alt: 'Auxilium digital platform designed by Zentrix Infotech' },
  { src: '/images/SliderImg_7.webp', alt: 'Technolkar website designed by Zentrix Infotech' },
  { src: '/images/SliderImg_8.webp', alt: 'BITW SaaS dashboard designed by Zentrix Infotech' },
  { src: '/images/SliderImg_9.webp', alt: 'SuperOatMeals application designed by Zentrix Infotech' },
  { src: '/images/SliderImg_10.webp', alt: 'ADA Fashion Portfolio designed by Zentrix Infotech' },
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
              className="relative shrink-0 w-[210px] h-[145px] xs:w-[240px] xs:h-[165px] sm:w-[270px] sm:h-[185px] md:w-[300px] md:h-[205px] lg:w-[330px] lg:h-[225px] xl:w-[360px] xl:h-[245px] 2xl:w-[400px] 2xl:h-[270px]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] lg:border-4 border-border"
                loading="lazy"
              />
            </div>
          ))}
          {sliderImages.map((img, i) => (
            <div
              key={`track2-${i}`}
              className="relative shrink-0 w-[210px] h-[145px] xs:w-[240px] xs:h-[165px] sm:w-[270px] sm:h-[185px] md:w-[300px] md:h-[205px] lg:w-[330px] lg:h-[225px] xl:w-[360px] xl:h-[245px] 2xl:w-[400px] 2xl:h-[270px]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] lg:border-4 border-border"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
