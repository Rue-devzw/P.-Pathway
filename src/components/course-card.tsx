import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Course } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getInstrumentIcon } from './icons';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const placeholderImage = PlaceHolderImages.find((img) => img.id === course.imageId);
  const InstrumentIcon = getInstrumentIcon(course.instrument);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.slug}`} className="block">
          <div className="relative h-48 w-full">
            {placeholderImage && (
              <Image
                src={placeholderImage.imageUrl}
                alt={placeholderImage.description}
                data-ai-hint={placeholderImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="mb-2 flex items-center justify-between">
            <Badge variant={course.skillLevel === 'Beginner' ? 'secondary' : course.skillLevel === 'Intermediate' ? 'default' : 'destructive'} className='border-transparent'>
                {course.skillLevel}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {InstrumentIcon && <InstrumentIcon className="h-4 w-4" />}
                <span>{course.instrument}</span>
            </div>
        </div>
        <CardTitle className="mb-1 text-xl font-headline">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
