/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xxxs': '320px',
      'xxs': '375px',
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: 'rgba(var(--background), <alpha-value>)',
        logoBg: 'rgba(var(--logo-bg), <alpha-value>)',
        navBg: 'rgba(var(--nav-bg), <alpha-value>)',
        navBorder: 'rgba(var(--nav-border), <alpha-value>)',
        navText: 'rgba(var(--nav-text), <alpha-value>)',
        navTextHover: 'rgba(var(--nav-text-hover), <alpha-value>)',
        navBtnText: 'rgba(var(--nav-btn-text), <alpha-value>)',
        navBtnsBG: 'rgba(var(--nav-btns-bg), <alpha-value>)',
        textHeading: 'rgba(var(--text-heading), <alpha-value>)',
        textDescription: 'rgba(var(--text-description), <alpha-value>)',
        border: 'rgba(var(--border), <alpha-value>)',
        badgeBG: 'rgba(var(--badge-bg), <alpha-value>)',
        badgeText: 'rgba(var(--badge-text), <alpha-value>)',
        serviceBtnBg: 'rgba(var(--service-btn-bg), <alpha-value>)',
        cardBg: 'rgba(var(--card-bg), <alpha-value>)',
        workIconBg: 'rgba(var(--work-icon-bg), <alpha-value>)',
        workIconText: 'rgba(var(--work-icon-text), <alpha-value>)',
        footerIconText: 'rgba(var(--footer-icon-text), <alpha-value>)',
        badgeBorder: 'rgba(var(--badge-border), <alpha-value>)',
      },
      fontFamily: {
        headingfont: ['"Darker Grotesque"', 'system-ui', 'sans-serif'],
        bodyfont: ['Lato', 'system-ui', 'sans-serif'],
        clashdisplay: ['"Clash Display"', '"Darker Grotesque"', 'sans-serif'],
        sans: ['"Darker Grotesque"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        headingGradient: 'linear-gradient(13.51deg, #a997f4 27.74%, #0012b2 103.25%)',
        ctaButton: 'linear-gradient(102.88deg, #8356fb 5.35%, #946cff 43.55%, #7953df 85.78%)',
        ctaButtonHover: 'linear-gradient(223.63deg, #5b2bda -16.4%, #a584ff 45.98%, #5b2bda 114.93%)',
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'scroll-up': 'scrollUp 28s linear infinite',
        'scroll-down': 'scrollDown 28s linear infinite',
        'scroll-left': 'scrollLeft 30s linear infinite',
        'corner-art': 'cornerArtIn 1s cubic-bezier(.21, .47, .32, .98) 0.1s backwards',
        'reveal-up': 'revealUp 0.65s cubic-bezier(.21, .47, .32, .98) backwards',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translate(-50%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        scrollUp: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50%)' },
        },
        cornerArtIn: {
          '0%': { opacity: '0', transform: 'translate3d(var(--corner-from-x, 0), -20px, 0)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, var(--reveal-y, 25px), 0)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [],
};
