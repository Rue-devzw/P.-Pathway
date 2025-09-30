import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CourseCard } from '@/components/course-card';
import { Button } from '@/components/ui/button';
import { getCourses } from '@/lib/data';

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative mb-12 h-[50vh] min-h-[400px] overflow-hidden rounded-lg flex flex-col items-center justify-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/videos/hero-video.mp4"
          poster="/images/hero-poster.jpeg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>
        <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight md:text-6xl animate-fade-in-down">
          Grow Play Inspire
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-background/90 animate-fade-in-up">
          Explore our wide range of music courses and start your journey to musical mastery today.
        </p>
      </section>

      <section>
        <div className='flex justify-between items-center mb-6'>
          <h2 className="font-headline text-2xl font-semibold md:text-3xl">
            Popular Courses
          </h2>
          <Button asChild variant="outline" className="group hidden sm:inline-flex">
            <Link href="#">
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(0, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
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
