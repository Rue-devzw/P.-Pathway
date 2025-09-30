import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Medal, Music, Star } from "lucide-react";

// Mock data - In a real app, this would come from your backend/database
const user = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: '/images/avatar-placeholder.webp',
  isSubscribed: true,
  progress: [
    { courseTitle: 'Piano Fundamentals', completedLessons: 5, totalLessons: 5 },
    { courseTitle: 'Intermediate Guitar Skills', completedLessons: 1, totalLessons: 2 },
  ],
  achievements: [
    { icon: Star, title: 'First Note', description: 'Completed your first lesson.' },
    { icon: Medal, title: 'Beginner Pianist', description: 'Completed Piano Fundamentals.' },
    { icon: Music, title: 'Practice Makes Perfect', description: 'Completed 10 practice sessions.' },
  ]
};

const getTotalProgress = () => {
    const totalCompleted = user.progress.reduce((acc, p) => acc + p.completedLessons, 0);
    const totalLessons = user.progress.reduce((acc, p) => acc + p.totalLessons, 0);
    return totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;
}

export default function ProfilePage() {
  const overallProgress = getTotalProgress();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
        <Avatar className="h-24 w-24 border-4 border-primary">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-center font-headline text-3xl font-bold sm:text-left md:text-4xl">
            {user.name}
          </h1>
          <p className="text-center text-lg text-muted-foreground sm:text-left">
            {user.email}
          </p>
          {user.isSubscribed && (
            <div className="mt-2 flex justify-center sm:justify-start">
                <Badge>PRO-MEMBER</Badge>
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {/* Course Progress */}
        <Card>
          <CardHeader>
            <CardTitle>My Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-base font-medium text-foreground">Overall Progress</span>
                <span className="text-base font-medium text-primary">{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} />
            </div>
            <div className="space-y-4">
                {user.progress.map((course, index) => (
                    <div key={index}>
                        <p className="mb-1 font-medium">{course.courseTitle}</p>
                        <Progress value={(course.completedLessons / course.totalLessons) * 100} />
                        <p className="mt-1 text-sm text-muted-foreground">{course.completedLessons} of {course.totalLessons} lessons completed</p>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {user.achievements.map((achievement, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/50 text-accent-foreground">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
