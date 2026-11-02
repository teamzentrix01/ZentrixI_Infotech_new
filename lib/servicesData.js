export const servicesData = {
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
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
};

