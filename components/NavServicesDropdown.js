'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const servicesNavConfig = [
  {
    name: 'Digital Marketing',
    href: '/services/digital-marketing',
    children: [
      { name: 'SEO', href: '/services/digital-marketing/seo' },
      { name: 'Social Media Optimization', href: '/services/digital-marketing/social-media-optimization' },
      { name: 'Ads Management', href: '/services/digital-marketing/ads-management' },
    ],
  },
  {
    name: 'Software Development',
    href: '/services/software-development',
  },
  {
    name: 'Web Development',
    href: '/services/web-development',
  },
  {
    name: 'Political Campaign Management',
    href: '/services/political-campaign-management',
  },
  {
    name: 'App Development',
    href: '/services/app-development',
  },
  {
    name: 'Video Shoot & Editing',
    href: '/services/video-shoot-editing',
  },
];

/**
 * Desktop Services Dropdown with Submenu
 */
export function DesktopServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [submenuOpenLeft, setSubmenuOpenLeft] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const submenuRef = useRef(null);
  const closeTimerRef = useRef(null);
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith('/services');

  // Clear pending close timeout
  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  // Schedule close with 150ms delay to prevent flicker
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSubmenu(null);
    }, 150);
  }, [cancelClose]);

  const handleMouseEnter = () => {
    cancelClose();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    scheduleClose();
  };

  // Check if submenu has room to the right, else open to the left
  const checkSubmenuPosition = useCallback(() => {
    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      if (rect.right > (window.innerWidth || document.documentElement.clientWidth) - 20) {
        setSubmenuOpenLeft(true);
      } else {
        setSubmenuOpenLeft(false);
      }
    }
  }, []);

  useEffect(() => {
    if (activeSubmenu !== null) {
      checkSubmenuPosition();
    }
  }, [activeSubmenu, checkSubmenuPosition]);

  // Click outside and Esc handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveSubmenu(null);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      cancelClose();
    };
  }, [cancelClose]);

  // Keyboard navigation within menu
  const handleTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const handleItemKeyDown = (e, item, idx) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = document.getElementById(`services-menu-item-${idx + 1}`);
      if (next) next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx === 0) {
        triggerRef.current?.focus();
      } else {
        const prev = document.getElementById(`services-menu-item-${idx - 1}`);
        if (prev) prev.focus();
      }
    } else if (e.key === 'ArrowRight' && item.children) {
      e.preventDefault();
      setActiveSubmenu(item.name);
      setTimeout(() => {
        const firstSub = document.getElementById(`services-submenu-item-0`);
        if (firstSub) firstSub.focus();
      }, 50);
    }
  };

  const handleSubItemKeyDown = (e, subIdx) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = document.getElementById(`services-submenu-item-${subIdx + 1}`);
      if (next) next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (subIdx === 0) {
        const parent = document.getElementById(`services-menu-item-0`);
        if (parent) parent.focus();
      } else {
        const prev = document.getElementById(`services-submenu-item-${subIdx - 1}`);
        if (prev) prev.focus();
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveSubmenu(null);
      const parent = document.getElementById(`services-menu-item-0`);
      if (parent) parent.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button/Link */}
      <div className="flex items-center">
        <Link
          ref={triggerRef}
          href="/services"
          role="button"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onKeyDown={handleTriggerKeyDown}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`group flex items-center justify-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-lg transition-all duration-200 hover:cursor-pointer xl:px-5 2xl:px-6 outline-none focus-visible:ring-2 focus-visible:ring-navTextHover ${
            isServicesActive
              ? 'font-bold text-navTextHover bg-navBtnsBG shadow-sm'
              : 'font-semibold text-textHeading hover:text-navTextHover'
          }`}
        >
          <span>Services</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-navTextHover' : 'group-hover:text-navTextHover'
            }`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Link>
      </div>

      {/* Main Dropdown Panel */}
      {isOpen && (
        <div
          role="menu"
          id="services-menu"
          aria-label="Services dropdown menu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="absolute left-0 top-full pt-2 z-50 animate-fadeIn"
          style={{
            animationDuration: '180ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="min-w-[270px] bg-navBg/95 dark:bg-[#0f0e17]/95 light:bg-white/95 backdrop-blur-xl border border-navBorder rounded-xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] flex flex-col gap-0.5">
            {servicesNavConfig.map((item, idx) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isChildActive = hasChildren && item.children.some((c) => pathname === c.href);
              const isItemActive = pathname === item.href || isChildActive;
              const isSubOpen = activeSubmenu === item.name;

              return (
                <div
                  key={item.href}
                  className="relative group/row"
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setActiveSubmenu(item.name);
                    } else {
                      setActiveSubmenu(null);
                    }
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <Link
                      id={`services-menu-item-${idx}`}
                      role="menuitem"
                      tabIndex={0}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveSubmenu(null);
                      }}
                      onKeyDown={(e) => handleItemKeyDown(e, item, idx)}
                      className={`flex-1 flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 outline-none focus-visible:ring-1 focus-visible:ring-navTextHover ${
                        isItemActive
                          ? 'text-navTextHover bg-navBtnsBG font-bold'
                          : 'text-textHeading hover:text-navTextHover hover:bg-navBtnsBG'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      {hasChildren && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-3.5 h-3.5 ml-2 transition-transform duration-150 text-textDescription group-hover/row:text-navTextHover ${
                            isSubOpen ? 'translate-x-0.5 text-navTextHover' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      )}
                    </Link>
                  </div>

                  {/* Nested Submenu (e.g. for Digital Marketing) */}
                  {hasChildren && isSubOpen && (
                    <div
                      ref={submenuRef}
                      role="menu"
                      aria-label={`${item.name} submenu`}
                      className={`absolute top-0 z-50 ${
                        submenuOpenLeft
                          ? 'right-full mr-1.5'
                          : 'left-full ml-1.5'
                      } animate-fadeIn`}
                      style={{
                        animationDuration: '160ms',
                        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div className="min-w-[240px] bg-navBg/95 dark:bg-[#0f0e17]/95 light:bg-white/95 backdrop-blur-xl border border-navBorder rounded-xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] flex flex-col gap-0.5">
                        {item.children.map((sub, subIdx) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              id={`services-submenu-item-${subIdx}`}
                              role="menuitem"
                              tabIndex={0}
                              href={sub.href}
                              onClick={() => {
                                setIsOpen(false);
                                setActiveSubmenu(null);
                              }}
                              onKeyDown={(e) => handleSubItemKeyDown(e, subIdx)}
                              className={`flex items-center px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 outline-none focus-visible:ring-1 focus-visible:ring-navTextHover ${
                                isSubActive
                                  ? 'text-navTextHover bg-navBtnsBG font-bold'
                                  : 'text-textHeading hover:text-navTextHover hover:bg-navBtnsBG'
                              }`}
                            >
                              <span className="truncate">{sub.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Mobile Accordion for Hamburger Menu
 */
export function MobileServicesAccordion({ onItemClick }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [digitalMarketingExpanded, setDigitalMarketingExpanded] = useState(false);
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith('/services');

  return (
    <div className="w-full flex flex-col">
      {/* Services Header Toggle */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 rounded-lg font-semibold transition-all cursor-pointer ${
          isServicesActive
            ? 'text-navTextHover bg-navBtnsBG'
            : 'text-textHeading hover:text-navTextHover hover:bg-white/5'
        }`}
        onClick={() => setServicesExpanded((prev) => !prev)}
        role="button"
        aria-expanded={servicesExpanded}
      >
        <span className="text-base font-bold">Services</span>
        <div className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 transition-transform duration-200 ${
              servicesExpanded ? 'rotate-180 text-navTextHover' : ''
            }`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Accordion Content */}
      {servicesExpanded && (
        <div className="mt-1 pl-3 pr-1 py-1 flex flex-col gap-1 border-l-2 border-navBorder/80 ml-4 animate-fadeIn">
          {/* Main Services Overview Link */}
          <Link
            href="/services"
            onClick={() => onItemClick?.()}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase transition-all ${
              pathname === '/services'
                ? 'text-navTextHover bg-navBtnsBG font-bold'
                : 'text-textDescription hover:text-navTextHover hover:bg-white/5'
            }`}
          >
            All Services Overview →
          </Link>

          {servicesNavConfig.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);

            if (hasChildren) {
              const isChildActive = item.children.some((c) => pathname === c.href);
              const isParentActive = pathname === item.href || isChildActive;

              return (
                <div key={item.href} className="flex flex-col">
                  {/* Digital Marketing Accordion Row */}
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                      isParentActive
                        ? 'text-navTextHover bg-navBtnsBG/70'
                        : 'text-textHeading hover:text-navTextHover hover:bg-white/5'
                    }`}
                    onClick={() => setDigitalMarketingExpanded((prev) => !prev)}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.stopPropagation();
                        onItemClick?.();
                      }}
                      className="hover:underline flex-1"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      className="p-1 rounded hover:bg-navBorder/40 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDigitalMarketingExpanded((prev) => !prev);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          digitalMarketingExpanded ? 'rotate-180 text-navTextHover' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* Sub-items (SEO, SMO, Ads) */}
                  {digitalMarketingExpanded && (
                    <div className="mt-1 pl-3 py-1 flex flex-col gap-1 border-l-2 border-[#8356FB]/40 ml-3 animate-fadeIn">
                      {item.children.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => onItemClick?.()}
                            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                              isSubActive
                                ? 'text-navTextHover bg-navBtnsBG font-bold'
                                : 'text-textDescription hover:text-navTextHover hover:bg-white/5'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isItemActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onItemClick?.()}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isItemActive
                    ? 'text-navTextHover bg-navBtnsBG font-bold'
                    : 'text-textHeading hover:text-navTextHover hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

