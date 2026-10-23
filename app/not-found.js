import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center font-headingfont">
      <div className="badge-glow flex flex-row justify-center gap-1.5 items-center py-1.5 px-4 bg-badgeBG rounded-full text-badgeText border border-badgeBorder text-xs mb-6">
        <span className="font-semibold uppercase tracking-wider">404 Error</span>
      </div>
      
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-textHeading mb-4">
        Page <span className="bg-headingGradient text-transparent bg-clip-text">Not Found</span>
      </h1>
      
      <p className="font-bodyfont text-textDescription text-base sm:text-lg max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-navBtnBg text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-all shadow-lg shadow-[#8356FB]/20"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
