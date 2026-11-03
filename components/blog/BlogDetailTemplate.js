'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ALL_POSTS } from '@/lib/blogsData';

export default function BlogDetailTemplate({ post }) {
  const [activeSection, setActiveSection] = useState(post.toc[0]?.id || '');
  const [copied, setCopied] = useState(false);

  // Other articles for "More Articles" bottom section
  const otherPosts = ALL_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = post.toc.length - 1; i >= 0; i--) {
        const item = post.toc[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const copyUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.zentrixinfotech.com/blog/${post.slug}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

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
            
            {/* Top Breadcrumb Row */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-y">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-3">
                <div className="shrink flex">
                  <Link 
                    className="flex gap-2 items-center text-textDescription hover:text-navTextHover transition-colors duration-200 group font-headingfont" 
                    href="/blog"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                    <p className="font-bold text-lg sm:text-xl">Blog</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Post Title & Metadata Header */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-8 pt-8 pb-6">
                <div className="w-full flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-cardBg py-1 px-3.5 text-xs font-semibold text-textDescription font-bodyfont shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-textHeading font-headingfont">
                    {post.title}
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-between sm:items-center text-xs sm:text-sm text-textDescription font-bodyfont pt-2 spotlight-line border-t">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                      <time className="whitespace-nowrap font-medium">{post.date}</time>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-border flex-shrink-0 bg-navBtnBg flex items-center justify-center text-white text-[10px] font-bold">
                          Z
                        </div>
                        <span className="font-semibold text-textHeading">{post.author}</span>
                      </div>
                      <span className="text-border">•</span>
                      <span className="whitespace-nowrap">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Banner Image */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-3 sm:p-6">
                <div className="border border-border bg-cardBg w-full aspect-[21/9] sm:aspect-[2/1] max-h-[560px] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 overflow-hidden relative shadow-sm">
                  <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                    <img
                      alt={post.title}
                      className="object-cover w-full h-full"
                      style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }}
                      src={post.cover}
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
                        {post.toc.map((item) => {
                          const isActive = activeSection === item.id;
                          return (
                            <li key={item.id} className="relative">
                              {isActive && (
                                <span className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-navTextHover rounded-full"></span>
                              )}
                              <a
                                href={`#${item.id}`}
                                className={`block py-1.5 transition-colors duration-200 leading-snug pl-4 ${
                                  isActive
                                    ? 'text-navTextHover font-semibold'
                                    : 'text-textDescription hover:text-textHeading'
                                }`}
                              >
                                {item.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </aside>

                  {/* Main Article Body */}
                  <div className="flex-1 min-w-0 w-full pr-2 sm:pr-6 lg:pr-12 xl:pr-16">
                    {/* Mobile Table of Contents */}
                    <div className="lg:hidden mb-8 p-4 rounded-xl border border-border bg-cardBg/50">
                      <nav aria-label="Table of Contents" className="w-full">
                        <p className="font-headingfont text-xl sm:text-2xl font-bold text-textHeading mb-4 tracking-tight">
                          Table of Content
                        </p>
                        <ul className="space-y-1 spotlight-line border-l pl-0 list-none m-0 p-0 font-bodyfont text-sm">
                          {post.toc.map((item) => (
                            <li key={item.id} className="relative">
                              <a
                                href={`#${item.id}`}
                                className="block py-1.5 transition-colors duration-200 leading-snug pl-4 text-textDescription hover:text-textHeading"
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
                        {/* Introduction */}
                        {post.introduction && (
                          <div className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-8 p-4 sm:p-6 rounded-2xl bg-cardBg/40 border border-border">
                            <p className="m-0 leading-relaxed text-textHeading font-medium">
                              {post.introduction}
                            </p>
                          </div>
                        )}

                        {/* Article Sections */}
                        {post.sections.map((section) => (
                          <div key={section.id} className="mb-12">
                            <h2
                              id={section.id}
                              className="font-headingfont text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-10 mb-5 text-textHeading tracking-tight scroll-mt-36 border-l-4 border-navTextHover pl-4"
                            >
                              {section.heading}
                            </h2>

                            {section.content.map((item, cIdx) => {
                              if (item.type === 'paragraph') {
                                return (
                                  <p key={cIdx} className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
                                    {item.text}
                                  </p>
                                );
                              }
                              if (item.type === 'subheading') {
                                return (
                                  <h3 key={cIdx} className="font-headingfont text-xl sm:text-2xl font-bold leading-tight mt-8 mb-3 text-textHeading tracking-tight">
                                    {item.text}
                                  </h3>
                                );
                              }
                              if (item.type === 'bullets') {
                                return (
                                  <ul key={cIdx} className="font-bodyfont list-disc pl-6 my-5 space-y-2.5 text-base sm:text-lg text-textDescription marker:text-navTextHover">
                                    {item.items.map((bullet, bIdx) => (
                                      <li key={bIdx} className="leading-relaxed">
                                        {bullet}
                                      </li>
                                    ))}
                                  </ul>
                                );
                              }
                              if (item.type === 'callout') {
                                return (
                                  <div
                                    key={cIdx}
                                    className={`my-6 p-4 sm:p-5 rounded-xl border ${
                                      item.style === 'danger'
                                        ? 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-200'
                                        : 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-100'
                                    }`}
                                  >
                                    <p className="m-0 font-bodyfont text-base sm:text-lg font-medium leading-relaxed">
                                      {item.text}
                                    </p>
                                  </div>
                                );
                              }
                              if (item.type === 'table') {
                                return (
                                  <div key={cIdx} className="my-6 overflow-x-auto rounded-xl border border-border bg-cardBg">
                                    <table className="w-full text-left border-collapse text-sm sm:text-base">
                                      <thead>
                                        <tr className="border-b border-border bg-black/[0.03] dark:bg-white/[0.03]">
                                          {item.headers.map((h, hIdx) => (
                                            <th key={hIdx} className="p-3 sm:p-4 font-semibold text-textHeading">
                                              {h}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {item.rows.map((row, rIdx) => (
                                          <tr key={rIdx} className="border-b border-border/50 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
                                            {row.map((cell, cellIdx) => (
                                              <td key={cellIdx} className="p-3 sm:p-4 text-textDescription">
                                                {cell}
                                              </td>
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                );
                              }
                              if (item.type === 'image') {
                                return (
                                  <figure key={cIdx} className="my-8 rounded-xl overflow-hidden border border-border bg-cardBg">
                                    <img
                                      src={item.url}
                                      alt={item.alt || ''}
                                      className="w-full h-auto object-cover max-h-[500px]"
                                      loading="lazy"
                                    />
                                    {item.caption && (
                                      <figcaption className="p-3 text-center text-xs sm:text-sm text-textDescription italic">
                                        {item.caption}
                                      </figcaption>
                                    )}
                                  </figure>
                                );
                              }
                              return null;
                            })}
                          </div>
                        ))}

                        {/* FAQs Section inside blog (if present) */}
                        {post.faqs && post.faqs.length > 0 && (
                          <div className="mt-14 pt-8 border-t border-border">
                            <h2 className="font-headingfont text-2xl sm:text-3xl font-bold mb-6 text-textHeading">
                              Frequently Asked Questions
                            </h2>
                            <div className="flex flex-col gap-4">
                              {post.faqs.map((faq, fIdx) => (
                                <div key={fIdx} className="p-4 sm:p-5 rounded-xl border border-border bg-cardBg">
                                  <h3 className="font-headingfont font-bold text-base sm:text-lg text-textHeading mb-2">
                                    {faq.question}
                                  </h3>
                                  <p className="font-bodyfont text-sm sm:text-base text-textDescription m-0 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Sharing & Follow Bar */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full">
                  <a 
                    href="https://twitter.com/zentrixinfotechconnect" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 sm:px-6 py-3 flex gap-2.5 items-center text-textDescription hover:text-navTextHover transition-colors text-sm font-semibold font-bodyfont"
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4 text-navTextHover" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    </svg>
                    <span>Follow @zentrixinfotechconnect</span>
                  </a>
                  <div className="flex items-center self-end sm:self-auto spotlight-line border-t sm:border-t-0 sm:border-l">
                    {/* Share on X */}
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedTitle}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Share on X / Twitter" 
                      className="w-12 h-12 spotlight-line border-l flex items-center justify-center text-textDescription hover:text-navTextHover hover:bg-cardBg transition-all"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </a>
                    {/* Share on LinkedIn */}
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Share on LinkedIn" 
                      className="w-12 h-12 spotlight-line border-l flex items-center justify-center text-textDescription hover:text-[#0A66C2] hover:bg-cardBg transition-all"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                    {/* Share on Facebook */}
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Share on Facebook" 
                      className="w-12 h-12 spotlight-line border-l flex items-center justify-center text-textDescription hover:text-[#1877F2] hover:bg-cardBg transition-all"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="w-3.5 h-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                      </svg>
                    </a>
                    {/* Copy Link Button */}
                    <button 
                      onClick={copyUrl} 
                      aria-label="Copy article link" 
                      className="w-12 h-12 spotlight-line border-l flex items-center justify-center text-textDescription hover:text-navTextHover hover:bg-cardBg transition-all relative"
                    >
                      {copied ? (
                        <span className="text-[10px] text-navTextHover font-bold">Copied!</span>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2 w-4 h-4" aria-hidden="true">
                          <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                          <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                          <line x1="8" x2="16" y1="12" y2="12"></line>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom More Articles Section */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-4 sm:px-6 py-4">
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-textHeading font-headingfont">
                  More Articles
                </p>
              </div>
            </div>

            {/* More Articles Desktop 4-column Grid */}
            <div className="hidden sm:flex flex-col w-full">
              <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                    {otherPosts.map((item, idx) => (
                      <div key={item.slug} className={`h-full spotlight-line border-r ${idx === 3 ? 'lg:border-r-0' : ''}`}>
                        <div className="PostCard group relative list-none h-full bg-background overflow-hidden transition-all duration-300 flex flex-col">
                          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                          <Link className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between" href={`/blog/${item.slug}`}>
                            <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                              <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                                <img
                                  alt={item.title}
                                  loading="lazy"
                                  className="object-cover w-full h-full"
                                  style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }}
                                  src={item.cover}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                              <div className="flex flex-col gap-1">
                                <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">{item.date}</small>
                                <h3 className="font-headingfont text-lg sm:text-xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">
                                  {item.title}
                                </h3>
                                <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">
                                  {item.description}
                                </p>
                              </div>
                              <div className="pt-2 flex items-center justify-between font-bodyfont">
                                <span className="text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">
                                  {item.category}
                                </span>
                                <span className="text-xs text-textDescription font-medium">{item.readTime}</span>
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

            {/* More Articles Mobile Single Column Grid */}
            <div className="flex sm:hidden flex-col w-full">
              {otherPosts.map((item) => (
                <div key={item.slug} className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                  <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                    <div className="PostCard group relative list-none h-full bg-background overflow-hidden transition-all duration-300 flex flex-col">
                      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                      <Link className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between" href={`/blog/${item.slug}`}>
                        <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                          <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                            <img alt={item.title} loading="lazy" className="object-cover w-full h-full" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }} src={item.cover}/>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                          <div className="flex flex-col gap-1">
                            <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">{item.date}</small>
                            <h3 className="font-headingfont text-xl sm:text-2xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">{item.title}</h3>
                            <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">{item.description}</p>
                          </div>
                          <div className="pt-2 flex items-center justify-between font-bodyfont">
                            <span className="text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">{item.category}</span>
                            <span className="text-xs text-textDescription font-medium">{item.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

