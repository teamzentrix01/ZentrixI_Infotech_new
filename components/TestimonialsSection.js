'use client';

const col1Reviews = [
  {
    initials: 'AM',
    name: 'Ajay Manaolkar',
    role: 'CEO & Founder at Technolkar',
    text: '“Zentrix Infotech helped us rebuild our enterprise app from the ground up. Their backend and frontend coordination was flawless, and they delivered a smooth, scalable product. The team truly understands modern app development standards.”',
  },
  {
    initials: 'KG',
    name: 'Kshitija Gowda',
    role: 'Fashion Designer at ADA',
    text: '“The Zentrix Infotech team designed our fashion brand\'s portfolio site and logo. They perfectly captured our aesthetic — minimal, elegant, and bold. Every pixel and animation reflects the essence of our label.”',
  },
  {
    initials: 'AM',
    name: 'Abhishekh Mane',
    role: 'CEO & Founder at SuperOatMeals',
    text: '“We hired Zentrix Infotech for app design and development for our health startup. The app is visually stunning, performs flawlessly, and has received amazing feedback from users. Highly recommend them to any startup.”',
  },
];

const col2Reviews = [
  {
    initials: 'N',
    name: 'Naveen',
    role: 'Director at Radiant Craft Creation',
    text: '“We collaborated with Zentrix Infotech for our company website and brand identity. They nailed both design and functionality. The site feels alive with subtle animations, and our clients love the new experience.”',
  },
  {
    initials: 'MG',
    name: 'Manish Ghelot',
    role: 'Director at Lineage Corporation',
    text: '“We approached Zentrix Infotech for an internal business application. The interface is intuitive, responsive, and beautifully designed. Their commitment to detail and post-launch support is what makes them stand out.”',
  },
  {
    initials: 'SD',
    name: 'Sushobhan Desarkar',
    role: 'Founder at Auxilium',
    text: '“Zentrix Infotech transformed our business concept into a complete digital product. From wireframes to launch, their team managed everything efficiently. The UI/UX work was exceptional, and the final product exceeded our expectations.”',
  },
];

const col3Reviews = [
  {
    initials: 'VC',
    name: 'Venky CH',
    role: 'Product Manager at BITW',
    text: '“Zentrix Infotech\'s development process is one of the most organized I\'ve seen. They delivered our SaaS dashboard on time with exceptional code quality. Communication was clear, and their problem-solving skills stood out.”',
  },
  {
    initials: 'CP',
    name: 'Chetan Patil',
    role: 'Managing Director at FITLOC',
    text: '“Zentrix Infotech built our international manufacturing website and digital product catalogue from scratch. The precision, speed, and responsiveness of the platform directly helped us showcase our 400+ SKUs to global OEM clients with ease.”',
  },
  {
    initials: 'AJ',
    name: 'Abhishekh Jadhav',
    role: 'Managing Director at KEW',
    text: '“We worked with Zentrix Infotech on a web app for our manufacturing process. The dashboard they built is clean, fast, and extremely user-friendly. Their professionalism and technical skillset are impressive.”',
  },
];

const allReviews = [...col1Reviews, ...col2Reviews, ...col3Reviews];

function TestimonialCard({ review }) {
  return (
    <div className="border border-border bg-cardBg shadow-none group relative w-full flex flex-col justify-between items-start rounded-3xl p-5 sm:p-6 transition-all duration-300 gap-5 overflow-hidden hover:border-[#8356FB]/60">
      <p className="w-full text-textDescription font-bodyfont text-xs sm:text-sm leading-relaxed">
        {review.text}
      </p>
      <div className="w-full flex flex-row gap-3 items-center pt-4 border-t border-border">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#8356FB] text-white text-sm font-bold flex-shrink-0">
          {review.initials}
        </div>
        <div className="flex flex-col justify-center items-start leading-tight">
          <p className="text-sm sm:text-base font-bold font-headingfont text-textHeading">
            {review.name}
          </p>
          <p className="text-[11px] sm:text-xs font-bodyfont text-textDescription">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="sl-testimonial relative w-full flex flex-col justify-between items-center gap-16 my-20 xxxs:my-14 xxs:my-16 xs:my-20 sm:my-14 xl:gap-20 xl:my-24 2xl:my-28 2xl:gap-24"
    >
      {/* Header Block */}
      <div className="scroll-reveal w-full flex flex-col items-center">
        <div className="w-full max-w-[780px] flex flex-col justify-between items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12">
          {/* Badge */}
          <div className="sl-testimonial-1-head-badge badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px]">
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0">
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <p className="font-bold tracking-wide">TESTIMONIALS</p>
          </div>

          <h2
            id="testimonials-heading"
            className="sl-testimonial-1-head-heading text-left sm:text-center text-3xl xxs:text-3xl xs:text-4xl sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl 2xl:text-[52px] font-bold 2xl:leading-tight tracking-tight text-textHeading"
          >
            See What Our Clients{' '}
            <span className="block bg-headingGradient text-transparent bg-clip-text font-semibold">
              Say
            </span>
          </h2>

          <p className="sl-testimonial-1-head-description text-left sm:text-center w-full md:w-10/12 xl:max-w-[630px] text-sm xs:text-base sm:text-base lg:text-lg font-bodyfont text-textDescription 2xl:text-xl leading-relaxed">
            Remarkable Stories That Showcase The Magic Of Collaboration And Shared Success!
          </p>
        </div>
      </div>

      {/* Testimonials Wall */}
      <div className="w-10/12 xxxs:w-11/12 md:w-10/12 xl:max-w-[1100px] 2xl:max-w-[1200px]">
        {/* Desktop 3 Columns */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[680px] px-8 py-6 -mx-8 overflow-hidden testimonials-mask-y">
          {/* Column 1: Up */}
          <div className="flex flex-col group overflow-visible">
            <div className="flex flex-col gap-6 animate-scroll-up py-2">
              {[...col1Reviews, ...col1Reviews].map((r, i) => (
                <TestimonialCard key={`c1-${i}`} review={r} />
              ))}
            </div>
          </div>

          {/* Column 2: Down */}
          <div className="flex flex-col group overflow-visible">
            <div className="flex flex-col gap-6 animate-scroll-down py-2">
              {[...col2Reviews, ...col2Reviews].map((r, i) => (
                <TestimonialCard key={`c2-${i}`} review={r} />
              ))}
            </div>
          </div>

          {/* Column 3: Up */}
          <div className="hidden lg:flex flex-col group overflow-visible">
            <div className="flex flex-col gap-6 animate-scroll-up py-2">
              {[...col3Reviews, ...col3Reviews].map((r, i) => (
                <TestimonialCard key={`c3-${i}`} review={r} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden w-full overflow-hidden testimonials-mask-x py-6 px-4">
          <div className="flex gap-4 animate-scroll-left w-max">
            {[...allReviews, ...allReviews].map((r, i) => (
              <div key={`mob-${i}`} className="w-[290px] flex-shrink-0">
                <TestimonialCard review={r} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
