'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage or document class
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
  ];

  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-10/12 mx-auto flex flex-col justify-between items-center sticky top-10 z-50 transition-all duration-200 xxxs:w-11/12 xxxs:top-5 xxs:w-11/12 xxs:gap-3 xxs:top-6 xs:top-8 xs:w-10/12 sm:w-11/12 sm:top-9 md:w-10/12 2xl:max-w-[1440px]">
      <div className="navbar w-full flex flex-row justify-between xxxs:bg-navBg/50 xxxs:bg-clip-padding xxxs:backdrop-filter xxxs:backdrop-blur-md xxxs:border xxxs:border-navBorder xxxs:rounded-xl xxxs:p-3 xxs:p-3 sm:p-3 sm:bg-navBg/50 sm:bg-clip-padding sm:backdrop-filter sm:backdrop-blur-md sm:border sm:border-navBorder sm:rounded-xl md:p-3 lg:p-0 lg:bg-transparent lg:border-none">
        {/* Zentrix Logo */}
        <div className="flex justify-center items-center">
          <Link aria-label="Go to homepage" href="/" className="flex items-center">
            {/* Dark mode logo */}
            <img
              id="nav-logo-slot-dark"
              className="hidden dark:block xxxs:h-7 xxs:h-8 xs:h-9 sm:h-9 lg:h-10 xl:h-11 w-auto object-contain"
              src="/images/zentrix-logo-white.png"
              width="232"
              height="56"
              alt="Zentrix Infotech Logo - Home"
            />
            {/* Light mode logo */}
            <img
              id="nav-logo-slot-light"
              className="block dark:hidden xxxs:h-7 xxs:h-8 xs:h-9 sm:h-9 lg:h-10 xl:h-11 w-auto object-contain"
              src="/images/zentrix-logo.png"
              width="232"
              height="56"
              alt="Zentrix Infotech Logo - Home"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          aria-label="Main navigation"
          className="flex flex-row justify-around items-center border border-navBorder rounded-xl text-navText text-lg gap-1 p-2 bg-[rgba(var(--nav-bg),0.3)] bg-clip-padding backdrop-filter backdrop-blur-md xxxs:hidden sm:hidden lg:text-sm lg:flex lg:p-1 xl:text-lg xl:p-2"
        >
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                className={`flex justify-center items-center whitespace-nowrap px-3 py-2 rounded-lg transition-all duration-200 hover:cursor-pointer xl:px-5 2xl:px-6 ${
                  active
                    ? 'font-bold text-navTextHover bg-navBtnsBG shadow-sm'
                    : 'font-semibold text-textHeading hover:text-navTextHover'
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex flex-row justify-between items-center gap-3 xxxs:gap-2 xxs:gap-2 xs:gap-3 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="border border-border rounded-lg p-2 flex items-center justify-center hover:cursor-pointer bg-[rgba(var(--nav-bg),0.5)] bg-clip-padding backdrop-filter backdrop-blur-md lg:p-2 lg:h-9 lg:w-9 xl:h-12 xl:w-12 xl:p-3 text-textHeading hover:text-navTextHover transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-5 w-5 xxxs:h-4 xxxs:w-4 xl:w-5 xl:h-5 text-[#F5A623]">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5 xxxs:h-4 xxxs:w-4 xl:w-5 xl:h-5 text-[#8356FB]">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border border-border rounded-lg p-2 flex items-center justify-center hover:cursor-pointer bg-[rgba(var(--nav-bg),0.5)] bg-clip-padding backdrop-filter backdrop-blur-md lg:p-2 lg:h-9 lg:w-9 xl:h-12 xl:w-12 xl:p-3 lg:hidden text-textHeading"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 xxxs:h-4 xxxs:w-4 text-textHeading">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5 xxxs:h-4 xxxs:w-4 text-textHeading">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            )}
          </button>

          {/* Desktop Contact Us Button */}
          <div className="flex justify-center items-center xxxs:hidden sm:hidden lg:flex">
            <div className="w-full flex justify-center items-center lg:text-sm xl:text-lg xl:h-12">
              <Link className="h-full w-full" href="/contact">
                <div className="CTA-Button h-full w-full flex justify-center items-center whitespace-nowrap font-semibold transition-all duration-300 text-white px-6 py-3 rounded-lg xl:px-6 xl:py-2 xxxs:py-2 sm:py-2 lg:px-4 lg:py-2">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="w-full lg:hidden mt-2 p-4 bg-navBg/95 backdrop-blur-xl border border-navBorder rounded-2xl flex flex-col gap-3 shadow-2xl transition-all duration-300 animate-fadeIn">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  active
                    ? 'text-navTextHover bg-navBtnsBG'
                    : 'text-textHeading hover:text-navTextHover hover:bg-white/5'
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-navBorder">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              className="CTA-Button w-full py-3 rounded-xl flex justify-center items-center font-bold text-white shadow-lg"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
