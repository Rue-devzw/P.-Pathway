'use client';

import { useEffect, useState, useMemo } from 'react';
import { getCourseBySlug } from '@/lib/data';
import type { Course, Lesson } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Clock, PlayCircle } from 'lucide-react';
import { formatDuration } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchCourse() {
      const courseData = await getCourseBySlug(params.slug);
      if (!courseData) {
        notFound();
      }
      setCourse(courseData);
      // Set the first lesson of the first module as the current lesson
      if (courseData.modules.length > 0 && courseData.modules[0].lessons.length > 0) {
        setCurrentLesson(courseData.modules[0].lessons[0]);
      }
      setLoading(false);
    }
    fetchCourse();
  }, [params.slug]);

  const totalLessons = useMemo(() => course?.modules.reduce((acc, module) => acc + module.lessons.length, 0) || 0, [course]);
  const progress = useMemo(() => totalLessons > 0 ? (completedLessons.size / totalLessons) * 100 : 0, [completedLessons, totalLessons]);

  const handleLessonSelect = (lesson: Lesson) => {
    setCurrentLesson(lesson);
  };

  const handleLessonComplete = (lessonId: string, completed: boolean) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (completed) {
        newSet.add(lessonId);
      } else {
        newSet.delete(lessonId);
      }
      return newSet;
    });
  };

  if (loading) {
    return <CourseSkeleton />;
  }

  if (!course) {
    return notFound();
  }

  const placeholderImage = PlaceHolderImages.find((img) => img.id === '5');

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <header className="mb-8">
        <Badge variant="secondary" className="mb-2">{course.instrument}</Badge>
        <h1 className="font-headline text-4xl font-bold">{course.title}</h1>
        <p className="mt-2 max-w-3xl text-lg text-muted-foreground">{course.longDescription}</p>
      </header>

      <div className="mb-6">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-primary">Progress</span>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-muted-foreground mt-1">{completedLessons.size} of {totalLessons} lessons completed</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted">
                {currentLesson ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentLesson.videoUrl}
                    title={currentLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  placeholderImage && <Image src={placeholderImage.imageUrl} alt={placeholderImage.description} data-ai-hint={placeholderImage.imageHint} layout="fill" objectFit="cover" />
                )}
              </div>
            </CardContent>
          </Card>
           <div className="mt-4">
              <h2 className="text-2xl font-bold font-headline">{currentLesson?.title}</h2>
            </div>
        </div>

        <aside>
          <h2 className="mb-4 font-headline text-2xl font-semibold">Course Content</h2>
          <Accordion type="single" collapsible defaultValue={course.modules[0]?.id} className="w-full">
            {course.modules.map(module => (
              <AccordionItem value={module.id} key={module.id}>
                <AccordionTrigger>{module.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {module.lessons.map(lesson => (
                      <li key={lesson.id}
                          className={`flex items-center gap-3 rounded-md p-2 cursor-pointer transition-colors ${currentLesson?.id === lesson.id ? 'bg-accent' : 'hover:bg-muted'}`}
                          onClick={() => handleLessonSelect(lesson)}>
                        <div onClick={(e) => e.stopPropagation()}>
                           <Checkbox 
                            id={lesson.id} 
                            checked={completedLessons.has(lesson.id)}
                            onCheckedChange={(checked) => handleLessonComplete(lesson.id, !!checked)}
                           />
                        </div>
                        <div className="flex-grow">
                          <p className="font-medium leading-tight">{lesson.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <PlayCircle className="h-4 w-4"/>
                            <span>{formatDuration(lesson.duration)}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </aside>
      </div>
    </div>
  );
}


function CourseSkeleton() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <header className="mb-8">
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-full mt-2" />
        <Skeleton className="h-6 w-2/3 mt-1" />
      </header>

      <div className="mb-6">
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <Skeleton className="aspect-video w-full" />
          </Card>
           <div className="mt-4">
              <Skeleton className="h-8 w-1/2" />
            </div>
        </div>

        <aside>
          <Skeleton className="h-8 w-1/2 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </aside>
      </div>
    </div>
  )
}
