'use client';
import Link from 'next/link';
import SubpageFAQ from '@/components/SubpageFAQ';

const productsFaqs = [
  {
    "q": "Can Zentrix Infotech products be customized for our specific business workflow?",
    "a": "Yes, all our proprietary software products can be white-labeled, customized, or extended to match your exact business requirements, branding, and workflows."
  },
  {
    "q": "How do licensing and pricing work for your software products?",
    "a": "We offer flexible licensing models including monthly/annual SaaS subscriptions, one-time purchase with source code access, and custom enterprise deployments with dedicated hosting and SLA support."
  },
  {
    "q": "Can I request a live demo or free trial before purchasing?",
    "a": "Absolutely! We provide 1-on-1 walkthrough demos and sandbox trial environments so your team can test every feature and workflow before making any commitment."
  },
  {
    "q": "What integrations do your products support?",
    "a": "Our platforms expose REST APIs and webhooks, and we integrate with the major payment gateways (Razorpay, Stripe, Cashfree), SMS/WhatsApp providers, logistics aggregators, and accounting software."
  },
  {
    "q": "How is our data protected?",
    "a": "Data is encrypted in transit and at rest, access is controlled per role so staff only see what they need, and automated daily backups mean you can roll back to any point in the past 30 days."
  },
  {
    "q": "What support do we get after launch?",
    "a": "Support comes directly from the people who built the platform, with response times under two hours for critical bugs and continuous feature upgrades included in active subscription tiers."
  }
];

export default function ProductsPage() {
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
        <div className="w-full flex flex-col items-center mt-36 mb-16 xxxs:mt-20 xxxs:mb-8 xxs:mt-24 xxs:mb-10 sm:mt-28 sm:mb-12 lg:mt-32 xl:mt-36 xl:mb-16 2xl:mt-40 z-10"><div className="w-10/12 max-w-[860px] flex flex-col items-start text-left sm:items-center sm:text-center gap-3.5 sm:gap-4 xxxs:w-11/12 xxxs:gap-2.5"><div className="reveal-up " style={{ '--reveal-delay': '0s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}><div className="badge-glow self-start sm:self-auto flex flex-row justify-center gap-1.5 items-center py-1.5 px-3.5 sm:py-2 sm:px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs sm:text-sm lg:text-[12px] xl:text-sm 2xl:text-[16px] 2xl:px-6 2xl:py-4"><div className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes w-3.5 h-3.5 sm:w-3 sm:h-3 2xl:w-4 2xl:h-4 text-badgeText flex-shrink-0" aria-hidden="true"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg></div><p>BUILT BY US</p></div></div><div className="reveal-up " style={{ '--reveal-delay': '0.08s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}><h1 className="text-3xl xxs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-left sm:text-center">Here’s What We’ve Been <span className="bg-headingGradient text-transparent bg-clip-text font-semibold inline-block ml-1.5 sm:ml-2">Building</span></h1></div><div className="reveal-up " style={{ '--reveal-delay': '0.22999999999999998s', '--reveal-y': '25px', '--reveal-duration': '0.65s' }}><p className="font-bodyfont text-textDescription text-sm sm:text-lg lg:text-xl text-left sm:text-center max-w-[640px]">We build products around real problems and turn them into simple, thoughtful experiences people enjoy using.</p></div></div></div><section aria-label="Our Products" className="w-full flex flex-col items-center gap-5 xl:gap-6 2xl:gap-8 z-10 mb-28 xxxs:mb-16 sm:mb-20 lg:mb-24 xl:mb-28"><div className="stagger-container sl-product-grid w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-6 xl:max-w-[1200px] 2xl:max-w-[1440px] 2xl:gap-8" style={{ '--stagger-step': '0.18s', '--stagger-delay-children': '0.05s' }}><div className="h-full" style={{ '--reveal-y': '20px', '--stagger-index': '0' }}><div className="border border-border bg-cardBg group relative h-full rounded-[16px] xs:rounded-[18px] sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 xl:p-5 flex flex-col justify-between overflow-hidden gap-3 xs:gap-4 sm:flex-row md:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none"><div className="relative w-full aspect-[16/10] rounded-[12px] xs:rounded-[14px] sm:rounded-2xl sm:w-1/2 sm:aspect-[16/10] md:w-full md:aspect-[16/9.5] flex-shrink-0 overflow-hidden flex items-center justify-center bg-black/5 dark:bg-white/5"><img alt="Rentlyf" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(max-width: 640px) 92vw, (max-width: 768px) 46vw, (max-width: 1024px) 46vw, 560px" srcSet="/images/rentlyf.png 384w, /images/rentlyf.png 640w, /images/rentlyf.png 750w, /images/rentlyf.png 828w, /images/rentlyf.png 1080w, /images/rentlyf.png 1200w, /images/rentlyf.png 1920w, /images/rentlyf.png 2048w, /images/rentlyf.png 3840w" src="/images/rentlyf.png"/><div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-white text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span><span>PropTech SaaS</span></div></div><div className="flex flex-col justify-between gap-3.5 xs:gap-4 px-1 xs:px-1.5 pb-1 sm:pb-2 sm:w-1/2 md:w-full flex-1"><div className="flex flex-col gap-2.5 xs:gap-3"><div className="flex items-center justify-between gap-2"><h2 id="rentlyf" className="text-xl xs:text-2xl sm:text-3xl font-bold font-headingfont text-textHeading">Rentlyf</h2></div><p className="font-bodyfont text-textDescription text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed">Rentlyf is a mobile-first SaaS platform built for professional landlords to manage properties, tenants, rent, maintenance, and more from one simple place.</p></div><div className="w-full pt-1.5 xs:pt-2 mt-auto"><a href="https://www.rentlyf.app" target="_blank" rel="noopener noreferrer" className="group/btn w-full block" aria-label="Visit Rentlyf (opens in a new tab)"><div className="h-10 xs:h-11 sm:h-12 w-full flex items-center justify-between p-1.5 xs:p-1.5 sm:p-2 pl-3 xs:pl-4 sm:pl-5 rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200"><p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">Open Rentlyf</p><div className="w-7 h-7 xs:w-8 xs:h-8 rounded-md xs:rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 xs:w-4 xs:h-4 -rotate-45" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></a></div></div></div></div><div className="h-full" style={{ '--reveal-y': '20px', '--stagger-index': '1' }}><div className="border border-border bg-cardBg group relative h-full rounded-[16px] xs:rounded-[18px] sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 xl:p-5 flex flex-col justify-between overflow-hidden gap-3 xs:gap-4 sm:flex-row md:flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none"><div className="relative w-full aspect-[16/10] rounded-[12px] xs:rounded-[14px] sm:rounded-2xl sm:w-1/2 sm:aspect-[16/10] md:w-full md:aspect-[16/9.5] flex-shrink-0 overflow-hidden flex items-center justify-center bg-black/5 dark:bg-white/5"><img alt="Grocery Platform" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' }} sizes="(max-width: 640px) 92vw, (max-width: 768px) 46vw, (max-width: 1024px) 46vw, 560px" srcSet="/images/grocery.png 384w, /images/grocery.png 640w, /images/grocery.png 750w, /images/grocery.png 828w, /images/grocery.png 1080w, /images/grocery.png 1200w, /images/grocery.png 1920w, /images/grocery.png 2048w, /images/grocery.png 3840w" src="/images/grocery.png"/><div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg bg-white text-[#8356FB] text-[10px] sm:text-xs font-extrabold tracking-wide shadow-md z-10 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#8356FB]"></span><span>Turnkey Commerce Platform</span></div></div><div className="flex flex-col justify-between gap-3.5 xs:gap-4 px-1 xs:px-1.5 pb-1 sm:pb-2 sm:w-1/2 md:w-full flex-1"><div className="flex flex-col gap-2.5 xs:gap-3"><div className="flex items-center justify-between gap-2"><h2 id="grocery-platform" className="text-xl xs:text-2xl sm:text-3xl font-bold font-headingfont text-textHeading">Grocery Platform</h2></div><p className="font-bodyfont text-textDescription text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed">Our grocery platform helps stores manage products, orders, deliveries, and customers while giving shoppers a simple way to shop online.</p></div><div className="w-full pt-1.5 xs:pt-2 mt-auto"><a className="group/btn w-full block" aria-label="View details for Grocery Platform" href="/products/grocery-platform"><div className="h-10 xs:h-11 sm:h-12 w-full flex items-center justify-between p-1.5 xs:p-1.5 sm:p-2 pl-3 xs:pl-4 sm:pl-5 rounded-lg xs:rounded-xl bg-serviceBtnBg border border-border hover:border-[#8356FB] hover:bg-[#8356FB] text-textHeading hover:text-white transition-all duration-200"><p className="font-semibold text-xs xs:text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">See What&#x27;s Included</p><div className="w-7 h-7 xs:w-8 xs:h-8 rounded-md xs:rounded-lg bg-navTextHover flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-navTextHover transition-all duration-200 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5 xs:w-4 xs:h-4 -rotate-45" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div></div></a></div></div></div></div></div><div className="stagger-container sl-product-grid w-10/12 grid grid-cols-1 md:grid-cols-2 gap-5 xxxs:w-11/12 xs:w-10/12 sm:w-11/12 md:w-10/12 xl:gap-6 xl:max-w-[1200px] 2xl:max-w-[1440px] 2xl:gap-8" style={{ '--stagger-step': '0.18s', '--stagger-delay-children': '0.05s' }}></div></section>

        {/* Interactive FAQ Section */}
        <SubpageFAQ
          badgeText="Products FAQ"
          headingWord1="Frequently Asked"
          headingWord2="Questions"
          description="Everything you need to know about our pre-built platforms, licensing models, customization options, and enterprise support."
          faqs={productsFaqs}
        />
      </div>
    </div>
  );
}
