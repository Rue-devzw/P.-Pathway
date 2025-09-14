'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [lessonType, setLessonType] = useState('online');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !email) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please fill out all fields to book your lesson.',
      });
      return;
    }
    
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    
    toast({
      title: 'Booking Confirmed!',
      description: `Your ${lessonType} lesson is booked for ${format(date, 'PPP')} at ${time}. A confirmation has been sent to ${email}.`,
    });

    // Reset form
    setDate(new Date());
    setTime('');
    setName('');
    setEmail('');
  };

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <Label>Your Name</Label>
        <Input 
          type="text" 
          placeholder="John Doe" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Email Address</Label>
        <Input 
          type="email" 
          placeholder="you@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-4">
        <Label>Lesson Type</Label>
        <RadioGroup defaultValue="online" value={lessonType} onValueChange={setLessonType} className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="online" id="online" />
            <Label htmlFor="online">Online (Google Classroom)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-person" id="in-person" />
            <Label htmlFor="in-person">In-Person</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
            <Label>Choose a Date</Label>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor="time">Choose a Time</Label>
            <Select name="time" value={time} onValueChange={setTime} required>
                <SelectTrigger id="time">
                    <SelectValue placeholder="Select an available time" />
                </SelectTrigger>
                <SelectContent>
                    {availableTimes.map(t => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Book Lesson'}
        </Button>
      </div>
    </form>
  );
}
