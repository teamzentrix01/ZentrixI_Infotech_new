'use client';
import { useState } from 'react';

export default function SubpageFAQ({
  badgeText = 'FAQ',
  headingWord1 = 'Frequently Asked',
  headingWord2 = 'Questions',
  description = 'Scope, cost, timelines and what happens after launch — the questions we are asked before starting a project.',
  faqs = [],
}) {
  const [openIndices, setOpenIndices] = useState({});

  const toggleIndex = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  const renderCard = (faq, index) => {
    const isOpen = !!openIndices[index];
    return (
      <div
        key={index}
        onMouseMove={handleMouseMove}
        className="spotlight-card w-full rounded-2xl overflow-hidden transition-all duration-300 border border-border"
      >
        <button
          onClick={() => toggleIndex(index)}
          id={`faq-question-${index}`}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          className="w-full flex flex-row justify-between items-center gap-4 p-5 text-left xxxs:p-4 sm:p-4 xl:p-5"
        >
          <span className="font-bold text-base xxxs:text-sm sm:text-sm lg:text-base xl:text-lg text-textHeading transition-colors duration-200">
            {faq.q}
          </span>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 xxxs:w-7 xxxs:h-7 bg-workIconBg text-textHeading ${
              isOpen ? 'rotate-45' : ''
            }`}
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
              className="lucide lucide-plus w-4 h-4 xxxs:w-3.5 xxxs:h-3.5"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
        </button>
        <div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-5 pb-5 pt-0 text-textDescription font-bodyfont text-sm leading-relaxed xxxs:px-4 xxxs:pb-4 sm:text-sm sm:px-4 xl:text-base xl:px-5 xl:pb-5">
            {faq.a}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="sl-faq w-full flex flex-col justify-between items-center gap-12 py-24 xxxs:py-14 xxxs:gap-8 xxs:py-16 xs:py-20 sm:py-16 lg:py-20 xl:py-24 2xl:py-28"
    >
      <div className="w-full max-w-[780px] flex flex-col justify-between items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12">
        <div className="sl-faq-head-head-badge badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px] 2xl:px-6 2xl:py-4">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-question-mark w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <p>{badgeText}</p>
        </div>
        <h2
          id="faq-heading"
          className="sl-faq-head-head-heading text-left sm:text-center text-3xl xxs:text-3xl xs:text-4xl sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-5xl 2xl:text-[52px] font-bold 2xl:leading-tight tracking-tight"
        >
          {headingWord1}{' '}
          <span className="block bg-headingGradient text-transparent bg-clip-text font-semibold">
            {headingWord2}
          </span>
        </h2>
        <p className="sl-faq-head-head-description text-left sm:text-center w-full md:w-10/12 xl:max-w-[630px] text-sm xs:text-base sm:text-base lg:text-lg font-bodyfont text-textDescription 2xl:text-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="sl-faq-grid w-10/12 grid grid-cols-1 gap-4 xxxs:w-11/12 xxxs:gap-4 xxs:gap-4 xs:w-10/12 sm:w-11/12 sm:gap-4 md:w-10/12 lg:grid-cols-2 lg:gap-5 xl:max-w-[1100px] 2xl:max-w-[1440px] 2xl:gap-6">
        <div className="flex flex-col gap-4 sm:gap-4 lg:gap-5">
          {col1.map((faq, i) => renderCard(faq, i))}
        </div>
        <div className="flex flex-col gap-4 sm:gap-4 lg:gap-5">
          {col2.map((faq, i) => renderCard(faq, half + i))}
        </div>
      </div>
    </section>
  );
}
