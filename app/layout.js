import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import LogoIntro from '@/components/LogoIntro';

export const metadata = {
  metadataBase: new URL('https://www.zentrixinfotech.com'),
  title: 'Zentrix Infotech — Powering Businesses with Tech',
  description: 'Zentrix Infotech builds websites, mobile apps and ordering platforms for businesses across India. Fixed-price quotes and published rates.',
  keywords: 'web development,app development,UI/UX design,custom website,React,Next.js,digital transformation,Zentrix Infotech,landing page design',
  authors: [{ name: 'Zentrix Infotech', url: 'https://www.zentrixinfotech.com' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Zentrix Infotech — Powering Businesses with Tech',
    description: 'We build custom websites, apps, and digital experiences that help businesses grow. Expert web development, app development, and UI/UX design services.',
    url: 'https://www.zentrixinfotech.com',
    siteName: 'Zentrix Infotech',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var el = document.documentElement;
                  if (theme === 'light') {
                    el.classList.remove('dark');
                    el.classList.add('light');
                  } else {
                    el.classList.add('dark');
                    el.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-headingfont text-textHeading antialiased relative">
        <LogoIntro />
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
