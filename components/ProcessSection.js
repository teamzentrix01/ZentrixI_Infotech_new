'use client';

const steps = [
  {
    num: '01',
    title: 'DISCOVERY CALL',
    desc: 'Understanding your business goals and project requirements thoroughly.',
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'Crafting initial design concepts based on gathered insights.',
  },
  {
    num: '03',
    title: 'CLIENT FEEDBACK AND ITERATION',
    desc: 'Incorporating client feedback to refine and enhance the designs.',
  },
  {
    num: '04',
    title: 'DEVELOPMENT',
    desc: 'Transforming approved designs into clean, scalable, and high-performance code.',
  },
  {
    num: '05',
    title: 'TESTING',
    desc: 'Thorough testing to ensure functionality, performance, and compatibility.',
  },
  {
    num: '06',
    title: 'DEPLOYMENT AND LAUNCH',
    desc: 'Finalizing and launching your website for public access and use.',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="sl-process w-full flex flex-col justify-between items-center gap-16 mb-20 pt-28 xxxs:pt-20 xxxs:gap-12 xxxs:mb-14 xxs:pt-24 xxs:gap-14 xxs:mb-16 xs:mb-20 xs:pt-28 sm:mb-14 sm:pt-24 lg:gap-16 lg:pt-28 xl:gap-20 xl:mb-24 xl:pt-36 2xl:gap-24"
    >
      {/* Header Block */}
      <div className="scroll-reveal w-full flex flex-col items-center">
        <div className="w-full max-w-[780px] flex flex-col justify-between items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12">
          {/* Badge */}
          <div className="badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px]">
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0">
                <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
              </svg>
            </div>
            <p className="font-bold tracking-wide">HOW WE WORK</p>
          </div>

          <h2
            id="process-heading"
            className="text-left sm:text-center text-3xl xxs:text-3xl xs:text-4xl sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl 2xl:text-[52px] font-bold 2xl:leading-tight tracking-tight text-textHeading"
          >
            So, How Do We{' '}
            <span className="block bg-headingGradient text-transparent bg-clip-text font-semibold">
              Build It?
            </span>
          </h2>

          <p className="text-left sm:text-center w-full md:w-10/12 xl:max-w-[630px] text-sm xs:text-base sm:text-base lg:text-lg font-bodyfont text-textDescription 2xl:text-xl leading-relaxed">
            We take you from the first conversation to a finished product, keeping every step clear, collaborative, and focused on what matters.
          </p>
        </div>
      </div>

      {/* Process Cards Grid */}
      <div className="w-10/12 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:max-w-[1200px] 2xl:max-w-[1240px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-cardBg border border-border rounded-[20px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden h-[240px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:border-[#8356FB]/60 transition-all duration-300 group"
            >
              <div className="w-full flex items-start">
                <span className="font-headingfont font-extrabold text-[80px] sm:text-[90px] lg:text-[100px] leading-[64px] tracking-[-3px] text-transparent bg-clip-text bg-gradient-to-b from-black/[0.12] to-transparent to-[85%] dark:from-[#404040] dark:to-[#111111] dark:to-[87.5%] select-none group-hover:dark:from-[#8356FB]/60 transition-all duration-300">
                  {step.num}
                </span>
              </div>
              <div className="flex flex-col gap-1 mt-auto">
                <h3 className="font-headingfont font-bold text-xl sm:text-[24px] leading-[28px] text-textHeading tracking-[-0.72px] uppercase group-hover:text-navTextHover transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-headingfont font-semibold text-textDescription text-[16px] sm:text-[18px] leading-[22px] tracking-[-0.36px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
