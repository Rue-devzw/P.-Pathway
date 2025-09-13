'use server';

/**
 * @fileOverview Provides personalized practice suggestions based on instrument, skill level, and progress.
 *
 * - getPersonalizedPracticeSuggestions - A function that generates personalized practice suggestions.
 * - PersonalizedPracticeSuggestionsInput - The input type for the getPersonalizedPracticeSuggestions function.
 * - PersonalizedPracticeSuggestionsOutput - The return type for the getPersonalizedPracticeSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPracticeSuggestionsInputSchema = z.object({
  instrument: z.string().describe('The instrument the student is learning.'),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']).describe('The student\'s skill level.'),
  progress: z.string().describe('The student\'s current progress in the course.'),
});
export type PersonalizedPracticeSuggestionsInput = z.infer<
  typeof PersonalizedPracticeSuggestionsInputSchema
>;

const PersonalizedPracticeSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of personalized practice suggestions.'),
});
export type PersonalizedPracticeSuggestionsOutput = z.infer<
  typeof PersonalizedPracticeSuggestionsOutputSchema
>;

export async function getPersonalizedPracticeSuggestions(
  input: PersonalizedPracticeSuggestionsInput
): Promise<PersonalizedPracticeSuggestionsOutput> {
  return personalizedPracticeSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPracticeSuggestionsPrompt',
  input: {schema: PersonalizedPracticeSuggestionsInputSchema},
  output: {schema: PersonalizedPracticeSuggestionsOutputSchema},
  prompt: `You are an expert music teacher providing personalized practice suggestions.

  Based on the student's instrument, skill level, and progress, provide a list of practice suggestions.

  Instrument: {{{instrument}}}
  Skill Level: {{{skillLevel}}}
  Progress: {{{progress}}}

  Provide the suggestions as a list of strings.
  Each suggestion should be concise and actionable.
  Do not include any introductory or concluding remarks. Just the list of suggestions.
  `,
});

const personalizedPracticeSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedPracticeSuggestionsFlow',
    inputSchema: PersonalizedPracticeSuggestionsInputSchema,
    outputSchema: PersonalizedPracticeSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
