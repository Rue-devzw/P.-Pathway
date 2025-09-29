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
          { id: 'l1-1-1', title: 'Introduction to the Piano', duration: 320, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l1-1-2', title: 'Proper Posture and Hand Position', duration: 450, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
          { id: 'l1-1-3', title: 'The Musical Alphabet', duration: 610, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
      {
        id: 'm1-2',
        title: 'Module 2: Reading Music',
        lessons: [
          { id: 'l1-2-1', title: 'The Staff and Clefs', duration: 550, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l1-2-2', title: 'Note Values and Rhythms', duration: 720, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
   {
    id: '2',
    slug: 'intermediate-piano-techniques',
    title: 'Intermediate Piano Techniques',
    instrument: 'Piano',
    skillLevel: 'Intermediate',
    description: 'Expand your skills with scales, arpeggios, and more complex pieces.',
    longDescription: 'This course builds on the fundamentals, introducing you to more advanced concepts like major and minor scales, arpeggios, and chord inversions. You will learn to play more intricate pieces and develop your musicality.',
    imageId: '2',
    modules: [
      {
        id: 'm2-1',
        title: 'Module 1: Scales and Arpeggios',
        lessons: [
          { id: 'l2-1-1', title: 'Major Scales', duration: 800, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l2-1-2', title: 'Minor Scales', duration: 850, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
          { id: 'l2-1-3', title: 'Arpeggio Practice', duration: 750, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'advanced-piano-mastery',
    title: 'Advanced Piano Mastery',
    instrument: 'Piano',
    skillLevel: 'Advanced',
    description: 'Master advanced classical and jazz piano techniques.',
    longDescription: 'For the experienced player, this course explores advanced harmony, improvisation, and repertoire from various genres. Sharpen your technique and develop your unique artistic voice.',
    imageId: '3',
    modules: [
      {
        id: 'm3-1',
        title: 'Module 1: Advanced Harmony',
        lessons: [
          { id: 'l3-1-1', title: 'Jazz Chord Voicings', duration: 1200, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l3-1-2', title: 'Classical Harmonic Analysis', duration: 1350, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'guitar-for-beginners',
    title: 'Guitar for Beginners',
    instrument: 'Guitar',
    skillLevel: 'Beginner',
    description: 'Learn basic chords, strumming, and your first songs on the guitar.',
    longDescription: 'This course is perfect for anyone wanting to start playing the guitar. We will cover basic chords, strumming patterns, and guide you through learning your first few songs. No prior experience needed!',
    imageId: '2',
    modules: [
      {
        id: 'm4-1',
        title: 'Module 1: Your First Chords',
        lessons: [
          { id: 'l4-1-1', title: 'Tuning Your Guitar', duration: 400, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l4-1-2', title: 'Basic Strumming', duration: 550, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
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
