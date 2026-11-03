export const servicesData = {
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
    headline: "Turning Ideas Into Powerful Websites.",
    category: 'Full-Stack Web Engineering',
    tagline: 'Custom websites, high-speed web applications, and scalable digital platforms engineered with Next.js and React to engage visitors, convert leads, and accelerate business growth.',
    timeline: '2 to 6 Weeks',
    engagement: 'Fixed-Price or Monthly Sprint',
    deliverables: 'Custom Web Platform, Headless CMS, REST/GraphQL APIs, SEO Foundation',
    outcome: '98+ PageSpeed, 100% Mobile Responsive',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Full-Stack', 'SEO Architecture', 'Cloudflare'],
    image: '/images/SliderImg_1.webp',
    ctaText: 'Start a Project',
    ctaHref: '/contact?service=web-development&source=service-detail',
    quote: 'Modern web development is not just about writing code — it is about building a high-speed engine that commands authority, captivates users, and turns curious visitors into paying customers.',
    shortDesc: 'Fully responsive websites, custom web applications, and headless architectures engineered for top-tier speed, SEO dominance, and effortless scalability.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'custom-web-applications', title: 'Custom Web Applications' },
        { id: 'marketing-corporate-portals', title: 'Marketing & Corporate Portals' },
        { id: 'scalable-backend-apis', title: 'Scalable Backend & APIs' },
        { id: 'headless-cms-workflows', title: 'Headless CMS & Workflows' }
      ]},
      { id: 'technology', title: 'Technology' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            In today&apos;s digital ecosystem, your website is the primary storefront, credibility benchmark, and conversion engine for your business. Slow loading speeds, cluttered navigation, and fragile code cost companies up to <strong className="font-bold text-textHeading">50% of potential leads</strong> before a single conversation happens.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we approach web development as a precision engineering discipline. We build bespoke digital platforms that load under 1.2 seconds, adapt fluidly to every screen size, rank at the top of Google searches, and provide an intuitive editing experience for your marketing team.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Most business websites are hindered by outdated CMS templates, heavy WordPress plugins, and bloated page builders. When user traffic surges or business needs evolve, these off-the-shelf setups inevitably stall:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Sluggish performance:</strong> Heavy third-party scripts cripple Core Web Vitals, causing visitor drop-offs and low Google search rankings.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Brittle monolithic systems:</strong> Introducing custom workflows, calculators, or payment options requires months of risky refactoring.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Developer dependency:</strong> Marketing and sales teams are held hostage by external developers just to update copy, banners, or case studies.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Security and uptime risks:</strong> Vulnerable plugins and unmaintained database servers expose confidential customer inquiries to breaches and unexpected downtime.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'custom-web-applications',
          title: 'Custom Web Applications',
          desc: 'High-performance interactive web apps engineered with Next.js, React, and TypeScript. Featuring server-side rendering (SSR), incremental static regeneration (ISR), real-time client state updates, and micro-animations that deliver an app-like desktop and mobile experience.'
        },
        {
          id: 'marketing-corporate-portals',
          title: 'Marketing & Corporate Portals',
          desc: 'Immaculately branded corporate websites designed to establish category leadership. Clean visual hierarchies, clear value propositions, interactive product showcases, and high-converting inquiry funnels engineered to convert visitors into qualified sales pipeline.'
        },
        {
          id: 'scalable-backend-apis',
          title: 'Scalable Backend & APIs',
          desc: 'Secure, production-grade cloud services built using Node.js, Express, PostgreSQL, and Redis. Features include token-based authentication (JWT/OAuth), automated webhook processing, transactional email engines, and CRM integrations (HubSpot, Salesforce, Zoho).'
        },
        {
          id: 'headless-cms-workflows',
          title: 'Headless CMS & Workflows',
          desc: 'Modern, modular content management (Sanity, Strapi, or tailored admin dashboards) giving your internal team autonomous control over copy, blog posts, project case studies, and localized landing pages without writing a single line of code.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            We reject legacy website builders in favor of a modern, composable tech stack trusted by the world&apos;s leading technology enterprises:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Next.js & React:</strong> Uncompromising speed, automatic code-splitting, edge rendering, and flawless search engine crawlability.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Tailwind CSS:</strong> Highly performant, responsive utility styling with zero unneeded CSS payload delivered to the client.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Node.js, PostgreSQL & Prisma:</strong> Type-safe database management, resilient API pipelines, and bulletproof relational data modeling.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Cloudflare & Edge CDN:</strong> Worldwide SSL encryption, DDoS mitigation, and instantaneous global content caching.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: '01. Architecture Blueprint & Scoping',
          desc: 'We map out site architecture, content models, technical requirements, and target KPIs before committing to code.'
        },
        {
          step: '02. UI/UX Wireframing & Component Design',
          desc: 'Interactive Figma design systems and responsive prototypes to lock down brand aesthetics and user flows.'
        },
        {
          step: '03. Agile Engineering & Bi-Weekly Sprints',
          desc: 'Transparent progress with working staging links provided every sprint so you can test features in real-time.'
        },
        {
          step: '04. QA Testing, SEO Validation & Launch',
          desc: 'Exhaustive cross-device validation, Google Lighthouse 95+ performance audits, structured schema markup, and seamless domain migration.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Performance Guarantee:</strong> Consistently scores 95+ across desktop and mobile on Google PageSpeed Insights.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Structured Data & SEO:</strong> Pre-configured Schema.org JSON-LD tags, OpenGraph social cards, canonical tags, and XML sitemaps.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">30-Day Post-Launch Warranty:</strong> Dedicated technical support, bug fixing, and continuous monitoring included with every project.</li>
          </ul>
        </>
      )
    }
  },

  'app-development': {
    slug: 'app-development',
    title: 'App Development',
    headline: "Crafting Intuitive Mobile Apps People Love to Use.",
    category: 'Native & Cross-Platform Mobile Apps',
    tagline: 'High-performance mobile applications for iOS and Android, built for fluid user experience, real-time connectivity, offline-first reliability, and rapid scaling.',
    timeline: '4 to 8 Weeks',
    engagement: 'Turnkey Build or Dedicated Team',
    deliverables: 'iOS & Android Apps, App Store & Google Play Deployments, Admin Management Panel, Cloud APIs',
    outcome: '60 FPS Fluid UI, 99.9% Crash-Free Rate',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'Node.js', 'WebSockets', 'Push Notifications', 'Cross-Platform'],
    image: '/images/Sawaasheri.webp',
    ctaText: 'Start an App Project',
    ctaHref: '/contact?service=app-development&source=service-detail',
    quote: 'A great mobile app is not just a responsive website inside a wrapper — it feels tactile, instantaneous, and dependable even under spotty network conditions.',
    shortDesc: 'Native & cross-platform iOS and Android apps engineered with fluid 60 FPS interfaces, offline-first sync, push notifications, and robust cloud backends.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'cross-platform-apps', title: 'Cross-Platform iOS & Android Apps' },
        { id: 'real-time-cloud-sync', title: 'Real-Time Sync & WebSockets' },
        { id: 'admin-dashboards-analytics', title: 'Admin Dashboards & Control' },
        { id: 'store-approval-deploy', title: 'Store Approval & Submissions' }
      ]},
      { id: 'technology', title: 'Technology' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Mobile applications are the most intimate channel connecting your brand with your customers. Whether you are building an on-demand delivery platform, a field-service tool for industrial staff, or a consumer marketplace, your app needs to respond instantly to touch gestures and work flawlessly under varying network conditions.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we build mobile apps using <strong className="font-bold text-textHeading">React Native</strong> and <strong className="font-bold text-textHeading">Flutter</strong>. This allows businesses to deploy a single, unified codebase to both Apple App Store and Google Play Store, cutting build timelines in half while maintaining true 60 FPS native performance.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Developing mobile software requires balancing complex device ecosystems, fragmented screen sizes, battery constraints, and strict store guidelines:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Double development costs:</strong> Maintaining separate Swift (iOS) and Kotlin (Android) codebases doubles team costs and slows feature releases.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">App Store rejection hazards:</strong> Strict Apple App Store and Google Play compliance guidelines frequently delay launches by weeks.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Spotty offline handling:</strong> Most apps freeze or fail when a user moves through low-signal areas or underground spaces.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Battery and memory drainage:</strong> Inefficient state management and unoptimized network polling lead to 1-star reviews and uninstalls.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'cross-platform-apps',
          title: 'Cross-Platform iOS & Android Apps',
          desc: 'Single-codebase mobile applications built with React Native and Flutter. We utilize native bridges for haptics, geolocation, camera sensors, and biometric authentication (FaceID / Fingerprint) ensuring an authentic native feel.'
        },
        {
          id: 'real-time-cloud-sync',
          title: 'Real-Time Sync & WebSockets',
          desc: 'Low-latency data synchronization for live order tracking, chat messaging, push notifications, and live status updates using WebSockets, Firebase Cloud Messaging (FCM), and optimized background workers.'
        },
        {
          id: 'admin-dashboards-analytics',
          title: 'Admin Dashboards & Control',
          desc: 'Web-based command centers enabling your operations team to manage products, inspect customer accounts, track revenue, dispatch orders, and configure promotional campaigns without touching code.'
        },
        {
          id: 'store-approval-deploy',
          title: 'Store Approval & Submissions',
          desc: 'End-to-end management of developer accounts, provisioning profiles, privacy policies, automated build pipelines, and store review responses until your app is live and publicly downloadable.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Our mobile engineering architecture leverages modern cross-platform frameworks and enterprise cloud backends:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">React Native & Flutter:</strong> Maximum code reuse, hot reloading, and direct compilation to native ARM machine code.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Node.js & GraphQL / REST:</strong> Scalable microservices handling business logic, transaction safety, and high-concurrency requests.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">SQLite & WatermelonDB:</strong> High-performance local caching for sub-second offline queries and seamless data synchronization.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Firebase & Sentry:</strong> Real-time crash diagnostics, remote config, push notification pipelines, and performance telemetry.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: '01. Product Scope & Wireframes',
          desc: 'Defining core user stories, database models, third-party API dependencies, and mobile touch journeys.'
        },
        {
          step: '02. Mobile UI/UX & Native Prototyping',
          desc: 'Interactive Figma design systems adhering to Apple Human Interface Guidelines and Google Material Design 3.'
        },
        {
          step: '03. Feature Sprints & TestFlight Testing',
          desc: 'Weekly test builds delivered via TestFlight and Google Play Internal Testing for hands-on feedback.'
        },
        {
          step: '04. Security Audits & Store Publication',
          desc: 'Data encryption checks, API token security, app store metadata preparation, and public rollout.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Stability Benchmark:</strong> Guaranteed 99.9% crash-free session rate backed by real-time automated error tracking.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Store Approval Guarantee:</strong> We resolve all review feedback directly with Apple and Google reviewers until publication.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Post-Launch Support:</strong> 60 days of OS compatibility updates and performance monitoring included.</li>
          </ul>
        </>
      )
    }
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    headline: "Designing Beautiful Experiences That Drive Human Connection.",
    category: 'Product & Experience Design',
    tagline: 'Research-driven user interfaces, interactive Figma prototypes, and production-ready design systems that solve complex workflows and elevate digital brand perception.',
    timeline: '1 to 3 Weeks',
    engagement: 'Design Sprints or Full Product Design',
    deliverables: 'User Research & Personas, Wireframes, Figma Component Design System, High-Fidelity Interactive Prototypes, Dev Handoff',
    outcome: 'Pixel-Perfect Fidelity, 2x Conversion Readiness',
    tags: ['Figma', 'User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems', 'Micro-Interactions', 'Usability Testing'],
    image: '/images/Portfolio_1.webp',
    ctaText: 'Start a Design Sprint',
    ctaHref: '/contact?service=ui-ux-design&source=service-detail',
    quote: 'Good design is obvious. Great design is transparent. We craft interfaces that guide users effortlessly from curiosity to conversion.',
    shortDesc: 'Research-backed UI/UX design, interactive Figma prototypes, scalable design systems, and usability testing that drive conversion and delight users.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'user-research-wireframes', title: 'User Research & Wireframing' },
        { id: 'design-systems-tokens', title: 'Figma Design Systems & Tokens' },
        { id: 'interactive-prototyping', title: 'Interactive Clickable Prototypes' },
        { id: 'developer-ready-handoff', title: 'Developer-Ready Handoff' }
      ]},
      { id: 'technology', title: 'Tooling & Stack' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Software cannot succeed on features alone. When an interface is confusing, cluttered, or aesthetically dated, users abandon the product within seconds. Exceptional UI/UX design bridges the gap between deep technical functionality and intuitive human behavior.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we approach design scientifically. Through user research, customer journey mapping, iterative wireframes, and scalable design systems in Figma, we eliminate friction and build digital experiences that users love using daily.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Engineering without strategic product design results in costly rewrites, confused customers, and wasted development cycles:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Cognitive overload:</strong> Cluttered dashboards and unintuitive navigation bury key actions beneath layers of visual noise.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Inconsistent visual identity:</strong> Inconsistent buttons, disparate typography, and conflicting spacing dilute brand authority.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Developer friction:</strong> Handing imprecise static mockups to engineers leads to guesswork, layout bugs, and endless back-and-forth revisions.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Accessibility non-compliance:</strong> Low-contrast text and unoptimized interactive hit targets alienate users and violate WCAG regulations.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'user-research-wireframes',
          title: 'User Research & Wireframing',
          desc: 'In-depth competitor analysis, user persona definitions, and rapid low-fidelity wireframing to establish structural clarity and user flow validation before polishing visuals.'
        },
        {
          id: 'design-systems-tokens',
          title: 'Figma Design Systems & Tokens',
          desc: 'Comprehensive, scalable Figma component libraries complete with auto-layout, design tokens, dark/light themes, typography scales, iconography, and state variants (default, hover, active, disabled).'
        },
        {
          id: 'interactive-prototyping',
          title: 'Interactive Clickable Prototypes',
          desc: 'High-fidelity, clickable prototypes with realistic micro-animations and page transitions, enabling stakeholders and potential investors to experience the live product before development begins.'
        },
        {
          id: 'developer-ready-handoff',
          title: 'Developer-Ready Handoff',
          desc: 'Crystal-clear component documentation, responsive grid specs, exported SVG assets, CSS variables, and spacing guides that engineers can implement with 100% pixel fidelity.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            We use industry-standard design tools and testing frameworks:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Figma:</strong> Collaborative cloud design, multi-variant component systems, and real-time multiplayer prototyping.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Design Tokens:</strong> Platform-agnostic JSON tokens for spacing, typography, colors, and border radiuses.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Miro & FigJam:</strong> User persona journey mapping, site architecture flowcharts, and discovery workshops.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">WCAG 2.1 AA Contrast Tools:</strong> Rigorous accessibility testing to ensure readable typography and inclusive design.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: '01. Discovery & User Journey Mapping',
          desc: 'Uncovering pain points, auditing competitor apps, and defining ideal task completion paths for target personas.'
        },
        {
          step: '02. Low-Fidelity Wireframes',
          desc: 'Iterating rapidly on information hierarchy and layout structure to achieve complete alignment on content.'
        },
        {
          step: '03. High-Fidelity UI & Design Systems',
          desc: 'Applying brand visual styling, micro-interactions, typography, and building modular component systems in Figma.'
        },
        {
          step: '04. Usability Testing & Engineering Handoff',
          desc: 'Validating usability with real test users, refining interactive feedback, and preparing production-ready token specs.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">WCAG 2.1 AA Compliance:</strong> Accessible color contrasts, legible font scaling, and clear focus states.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">100% Componentized:</strong> Every button, card, input, and modal is a reusable Figma master component.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Developer Support:</strong> Direct design support during frontend implementation to resolve edge-case states.</li>
          </ul>
        </>
      )
    }
  },

  'video-editing': {
    slug: 'video-editing',
    title: 'Video Editing',
    headline: "Visual Stories That Captivate, Inspire, and Convert.",
    category: 'Video Production & Motion Graphics',
    tagline: 'High-retention promo videos, product walkthroughs, social media reels, and dynamic motion graphics tailored to grab attention, build recall, and drive conversions.',
    timeline: '3 to 7 Days',
    engagement: 'Per Video or Monthly Video Retainer',
    deliverables: '4K Master Exports, Multi-Platform Formats (9:16, 16:9, 1:1), Sound Design & SFX, Custom Motion Titles',
    outcome: '3x Higher Engagement, Platform-Native Pacing',
    tags: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics', 'Sound Design', 'Color Grading', 'Product Walkthroughs', 'Social Ad Creatives'],
    image: '/images/SliderImg_9.webp',
    ctaText: 'Start a Video Project',
    ctaHref: '/contact?service=video-editing&source=service-detail',
    quote: 'In a world of infinite content feeds, the first three seconds decide whether your message gets heard or scrolled past.',
    shortDesc: 'Product promo edits, dynamic motion graphics, sound design, color grading, and platform-specific video cuts tailored to capture attention.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'product-saas-demos', title: 'Product & SaaS Demos' },
        { id: 'high-retention-social-reels', title: 'High-Retention Social Ads & Reels' },
        { id: 'motion-graphics-titling', title: 'Motion Graphics & Dynamic Titles' },
        { id: 'cinematic-sound-color', title: 'Sound Design & Color Grading' }
      ]},
      { id: 'technology', title: 'Tooling & Software' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Video is by far the highest-converting medium across digital marketing. Whether you need a slick product demo for your homepage, a high-converting video ad for Instagram and YouTube, or an animated customer testimonial reel, professional pacing and visual polish make all the difference.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, our post-production pipeline combines cinematic storytelling, dynamic motion graphics, and punchy audio mastering. We cut videos engineered specifically to maintain high viewer retention and spark immediate action.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Raw footage and amateur editing rarely convert modern digital audiences:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Weak initial hook:</strong> Boring opening frames cause viewers to swipe away within the critical first two seconds.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Poor sound design:</strong> Muffled voice tracks, poorly balanced music, and absent sound effects make content feel cheap.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Generic templates:</strong> Cookie-cutter templates fail to communicate product subtleties and blur into competitor noise.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Aspect ratio mismatch:</strong> Forcing a 16:9 YouTube video into a 9:16 Instagram Reel or TikTok feed creates awkward crops and illegible text.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'product-saas-demos',
          title: 'Product & SaaS Demos',
          desc: 'High-definition screen recordings, 3D cursor zooms, interface highlights, and engaging callout text that explain complex features clearly and concisely in under 90 seconds.'
        },
        {
          id: 'high-retention-social-reels',
          title: 'High-Retention Social Ads & Reels',
          desc: 'Vertical 9:16 video ads engineered for Meta, Instagram Reels, TikTok, and YouTube Shorts. Incorporating kinetic captions, fast-paced jump cuts, and bold opening hooks that maximize watch time.'
        },
        {
          id: 'motion-graphics-titling',
          title: 'Motion Graphics & Dynamic Titles',
          desc: 'Bespoke animated lower thirds, animated logo intros/outros, graphic transition effects, and technical data visualizations created in Adobe After Effects.'
        },
        {
          id: 'cinematic-sound-color',
          title: 'Sound Design & Color Grading',
          desc: 'Studio-level voice track enhancement (noise removal, EQ, compression), curated royalty-free music licensing, subtle whoosh/impact sound effects, and professional color grading.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            We work exclusively with industry-standard post-production suites:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Adobe Premiere Pro:</strong> Non-linear editing, high-precision audio sync, and rapid multi-cam timeline curation.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Adobe After Effects:</strong> Advanced visual effects, kinetic typography, camera tracking, and custom animations.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">DaVinci Resolve:</strong> Industry-leading color grading, color space transforms, and film grain emulations.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">iZotope RX & Adobe Audition:</strong> Spectral audio repair, vocal clarity mastering, and acoustic balancing.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: '01. Creative Brief & Storyboard',
          desc: 'Aligning on target audience, platform requirements, core messaging hooks, and visual tone.'
        },
        {
          step: '02. Rough Cut & Narrative Assembly',
          desc: 'Selecting the strongest takes, pacing the story, and laying down initial music timing.'
        },
        {
          step: '03. Motion Graphics, Color & Audio Master',
          desc: 'Adding animated graphics, color grading, sound effects, dynamic captions, and brand overlays.'
        },
        {
          step: '04. Multi-Platform Export & Delivery',
          desc: 'Rendering ProRes and high-bitrate MP4 masters customized for web, YouTube, and mobile social channels.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Pristine Quality:</strong> Rendered in pristine 4K 60fps or high-bitrate 1080p with zero artifacting.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">100% Commercial Licensing:</strong> All background music tracks and sound effects include worldwide commercial clearance.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Fast Turnaround:</strong> First cut delivered within 72 hours for standard promo projects.</li>
          </ul>
        </>
      )
    }
  },

  'branding': {
    slug: 'branding',
    title: 'Branding & Identity',
    headline: "Building Distinctive Brands That Command Market Authority.",
    category: 'Brand Identity & Strategy',
    tagline: 'Distinctive, timeless visual identities that command authority, inspire customer trust, and set your business apart across digital, print, and physical touchpoints.',
    timeline: '2 to 4 Weeks',
    engagement: 'Complete Identity Sprint',
    deliverables: 'Primary & Secondary Logo Suite, Color Palette, Typography Hierarchy, Comprehensive Brand Guidelines, Print & Digital Assets',
    outcome: 'Unified Brand Recognition across Print & Digital',
    tags: ['Logo Design', 'Visual Identity', 'Typography', 'Brand Guidelines', 'Vector Assets', 'Color Systems', 'Print & Digital'],
    image: '/images/Portfolio_4.webp',
    ctaText: 'Start Brand Project',
    ctaHref: '/contact?service=branding&source=service-detail',
    quote: 'Your brand is not just what you say about yourself — it is the immediate emotional shorthand customers associate with your standard of work.',
    shortDesc: 'Logo suites, color palettes, typographic systems, brand voice guidelines, and print/digital collateral designed to make your business unmistakable.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'logo-mark-suite', title: 'Logo System & Brand Mark Suite' },
        { id: 'color-typography-systems', title: 'Color Palette & Typography' },
        { id: 'brand-guidelines-book', title: 'Complete Brand Book & Guidelines' },
        { id: 'collateral-digital-assets', title: 'Digital & Print Collateral' }
      ]},
      { id: 'technology', title: 'Tooling & Standards' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            A great brand is the most durable asset a business can own. In competitive markets where dozens of companies offer similar services, visual distinctiveness and consistency determine who gets chosen, remembered, and recommended.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we build identity systems grounded in strategic positioning. We help emerging startups and established enterprises discover their unique visual signature through memorable logos, bespoke typographic hierarchies, harmonized color schemes, and rigorous brand rulebooks.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Many businesses struggle with fragmented visual identities assembled piecemeal over years:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Generic stock logos:</strong> Overused icons from stock marketplaces fail to communicate proprietary value and invite legal trademark conflicts.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Visual inconsistency:</strong> When social graphics, website pages, and printed invoices all use different fonts and colors, customer trust erodes.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Scaling breakdowns:</strong> Logos that look fine on a business card become illegible when scaled down to a 16px website favicon or mobile app icon.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">No brand rules:</strong> Internal team members and external agencies guess how to apply assets, resulting in distorted proportions and mismatched aesthetics.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'logo-mark-suite',
          title: 'Logo System & Brand Mark Suite',
          desc: 'Primary logo, secondary lockups, responsive favicons, and sub-marks engineered to scale from a giant billboard down to an email signature without loss of clarity.'
        },
        {
          id: 'color-typography-systems',
          title: 'Color Palette & Typography',
          desc: 'Curated primary, secondary, and accent color palettes with exact HEX, RGB, CMYK, and Pantone specifications, paired with web-safe typography pairings for digital and editorial applications.'
        },
        {
          id: 'brand-guidelines-book',
          title: 'Complete Brand Book & Guidelines',
          desc: 'An authoritative 25+ page brand guidelines PDF covering logo clear zones, minimum size requirements, improper usages, tone of voice, imagery styles, and iconography guidelines.'
        },
        {
          id: 'collateral-digital-assets',
          title: 'Digital & Print Collateral',
          desc: 'Ready-to-use business cards, letterheads, social media templates (LinkedIn, X, Instagram), presentation slide decks, and vector icon kits.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Our identity work adheres to international graphic design standards:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Adobe Illustrator:</strong> Precision vector curve construction, mathematical symmetry, and infinite scalability.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Pantone Matching System:</strong> Exact ink formulation for high-end print, packaging, and commercial fabrication.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Figma & Adobe InDesign:</strong> Editorial layout of brand books, corporate collaterals, and digital design tokens.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: '01. Brand Discovery & Positioning',
          desc: 'Analyzing your industry, competitive landscape, core values, and audience perceptions.'
        },
        {
          step: '02. Concept Moodboards & Directions',
          desc: 'Exploring 3 distinct conceptual directions with color palettes, typography moods, and mark sketches.'
        },
        {
          step: '03. Vector Crafting & Application Mockups',
          desc: 'Refining the chosen direction, perfecting vector geometry, and testing applications on mockups.'
        },
        {
          step: '04. Asset Packaging & Master Delivery',
          desc: 'Delivering comprehensive vector packs (AI, EPS, SVG, PDF, PNG) organized into clear folders.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Full Commercial Ownership:</strong> 100% intellectual property rights transferred upon project completion.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Print & Web Ready:</strong> Every asset is provided in RGB, CMYK, vector, and transparent raster formats.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Brand Continuity:</strong> Seamless integration with our web and app development teams for launch.</li>
          </ul>
        </>
      )
    }
  },

  'mvp-development': {
    slug: 'mvp-development',
    title: 'MVP Development',
    headline: "From Concept to Market-Ready MVP in Just 14 Days.",
    category: 'Rapid Startup Prototyping',
    tagline: 'Launch your software concept into a fully functioning, market-ready MVP in just 14 days, complete with authentication, payments, database, and analytics.',
    timeline: '14 Days Guaranteed',
    engagement: 'Fixed-Scope Sprint',
    deliverables: 'Live Web/Mobile App, User Auth, Database & Storage, Payment Gateway Integration, Admin Panel',
    outcome: 'Production-Grade Infrastructure, Investor-Ready',
    tags: ['14-Day Sprint', 'Next.js', 'Supabase', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Investor-Ready', 'Rapid Prototyping'],
    image: '/images/SliderImg_6.webp',
    ctaText: 'Book MVP Strategy Call',
    ctaHref: '/book',
    quote: 'The fastest way to validate a product hypothesis is not a PowerPoint presentation — it is putting a functioning software tool into users hands.',
    shortDesc: 'Turn your concept into a live product in just 14 days with our dedicated MVP sprint team, complete with auth, database, and payments.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'core-feature-engine', title: 'Core Feature Engine & Logic' },
        { id: 'secure-authentication-database', title: 'Authentication & Database' },
        { id: 'payments-billing', title: 'Payment Gateways & Billing' },
        { id: 'analytics-investor-metrics', title: 'Analytics & Launch Monitoring' }
      ]},
      { id: 'technology', title: 'Technology' },
      { id: 'our-process', title: 'The 14-Day Timeline' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            The biggest risk for any early-stage startup or new enterprise venture is building the wrong product for months without real customer validation. Traditional software agencies take 6 to 9 months and tens of thousands of dollars before shipping version 1.0.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, our dedicated <strong className="font-bold text-textHeading">14-Day MVP Sprint</strong> cuts through analysis paralysis. We extract your single most critical value proposition, build it with production-grade technology, and deploy it to real users so you can test, charge, and raise capital with confidence.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Founders frequently trap themselves in bloated feature roadmaps that delay shipping:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Scope bloat:</strong> Trying to build every conceivable feature upfront delays user feedback and burns runway.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Disposable throwaway code:</strong> Using cheap no-code tools creates platforms that crash when the first 500 concurrent users sign up.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Unprepared for monetization:</strong> Delaying billing logic prevents founders from testing real willingness to pay.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Lack of instrumentation:</strong> Shipping without event tracking leaves founders blind to why users drop off.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'core-feature-engine',
          title: 'Core Feature Engine & Logic',
          desc: 'Laser-focused engineering on the single primary workflow that delivers immediate value to your users, avoiding secondary clutter.'
        },
        {
          id: 'secure-authentication-database',
          title: 'Authentication & Database',
          desc: 'Turnkey user authentication (Google, GitHub, Magic Links, Passwords) and production PostgreSQL schemas hosted on Supabase or AWS RDS.'
        },
        {
          id: 'payments-billing',
          title: 'Payment Gateways & Billing',
          desc: 'Full Stripe / Razorpay checkout integration with subscription recurring billing, invoice generation, and customer portal management.'
        },
        {
          id: 'analytics-investor-metrics',
          title: 'Analytics & Launch Monitoring',
          desc: 'PostHog / Google Analytics integration tracking user signups, retention funnels, and error monitoring so you have clear data for investors.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            We use modern, highly scalable building blocks that do not need to be rewritten after launch:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Next.js 14 App Router:</strong> Blazing-fast full-stack framework with built-in server actions and edge API endpoints.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Supabase & PostgreSQL:</strong> Real-time subscriptions, Row-Level Security (RLS), and automated cloud backups.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Stripe / Razorpay:</strong> Industry-standard payment gateways for one-time payments and recurring SaaS billing.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Tailwind CSS & Shadcn UI:</strong> Clean, accessible, modern design components customized to your brand.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Days 1–3: Scope Lockdown & Wireframes',
          desc: 'We define the single core user path, user stories, schema design, and lock the sprint scope.'
        },
        {
          step: 'Days 4–7: UI Components & Frontend Build',
          desc: 'Building responsive pages, forms, dashboard views, and connecting interactive client states.'
        },
        {
          step: 'Days 8–11: Backend, Database & Payment Wiring',
          desc: 'Hooking up authentication, database CRUD operations, email notifications, and checkout flows.'
        },
        {
          step: 'Days 12–14: QA Testing, Analytics & Live Deployment',
          desc: 'End-to-end payment testing, bug fixes, analytics setup, custom domain deployment, and live handoff.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">14-Day Delivery Guarantee:</strong> Fixed deadline and fixed budget with zero unexpected scope creep.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Clean Architecture:</strong> 100% clean TypeScript code that your future in-house developers can easily extend.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Investor-Ready:</strong> Production deployment ready for angel and VC product demonstrations.</li>
          </ul>
        </>
      )
    }
  }
  ,
  'software-development': {
    slug: 'software-development',
    title: 'Software Development',
    headline: "Architecting Custom Software That Scales Your Business.",
    category: 'Enterprise Engineering & Custom Systems',
    tagline: 'Custom cloud software, mission-critical internal automation, and scalable microservices architectures engineered to streamline operations, cut overhead, and accelerate enterprise growth.',
    timeline: '4 to 12 Weeks',
    engagement: 'Fixed-Scope Sprints or Dedicated Engineering Team',
    deliverables: 'Custom Software Architecture, Secure REST/GraphQL APIs, Role-Based Access Dashboards, Automated CI/CD Pipelines, Full Documentation',
    outcome: '99.99% Uptime, High-Concurrency Fault Tolerance',
    tags: ['Node.js', 'Next.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Microservices', 'System Architecture', 'Enterprise Security'],
    image: '/images/SliderImg_2.webp',
    ctaText: 'Build Custom Software',
    ctaHref: '/contact?service=software-development&source=service-detail',
    quote: 'Off-the-shelf software forces your operations into an inflexible template. Custom software molds precisely to your business logic and unlocks unmatched operational leverage.',
    shortDesc: 'Bespoke enterprise applications, secure backends, and cloud microservices built to automate complex workflows and scale seamlessly.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'custom-enterprise-software', title: 'Custom Enterprise Software' },
        { id: 'cloud-native-microservices', title: 'Cloud-Native & Microservices' },
        { id: 'database-systems-architecture', title: 'Database & Systems Architecture' },
        { id: 'devops-continuous-delivery', title: 'DevOps & Continuous Delivery' }
      ]},
      { id: 'technology', title: 'Technology' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            As businesses scale, generic off-the-shelf software tools inevitably create operational silos, expensive recurring licensing fees, and fragile manual workarounds. True competitive dominance requires software tailored precisely to your specific business logic.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we architect and engineer robust, enterprise-grade software. From high-throughput transaction engines and internal ERPs to distributed cloud APIs, we deliver mission-critical software built for speed, resilience, and longevity.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Scaling operations without bespoke software introduces compounding risks:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Tool fragmentation:</strong> Disconnected SaaS subscriptions creating data silos and communication breakdowns.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Manual bottlenecks:</strong> Repetitive spreadsheet processes that introduce human error and slow response times.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Security vulnerabilities:</strong> Outdated or unvetted tools that risk customer data and compliance breaches.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'custom-enterprise-software',
          title: 'Custom Enterprise Portals & ERPs',
          desc: 'High-security dashboards, role-based access management, internal workflow automations, and operational controls designed specifically for your team.'
        },
        {
          id: 'cloud-native-microservices',
          title: 'Cloud-Native Microservices & APIs',
          desc: 'Decoupled, containerized backend services built with Node.js and Python that scale horizontally under peak traffic spikes without downtime.'
        },
        {
          id: 'database-systems-architecture',
          title: 'Database & Systems Architecture',
          desc: 'Resilient PostgreSQL, Redis, and event-driven data pipelines engineered for high-concurrency read/write operations and sub-50ms query responses.'
        },
        {
          id: 'devops-continuous-delivery',
          title: 'Automated CI/CD & DevOps Infrastructure',
          desc: 'Zero-downtime deployment pipelines using Docker, GitHub Actions, and AWS infrastructure with automated testing and continuous monitoring.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            We build software using battle-tested, high-performance technologies:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Languages & Frameworks:</strong> TypeScript, Node.js, Python, Next.js, and Golang for performance-critical services.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Databases:</strong> PostgreSQL, Redis caching, MongoDB, and ClickHouse for analytical workloads.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Cloud & DevOps:</strong> Docker, Kubernetes, AWS (ECS, Lambda, RDS), and Cloudflare Enterprise edge networks.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Security & Protocols:</strong> OAuth2, JWT, TLS 1.3, SOC2 compliance standards, and end-to-end data encryption.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Phase 1: Architecture Blueprint & Data Modeling',
          desc: 'We map system entities, write API specifications, define cloud topology, and establish strict latency benchmarks.'
        },
        {
          step: 'Phase 2: Core Engineering Sprints',
          desc: 'Iterative 2-week agile sprints delivering test-covered modules, backend business logic, and intuitive admin interfaces.'
        },
        {
          step: 'Phase 3: Security Hardening & Load Testing',
          desc: 'Simulating high-concurrency loads, automated penetration testing, database index optimization, and vulnerability auditing.'
        },
        {
          step: 'Phase 4: Deployment & Enterprise SLA Support',
          desc: 'Production deployment with zero downtime, real-time APM telemetry, runbooks, and 24/7 technical monitoring.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Enterprise Code Quality:</strong> Modular, thoroughly documented TypeScript code adhering to strict SOLID principles.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Data Privacy & Sovereignty:</strong> Complete compliance with international data security regulations and automated daily backups.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Comprehensive SLA:</strong> Guaranteed uptime agreements and rapid response escalation protocols.</li>
          </ul>
        </>
      )
    }
  },

  'political-campaign-management': {
    slug: 'political-campaign-management',
    title: 'Political Campaign Management',
    headline: "Winning Elections Through Data, Narrative, and Grassroots Precision.",
    category: 'Strategic Voter Intelligence & Constituency Outreach',
    tagline: 'Comprehensive voter demographic analytics, booth-level volunteer management platforms, digital narrative war rooms, and targeted multi-channel outreach engineered for electoral victory.',
    timeline: 'Campaign Sprints or Full Election Cycle',
    engagement: 'End-to-End Campaign Retainer & War Room Setup',
    deliverables: 'Constituency Demographic Profiling, Booth Volunteer Management Software, Digital Social Media War Room, WhatsApp Broadcast Infrastructure, Real-Time Sentiment Dashboards',
    outcome: 'Maximized Voter Reach, Coordinated Booth-Level Turnout',
    tags: ['Voter Analytics', 'Booth-Level Software', 'Constituency Mapping', 'Social Media War Room', 'Ground Mobilization', 'Sentiment Analysis', 'Crisis Management'],
    image: '/images/SliderImg_8.webp',
    ctaText: 'Strategize Campaign',
    ctaHref: '/contact?service=political-campaign-management&source=service-detail',
    quote: 'Elections are decided by data, speed, and narrative authority. We equip leaders with the technological edge to organize, mobilize, and win.',
    shortDesc: 'Data-driven voter profiling, booth-level software systems, and high-impact digital campaign war rooms engineered to win elections.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'constituency-voter-analytics', title: 'Constituency & Voter Analytics' },
        { id: 'booth-management-software', title: 'Booth Management Software' },
        { id: 'digital-war-room-narrative', title: 'Digital War Room & Narrative' },
        { id: 'ground-mobilization-outreach', title: 'Ground Mobilization & Outreach' }
      ]},
      { id: 'technology', title: 'Technology' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Modern electoral campaigns are no longer won solely through traditional public rallies. Success requires granular data analysis, rapid digital sentiment response, and coordinated booth-level voter mobilization that operates with military precision.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we provide leaders and political organizations with proprietary campaign software, data analytics engines, and 24/7 digital war room management to command the narrative and ensure turnout on election day.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Traditional campaigns frequently struggle with disconnected operational challenges:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Blind outreach:</strong> Generic advertising that fails to address ward-specific and demographic-specific voter grievances.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Booth coordination gaps:</strong> Volunteer miscommunication leading to low turnout in key swing booths on election day.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Slow narrative counters:</strong> Inability to rebut viral misinformation and competitor propaganda within the critical first two hours.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'constituency-voter-analytics',
          title: 'Constituency Demographic Profiling',
          desc: 'Granular voter data mapping across booths, past voting trends, key community influencers, and localized issue tracking.'
        },
        {
          id: 'booth-management-software',
          title: 'Mobile Booth Worker Application',
          desc: 'Lightweight mobile app for booth volunteers providing verified voter lists, real-time turnout tracking, and instant coordinator alerts.'
        },
        {
          id: 'digital-war-room-narrative',
          title: '24/7 Digital Narrative War Room',
          desc: 'Real-time social listening across Twitter/X, Instagram, and local news channels with rapid counter-narrative production and distribution.'
        },
        {
          id: 'ground-mobilization-outreach',
          title: 'Targeted Broadcast & SMS Outreach',
          desc: 'Compliant, localized broadcast communication delivering manifestos, video endorsements, and rally schedules directly to target voter groups.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Our election technology stack is built for high security, data confidentiality, and speed:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Voter Analytics Engine:</strong> Geospatial constituency mapping, demographic clustering, and turnout propensity models.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Booth Worker Mobile App:</strong> Offline-first React Native architecture with encrypted booth list synchronization.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Social Listening War Room:</strong> Automated sentiment monitoring and trending keyword alert engines.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Security & Privacy:</strong> Zero-knowledge encryption, air-gapped backups, and strict data confidentiality protocols.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Phase 1: Constituency Audit & Data Ingestion',
          desc: 'We clean electoral rolls, analyze past polling booth margins, and map localized demographics.'
        },
        {
          step: 'Phase 2: Narrative Strategy & War Room Mobilization',
          desc: 'Formulating core campaign talking points, setting up the digital creative studio, and briefing field volunteers.'
        },
        {
          step: 'Phase 3: Hyper-Targeted Digital & Grassroots Outreach',
          desc: 'Deploying high-production video content, ward-level broadcasts, and coordinated booth-by-booth volunteer meetings.'
        },
        {
          step: 'Phase 4: Election Day Turnout Execution (GOTV)',
          desc: 'Real-time booth turnout monitoring, mobile coordination for swing voters, and emergency communications.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">100% Strict Confidentiality:</strong> Absolute non-disclosure agreements with isolated infrastructure for every campaign.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Electoral Compliance:</strong> Adherence to Election Commission guidelines, expenditure tracking, and advertising disclosures.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Rapid Response Time:</strong> Counter-narrative production and distribution deployed within under 45 minutes.</li>
          </ul>
        </>
      )
    }
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    headline: "Data-Driven Marketing That Compounds Your Revenue.",
    category: 'Omnichannel Performance & Revenue Growth',
    tagline: 'High-ROI paid advertising, search engine dominance, high-impact social media, and conversion rate optimization designed to generate qualified pipeline and scale top-line revenue.',
    timeline: 'Ongoing Growth Retainers & Sprints',
    engagement: 'Performance Marketing Retainer or Growth Acceleration Sprint',
    deliverables: 'Multi-Channel Strategy, High-ROAS Google & Meta Ads, Technical SEO Architecture, High-Retention Social Content, Real-Time Conversion Dashboards',
    outcome: '3.5x+ Average ROAS, Predictable Customer Acquisition',
    tags: ['Google Ads', 'Meta Ads', 'Technical SEO', 'Social Media Optimization', 'Conversion Rate (CRO)', 'Performance Marketing', 'Lead Generation'],
    image: '/images/SliderImg_4.webp',
    ctaText: 'Scale Your Growth',
    ctaHref: '/contact?service=digital-marketing&source=service-detail',
    quote: 'Marketing without measurement is gamble. We unite deep buyer psychology with granular data analytics to build high-performance customer acquisition engines.',
    shortDesc: 'Omnichannel digital marketing strategies combining organic search dominance, high-converting paid media, and social brand amplification.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'search-engine-optimization', title: 'Search Engine Optimization (SEO)' },
        { id: 'paid-media-management', title: 'Paid Media & Ads Management' },
        { id: 'social-media-amplification', title: 'Social Media Optimization (SMO)' },
        { id: 'conversion-rate-cro', title: 'Conversion Rate Optimization (CRO)' }
      ]},
      { id: 'technology', title: 'Marketing Stack & Analytics' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            In today&apos;s hyper-competitive digital marketplace, having an exceptional product or service is meaningless if your target audience never discovers you. Fragmented campaigns and vanity metrics waste marketing budgets without producing actual revenue.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, our digital marketing division operates as a growth lab. We build omnichannel acquisition funnels that combine search engine optimization, precision paid media, and viral social content to transform passive scrollers into paying, repeat customers.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Common marketing pitfalls that drain budgets without yielding return:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Chasing vanity metrics:</strong> Celebrating likes and impressions while qualified lead volume remains stagnant.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Unoptimized ad spend:</strong> Burning money on broad keyword bids and poorly targeted social demographics with zero retargeting.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Leaky conversion funnels:</strong> Driving traffic to slow, confusing landing pages that fail to convert visitors into booked calls.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'search-engine-optimization',
          title: 'Search Engine Optimization (SEO)',
          desc: 'Technical SEO audits, semantic keyword mapping, speed optimization, and authority link acquisition to dominate top Google search rankings.'
        },
        {
          id: 'paid-media-management',
          title: 'Paid Ads Management (PPC & Meta)',
          desc: 'Precision targeted Google Search, Meta Ads, and LinkedIn campaigns engineered to maximize ROAS and minimize cost per acquisition.'
        },
        {
          id: 'social-media-amplification',
          title: 'Social Media Optimization (SMO)',
          desc: 'High-impact brand storytelling, viral short-form video reels, and community engagement protocols across Instagram, LinkedIn, and YouTube.'
        },
        {
          id: 'conversion-rate-cro',
          title: 'Conversion Rate Optimization (CRO)',
          desc: 'Landing page behavioral heatmaps, rigorous A/B copy experiments, and checkout funnel optimization to squeeze maximum value from every click.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            We employ modern marketing intelligence, attribution, and analytics tools:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Paid Ad Platforms:</strong> Google Ads (Search, Performance Max, Display, YouTube), Meta Ads Manager, LinkedIn Campaign Manager.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">SEO & Research:</strong> Ahrefs, SEMrush, Google Search Console, Screaming Frog, and Schema App.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Attribution & Analytics:</strong> Google Analytics 4 (GA4), PostHog, Hotjar, and Meta Conversions API (CAPI).</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Creative Production:</strong> Figma, Adobe Creative Cloud, CapCut Pro, and proprietary dynamic creative testing frameworks.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Month 1: Growth Audit & Channel Blueprint',
          desc: 'Full technical audit of existing ad accounts, SEO health, conversion funnels, and competitor positioning.'
        },
        {
          step: 'Month 2: High-Velocity Creative & Campaign Launch',
          desc: 'Deploying high-converting landing pages, setting up conversion tracking APIs, and launching targeted ad angles.'
        },
        {
          step: 'Month 3: Data-Driven Optimization & Pruning',
          desc: 'Aggressively cutting low-performing ads, doubling down on profitable audience segments, and scaling organic keywords.'
        },
        {
          step: 'Month 4+: Aggressive Scaling & Revenue Compounding',
          desc: 'Expanding into new lookalike segments, cross-channel retargeting, and building long-term search dominance.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Transparent Live Reporting:</strong> Real-time Looker Studio dashboard tracking spend, conversions, and exact customer acquisition costs.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Zero Account Hostage:</strong> You own 100% of your ad accounts, pixels, analytics data, and creative assets at all times.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Continuous Experimentation:</strong> Weekly creative refreshes and systematic hypothesis testing to defeat ad fatigue.</li>
          </ul>
        </>
      )
    }
  },

  'digital-marketing/seo': {
    slug: 'digital-marketing/seo',
    title: 'Search Engine Optimization (SEO)',
    headline: "Dominating Google Search Where High-Intent Buyers Look.",
    category: 'Organic Search & Technical Authority',
    tagline: 'Technical SEO excellence, semantic search architecture, authoritative backlink acquisition, and high-intent content strategy engineered to rank #1 on Google and capture compounding organic traffic.',
    timeline: '3 to 6 Months Growth Trajectory',
    engagement: 'Monthly SEO Growth Retainer',
    deliverables: 'Comprehensive Technical SEO Audit, Core Web Vitals Optimization, Semantic Keyword Opportunity Map, Schema Markup, High-Authority Link Building, Monthly Performance Reports',
    outcome: 'Page 1 Google Rankings, Compounding Organic Search Leads',
    tags: ['Technical SEO', 'Keyword Strategy', 'Core Web Vitals', 'On-Page Optimization', 'Backlink Acquisition', 'Schema Markup', 'Google Search Console'],
    image: '/images/SliderImg_5.webp',
    ctaText: 'Dominate Google Search',
    ctaHref: '/contact?service=seo&source=service-detail',
    quote: 'The best place to hide a dead body is on the second page of Google search results. We make sure your business commands the top spot where actual buyers search.',
    shortDesc: 'Data-driven technical SEO, structured data, high-intent keyword mapping, and authority backlinks that turn search into your most profitable revenue channel.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'technical-seo-architecture', title: 'Technical SEO Architecture' },
        { id: 'keyword-intent-mapping', title: 'Keyword & Content Mapping' },
        { id: 'authority-link-building', title: 'Authority Link Building' },
        { id: 'local-seo-conversions', title: 'Local & National Ranking' }
      ]},
      { id: 'technology', title: 'SEO Tooling & Diagnostics' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Organic search is the only digital marketing channel that compounds in value over time. Unlike paid ads that shut off the second your daily budget runs out, a top Google ranking generates high-intent customer inquiries day and night at zero marginal cost per click.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, we practice algorithmic, white-hat SEO. We optimize website code, structure content for Google’s semantic AI algorithms, and secure genuine editorial backlinks that establish undisputed industry authority.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Why most websites struggle to rank despite publishing regular content:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Crawlability & indexing barriers:</strong> Poor site architecture and bloated JavaScript preventing Google bots from properly reading key pages.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Wrong keyword targeting:</strong> Ranking for informational queries that attract students rather than high-intent transactional terms used by paying buyers.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Weak backlink profile:</strong> Lack of domain authority and spammy automated links that trigger algorithmic penalties.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'technical-seo-architecture',
          title: 'Full Technical SEO & Core Web Vitals',
          desc: 'Fixing crawl errors, redirect loops, XML sitemaps, canonical tags, and optimizing mobile PageSpeed to secure 95+ Core Web Vitals scores.'
        },
        {
          id: 'keyword-intent-mapping',
          title: 'Transactional Keyword & Content Strategy',
          desc: 'Mapping high-value search queries with clear commercial intent, crafting structured pillar pages, and implementing JSON-LD schema markup.'
        },
        {
          id: 'authority-link-building',
          title: 'White-Hat Editorial Backlink Acquisition',
          desc: 'Securing genuine, high-DA backlinks from relevant industry publications, authoritative tech blogs, and digital news portals.'
        },
        {
          id: 'local-seo-conversions',
          title: 'Local SEO & Google Business Optimization',
          desc: 'Optimizing local map pack rankings, NAP consistency, local citation building, and review generation workflows.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Our search diagnostics and analytics toolkit:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Crawling & Diagnostics:</strong> Screaming Frog SEO Spider, Sitebulb, and Google Search Console.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Competitive Intelligence:</strong> Ahrefs, SEMrush, Moz Pro, and SurferSEO.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Structured Data:</strong> Schema.org JSON-LD microdata, Open Graph protocols, and Rich Snippet generators.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Performance Monitoring:</strong> Lighthouse CI, Google Search Console, and custom Looker keyword rank tracking.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Month 1: Deep Technical Audit & Code Clean-Up',
          desc: 'Resolving indexing errors, fixing broken redirects, standardizing URL taxonomies, and implementing structured schema.'
        },
        {
          step: 'Month 2: On-Page Optimization & Pillar Content',
          desc: 'Rewriting key landing page titles, meta descriptions, H1-H3 headings, and creating authoritative service pillar pages.'
        },
        {
          step: 'Month 3: Authority Building & Link Outreach',
          desc: 'Digital PR campaigns, thought leadership guest articles, and securing contextual, high-tier editorial backlinks.'
        },
        {
          step: 'Month 4+: Compounding Rank Gains & Conversion Tuning',
          desc: 'Expanding internal linking hubs, monitoring SERP changes, and fine-tuning on-page calls to action to maximize inquiry rates.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">100% White-Hat Practices:</strong> No black-hat PBNs or link farms; strictly sustainable methods that withstand Google algorithm updates.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Transparent Weekly Tracking:</strong> Daily keyword rank positions, organic click impressions, and conversion goals sent directly to you.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Technical Integrity:</strong> We optimize your existing website without breaking layouts, design styling, or brand aesthetics.</li>
          </ul>
        </>
      )
    }
  },

  'digital-marketing/social-media-optimization': {
    slug: 'digital-marketing/social-media-optimization',
    title: 'Social Media Optimization (SMO)',
    headline: "Transforming Social Feeds Into Magnetic Brand Communities.",
    category: 'Social Brand Amplification & Viral Growth',
    tagline: 'High-impact visual creative, strategic viral short-form video pacing, community engagement systems, and executive profile branding across LinkedIn, Instagram, X, and YouTube.',
    timeline: 'Ongoing Monthly Retainers',
    engagement: 'Monthly Social Media Strategy & Content Retainer',
    deliverables: 'Profile Branding Overhaul, Monthly Content Production Calendar, High-Retention Reels & Carousels, Community Management, Monthly Growth Analytics',
    outcome: '4x Organic Social Reach, Highly Engaged Brand Community',
    tags: ['Instagram Growth', 'LinkedIn Thought Leadership', 'Community Management', 'Reels Strategy', 'Social Branding', 'Content Systems', 'Viral Distribution'],
    image: '/images/SliderImg_6.webp',
    ctaText: 'Elevate Your Socials',
    ctaHref: '/contact?service=social-media-optimization&source=service-detail',
    quote: 'People don’t do business with anonymous corporate logos; they do business with brands they recognize, respect, and connect with daily.',
    shortDesc: 'Strategic content calendars, viral short-form video assets, and active community protocols designed to scale organic social influence.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'visual-identity-profile-branding', title: 'Profile & Visual Identity Branding' },
        { id: 'high-retention-content-engine', title: 'High-Retention Reels & Carousels' },
        { id: 'linkedin-executive-branding', title: 'Executive & B2B Thought Leadership' },
        { id: 'community-nurture-outreach', title: 'Community Management & Inbound Nurturing' }
      ]},
      { id: 'technology', title: 'Creative Stack & Analytics' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Social media platforms have evolved into the primary research tool for modern consumers and B2B buyers. An outdated feed, inconsistent posting schedule, or low-effort stock imagery instantly erodes customer trust before they even look at your website.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, our SMO team builds cohesive, high-retention social content engines. From viral Instagram Reels and insightful LinkedIn carousels to proactive community engagement, we build brand authority that converts passive followers into enthusiastic brand advocates.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Why standard social media efforts often fail to generate business results:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Generic filler posts:</strong> Posting meaningless motivational quotes or stock photos that damage brand perception.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Inconsistent posting cadence:</strong> Algorithms penalize irregular posting schedules, causing organic reach to plummet.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Ignoring DMs and comments:</strong> Failing to engage in the comments section leaves high-intent inbound customer inquiries abandoned.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'visual-identity-profile-branding',
          title: 'Profile Optimization & Brand Identity',
          desc: 'High-converting bios, custom story highlight icons, branded banner headers, and clear calls to action across all platforms.'
        },
        {
          id: 'high-retention-content-engine',
          title: 'High-Retention Reels, Carousels & Video Cuts',
          desc: 'Studio-quality short-form video edits, animated motion graphics, and carousel decks engineered for high saves and algorithmic shares.'
        },
        {
          id: 'linkedin-executive-branding',
          title: 'B2B Thought Leadership & Executive Profiling',
          desc: 'Positioning founders and corporate executives as industry thought leaders with authoritative analysis, case studies, and industry commentary.'
        },
        {
          id: 'community-nurture-outreach',
          title: 'Community Management & Inbound Nurturing',
          desc: 'Prompt responses to comments, brand mentions, and DMs to shepherd interested prospects straight into your sales pipeline.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Creative tools, scheduling platforms, and social intelligence:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Design & Video Production:</strong> Figma, Adobe Illustrator, Photoshop, Premiere Pro, and After Effects.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Publishing & Scheduling:</strong> Buffer, Hootsuite, and Meta Business Suite for automated prime-time posting.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Social Listening & Trends:</strong> Sprout Social, Brandwatch, and platform-native trending audio monitors.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Step 1: Visual Audit & Audience Persona Mapping',
          desc: 'We analyze your target buyers, study top competitor accounts, and define a distinctive brand visual tone of voice.'
        },
        {
          step: 'Step 2: Monthly Content Calendar & Template Creation',
          desc: 'Planning 30 days of strategic content themes, hooks, captions, and developing custom reusable graphic templates.'
        },
        {
          step: 'Step 3: High-Batch Production & Pre-Scheduled Publishing',
          desc: 'Producing video edits, static graphics, and carousels, followed by scheduling posts during peak engagement windows.'
        },
        {
          step: 'Step 4: Real-Time Engagement & Performance Iteration',
          desc: 'Managing conversations, tracking viral audio trends, and adjusting content formats based on analytics data.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Custom Branded Assets:</strong> Zero low-quality generic templates; every graphic and reel is customized to your brand palette.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Strict Quality Control:</strong> Pre-approval workflow allowing your team to review and sign off on content before publishing.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Platform-Native Format:</strong> Proper aspect ratios (9:16 for Reels/Shorts, 4:5 for feed, 16:9 for YouTube) and custom captions.</li>
          </ul>
        </>
      )
    }
  },

  'digital-marketing/ads-management': {
    slug: 'digital-marketing/ads-management',
    title: 'Ads Management (PPC & Meta Ads)',
    headline: "Precision Paid Advertising Engineered for Maximum ROAS.",
    category: 'Paid Media & High-ROAS Performance Marketing',
    tagline: 'High-converting Google Search, Meta Ads (Instagram & Facebook), and LinkedIn ad campaigns engineered with deep audience segmentation, continuous creative testing, and relentless ROAS optimization.',
    timeline: 'Campaign Setup in 7 Days + Daily Optimization',
    engagement: 'Performance Retainer (Management Fee + % Ad Spend)',
    deliverables: 'Full Ad Account Setup & Pixel / CAPI Integration, High-Converting Copy & Video Creatives, Multi-Stage Retargeting Funnels, Real-Time Bid & Budget Optimization, Weekly ROAS Reports',
    outcome: '3x - 5x Targeted ROAS, Dramatically Lowered Cost Per Lead',
    tags: ['Google Search & Display', 'Meta Ads Manager', 'LinkedIn B2B Ads', 'Retargeting Funnels', 'Pixel & CAPI Tracking', 'Creative A/B Testing', 'ROAS Optimization'],
    image: '/images/SliderImg_7.webp',
    ctaText: 'Scale Your Paid Ads',
    ctaHref: '/contact?service=ads-management&source=service-detail',
    quote: 'Paid advertising is not an expense when every dollar invested reliably yields three to four dollars in qualified revenue. We turn paid media into your most predictable growth lever.',
    shortDesc: 'Precision-targeted ad campaigns across search, social, and display engineered to maximize ROAS and acquire paying customers profitably.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'google-ads-high-intent-search', title: 'Google High-Intent Search Ads' },
        { id: 'meta-social-performance-campaigns', title: 'Meta & Instagram Paid Scaling' },
        { id: 'multi-stage-retargeting', title: 'Multi-Stage Retargeting Funnels' },
        { id: 'creative-testing-roas', title: 'Creative A/B Testing & ROAS' }
      ]},
      { id: 'technology', title: 'Tracking Architecture & Tools' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Paid digital advertising is the fastest way to scale any business, but without deep audience targeting, conversion-tuned copy, and server-side tracking, it is equally easy to burn through tens of thousands of dollars in wasted ad spend.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, our paid media specialists approach ad management with algorithmic rigor. We architect end-to-end acquisition funnels across Google and Meta that capture ready-to-buy prospects, nurture hesitant visitors with dynamic retargeting, and produce verifiable return on ad spend.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Common traps that kill ad profitability for businesses:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Broken attribution:</strong> Inaccurate pixel tracking that leaves ad algorithms unable to optimize for real customer conversions.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Ad creative fatigue:</strong> Running the same three images for months until click-through rates collapse and cost per click skyrockets.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Sending traffic to generic homepages:</strong> Neglecting tailored landing pages, which causes bounce rates above 80%.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'google-ads-high-intent-search',
          title: 'Google Ads & Performance Max Campaigns',
          desc: 'High-intent search campaigns capturing users looking for your specific services right now, backed by aggressive negative keyword scrubbing.'
        },
        {
          id: 'meta-social-performance-campaigns',
          title: 'Meta Ads (Instagram & Facebook)',
          desc: 'Scroll-stopping visual video ads, lookalike audiences, and demographic targeting optimized for volume and cost efficiency.'
        },
        {
          id: 'multi-stage-retargeting',
          title: 'Omnichannel Retargeting Funnels',
          desc: 'Keeping your brand top-of-mind across the web with specialized discount or case study ads for users who browsed but didn’t convert.'
        },
        {
          id: 'creative-testing-roas',
          title: 'Systematic Creative Testing & Scaling',
          desc: 'Continuous split-testing of hooks, thumbnail imagery, headlines, and call-to-actions to uncover breakout winners.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Ad network engines and server-side tracking infrastructure:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Ad Networks:</strong> Google Ads, Meta Ads Manager, LinkedIn Campaign Manager, Microsoft Ads.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Server-Side Tracking:</strong> Meta Conversions API (CAPI), Google Tag Manager Server Container, Stape.io.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Analytics & Attribution:</strong> Google Analytics 4, Triple Whale, Looker Studio automated reports.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Week 1: Tracking Audit & Full Account Architecture',
          desc: 'Installing server-side tracking, cleaning historical data, setting up conversion events, and drafting ad copy.'
        },
        {
          step: 'Week 2: Initial Creative Batch & Testing Phase',
          desc: 'Deploying initial test campaigns across 5-10 creative variations to identify winning audience-message pairs.'
        },
        {
          step: 'Weeks 3–4: Scale Profitable Ad Sets & Cut Losers',
          desc: 'Allocating the majority of daily budget to verified winners while optimizing target CPA and ROAS.'
        },
        {
          step: 'Ongoing: Multi-Platform Scaling & Funnel Expansion',
          desc: 'Expanding budget vertically and horizontally with new creative angles, dynamic retargeting, and seasonal promotions.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">100% Client Account Ownership:</strong> All ad spend is billed directly to your corporate card; we never hide spend behind markups.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Weekly Performance Standups:</strong> Clear weekly summaries of ad spend, cost per lead, ROAS, and upcoming creative pipeline.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Rapid Creative Iteration:</strong> Fresh creative assets produced and deployed regularly to prevent ad decay.</li>
          </ul>
        </>
      )
    }
  },

  'video-shoot-editing': {
    slug: 'video-shoot-editing',
    title: 'Video Shoot & Editing',
    headline: "Visual Stories That Captivate, Inspire, and Convert.",
    category: 'Cinematography, Production & High-Retention Editing',
    tagline: 'Professional on-location video shooting, multi-camera corporate setups, cinema-grade color grading, sound design, and viral short-form social editing tailored to captivate audiences and elevate brand prestige.',
    timeline: 'Shoot + Edit within 5 to 10 Days',
    engagement: 'Per Production Shoot or Monthly Content Retainer',
    deliverables: '4K Cinema Footage & B-Roll, Professional Studio Lighting & Audio Capture, Dynamic Motion Graphics & Titling, Multi-Platform Exports (9:16, 16:9, 1:1)',
    outcome: 'Cinema-Quality Production, 3x Higher Audience Retention',
    tags: ['4K Video Production', 'On-Location Shooting', 'Professional Lighting & Audio', 'Adobe Premiere Pro', 'After Effects', 'Color Grading', 'Product Walkthroughs', 'Social Video Ads'],
    image: '/images/SliderImg_9.webp',
    ctaText: 'Book a Video Shoot',
    ctaHref: '/contact?service=video-shoot-editing&source=service-detail',
    quote: 'From the initial camera roll on set to the final color-graded master frame, we craft visual stories that command attention and elevate brand prestige.',
    shortDesc: 'End-to-end video production covering on-location shooting, studio setups, cinema-grade editing, and platform-ready social cuts.',
    toc: [
      { id: 'overview', title: 'Overview' },
      { id: 'the-challenge', title: 'The Challenge' },
      { id: 'what-we-deliver', title: 'What We Deliver', sub: [
        { id: 'on-location-cinematography', title: 'On-Location & Studio Shoot' },
        { id: 'product-saas-demos', title: 'Product & Brand Documentaries' },
        { id: 'high-retention-social-reels', title: 'High-Retention Reels & Social Cuts' },
        { id: 'motion-graphics-sound-color', title: 'Motion Graphics, Color & Audio' }
      ]},
      { id: 'technology', title: 'Camera Gear & Post-Production' },
      { id: 'our-process', title: 'Our Process' },
      { id: 'standards-support', title: 'Standards & Support' }
    ],
    sections: {
      intro: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Video is by far the most influential medium in digital media. Whether you require a high-production brand film, on-location corporate testimonials, founder spotlight interviews, or high-converting product promo videos, the combination of professional camera work and precision post-production sets you apart from competitors.
          </p>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            At <strong className="font-bold text-textHeading">Zentrix Infotech</strong>, our full-service video unit brings cinema-grade 4K equipment, studio lighting, and crystal-clear directional audio to your shoot. We then apply fast-paced, retention-focused editing, kinetic motion graphics, and rich sound design to deliver master videos that inspire and convert.
          </p>
        </>
      ),
      theChallenge: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Why amateur video attempts fail to produce positive brand perception:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Poor lighting and framing:</strong> Harsh shadows and flat angles that look unprofessional and diminish brand credibility.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Echoey, unmastered sound:</strong> Viewers forgive mediocre video quality, but bad audio causes immediate drop-off within seconds.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Sluggish pacing:</strong> Boring intro sequences without dynamic hooks that lose viewers before key points are even made.</li>
          </ul>
        </>
      ),
      whatWeDeliver: [
        {
          id: 'on-location-cinematography',
          title: 'On-Location 4K Cinema Shooting',
          desc: 'Multi-angle camera setups, cinema lenses, wireless lavalier audio, gimbal stabilization, and professional 3-point studio lighting.'
        },
        {
          id: 'product-saas-demos',
          title: 'Brand Commercials & Product Demos',
          desc: 'High-impact product showcases, customer case-study interviews, office walkthroughs, and founder keynote presentations.'
        },
        {
          id: 'high-retention-social-reels',
          title: 'High-Retention Reels & Short-Form Video',
          desc: 'Bite-sized, punchy vertical edits (9:16) with animated subtitles, kinetic zoom-ins, and sound effects built specifically for social feeds.'
        },
        {
          id: 'motion-graphics-sound-color',
          title: 'Cinema Color Grading & Sound Mastering',
          desc: 'Hollywood-standard DaVinci Resolve color grading, custom brand motion titles, foley sound design, and licensed background score mixing.'
        }
      ],
      technology: (
        <>
          <p className="font-bodyfont text-base sm:text-lg leading-relaxed text-textDescription mb-6">
            Our production equipment and post-production software:
          </p>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Cameras & Optics:</strong> 4K/6K Cinema Cameras, Prime Cine Lenses, DJI Ronin Gimbals, and Aerial Drones.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Audio & Lighting:</strong> Sennheiser Wireless Microphones, Zoom multi-track field recorders, Aputure studio lighting grids.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Post-Production:</strong> Adobe Premiere Pro, After Effects, DaVinci Resolve Studio, and licensed audio libraries.</li>
          </ul>
        </>
      ),
      ourProcess: [
        {
          step: 'Phase 1: Pre-Production & Storyboarding',
          desc: 'Shot list creation, scripting, location scouting, talent briefing, and equipment preparation.'
        },
        {
          step: 'Phase 2: Production & On-Set Direction',
          desc: 'On-location filming with professional lighting, multi-mic audio capture, and comprehensive B-roll coverage.'
        },
        {
          step: 'Phase 3: Assembly Cut & Motion Polish',
          desc: 'Syncing multi-cam footage, pacing dialogue, adding kinetic motion titles, sound effects, and color grading.'
        },
        {
          step: 'Phase 4: Multi-Format Delivery & Revisions',
          desc: 'Delivering full 4K masters plus 9:16 vertical cuts for social media, with round-trip client review workflows.'
        }
      ],
      standards: (
        <>
          <ul className="font-bodyfont list-disc pl-6 my-4 space-y-2 text-base sm:text-lg text-textDescription marker:text-navTextHover">
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Master Deliverables:</strong> Clean exports in full resolution ProRes and web-optimized H.264/H.265.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Full Commercial Licensing:</strong> All background music, sound effects, and fonts are 100% commercially licensed for your business.</li>
            <li className="leading-relaxed"><strong className="font-bold text-textHeading">Fast Turnaround:</strong> First assembly cut delivered within 3-5 business days post-shoot.</li>
          </ul>
        </>
      )
    }
  }
};

// Aliases for seamless route resolution
servicesData['seo'] = servicesData['digital-marketing/seo'];
servicesData['social-media-optimization'] = servicesData['digital-marketing/social-media-optimization'];
servicesData['ads-management'] = servicesData['digital-marketing/ads-management'];

