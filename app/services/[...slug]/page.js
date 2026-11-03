'use client';
import { notFound } from 'next/navigation';
import ServiceDetailTemplate from '@/components/services/ServiceDetailTemplate';
import { servicesData } from '@/lib/servicesData';

export default function ServiceDetailPage({ params }) {
  const rawSlug = params?.slug;
  const slugPath = Array.isArray(rawSlug) ? rawSlug.join('/') : rawSlug;
  const lastSegment = Array.isArray(rawSlug) ? rawSlug[rawSlug.length - 1] : rawSlug;

  const matchedKey = servicesData[slugPath]
    ? slugPath
    : (servicesData[lastSegment] ? lastSegment : null);

  if (!matchedKey) {
    notFound();
  }

  return <ServiceDetailTemplate serviceKey={matchedKey} />;
}

