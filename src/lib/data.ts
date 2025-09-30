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
    imageId: '1',
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
    imageId: '1',
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
          { id: 'l4-1-3', title: 'Playing Your First Song', duration: 650, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '5',
    slug: 'intermediate-guitar-skills',
    title: 'Intermediate Guitar Skills',
    instrument: 'Guitar',
    skillLevel: 'Intermediate',
    description: 'Learn barre chords, fingerpicking, and basic music theory.',
    longDescription: 'Take your guitar playing to the next level. This course covers barre chords, introduces fingerpicking patterns, and explains essential music theory concepts for guitarists.',
    imageId: '2',
    modules: [
      {
        id: 'm5-1',
        title: 'Module 1: Barre Chords & Theory',
        lessons: [
          { id: 'l5-1-1', title: 'Mastering Barre Chords', duration: 900, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l5-1-2', title: 'Introduction to Fingerpicking', duration: 850, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '6',
    slug: 'advanced-guitar-techniques',
    title: 'Advanced Guitar Techniques',
    instrument: 'Guitar',
    skillLevel: 'Advanced',
    description: 'Dive into soloing, improvisation, and advanced genres.',
    longDescription: 'This advanced course is for guitarists looking to break out of rhythm playing. You will learn scales for soloing, improvisation techniques, and explore genres like blues and rock.',
    imageId: '2',
    modules: [
      {
        id: 'm6-1',
        title: 'Module 1: The Art of the Solo',
        lessons: [
          { id: 'l6-1-1', title: 'The Pentatonic Scale', duration: 1100, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l6-1-2', title: 'Blues Improvisation', duration: 1250, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '7',
    slug: 'drum-essentials',
    title: 'Drum Essentials',
    instrument: 'Drums',
    skillLevel: 'Beginner',
    description: 'Learn the fundamentals of rhythm, grip, and basic drum beats.',
    longDescription: 'Get started on the drums! This course covers how to hold the sticks, basic coordination exercises, and your first rock and pop beats.',
    imageId: '3',
    modules: [
      {
        id: 'm7-1',
        title: 'Module 1: Your First Beat',
        lessons: [
          { id: 'l7-1-1', title: 'Setting Up Your Kit', duration: 450, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l7-1-2', title: 'Basic Rock Beat', duration: 600, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '8',
    slug: 'rhythm-mastery',
    title: 'Rhythm Mastery',
    instrument: 'Drums',
    skillLevel: 'Intermediate',
    description: 'Explore different genres, fills, and improve your timing.',
    longDescription: 'This course will expand your rhythmic vocabulary. Learn beats from funk, jazz, and latin music, create your own fills, and solidify your internal clock.',
    imageId: '3',
    modules: [
      {
        id: 'm8-1',
        title: 'Module 1: Beyond the Rock Beat',
        lessons: [
          { id: 'l8-1-1', title: 'Introduction to Funk Drumming', duration: 950, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l8-1-2', title: 'Creating Musical Fills', duration: 800, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '9',
    slug: 'pro-drummer-techniques',
    title: 'Pro-Drummer Techniques',
    instrument: 'Drums',
    skillLevel: 'Advanced',
    description: 'Master advanced techniques like ghost notes and polyrhythms.',
    longDescription: 'Dive deep into the techniques used by professional drummers. This course covers ghost notes, linear drumming, polyrhythms, and soloing concepts.',
    imageId: '3',
    modules: [
      {
        id: 'm9-1',
        title: 'Module 1: Advanced Rhythmic Concepts',
        lessons: [
          { id: 'l9-1-1', title: 'The Magic of Ghost Notes', duration: 1150, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l9-1-2', title: 'Understanding Polyrhythms', duration: 1300, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '10',
    slug: 'violin-for-beginners',
    title: 'Violin for Beginners',
    instrument: 'Violin',
    skillLevel: 'Beginner',
    description: 'Learn to hold the violin and bow, and play your first notes.',
    longDescription: 'Begin your violin journey with correct posture, bow hold, and beautiful tone production. You will learn to play simple scales and familiar melodies.',
    imageId: '4',
    modules: [
      {
        id: 'm10-1',
        title: 'Module 1: The Basics',
        lessons: [
          { id: 'l10-1-1', title: 'Holding the Violin and Bow', duration: 500, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l10-1-2', title: 'Playing Open Strings', duration: 620, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '11',
    slug: 'intermediate-violin-studies',
    title: 'Intermediate Violin Studies',
    instrument: 'Violin',
    skillLevel: 'Intermediate',
    description: 'Improve your intonation, learn vibrato, and play in positions.',
    longDescription: 'This course focuses on developing key intermediate skills. You will work on playing in tune, learn the fundamentals of vibrato, and start shifting into different positions.',
    imageId: '4',
    modules: [
      {
        id: 'm11-1',
        title: 'Module 1: Technique Development',
        lessons: [
          { id: 'l11-1-1', title: 'Introduction to Vibrato', duration: 1000, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l11-1-2', title: 'Shifting to Third Position', duration: 950, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
        ],
      },
    ],
  },
  {
    id: '12',
    slug: 'violin-virtuoso',
    title: 'Violin Virtuoso',
    instrument: 'Violin',
    skillLevel: 'Advanced',
    description: 'Tackle advanced repertoire, double stops, and refined bow techniques.',
    longDescription: 'For the advanced violinist, this course delves into challenging concertos and sonatas, advanced bowing techniques, and playing double stops in tune.',
    imageId: '4',
    modules: [
      {
        id: 'm12-1',
        title: 'Module 1: Advanced Repertoire',
        lessons: [
          { id: 'l12-1-1', title: 'Mastering Double Stops', duration: 1400, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: true },
          { id: 'l12-1-2', title: 'Advanced Bow Strokes (Spiccato, Sautillé)', duration: 1300, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', isTrial: false },
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
