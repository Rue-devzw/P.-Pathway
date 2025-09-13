import { useMemo } from 'react';
import { getCourseBySlug } from '@/lib/data';
import type { Course } from '@/lib/types';
import { notFound } from 'next/navigation';
import { CourseClientPage } from '@/components/course-client-page';

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const courseData = await getCourseBySlug(params.slug);
  
  if (!courseData) {
    notFound();
  }

  return <CourseClientPage course={courseData} />;
}
