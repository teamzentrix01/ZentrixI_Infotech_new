'use client';
import { notFound } from 'next/navigation';
import WebDevelopment from '@/components/services/WebDevelopment';
import AppDevelopment from '@/components/services/AppDevelopment';
import UiUxDesign from '@/components/services/UiUxDesign';
import VideoEditing from '@/components/services/VideoEditing';
import Branding from '@/components/services/Branding';
import MvpDevelopment from '@/components/services/MvpDevelopment';

const serviceComponents = {
  'web-development': WebDevelopment,
  'app-development': AppDevelopment,
  'ui-ux-design': UiUxDesign,
  'ui-ux': UiUxDesign,
  'video-editing': VideoEditing,
  'branding': Branding,
  'mvp-development': MvpDevelopment,
  'mvp': MvpDevelopment,
};

export default function ServiceDetailPage({ params }) {
  const Component = serviceComponents[params.slug];
  if (!Component) {
    notFound();
  }
  return <Component />;
}

