'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col w-full h-full bg-[#0D0D0D] z-0 justify-center items-center relative xxxs:pt-10 sm:pt-16 mt-20">
      {/* Background Gradient */}
      <div className="w-full h-full absolute -z-10 [background:linear-gradient(181.72deg,#0D0D0D_1.13%,#10003A_96.45%)]"></div>

      <div className="xxxs:w-11/12 flex flex-col justify-center items-center xxxs:gap-6 xs:w-10/12 sm:w-11/12 sm:gap-14 md:w-10/12 xl:w-10/12 2xl:max-w-[1440px]">
        {/* Glowing Top Line */}
        <div className="w-full border-t border-transparent [border-image-source:linear-gradient(90deg,#04011000_0%,#946CFF_47%,#04010F00_100%)] [border-image-slice:1]"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 pt-4 sm:pt-6">
          {/* Copyright (Left Side) */}
          <div className="flex flex-row justify-start items-center gap-2 text-white/90 text-xs sm:text-sm shrink-0 order-2 md:order-1 pt-2 md:pt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copyright shrink-0 w-4 h-4 text-[#ADADAD]">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path>
            </svg>
            <p className="leading-none text-[#ADADAD] sm:text-white/90">2026. All Rights Reserved By ZENTRIX INFOTECH</p>
          </div>

          {/* Navigation Columns (Right Side) */}
          <nav aria-label="Footer navigation" className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-row justify-start md:justify-end items-start gap-8 sm:gap-10 md:gap-8 lg:gap-12 xl:gap-16 text-white order-1 md:order-2">
            {/* MAIL US ON */}
            <div className="flex flex-col justify-start items-start gap-3 sm:gap-4 min-w-0">
              <span className="text-[#ADADAD] text-xs font-semibold tracking-wider uppercase">MAIL US ON</span>
              <div className="flex flex-col justify-start items-start gap-2 text-xs sm:text-sm">
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer break-all" href="mailto:info@zentrixinfotech.com">
                  info@zentrixinfotech.com
                </a>
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer break-all" href="mailto:zentrixinfotech.connect@gmail.com">
                  zentrixinfotech.connect@gmail.com
                </a>
              </div>
            </div>

            {/* FOLLOW US ON */}
            <div className="flex flex-col justify-start items-start gap-3 sm:gap-4 text-xs sm:text-sm">
              <span className="text-[#ADADAD] text-xs font-semibold tracking-wider uppercase">FOLLOW US ON</span>
              <div className="flex flex-col justify-start items-start gap-2">
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="https://www.facebook.com/profile.php?id=61572870601261" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="https://www.linkedin.com/company/zentrixinfotech" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="https://www.instagram.com/zentrixinfotech/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="https://x.com/zentrixinfotechconnect" target="_blank" rel="noopener noreferrer">
                  X (Twitter)
                </a>
              </div>
            </div>

            {/* MENU LINKS */}
            <div className="flex flex-col justify-start items-start gap-3 sm:gap-4 text-xs sm:text-sm">
              <span className="text-[#ADADAD] text-xs font-semibold tracking-wider uppercase">MENU LINKS</span>
              <div className="flex flex-col justify-start items-start gap-2">
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/">Home</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/services">Services</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/products">Products</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/projects">Projects</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/blog">Blog</Link>
              </div>
            </div>

            {/* COMPANY */}
            <div className="flex flex-col justify-start items-start gap-3 sm:gap-4 text-xs sm:text-sm">
              <span className="text-[#ADADAD] text-xs font-semibold tracking-wider uppercase">COMPANY</span>
              <div className="flex flex-col justify-start items-start gap-2">
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/about">About Us</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/contact">Contact Us</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/privacy-policy">Privacy Policy</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/terms">Terms of Service</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/cancellation-and-refund">Refund Policy</Link>
                <Link className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer" href="/cookie-policy">Cookie Policy</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Large Brand Signature: Zentrix Logo Icon + Name */}
        <div className="w-full flex justify-center items-center pt-8 sm:pt-10 md:pt-14 pb-4 sm:pb-6 overflow-hidden select-none">
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-8 max-w-full">
            {/* Authentic Zentrix Brand Emblem Icon (Exact 4-tile geometry) */}
            <svg
              viewBox="0 0 58 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[10vw] sm:h-[11vw] md:h-[12vw] lg:h-[12.5vw] w-auto shrink-0 drop-shadow-[0_0_35px_rgba(0,255,178,0.45)]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="footer-zentrix-grad" x1="15%" y1="0%" x2="85%" y2="100%">
                  <stop offset="0%" stopColor="#00FFB2" />
                  <stop offset="50%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#00D2FF" />
                </linearGradient>
              </defs>

              {/* Tile 1: Top-Left Main Parallelogram */}
              <path
                d="M17.5 2.5 H35.5 C36.9 2.5 38.0 3.7 37.6 5.1 L31.2 27.5 C30.9 28.6 29.9 29.4 28.7 29.4 H10.7 C9.3 29.4 8.2 28.2 8.6 26.8 L15.0 4.4 C15.4 3.3 16.4 2.5 17.5 2.5 Z"
                fill="url(#footer-zentrix-grad)"
              />

              {/* Tile 2: Top-Right Small Parallelogram */}
              <path
                d="M44.0 15.5 H54.5 C55.7 15.5 56.6 16.6 56.2 17.8 L53.0 27.5 C52.7 28.5 51.8 29.2 50.8 29.2 H40.3 C39.1 29.2 38.2 28.1 38.6 26.9 L41.8 17.2 C42.1 16.2 43.0 15.5 44.0 15.5 Z"
                fill="url(#footer-zentrix-grad)"
              />

              {/* Tile 3: Bottom-Left Small Parallelogram */}
              <path
                d="M7.0 34.8 H17.5 C18.7 34.8 19.6 35.9 19.2 37.1 L16.0 46.8 C15.7 47.8 14.8 48.5 13.8 48.5 H3.3 C2.1 48.5 1.2 47.4 1.6 46.2 L4.8 36.5 C5.1 35.5 6.0 34.8 7.0 34.8 Z"
                fill="url(#footer-zentrix-grad)"
              />

              {/* Tile 4: Bottom-Right Main Parallelogram */}
              <path
                d="M26.5 34.5 H44.5 C45.9 34.5 47.0 35.7 46.6 37.1 L40.2 59.5 C39.9 60.6 38.9 61.4 37.7 61.4 H19.7 C18.3 61.4 17.2 60.2 17.6 58.8 L24.0 36.4 C24.4 35.3 25.4 34.5 26.5 34.5 Z"
                fill="url(#footer-zentrix-grad)"
              />
            </svg>

            {/* Clean, Pure White ZENTRIX Typography */}
            <span className="font-clashdisplay font-extrabold tracking-tight text-white uppercase text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[14.5vw] leading-[0.85] select-none pointer-events-none drop-shadow-[0_10px_40px_rgba(0,255,178,0.2)]">
              ZENTRIX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
