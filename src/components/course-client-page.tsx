'use client';

import { useState, useMemo } from 'react';
import type { Course, Lesson } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Lock, Star } from 'lucide-react';
import { formatDuration } from '@/lib/utils';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from './ui/button';

export function CourseClientPage({ course }: { course: Course }) {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(() => {
    if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      return course.modules[0].lessons[0];
    }
    return null;
  });
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isSubscriptionPromptOpen, setSubscriptionPromptOpen] = useState(false);

  // This is a placeholder. In a real app, you'd get this from your auth/backend.
  const [isSubscribed, setIsSubscribed] = useState(false);

  const totalLessons = useMemo(() => course.modules.reduce((acc, module) => acc + module.lessons.length, 0), [course]);
  const progress = useMemo(() => totalLessons > 0 ? (completedLessons.size / totalLessons) * 100 : 0, [completedLessons, totalLessons]);

  const handleLessonSelect = (lesson: Lesson) => {
    if (lesson.isTrial || isSubscribed) {
      setCurrentLesson(lesson);
    } else {
      setSubscriptionPromptOpen(true);
    }
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

  const handleSubscribeClick = () => {
    // In a real app, this would redirect to a pricing/checkout page.
    console.log("Redirecting to subscription page...");
    setSubscriptionPromptOpen(false);
    // For this demo, we'll just simulate a subscription
    setIsSubscribed(true); 
  }

  if (!course) {
    return notFound();
  }

  const placeholderImage = PlaceHolderImages.find((img) => img.id === '5');

  return (
    <>
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
                    placeholderImage && <Image src={placeholderImage.imageUrl} alt={placeholderImage.description} data-ai-hint={placeholderImage.imageHint} fill objectFit="cover" />
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
                      {module.lessons.map(lesson => {
                        const isLocked = !lesson.isTrial && !isSubscribed;
                        return (
                        <li key={lesson.id}
                            className={`flex items-center gap-3 rounded-md p-2 transition-colors ${currentLesson?.id === lesson.id ? 'bg-accent' : 'hover:bg-muted'} ${isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                            onClick={() => handleLessonSelect(lesson)}>
                          <div onClick={(e) => {
                            if (isLocked) e.stopPropagation();
                          }}>
                            <Checkbox 
                              id={lesson.id} 
                              checked={completedLessons.has(lesson.id)}
                              onCheckedChange={(checked) => !isLocked && handleLessonComplete(lesson.id, !!checked)}
                              disabled={isLocked}
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium leading-tight">{lesson.title}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <PlayCircle className="h-4 w-4"/>
                              <span>{formatDuration(lesson.duration)}</span>
                            </div>
                          </div>
                          {isLocked ? <Lock className="h-4 w-4 text-muted-foreground" /> : lesson.isTrial ? <Badge variant="outline" className='border-yellow-500 text-yellow-500'>Trial</Badge> : null}
                        </li>
                      )})}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </aside>
        </div>
      </div>
      <AlertDialog open={isSubscriptionPromptOpen} onOpenChange={setSubscriptionPromptOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unlock Your Full Potential</AlertDialogTitle>
            <AlertDialogDescription>
              You've finished the free trial lessons. Subscribe now to unlock this lesson and the entire course library. Continue your musical journey with us!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Maybe Later</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={handleSubscribeClick}>
                <Star className="mr-2 h-4 w-4" />
                Subscribe Now
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
