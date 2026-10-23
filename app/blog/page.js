'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

const ALL_POSTS = [
  {
    slug: 'sawasheri-direct-kirana-online',
    title: 'Taking a 1972 Kirana Business Online',
    description: 'Sawasheri Brothers has sold groceries in Belagavi since 1972. Here is how we put their shop online without turning it into a marketplace — and why we deployed a product instead of building from scratch.',
    date: 'Tue, Aug 11, 2026',
    category: 'Case Studies',
    readTime: '8 min read',
    cover: '/assets/blog/cover-sawasheri-direct.svg',
    featured: true
  },
  {
    slug: 'structured-data-that-survives',
    title: 'Structured Data That Survives Google’s Rules',
    description: 'Most schema markup we inherit has the same three problems: invented values, duplicate entities, and claims Google actively penalises. Here is how to audit yours — starting with the one that risks a manual action.',
    date: 'Wed, Jul 29, 2026',
    category: 'Engineering',
    readTime: '7 min read',
    cover: '/assets/blog/cover-structured-data.svg'
  },
  {
    slug: 'cutting-image-payload-85-percent',
    title: 'Cutting a Page’s Image Payload by 85%',
    description: 'We took 1.8 MB of images down to under 320 KB. The interesting part was not the compression — it was discovering that the best-performing format made one image visibly worse.',
    date: 'Fri, Jul 10, 2026',
    category: 'Engineering',
    readTime: '7 min read',
    cover: '/assets/blog/cover-image-payload.svg'
  },
  {
    slug: 'website-cost-india-2026',
    title: 'What a Website Actually Costs in India in 2026',
    description: 'Real ranges, what moves the number, and the questions to ask before accepting any quote — including the costs that show up after launch.',
    date: 'Wed, Jun 24, 2026',
    category: 'Guides',
    readTime: '6 min read',
    cover: '/assets/blog/cover-website-cost.svg'
  },
  {
    slug: 'web-app-or-mobile-app',
    title: 'Web App or Mobile App: Which Do You Actually Need?',
    description: 'The honest answer for most businesses is a web app first. Here is how to tell when that is wrong — and what a mobile app really commits you to.',
    date: 'Fri, Jun 05, 2026',
    category: 'Guides',
    readTime: '6 min read',
    cover: '/assets/blog/cover-web-vs-app.svg'
  }
];

const CATEGORIES = ['All', 'Guides', 'Engineering', 'Case Studies'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = ALL_POSTS[0];

  const filteredPosts = useMemo(() => {
    return ALL_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = searchQuery.trim() === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Determine if featured post should display in featured slot
  const showFeatured = (selectedCategory === 'All' || selectedCategory === 'Case Studies') && 
    (searchQuery.trim() === '' || 
     featuredPost.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     featuredPost.description.toLowerCase().includes(searchQuery.toLowerCase()));

  // Other posts excluding featured when featured is shown
  const gridPosts = showFeatured 
    ? filteredPosts.filter(p => p.slug !== featuredPost.slug)
    : filteredPosts;

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
        <div className="w-full h-0 pointer-events-none -mt-4"></div>
        <div className="w-full flex flex-col items-center mt-28 xxxs:mt-24 xxs:mt-24 xs:mt-28 sm:mt-32 md:mt-32 lg:mt-36 xl:mt-40 mb-20 z-10">
          <div className="w-full flex flex-col items-center relative">
            
            {/* Header Title Section */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-y">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-0 py-4 sm:px-6 sm:py-8">
                <div className="flex flex-col gap-1 animate-reveal-up">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-textHeading font-headingfont">
                    Zentrix Infotech <span className="bg-headingGradient text-transparent bg-clip-text font-semibold">Blog</span>
                  </h1>
                  <p className="font-bodyfont text-textDescription text-xs sm:text-lg">
                    The latest engineering stories, product updates, AI breakthroughs, and design insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Post Card (if applicable) */}
            {showFeatured && (
              <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                  <div className="w-full h-full animate-reveal-up">
                    <div className="PostCard group relative w-full h-full overflow-hidden transition-all duration-300 bg-background">
                      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                      <Link 
                        className="relative z-10 flex flex-col md:flex-row items-stretch gap-4 md:gap-10 p-4 sm:p-6 lg:p-8 text-textHeading group transition-all duration-300" 
                        href={`/blog/${featuredPost.slug}`}
                      >
                        <div className="border border-border bg-cardBg flex-shrink-0 w-full md:w-[48%] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(131,86,251,0.2)] flex flex-col">
                          <div className="w-full h-full min-h-[200px] sm:min-h-[220px] aspect-[2/1] md:aspect-auto rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                            <img 
                              alt={featuredPost.title}
                              decoding="async" 
                              className="object-cover w-full h-full" 
                              style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }} 
                              src={featuredPost.cover}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center gap-2.5 sm:gap-3 flex-1 px-1 sm:px-0 pt-1 sm:pt-0">
                          <small className="text-sm sm:text-lg flex items-center gap-2 font-headingfont">
                            <span className="text-textDescription font-medium">{featuredPost.date}</span>
                            <span className="text-border">•</span>
                            <span className="px-2.5 py-0.5 rounded-md bg-navBtnBg text-white font-bold text-xs tracking-wider uppercase shadow-sm">
                              Featured
                            </span>
                          </small>
                          <h2 className="font-headingfont text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-textHeading">
                            {featuredPost.title}
                          </h2>
                          <p className="font-bodyfont text-textDescription text-xs sm:text-base lg:text-lg leading-relaxed line-clamp-2 md:line-clamp-4">
                            {featuredPost.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Search Input Row */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-0 py-2.5 sm:px-6 sm:py-4">
                <div className="relative flex items-center w-full font-bodyfont">
                  <input 
                    type="text" 
                    placeholder="Search the Zentrix Infotech blog…" 
                    className="spotlight-line-cardbg w-full h-10 sm:h-12 pl-10 sm:pl-11 pr-4 rounded-xl border bg-cardBg text-textHeading placeholder:text-textDescription focus:outline-none focus:ring-2 focus:ring-navTextHover transition-all text-xs sm:text-base font-bodyfont" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
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
                    className="lucide lucide-search absolute left-3.5 sm:left-4 text-textDescription w-4 h-4 pointer-events-none" 
                    aria-hidden="true"
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 text-textDescription hover:text-textHeading text-xs px-2 py-1 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Categories Row */}
            <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
              <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x px-0 py-2 sm:px-6 sm:py-3">
                <div className="categories-scroll flex flex-row items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 font-bodyfont">
                  {CATEGORIES.map(category => {
                    const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
                    return (
                      <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`transition-all duration-200 rounded-full py-1 sm:py-1.5 px-3 sm:px-4 text-[11px] sm:text-sm font-semibold whitespace-nowrap border ${
                          isActive 
                            ? 'bg-navBtnBg border-transparent text-white shadow-md' 
                            : 'border-border text-textDescription hover:text-textHeading hover:bg-cardBg'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Grid of Articles */}
            {gridPosts.length === 0 ? (
              <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b py-16">
                <div className="spotlight-line w-10/12 text-center text-textDescription py-8 font-bodyfont">
                  No blog articles found matching &quot;{searchQuery || selectedCategory}&quot;.
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col">
                {/* Mobile Single Column (< sm) */}
                <div className="flex sm:hidden flex-col w-full">
                  {gridPosts.map((post) => (
                    <div key={post.slug} className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                      <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                        <div className="PostCard group relative list-none h-full bg-background overflow-hidden transition-all duration-300 flex flex-col">
                          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                          <Link className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between" href={`/blog/${post.slug}`}>
                            <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                              <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                                <img alt={post.title} loading="lazy" decoding="async" className="object-cover w-full h-full" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }} src={post.cover}/>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                              <div className="flex flex-col gap-1">
                                <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">{post.date}</small>
                                <h3 className="font-headingfont text-xl sm:text-3xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">{post.title}</h3>
                                <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">{post.description}</p>
                              </div>
                              <div className="pt-2 flex items-center justify-between font-bodyfont">
                                <span className="text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">{post.category}</span>
                                <span className="text-xs text-textDescription font-medium">{post.readTime}</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet 2-Columns (sm to lg) */}
                <div className="hidden sm:flex lg:hidden flex-col w-full">
                  <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                    <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                      <div className="grid grid-cols-2 w-full">
                        {gridPosts.map((post, idx) => (
                          <div key={post.slug} className={`h-full spotlight-line ${idx % 2 === 0 ? 'border-r' : ''} ${idx >= 2 ? 'border-t' : ''}`}>
                            <div className="PostCard group relative list-none h-full bg-background overflow-hidden transition-all duration-300 flex flex-col">
                              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                              <Link className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between" href={`/blog/${post.slug}`}>
                                <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                                  <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                                    <img alt={post.title} loading="lazy" decoding="async" className="object-cover w-full h-full" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }} src={post.cover}/>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                                  <div className="flex flex-col gap-1">
                                    <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">{post.date}</small>
                                    <h3 className="font-headingfont text-xl sm:text-3xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">{post.title}</h3>
                                    <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">{post.description}</p>
                                  </div>
                                  <div className="pt-2 flex items-center justify-between font-bodyfont">
                                    <span className="text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">{post.category}</span>
                                    <span className="text-xs text-textDescription font-medium">{post.readTime}</span>
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

                {/* Desktop 4-Columns (lg+) */}
                <div className="hidden lg:flex flex-col w-full">
                  <div className="blueprint-row spotlight-line w-full flex justify-center relative border-b">
                    <div className="spotlight-line w-10/12 xxxs:w-11/12 xxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 2xl:max-w-[1440px] shrink-0 sm:border-x p-0">
                      <div className="grid grid-cols-4 w-full">
                        {gridPosts.map((post, idx) => (
                          <div key={post.slug} className={`h-full spotlight-line ${idx % 4 !== 3 ? 'border-r' : ''} ${idx >= 4 ? 'border-t' : ''}`}>
                            <div className="PostCard group relative list-none h-full bg-background overflow-hidden transition-all duration-300 flex flex-col">
                              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#8356FB]/25 via-[#946CFF]/12 to-transparent pointer-events-none"></div>
                              <Link className="relative z-10 flex flex-col gap-3.5 h-full p-3 sm:p-5 lg:p-6 text-textHeading group justify-between" href={`/blog/${post.slug}`}>
                                <div className="border border-border bg-cardBg w-full aspect-[2/1] rounded-xl sm:rounded-2xl p-1 sm:p-1.5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(131,86,251,0.18)]">
                                  <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative bg-cardBg">
                                    <img alt={post.title} loading="lazy" decoding="async" className="object-cover w-full h-full" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0' }} src={post.cover}/>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 flex-1 justify-between px-1 sm:px-0 pt-0.5 sm:pt-0">
                                  <div className="flex flex-col gap-1">
                                    <small className="font-bodyfont text-xs sm:text-sm text-textDescription font-medium">{post.date}</small>
                                    <h3 className="font-headingfont text-xl sm:text-2xl font-bold leading-snug tracking-tight text-textHeading line-clamp-2">{post.title}</h3>
                                    <p className="font-bodyfont text-textDescription text-xs sm:text-sm leading-relaxed line-clamp-3">{post.description}</p>
                                  </div>
                                  <div className="pt-2 flex items-center justify-between font-bodyfont">
                                    <span className="text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-textDescription bg-cardBg transition-all shadow-sm">{post.category}</span>
                                    <span className="text-xs text-textDescription font-medium">{post.readTime}</span>
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

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
