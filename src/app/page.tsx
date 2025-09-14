import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CourseCard } from '@/components/course-card';
import { Button } from '@/components/ui/button';
import { getCourses } from '@/lib/data';

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Grow Play Inspire
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore our wide range of music courses and start your journey to musical mastery today.
        </p>
      </section>

      <section>
        <h2 className="mb-6 font-headline text-2xl font-semibold md:text-3xl">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="group">
            <Link href="#">
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
