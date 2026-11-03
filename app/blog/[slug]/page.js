'use client';
import { notFound } from 'next/navigation';
import BlogDetailTemplate from '@/components/blog/BlogDetailTemplate';
import { blogsData } from '@/lib/blogsData';

export default function BlogPostPage({ params }) {
  const post = blogsData[params.slug];
  if (!post) {
    notFound();
  }
  return <BlogDetailTemplate post={post} />;
}
