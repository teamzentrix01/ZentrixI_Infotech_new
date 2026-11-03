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
            <linearGradient id="zentrix-grad-dark" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop stopColor="#00FFB2" />
              <stop offset="0.5" stopColor="#00E5FF" />
              <stop offset="1" stopColor="#00D2FF" />
            </linearGradient>
          </defs>

          {/* Emblem Tile 1: Top-Left Main Parallelogram */}
          <path
            d="M9 4 H18 C18.7 4 19.3 4.6 19.1 5.3 L15.9 16.5 C15.7 17.1 15.2 17.5 14.6 17.5 H5.6 C4.9 17.5 4.3 16.9 4.5 16.2 L7.7 5.0 C7.9 4.4 8.4 4 9 4 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 0, '--fill': 'url(#zentrix-grad-dark)' }}
          />

          {/* Emblem Tile 2: Top-Right Small Parallelogram */}
          <path
            d="M22 10.5 H27.5 C28.1 10.5 28.6 11.1 28.4 11.7 L26.8 16.5 C26.6 17 26.2 17.4 25.7 17.4 H20.2 C19.6 17.4 19.1 16.8 19.3 16.2 L20.9 11.4 C21.1 10.9 21.5 10.5 22 10.5 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 1, '--fill': 'url(#zentrix-grad-dark)' }}
          />

          {/* Emblem Tile 3: Bottom-Left Small Parallelogram */}
          <path
            d="M3.5 20 H9 C9.6 20 10.1 20.6 9.9 21.2 L8.3 26 C8.1 26.5 7.7 26.9 7.2 26.9 H1.7 C1.1 26.9 0.6 26.3 0.8 25.7 L2.4 20.9 C2.6 20.4 3 20 3.5 20 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 2, '--fill': 'url(#zentrix-grad-dark)' }}
          />

          {/* Emblem Tile 4: Bottom-Right Main Parallelogram */}
          <path
            d="M13.5 20 H22.5 C23.2 20 23.8 20.6 23.6 21.3 L20.4 32.5 C20.2 33.1 19.7 33.5 19.1 33.5 H10.1 C9.4 33.5 8.8 32.9 9 32.2 L12.2 21 C12.4 20.4 12.9 20 13.5 20 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 3, '--fill': 'url(#zentrix-grad-dark)' }}
          />

          {/* Letter Z */}
          <path
            d="M42 6 H60 V10 L48 24 H60 V28 H42 V24 L54 10 H42 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 4, '--fill': 'currentColor' }}
          />

          {/* Letter E */}
          <path
            d="M66 6 H82 V10.5 H71.5 V15 H80.5 V19 H71.5 V23.5 H82 V28 H66 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 5, '--fill': 'currentColor' }}
          />

          {/* Letter N */}
          <path
            d="M88 6 H93.5 L102.5 21 V6 H108 V28 H102.5 L93.5 13 V28 H88 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 6, '--fill': 'currentColor' }}
          />

          {/* Letter T */}
          <path
            d="M112 6 H130 V10.5 H123.5 V28 H118.5 V10.5 H112 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 7, '--fill': 'currentColor' }}
          />

          {/* Letter R */}
          <path
            d="M136 6 H148 C153 6 155 8.5 155 12.5 C155 15.5 153 17.5 150 18.2 L155.5 28 H149.5 L144.5 19 H141.5 V28 H136 Z M141.5 10.5 V15 H147 C149.5 15 150 14 150 12.8 C150 11.2 149 10.5 147 10.5 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 8, '--fill': 'currentColor' }}
          />

          {/* Letter I */}
          <path
            d="M161 6 H166.5 V28 H161 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 9, '--fill': 'currentColor' }}
          />

          {/* Letter X */}
          <path
            d="M172 6 H178 L183.5 15 L189 6 H195 L186.5 17 L195.5 28 H189.5 L183.5 19 L177.5 28 H171.5 L180.5 17 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 10, '--fill': 'currentColor' }}
          />

          {/* Brand Period Dot (.) */}
          <path
            d="M200 23 H205 V28 H200 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 11, '--fill': '#00FFB2' }}
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
            <linearGradient id="zentrix-grad-light" x1="15%" y1="0%" x2="85%" y2="100%">
              <stop stopColor="#00BFA5" />
              <stop offset="0.5" stopColor="#0091EA" />
              <stop offset="1" stopColor="#0080FF" />
            </linearGradient>
          </defs>

          {/* Emblem Tile 1 */}
          <path
            d="M9 4 H18 C18.7 4 19.3 4.6 19.1 5.3 L15.9 16.5 C15.7 17.1 15.2 17.5 14.6 17.5 H5.6 C4.9 17.5 4.3 16.9 4.5 16.2 L7.7 5.0 C7.9 4.4 8.4 4 9 4 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 0, '--fill': 'url(#zentrix-grad-light)' }}
          />

          {/* Emblem Tile 2 */}
          <path
            d="M22 10.5 H27.5 C28.1 10.5 28.6 11.1 28.4 11.7 L26.8 16.5 C26.6 17 26.2 17.4 25.7 17.4 H20.2 C19.6 17.4 19.1 16.8 19.3 16.2 L20.9 11.4 C21.1 10.9 21.5 10.5 22 10.5 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 1, '--fill': 'url(#zentrix-grad-light)' }}
          />

          {/* Emblem Tile 3 */}
          <path
            d="M3.5 20 H9 C9.6 20 10.1 20.6 9.9 21.2 L8.3 26 C8.1 26.5 7.7 26.9 7.2 26.9 H1.7 C1.1 26.9 0.6 26.3 0.8 25.7 L2.4 20.9 C2.6 20.4 3 20 3.5 20 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 2, '--fill': 'url(#zentrix-grad-light)' }}
          />

          {/* Emblem Tile 4 */}
          <path
            d="M13.5 20 H22.5 C23.2 20 23.8 20.6 23.6 21.3 L20.4 32.5 C20.2 33.1 19.7 33.5 19.1 33.5 H10.1 C9.4 33.5 8.8 32.9 9 32.2 L12.2 21 C12.4 20.4 12.9 20 13.5 20 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 3, '--fill': 'url(#zentrix-grad-light)' }}
          />

          {/* Letter Z */}
          <path
            d="M42 6 H60 V10 L48 24 H60 V28 H42 V24 L54 10 H42 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 4, '--fill': 'currentColor' }}
          />

          {/* Letter E */}
          <path
            d="M66 6 H82 V10.5 H71.5 V15 H80.5 V19 H71.5 V23.5 H82 V28 H66 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 5, '--fill': 'currentColor' }}
          />

          {/* Letter N */}
          <path
            d="M88 6 H93.5 L102.5 21 V6 H108 V28 H102.5 L93.5 13 V28 H88 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 6, '--fill': 'currentColor' }}
          />

          {/* Letter T */}
          <path
            d="M112 6 H130 V10.5 H123.5 V28 H118.5 V10.5 H112 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 7, '--fill': 'currentColor' }}
          />

          {/* Letter R */}
          <path
            d="M136 6 H148 C153 6 155 8.5 155 12.5 C155 15.5 153 17.5 150 18.2 L155.5 28 H149.5 L144.5 19 H141.5 V28 H136 Z M141.5 10.5 V15 H147 C149.5 15 150 14 150 12.8 C150 11.2 149 10.5 147 10.5 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 8, '--fill': 'currentColor' }}
          />

          {/* Letter I */}
          <path
            d="M161 6 H166.5 V28 H161 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 9, '--fill': 'currentColor' }}
          />

          {/* Letter X */}
          <path
            d="M172 6 H178 L183.5 15 L189 6 H195 L186.5 17 L195.5 28 H189.5 L183.5 19 L177.5 28 H171.5 L180.5 17 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 10, '--fill': 'currentColor' }}
          />

          {/* Brand Period Dot (.) */}
          <path
            d="M200 23 H205 V28 H200 Z"
            pathLength="1"
            className="intro-path"
            style={{ '--i': 11, '--fill': '#00BFA5' }}
          />
        </svg>
      </div>
    </div>
  );
}
