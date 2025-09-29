export type Lesson = {
  id: string;
  title: string;
  duration: number; // in seconds
  videoUrl: string;
  isTrial: boolean;
};

export type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  instrument: 'Piano' | 'Guitar' | 'Drums' | 'Violin';
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  longDescription: string;
  imageId: string;
  modules: Module[];
};
