import type { Course } from '@/lib/types';

const courses: Course[] = [
  {
    id: '1',
    slug: 'piano-fundamentals',
    title: 'Piano Fundamentals',
    instrument: 'Piano',
    skillLevel: 'Beginner',
    description: 'Start your piano journey with the basics of theory and technique.',
    longDescription: 'This course is designed for absolute beginners. You will learn the layout of the keyboard, basic music notation, and how to play simple melodies with both hands. By the end, you will have a solid foundation to build upon.',
    imageId: '1',
    modules: [
      {
        id: 'm1-1',
        title: 'Module 1: Getting Started',
        lessons: [
          { id: 'l1-1-1', title: 'Introduction to the Piano', duration: 320, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l1-1-2', title: 'Proper Posture and Hand Position', duration: 450, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l1-1-3', title: 'The Musical Alphabet', duration: 610, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'm1-2',
        title: 'Module 2: Reading Music',
        lessons: [
          { id: 'l1-2-1', title: 'The Staff and Clefs', duration: 550, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l1-2-2', title: 'Note Values and Rhythms', duration: 720, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'acoustic-guitar-chords',
    title: 'Acoustic Guitar Chords',
    instrument: 'Guitar',
    skillLevel: 'Beginner',
    description: 'Master the essential chords to play your favorite songs.',
    longDescription: 'Learn the most common open chords on the acoustic guitar. This course covers chord shapes, smooth transitions, and basic strumming patterns that will allow you to play thousands of popular songs.',
    imageId: '2',
    modules: [
      {
        id: 'm2-1',
        title: 'Module 1: Your First Chords',
        lessons: [
          { id: 'l2-1-1', title: 'Tuning Your Guitar', duration: 410, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l2-1-2', title: 'The E minor and G major Chords', duration: 680, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l2-1-3', title: 'Chord Switching Practice', duration: 590, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'intermediate-drum-grooves',
    title: 'Intermediate Drum Grooves',
    instrument: 'Drums',
    skillLevel: 'Intermediate',
    description: 'Expand your rhythmic vocabulary with complex grooves.',
    longDescription: 'Take your drumming to the next level. This course explores syncopation, ghost notes, and polyrhythms to help you create more dynamic and interesting drum beats for any musical style.',
    imageId: '3',
    modules: [
      {
        id: 'm3-1',
        title: 'Module 1: Syncopation Essentials',
        lessons: [
          { id: 'l3-1-1', title: 'Understanding 16th Notes', duration: 820, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l3-1-2', title: 'Syncopated Bass Drum Patterns', duration: 950, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'm3-2',
        title: 'Module 2: The Art of the Ghost Note',
        lessons: [
          { id: 'l3-2-1', title: 'Ghost Note Technique', duration: 600, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l3-2-2', title: 'Adding Ghost Notes to Grooves', duration: 780, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'advanced-violin-techniques',
    title: 'Advanced Violin Techniques',
    instrument: 'Violin',
    skillLevel: 'Advanced',
    description: 'Refine your playing with advanced bowing and fingering.',
    longDescription: 'For the experienced violinist, this course delves into advanced techniques such as spiccato, ricochet bowing, and complex double stops. Elevate your performance and interpretive skills.',
    imageId: '4',
    modules: [
      {
        id: 'm4-1',
        title: 'Module 1: Expressive Bowing',
        lessons: [
          { id: 'l4-1-1', title: 'The Spiccato Stroke', duration: 1020, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l4-1-2', title: 'Mastering Ricochet', duration: 1150, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        ],
      },
    ],
  },
];

export async function getCourses(): Promise<Course[]> {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return courses;
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return courses.find(course => course.slug === slug);
}
