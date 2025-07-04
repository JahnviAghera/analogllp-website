'use server';

import { z } from 'zod';
import { summarizeContactRequest } from '@/ai/flows/summarize-contact-request';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  summary?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string;
  };
  success: boolean;
};

export async function handleContactSubmit(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    const result = await summarizeContactRequest({ name, email, message });
    return {
      summary: result.summary,
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      errors: { _form: 'An unexpected error occurred. Please try again.' },
      success: false,
    };
  }
}
