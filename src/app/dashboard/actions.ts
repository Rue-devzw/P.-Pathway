'use server';

import { 
  getPersonalizedPracticeSuggestions,
  type PersonalizedPracticeSuggestionsInput,
  type PersonalizedPracticeSuggestionsOutput
} from '@/ai/flows/personalized-practice-suggestions';
import { z } from 'zod';

const practiceSchema = z.object({
  instrument: z.enum(['Piano', 'Guitar', 'Drums', 'Violin']),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  progress: z.string().min(10, 'Please describe your progress in at least 10 characters.'),
});


export async function generatePracticeSuggestions(
  prevState: any,
  formData: FormData
): Promise<{ message: string; suggestions?: string[]; errors?: any }> {
  
  const validatedFields = practiceSchema.safeParse({
    instrument: formData.get('instrument'),
    skillLevel: formData.get('skillLevel'),
    progress: formData.get('progress'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: PersonalizedPracticeSuggestionsInput = validatedFields.data;
    const result: PersonalizedPracticeSuggestionsOutput = await getPersonalizedPracticeSuggestions(input);

    if (result.suggestions && result.suggestions.length > 0) {
      return { message: 'success', suggestions: result.suggestions };
    } else {
      return { message: 'No suggestions could be generated. Please try adjusting your input.' };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred on the server.' };
  }
}
