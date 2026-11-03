'use client';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projectsData';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';

export default function ProjectDetail({ params }) {
  const project = projectsData[params.slug];
  if (!project) {
    notFound();
  }
  return <ProjectDetailTemplate project={project} />;
}
