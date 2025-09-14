'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { generatePracticeSuggestions } from '@/app/dashboard/actions';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { List, Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const initialState = {
  message: '',
  suggestions: [],
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate
    </Button>
  );
}

export function PracticeForm() {
  const [state, formAction] = useActionState(generatePracticeSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'success') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
       <input type="hidden" name="instrument" value="Piano" />
      <div className="space-y-2">
        <Label htmlFor="skillLevel">Skill Level</Label>
        <Select name="skillLevel" defaultValue="Beginner">
          <SelectTrigger id="skillLevel">
            <SelectValue placeholder="Select your skill level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
          {state.errors?.skillLevel && <p className="text-sm font-medium text-destructive">{state.errors.skillLevel[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="progress">What have you been practicing?</Label>
        <Textarea
          id="progress"
          name="progress"
          placeholder="e.g., 'I've been working on C major scales, but my left hand is slow.'"
          className="min-h-[100px]"
        />
        {state.errors?.progress && <p className="text-sm font-medium text-destructive">{state.errors.progress[0]}</p>}
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>

      {state.suggestions && state.suggestions.length > 0 && (
        <div className="pt-6">
            <h3 className="font-headline text-xl font-semibold mb-4">Your Personalized Suggestions</h3>
            <Card>
                <CardContent className="p-6">
                    <ul className="space-y-4">
                    {state.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <List className="h-3 w-3" />
                            </div>
                            <span>{suggestion}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      )}
    </form>
  );
}
