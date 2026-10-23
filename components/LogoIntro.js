'use client';
import { useState, useEffect } from 'react';

export default function LogoIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Unmount overlay after CSS animation completes (2 seconds total)
    const timer = setTimeout(() => {
      setShow(false);
    }, 2050);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div id="intro-overlay" className="intro-overlay" aria-hidden="true">
      <div id="intro-backdrop" className="intro-backdrop"></div>
      
      <div id="intro-logo" className="intro-logo">
        {/* Dark Mode SVG Variant (White text + Cyan/Turquoise Gradients) */}
        <svg
          viewBox="0 0 240 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="intro-variant intro-variant-dark h-auto w-full"
        >
          <defs>
            <linearGradient id="zentrix-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#00FFB2" />
              <stop offset="0.5" stopColor="#00E5FF" />
              <stop offset="1" stopColor="#8356FB" />
            </linearGradient>
            <linearGradient id="zentrix-grad-facet-dark" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="#00D2FF" />
              <stop offset="1" stopColor="#00FFB2" />
            </linearGradient>
          </defs>

          {/* Emblem Facet 1 (Top-Left Parallelogram) */}
          <path
            d="M6 4 H22 L16 15 H0 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 0, '--fill': 'url(#zentrix-grad-dark)' }}
          />

          {/* Emblem Facet 2 (Bottom-Right Parallelogram) */}
          <path
            d="M18 17 H34 L28 28 H12 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 1, '--fill': 'url(#zentrix-grad-facet-dark)' }}
          />

          {/* Emblem Center Core Accent */}
          <path
            d="M8 15 H16 V23 H8 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 2, '--fill': 'url(#zentrix-grad-dark)' }}
          />

          {/* Letter Z */}
          <path
            d="M42 6 H60 V10 L48 24 H60 V28 H42 V24 L54 10 H42 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 3, '--fill': 'currentColor' }}
          />

          {/* Letter E */}
          <path
            d="M66 6 H82 V10.5 H71.5 V15 H80.5 V19 H71.5 V23.5 H82 V28 H66 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 4, '--fill': 'currentColor' }}
          />

          {/* Letter N */}
          <path
            d="M88 6 H93.5 L102.5 21 V6 H108 V28 H102.5 L93.5 13 V28 H88 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 5, '--fill': 'currentColor' }}
          />

          {/* Letter T */}
          <path
            d="M112 6 H130 V10.5 H123.5 V28 H118.5 V10.5 H112 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 6, '--fill': 'currentColor' }}
          />

          {/* Letter R */}
          <path
            d="M136 6 H148 C153 6 155 8.5 155 12.5 C155 15.5 153 17.5 150 18.2 L155.5 28 H149.5 L144.5 19 H141.5 V28 H136 Z M141.5 10.5 V15 H147 C149.5 15 150 14 150 12.8 C150 11.2 149 10.5 147 10.5 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 7, '--fill': 'currentColor' }}
          />

          {/* Letter I */}
          <path
            d="M161 6 H166.5 V28 H161 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 8, '--fill': 'currentColor' }}
          />

          {/* Letter X */}
          <path
            d="M172 6 H178 L183.5 15 L189 6 H195 L186.5 17 L195.5 28 H189.5 L183.5 19 L177.5 28 H171.5 L180.5 17 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 9, '--fill': 'currentColor' }}
          />

          {/* Brand Period Dot (.) */}
          <path
            d="M200 23 H205 V28 H200 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 10, '--fill': '#00FFB2' }}
          />
        </svg>

        {/* Light Mode SVG Variant (Dark text + Cyan/Turquoise Gradients) */}
        <svg
          viewBox="0 0 240 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="intro-variant intro-variant-light h-auto w-full"
        >
          <defs>
            <linearGradient id="zentrix-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#00BFA5" />
              <stop offset="0.5" stopColor="#0091EA" />
              <stop offset="1" stopColor="#6A36F6" />
            </linearGradient>
            <linearGradient id="zentrix-grad-facet-light" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="#00B0FF" />
              <stop offset="1" stopColor="#00BFA5" />
            </linearGradient>
          </defs>

          {/* Emblem Facet 1 */}
          <path
            d="M6 4 H22 L16 15 H0 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 0, '--fill': 'url(#zentrix-grad-light)' }}
          />

          {/* Emblem Facet 2 */}
          <path
            d="M18 17 H34 L28 28 H12 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 1, '--fill': 'url(#zentrix-grad-facet-light)' }}
          />

          {/* Emblem Center Core Accent */}
          <path
            d="M8 15 H16 V23 H8 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 2, '--fill': 'url(#zentrix-grad-light)' }}
          />

          {/* Letter Z */}
          <path
            d="M42 6 H60 V10 L48 24 H60 V28 H42 V24 L54 10 H42 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 3, '--fill': 'currentColor' }}
          />

          {/* Letter E */}
          <path
            d="M66 6 H82 V10.5 H71.5 V15 H80.5 V19 H71.5 V23.5 H82 V28 H66 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 4, '--fill': 'currentColor' }}
          />

          {/* Letter N */}
          <path
            d="M88 6 H93.5 L102.5 21 V6 H108 V28 H102.5 L93.5 13 V28 H88 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 5, '--fill': 'currentColor' }}
          />

          {/* Letter T */}
          <path
            d="M112 6 H130 V10.5 H123.5 V28 H118.5 V10.5 H112 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 6, '--fill': 'currentColor' }}
          />

          {/* Letter R */}
          <path
            d="M136 6 H148 C153 6 155 8.5 155 12.5 C155 15.5 153 17.5 150 18.2 L155.5 28 H149.5 L144.5 19 H141.5 V28 H136 Z M141.5 10.5 V15 H147 C149.5 15 150 14 150 12.8 C150 11.2 149 10.5 147 10.5 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 7, '--fill': 'currentColor' }}
          />

          {/* Letter I */}
          <path
            d="M161 6 H166.5 V28 H161 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 8, '--fill': 'currentColor' }}
          />

          {/* Letter X */}
          <path
            d="M172 6 H178 L183.5 15 L189 6 H195 L186.5 17 L195.5 28 H189.5 L183.5 19 L177.5 28 H171.5 L180.5 17 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 9, '--fill': 'currentColor' }}
          />

          {/* Brand Period Dot (.) */}
          <path
            d="M200 23 H205 V28 H200 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 10, '--fill': '#00BFA5' }}
          />
        </svg>
      </div>
    </div>
  );
}
