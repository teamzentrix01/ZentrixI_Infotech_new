import HeroSection from '@/components/HeroSection';
import TopProjectsSlider from '@/components/TopProjectsSlider';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import BuildTogetherCTA from '@/components/BuildTogetherCTA';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full font-headingfont bg-background text-textHeading relative transition-all duration-200">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Top Projects Infinite Marquee */}
      <TopProjectsSlider />

      {/* 3. Client Logos Continuous Reverse Marquee */}
      <ClientLogosMarquee />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Built By Us / Products Section */}
      <ProductsSection />

      {/* 6. How We Build It / 6-Step Process */}
      <ProcessSection />

      {/* 7. Selected Work / Portfolio Section */}
      <PortfolioSection />

      {/* 8. Call To Action Banner */}
      <BuildTogetherCTA />

      {/* 9. Testimonials 3-Column Wall */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions Accordion */}
      <FAQSection />
    </div>
  );
}
