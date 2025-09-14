import { BookingForm } from '@/components/booking-form';
import { CalendarCheck } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Book Your Lesson
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Choose your preferred lesson type and find a time that works for you. We can&apos;t wait to see you!
        </p>
      </header>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CalendarCheck className="h-6 w-6" />
          </div>
          <h2 className="font-headline text-2xl font-semibold">Lesson Booking</h2>
        </div>
        
        <BookingForm />

      </div>
    </div>
  );
}
