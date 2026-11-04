import Link from 'next/link';

export default function BlogContactCard({ postTitle }) {
  return (
    <div className="my-10 w-full rounded-2xl border-l-4 border-l-[#E11D48] border border-border/80 bg-red-500/[0.04] dark:bg-red-950/[0.15] p-5 sm:p-7 shadow-sm transition-all font-bodyfont">
      <h4 className="font-headingfont font-bold text-lg sm:text-xl text-textHeading tracking-tight mb-3">
        Zentrix Infotech
      </h4>
      
      <ul className="space-y-2 text-sm sm:text-base text-textDescription list-none p-0 m-0">
        <li className="flex items-start gap-2">
          <span className="text-[#E11D48] font-bold text-lg leading-none select-none">•</span>
          <span>
            <strong className="text-textHeading font-semibold">Phone: </strong>
            <a 
              href="tel:+917248800839" 
              className="text-[#2563EB] hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD] underline font-semibold transition-colors"
            >
              +91 72488 00839
            </a>
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-[#E11D48] font-bold text-lg leading-none select-none">•</span>
          <span>
            <strong className="text-textHeading font-semibold">Email: </strong>
            <a 
              href="mailto:info@zentrixinfotech.com" 
              className="text-[#2563EB] hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD] underline font-semibold transition-colors"
            >
              info@zentrixinfotech.com
            </a>
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-[#E11D48] font-bold text-lg leading-none select-none">•</span>
          <span>
            <strong className="text-textHeading font-semibold">Website: </strong>
            <Link 
              href="/" 
              className="text-[#2563EB] hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD] underline font-semibold transition-colors break-all"
            >
              https://www.zentrixinfotech.com
            </Link>
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-[#E11D48] font-bold text-lg leading-none select-none">•</span>
          <span>
            <strong className="text-textHeading font-semibold">Moradabad Office: </strong>
            <span>12/11, Buddhi Vihar Phase 2, Moradabad, Uttar Pradesh 244001</span>
          </span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-[#E11D48] font-bold text-lg leading-none select-none">•</span>
          <span>
            <strong className="text-textHeading font-semibold">Contact form: </strong>
            <Link 
              href="/contact" 
              className="text-[#2563EB] hover:text-[#1D4ED8] dark:text-[#60A5FA] dark:hover:text-[#93C5FD] underline font-semibold transition-colors break-all"
            >
              https://www.zentrixinfotech.com/contact
            </Link>
          </span>
        </li>
      </ul>

      <p className="mt-5 text-sm sm:text-base font-semibold text-textHeading pt-3 border-t border-border/60 mb-0">
        Book your free consultation today, and let&apos;s help your business grow and reach more customers.
      </p>
    </div>
  );
}

