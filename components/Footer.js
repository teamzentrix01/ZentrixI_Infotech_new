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
                <a className="text-white/90 hover:text-[#946CFF] transition-colors duration-200 cursor-pointer break-all" href="mailto:connect@zentrixinfotech.com">
                  connect@zentrixinfotech.com
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

        {/* Large Brand Signature */}
        <div className="w-full flex justify-center items-center xxxs:mb-6 xxxs:mt-9 md:mb-12 opacity-85 hover:opacity-100 transition-opacity">
          <img
            className="h-14 sm:h-20 md:h-24 lg:h-28 w-auto object-contain max-w-full drop-shadow-[0_0_20px_rgba(0,255,178,0.2)]"
            src="/images/zentrix-logo-white.png"
            alt="Zentrix Infotech — Web and App Development Company"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}
