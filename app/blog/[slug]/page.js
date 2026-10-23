'use client';
import { notFound } from 'next/navigation';
import CuttingImagePayload85Percent from '@/components/blog/CuttingImagePayload85Percent';
import SawasheriDirectKiranaOnline from '@/components/blog/SawasheriDirectKiranaOnline';
import StructuredDataThatSurvives from '@/components/blog/StructuredDataThatSurvives';
import WebAppOrMobileApp from '@/components/blog/WebAppOrMobileApp';
import WebsiteCostIndia2026 from '@/components/blog/WebsiteCostIndia2026';

const postComponents = {
  'cutting-image-payload-85-percent': CuttingImagePayload85Percent,
  'sawasheri-direct-kirana-online': SawasheriDirectKiranaOnline,
  'structured-data-that-survives': StructuredDataThatSurvives,
  'web-app-or-mobile-app': WebAppOrMobileApp,
  'website-cost-india-2026': WebsiteCostIndia2026,
};

export default function BlogPost({ params }) {
  const Component = postComponents[params.slug];
  if (!Component) {
    notFound();
  }
  return <Component />;
}
